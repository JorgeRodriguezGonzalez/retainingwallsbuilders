import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  NETLIFY_FORM_NAME,
  NETLIFY_THANK_YOU_PATH,
  submitToNetlify,
} from '@/utils/submitToNetlify';

type SimpleContactFormProps = {
  formLocation: string;
  buttonLabel?: string;
  fields?: {
    suburbLabel?: string;
    suburbPlaceholder?: string;
    messagePlaceholder?: string;
  };
  className?: string;
  variant?: 'hero' | 'contact';
};

const inputClassName =
  'h-12 w-full border border-brand-mist bg-white/95 px-4 text-sm text-brand-ink outline-none transition placeholder:text-brand-slate/60 focus:border-brand-olive focus:ring-4 focus:ring-brand-olive/15';

const textareaBaseClassName =
  'w-full border border-brand-mist bg-white/95 px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-slate/60 focus:border-brand-olive focus:ring-4 focus:ring-brand-olive/15';

const honeypotClassName =
  'absolute left-[-10000px] top-auto h-px w-px overflow-hidden';

const SimpleContactForm = ({
  formLocation,
  buttonLabel = 'Submit',
  fields,
  className = '',
  variant = 'contact',
}: SimpleContactFormProps) => {
  const isHero = variant === 'hero';
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const browserFormData = new FormData(form);
    const data: Record<string, string> = {};

    browserFormData.forEach((value, key) => {
      if (typeof value === 'string' && key !== 'form-name') {
        data[key] = value;
      }
    });

    setSubmissionError(null);
    setIsSubmitting(true);
    const result = await submitToNetlify(data);
    setIsSubmitting(false);

    if (result.ok) {
      navigate(NETLIFY_THANK_YOU_PATH);
      return;
    }

    setSubmissionError(result.error);
  };

  return (
    <form
      name={NETLIFY_FORM_NAME}
      method="POST"
      action={`${NETLIFY_THANK_YOU_PATH}/`}
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={className}
      aria-busy={isSubmitting}
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <input type="hidden" name="formLocation" value={formLocation} />

      <p className={honeypotClassName} aria-hidden="true">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <input
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        required
        maxLength={100}
        autoComplete="name"
        className={inputClassName}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        required
        maxLength={255}
        autoComplete="email"
        className={inputClassName}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        aria-label="Phone"
        required
        maxLength={30}
        autoComplete="tel"
        className={inputClassName}
      />

      <input
        type="text"
        name="address"
        placeholder={fields?.suburbPlaceholder ?? 'Suburb'}
        aria-label={fields?.suburbLabel ?? 'Suburb'}
        required
        maxLength={500}
        autoComplete="street-address"
        className={inputClassName}
      />

      <textarea
        name="description"
        aria-label="Project details"
        rows={isHero ? 5 : 4}
        placeholder={fields?.messagePlaceholder ?? 'Tell us about your project'}
        required
        maxLength={2000}
        className={`${textareaBaseClassName} ${isHero ? '' : 'md:col-span-2'}`}
      />

      {submissionError && (
        <p
          className={`${isHero ? '' : 'md:col-span-2'} text-sm font-medium text-red-700`}
          role="alert"
          aria-live="polite"
        >
          {submissionError}
        </p>
      )}

      <div className={`${isHero ? '' : 'md:col-span-2'} flex justify-start`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center gap-2 bg-brand-olive text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_14px_30px_rgba(63,120,104,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-oliveDark hover:shadow-[0_18px_36px_rgba(63,120,104,0.34)] disabled:cursor-not-allowed disabled:opacity-60 ${
            isHero
              ? 'h-14 w-full px-8'
              : 'h-14 min-w-[210px] px-8 sm:min-w-[230px]'
          }`}
        >
          {isSubmitting ? 'Sending...' : buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SimpleContactForm;
