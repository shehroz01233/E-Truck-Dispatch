import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  cards: [string, string[]][];
  image: string;
  imageAlt?: string;
  cardContentVariant?: "list" | "paragraph";
};

export default function ComplianceMatrixSection({
  heading,
  description,
  cards,
  image,
  imageAlt = "Real-time compliance monitoring",
  cardContentVariant = "list",
}: Props) {
  const isParagraphVariant = cardContentVariant === "paragraph";

  return (
    <section className="py-16">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4">
        {/* Heading card */}
        <div className="min-h-80 bg-[#b34b0c] p-[50px] md:col-span-2">
          <h2 className="max-w-[700px] font-['Outfit'] text-4xl font-bold leading-[1.15] text-white sm:text-5xl">
            {heading}
          </h2>

          <p className="mt-8 max-w-[670px] font-['DM_Sans'] text-base leading-[1.4] text-white sm:text-lg">
            {description}
          </p>
        </div>

        {/* Content cards */}
        {cards.map(([title, items], index) => (
          <article
            key={title}
            className={`min-h-80 bg-[#171717] p-5 ${
              index > 1 ? "xl:row-start-2" : ""
            }`}
          >
            <h3 className="font-['Outfit'] text-xl font-semibold leading-[1.2] text-white">
              {title}
            </h3>

            {isParagraphVariant ? (
              <div className="mt-8 space-y-4">
                {items.map((item) => (
                  <p
                    key={item}
                    className="font-['DM_Sans'] text-sm leading-[1.4] text-white/85"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <ul className="mt-8 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-['DM_Sans'] text-sm leading-[1.4] text-white/75"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        {/* Image */}
        <div className="relative min-h-80 overflow-hidden md:col-span-2 xl:col-start-3 xl:row-start-2">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b34b0c]/35 to-[#b34b0c]/15" />
        </div>
      </div>
    </section>
  );
}