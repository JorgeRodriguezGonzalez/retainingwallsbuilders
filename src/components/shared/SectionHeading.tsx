type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) => {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow ? (
        <div className={`inline-flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <span className={`h-px w-8 ${light ? 'bg-brand-sand' : 'bg-brand-olive'}`} />
          <p
            className={`text-xs font-bold uppercase tracking-[0.26em] ${
              light ? 'text-brand-sandLight' : 'text-brand-olive'
            }`}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}

      <h2
        className={`mt-4 text-3xl font-semibold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-brand-ink'
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 ${isCenter ? 'mx-auto' : ''} max-w-3xl text-base leading-8 ${
            light ? 'text-white/80' : 'text-brand-slate'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;