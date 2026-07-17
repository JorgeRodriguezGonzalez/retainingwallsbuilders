import { getSavedParams } from './TrackingContext';

export const NETLIFY_FORM_NAME = 'contact';
export const NETLIFY_THANK_YOU_PATH = '/contact-us/thank-you';
export const MAX_NETLIFY_FILES = 5;

// Netlify limits the complete multipart request to 8 MB. Keeping the selected
// files below 7.5 MB leaves room for field values and multipart boundaries.
export const MAX_NETLIFY_TOTAL_FILE_BYTES = Math.floor(7.5 * 1024 * 1024);

const ALLOWED_FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.pdf'];

export type NetlifySubmissionResult =
  | { ok: true }
  | { ok: false; error: string };

function sanitizeName(name: string): string {
  return name
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'attachment';
}

function getExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf('.');
  return lastDot !== -1 ? fileName.slice(lastDot).toLowerCase() : '';
}

export function validateNetlifyFiles(files: File[]): string | null {
  if (files.length > MAX_NETLIFY_FILES) {
    return `You can attach up to ${MAX_NETLIFY_FILES} files.`;
  }

  const unsupportedFile = files.find(
    (file) => !ALLOWED_FILE_EXTENSIONS.includes(getExtension(file.name))
  );

  if (unsupportedFile) {
    return 'Attachments must be JPG, JPEG, PNG or PDF files.';
  }

  const totalBytes = files.reduce((total, file) => total + file.size, 0);
  if (totalBytes > MAX_NETLIFY_TOTAL_FILE_BYTES) {
    return 'The combined attachment size must be 7.5 MB or less.';
  }

  return null;
}

export async function submitToNetlify(
  data: Record<string, string>,
  files?: File[] | null
): Promise<NetlifySubmissionResult> {
  try {
    const selectedFiles = files ?? [];
    const fileError = validateNetlifyFiles(selectedFiles);

    if (fileError) {
      return { ok: false, error: fileError };
    }

    const savedParams = getSavedParams();
    const formData = new FormData();

    formData.append('form-name', NETLIFY_FORM_NAME);

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (selectedFiles.length > 0) {
      const baseName = sanitizeName(data.name || 'attachment');

      selectedFiles.forEach((file, index) => {
        const extension = getExtension(file.name);
        const newName = selectedFiles.length === 1
          ? `${baseName}${extension}`
          : `${baseName}-${index + 1}${extension}`;
        const renamedFile = new File([file], newName, { type: file.type });
        formData.append(`file${index + 1}`, renamedFile);
      });
    }

    formData.append('pageUrl', window.location.href);

    Object.entries(savedParams).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const response = await fetch('/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      return {
        ok: false,
        error: 'We could not send your enquiry. Please try again or call us directly.',
      };
    }

    return { ok: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      ok: false,
      error: 'We could not send your enquiry. Please check your connection and try again.',
    };
  }
}
