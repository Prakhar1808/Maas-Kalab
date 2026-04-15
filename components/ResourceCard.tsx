type ResourceCardProps = {
  imgSrc?: string;
  title: string;
  description: string;
  addr: string;
};

export function ResourceCard({
  imgSrc,
  title,
  description,
  addr,
}: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border-card)] bg-[var(--card-surface)] shadow-[0_14px_40px_var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_var(--shadow-card-lg)]">
      <a
        href={addr}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col p-5"
      >
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
          <img
            className="h-full w-full rounded-xl object-cover shadow-[0_14px_40px_var(--shadow-card)]"
            src={imgSrc}
            alt={title}
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--red-dark)]">
          {title}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      </a>
    </article>
  );
}
