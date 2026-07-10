import Image from "next/image";

type Comparison = [title: string, body: string];

type ComparisonCardsSectionProps = {
  heading: string;
  description?: string;
  comparisons: Comparison[];
  icons?: string[];
  logos?: string[];
  iconAlts?: string[];
  logoAlts?: string[];
};

export default function ComparisonCardsSection({
  heading,
  description,
  comparisons,
  icons = [],
  logos = [],
  iconAlts = [],
  logoAlts = [],
}: ComparisonCardsSectionProps) {
  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 py-20 text-white sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4">
      <div className="flex min-h-80 flex-col bg-[#b34b0c] p-8">
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          {heading}
        </h2>

        {description && (
          <p className="mt-auto pt-8 text-base leading-6 text-white/90">
            {description}
          </p>
        )}
      </div>

      {comparisons.map(([title, body], index) => {
        const iconPath = icons[index] || logos[index] || "";
        const iconAlt = iconAlts[index] || logoAlts[index] || title;

        return (
          <article key={title} className="min-h-80 bg-[#171717] p-5">
            <span className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
              {iconPath ? (
                <Image
                  src={iconPath}
                  alt={iconAlt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              ) : (
                "✓"
              )}
            </span>

            <h3 className="mt-6 text-lg font-medium">{title}</h3>

            {body.includes("|") ? (
              <ul className="mt-6 space-y-3">
                {body.split("|").map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-base leading-6 text-white/75">
                {body}
              </p>
            )}
          </article>
        );
      })}
    </section>
  );
}