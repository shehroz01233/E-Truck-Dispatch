
import Image from "next/image";

type CardSection = {
  title: string;
  items: string[];
};

type Card = {
  title: string;
  intro?: string;
  description?: string;
  items?: string[];
  sections?: CardSection[];
  footer?: string;
};

type Props = {
  heading: string;
  intro?: string;
  image: string;
  imageAlt?: string;
  cards: Card[];
  contentPosition?: "left" | "right";
};

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-[0.65rem]">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 gap-[0.75rem] text-[0.875rem] leading-[1.5rem] text-white/75"
        >
          <span className="mt-[0.5rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SupportColumnsSection({
  heading,
  intro,
  image,
  imageAlt = "Freight industry operations",
  cards,
  contentPosition = "left",
}: Props) {
  const hasFourBoxes = cards.length > 2;
  const contentRight = contentPosition === "right";

  const sectionGridClass = contentRight
    ? "min-[75rem]:grid-cols-[minmax(0,1fr)_37.5rem] 2xl:grid-cols-[minmax(0,1fr)_37.5rem]"
    : hasFourBoxes
      ? "min-[75rem]:grid-cols-[37.5rem_minmax(0,1fr)] 2xl:grid-cols-[37.5rem_minmax(0,1fr)]"
      : "min-[75rem]:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)_minmax(0,1fr)] 2xl:grid-cols-[37.5rem_28.75rem_28.75rem]";

  const cardsWrapperClass = contentRight
    ? "grid min-w-0 gap-[1rem] md:col-span-2 md:grid-cols-2 sm:gap-[1.25rem] min-[75rem]:order-1 min-[75rem]:col-span-1"
    : hasFourBoxes
      ? "grid min-w-0 gap-[1rem] md:col-span-2 md:grid-cols-2 sm:gap-[1.25rem] min-[75rem]:col-span-1"
      : "contents";

  return (
    <section
      className={`mx-auto grid w-[calc(100%-1.5rem)] max-w-[97.5rem] grid-cols-1 gap-[1rem] py-[3rem] text-white sm:w-[calc(100%-2rem)] sm:gap-[1.25rem] sm:py-[4rem] md:grid-cols-2 lg:w-[calc(100%-4rem)] min-[75rem]:py-[5rem] ${sectionGridClass}`}
    >
      <div
        className={`min-w-0 md:col-span-2 min-[75rem]:col-span-1 ${
          contentRight ? "min-[75rem]:order-2" : ""
        }`}
      >
        <h2 className="max-w-[42rem] break-words text-[2rem] font-bold leading-[1.12] sm:text-[2.5rem] lg:text-[3rem] min-[75rem]:max-w-none">
          {heading}
        </h2>

        {intro && (
          <p className="mt-[1.25rem] max-w-[38rem] text-[1rem] leading-[1.625rem] text-white/70 sm:mt-[1.75rem] sm:text-[1.125rem] sm:leading-[1.75rem] min-[75rem]:max-w-[32rem]">
            {intro}
          </p>
        )}

        <div
          className={`relative overflow-hidden bg-[#111111] min-[75rem]:h-[18rem] ${
            intro
              ? "mt-[2rem] min-[75rem]:mt-[2.5rem]"
              : "mt-[2rem] min-[75rem]:mt-[3rem]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={675}
            sizes="(min-width: 1536px) 37.5rem, (min-width: 1200px) 40vw, (min-width: 1024px) calc(100vw - 4rem), (min-width: 768px) calc(100vw - 2rem), calc(100vw - 1.5rem)"
            className="h-auto w-full object-contain min-[75rem]:h-full min-[75rem]:object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/20 to-[#b34b0c]/10" />
        </div>
      </div>

      <div className={cardsWrapperClass}>
        {cards.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className={`min-w-0 overflow-hidden bg-[#171717] p-[1.25rem] sm:p-[1.5rem] ${
              hasFourBoxes
                ? "min-[75rem]:min-h-[17.875rem]"
                : "min-[75rem]:min-h-[36.75rem]"
            }`}
          >
            <h3 className="break-words text-[1.125rem] font-semibold leading-[1.625rem] sm:text-[1.25rem] sm:leading-[1.75rem]">
              {card.title}
            </h3>

            {card.intro && (
              <p className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]">
                {card.intro}
              </p>
            )}

            {card.description && (
              <p className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]">
                {card.description}
              </p>
            )}

            {card.items && card.items.length > 0 && (
              <div className="mt-[1.25rem]">
                <List items={card.items} />
              </div>
            )}

            {card.sections && card.sections.length > 0 && (
              <div className="mt-[1.25rem] space-y-[1.25rem]">
                {card.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-[0.75rem] text-[1rem] font-semibold leading-[1.5rem] text-white sm:text-[1.125rem]">
                      {section.title}
                    </h4>

                    <List items={section.items} />
                  </div>
                ))}
              </div>
            )}

            {card.footer && (
              <p className="mt-[1.5rem] text-[0.9375rem] leading-[1.5rem] text-white/70 sm:text-[1rem]">
                {card.footer}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}