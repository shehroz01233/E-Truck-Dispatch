import Image from "next/image";

type LegacyComparison = [title: string, body: string];

type StructuredComparison = {
  title: string;
  items: string[];
  footer?: string;
};

type Comparison = LegacyComparison | StructuredComparison;

type ComparisonCardsSectionProps = {
  heading: string;
  description?: string;
  comparisons: Comparison[];
  icons?: string[];
  logos?: string[];
  iconAlts?: string[];
  logoAlts?: string[];

  /**
   * default:
   * Keeps the existing layout unchanged.
   *
   * dispatch-performance:
   * Places the result directly below the bullet list.
   */
  variant?: "default" | "dispatch-performance";
};

export default function ComparisonCardsSection({
  heading,
  description,
  comparisons,
  icons = [],
  logos = [],
  iconAlts = [],
  logoAlts = [],
  variant = "default",
}: ComparisonCardsSectionProps) {
  const isDispatchPerformance = variant === "dispatch-performance";

  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 py-20 text-white sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4">
      {/* Heading card */}
      <div className="flex min-h-80 flex-col bg-[#b34b0c] p-8">
        <h2 className="font-['Outfit'] text-4xl font-bold leading-tight sm:text-5xl">
          {heading}
        </h2>

        {description ? (
          <p className="mt-auto pt-8 font-['DM_Sans'] text-base leading-6 text-white/90">
            {description}
          </p>
        ) : null}
      </div>

      {/* Comparison cards */}
      {comparisons.map((comparison, index) => {
        const isLegacy = Array.isArray(comparison);

        const title = isLegacy ? comparison[0] : comparison.title;
        const legacyBody = isLegacy ? comparison[1] : "";

        const items = isLegacy
          ? legacyBody.includes("|")
            ? legacyBody.split("|")
            : []
          : comparison.items;

        const footer = isLegacy ? "" : comparison.footer;

        const iconPath = icons[index] || logos[index] || "";
        const iconAlt = iconAlts[index] || logoAlts[index] || title;

        return (
          <article
            key={`${title}-${index}`}
            className="flex min-h-80 flex-col bg-[#171717] p-5"
          >
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
                <span className="text-2xl">✓</span>
              )}
            </span>

            <h3 className="mt-6 font-['Outfit'] text-lg font-medium leading-snug">
              {title}
            </h3>

            {items.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-['DM_Sans'] text-sm leading-6 text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : legacyBody ? (
              <p className="mt-6 font-['DM_Sans'] text-base leading-6 text-white/75">
                {legacyBody}
              </p>
            ) : null}

            {footer ? (
              <p
                className={`font-['DM_Sans'] text-sm leading-5 text-white/90 ${
                  isDispatchPerformance
                    ? "mt-5 max-w-[15rem]"
                    : "mt-auto pt-6 text-base leading-6"
                }`}
              >
                {footer}
              </p>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}