type InfoCardProps = {
  imgSrc?: string;
  title: string;
  description?: string;
  date?: string
  link?: string;
};

export function InfoCard({ imgSrc, title, description, date, link }: InfoCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,240,232,0.92))] p-6 shadow-[0_10px_35px_rgba(28,25,23,0.06)]">
      {/* <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
        {eyebrow}
      </p> */}
    <a href={link} target="_blank" rel="noopener noreferrer">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="mt-3 h-30 w-30 object-cover rounded-[1.1rem] w-auto h-auto shadow-[0_14px_40px_rgba(28,25,23,0.18)]"
          />
        )}
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
          {title}
        </h3>
        <p className="mt-3 text-base leading-7 text-stone-700">{description}</p>
        <p className="mt-2 text-sm text-stone-500">{date}</p>
      </a>
    </article>
  );
}
