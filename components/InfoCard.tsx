type InfoCardProps = {
  imgSrc?: string;
  title: string;
  description?: string;
  date?: string;
  link?: string;
};

export function InfoCard({
  imgSrc,
  title,
  description,
  date,
  link,
}: InfoCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border-card)] bg-[var(--card-surface)] shadow-[0_10px_35px_var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_var(--shadow-card-lg)]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col p-5"
      >
        {imgSrc && (
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
            <img
              src={imgSrc}
              alt={title}
              className="h-full w-full rounded-xl object-cover shadow-[0_14px_40px_var(--shadow-card)]"
            />
          </div>
        )}
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--red-dark)]">
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
            {description}
          </p>
        )}
        {date && (
          <p className="mt-2 text-xs font-medium text-[var(--red-primary)]">
            {date}
          </p>
        )}
      </a>
    </article>
  );
}
