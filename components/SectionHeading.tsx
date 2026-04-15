type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl mx-auto text-center">
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--red-dark)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
