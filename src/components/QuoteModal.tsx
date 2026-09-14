import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, X } from "lucide-react";
import { serviceNavigation } from "@/data/navigation";
import {
  NETLIFY_FORM_NAME,
  NETLIFY_THANK_YOU_PATH,
  submitToNetlify,
} from "@/utils/submitToNetlify";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError(null);
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string" && key !== "form-name") data[key] = value;
    });
    const result = await submitToNetlify(data);
    setIsSubmitting(false);
    if (result.ok) {
      onClose();
      navigate(NETLIFY_THANK_YOU_PATH);
      return;
    }
    setSubmissionError(result.error);
  };

  const inputClass = "h-12 w-full border border-brand-mist bg-brand-cream/50 px-4 text-sm text-brand-ink outline-none transition focus:border-brand-olive focus:ring-4 focus:ring-brand-olive/10";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button className="absolute inset-0 bg-brand-deep/70 backdrop-blur-sm" onClick={onClose} aria-label="Close quote form" />
      <div className="relative z-10 max-h-[92vh] w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl sm:p-8">
        <button onClick={onClose} className="absolute right-4 top-4 bg-brand-cream p-2 text-brand-ink" aria-label="Close"><X className="h-5 w-5" /></button>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Tell us about your project</p>
        <h2 className="mt-2 pr-10 text-3xl font-bold text-brand-deep">Request a retaining wall quote</h2>
        <p className="mt-3 text-sm leading-6 text-brand-slate">Include the suburb, wall requirements and the project you would like us to assess.</p>

        <form name={NETLIFY_FORM_NAME} method="POST" action={`${NETLIFY_THANK_YOU_PATH}/`} data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" aria-busy={isSubmitting}>
          <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
          <input type="hidden" name="formLocation" value="quote-modal" />
          <p className="absolute left-[-10000px]" aria-hidden="true"><label>Do not fill<input name="bot-field" tabIndex={-1} /></label></p>
          <input className={inputClass} name="name" placeholder="Name" required />
          <input className={inputClass} name="email" type="email" placeholder="Email" required />
          <input className={inputClass} name="phone" type="tel" placeholder="Phone" required />
          <input className={inputClass} name="address" placeholder="Suburb / address" required />
          <select className={`${inputClass} sm:col-span-2`} name="serviceType" defaultValue="">
            <option value="">Select a service</option>
            {serviceNavigation.map((item) => <option key={item.href} value={item.name}>{item.name}</option>)}
          </select>
          <textarea className="min-h-28 w-full border border-brand-mist bg-brand-cream/50 px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-olive focus:ring-4 focus:ring-brand-olive/10 sm:col-span-2" name="description" placeholder="Describe the retaining wall project" required />
          {submissionError && <p className="text-sm font-semibold text-red-700 sm:col-span-2" role="alert">{submissionError}</p>}
          <button type="submit" disabled={isSubmitting} className="inline-flex h-13 items-center justify-center gap-2 bg-brand-gold px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-goldDark disabled:opacity-60 sm:col-span-2">
            <Send className="h-4 w-4" />{isSubmitting ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
