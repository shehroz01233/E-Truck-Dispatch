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

  /**
   * default:
   * Keeps all existing component layouts unchanged.
   *
   * driver-onboarding:
   * Uses the six-card Figma layout.
   */
  layoutVariant?: "default" | "driver-onboarding";
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

function DriverOnboardingList({ items }: { items: string[] }) {
  return (
    <ul className="mt-[1.5rem] space-y-[0.65rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.35] text-white">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[0.75rem]">
          <span
            aria-hidden="true"
            className="mt-[0.4rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
          />

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
  layoutVariant = "default",
}: Props) {
  const hasFourBoxes = cards.length > 2;
  const contentRight = contentPosition === "right";
  const isDriverOnboarding = layoutVariant === "driver-onboarding";

  /*
   * Dedicated Figma layout.
   * This branch does not change the existing component layouts.
   */
  if (isDriverOnboarding) {
    return (
      <section className="m-0 w-full bg-[#1d1d1d] px-0 py-[3rem] text-white sm:py-[4rem] min-[75rem]:py-[5rem]">
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[97.5rem] gap-[1.25rem] xl:grid-cols-[3fr_2fr]">
          {/* Right heading, description and image */}
          <div className="order-1 flex min-w-0 flex-col xl:order-2">
            <div className="pb-[2rem] xl:p-[1.25rem] xl:pt-0">
              <h2 className="max-w-[35rem] font-['Outfit'] text-[2.25rem] font-bold leading-[1.2] sm:text-[3rem]">
                {heading}
              </h2>

              {intro ? (
                <p className="mt-[2rem] max-w-[35rem] font-['DM_Sans'] text-[1rem] font-normal leading-[1.35] text-white/90 sm:text-[1.125rem]">
                  {intro}
                </p>
              ) : null}
            </div>

            <div className="relative mt-auto min-h-[18rem] w-full overflow-hidden sm:min-h-[20rem]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1280px) 40vw, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#b34b0c]/10"
              />
            </div>
          </div>

          {/* Six-card Figma grid */}
          <div className="order-2 grid auto-rows-fr gap-[1.25rem] md:grid-cols-2 xl:order-1 xl:grid-cols-3">
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="h-full min-h-[20rem] border border-neutral-700 bg-neutral-900 p-[1.25rem]"
              >
                <h3 className="max-w-[16rem] font-['Outfit'] text-[1.25rem] font-semibold leading-[1.25]">
                  {card.title}
                </h3>

                {card.intro ? (
                  <p className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.35] text-white/90">
                    {card.intro}
                  </p>
                ) : null}

                {card.description ? (
                  <p className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.35] text-white/90">
                    {card.description}
                  </p>
                ) : null}

                {card.items?.length ? (
                  <DriverOnboardingList items={card.items} />
                ) : null}

                {card.sections?.length ? (
                  <div className="mt-[1.5rem] space-y-[1.5rem]">
                    {card.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="font-['Outfit'] text-[1rem] font-semibold leading-[1.25]">
                          {section.title}
                        </h4>

                        <DriverOnboardingList items={section.items} />
                      </div>
                    ))}
                  </div>
                ) : null}

                {card.footer ? (
                  <p className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.35] text-white/90">
                    {card.footer}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /*
   * Original component layout.
   * Existing usages remain unchanged.
   */
  const sectionGridClass = contentRight
    ? "min-[75rem]:grid-cols-[minmax(0,1fr)_37.5rem]"
    : hasFourBoxes
      ? "min-[75rem]:grid-cols-[37.5rem_minmax(0,1fr)]"
      : "min-[75rem]:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)_minmax(0,1fr)] 2xl:grid-cols-[37.5rem_28.75rem_28.75rem]";

  const cardsWrapperClass = contentRight
    ? "grid min-w-0 gap-[1rem] sm:gap-[1.25rem] md:col-span-2 md:grid-cols-2 min-[75rem]:order-1 min-[75rem]:col-span-1 min-[75rem]:grid-cols-3 min-[75rem]:content-start min-[75rem]:self-start"
    : hasFourBoxes
      ? "grid min-w-0 gap-[1rem] sm:gap-[1.25rem] md:col-span-2 md:grid-cols-2 min-[75rem]:col-span-1 min-[75rem]:content-start min-[75rem]:self-start"
      : "contents";

  return (
    <section
      className={`mx-auto grid w-[calc(100%-1.5rem)] max-w-[97.5rem] grid-cols-1 gap-[1rem] py-[3rem] text-white sm:w-[calc(100%-2rem)] sm:gap-[1.25rem] sm:py-[4rem] md:grid-cols-2 lg:w-[calc(100%-4rem)] min-[75rem]:items-start min-[75rem]:py-[5rem] ${sectionGridClass}`}
    >
      {/* Heading, description and image */}
      <div
        className={`min-w-0 md:col-span-2 min-[75rem]:col-span-1 min-[75rem]:self-start ${
          contentRight ? "min-[75rem]:order-2" : ""
        }`}
      >
        <h2 className="max-w-[42rem] break-words text-[2rem] font-bold leading-[1.12] sm:text-[2.5rem] lg:text-[3rem] min-[75rem]:max-w-none">
          {heading}
        </h2>

        {intro ? (
          <p className="mt-[1.25rem] max-w-[38rem] text-[1rem] leading-[1.625rem] text-white/70 sm:mt-[1.75rem] sm:text-[1.125rem] sm:leading-[1.75rem] min-[75rem]:max-w-[32rem]">
            {intro}
          </p>
        ) : null}

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

      {/* Cards */}
      <div className={cardsWrapperClass}>
        {cards.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className={`min-w-0 overflow-hidden border border-neutral-700 bg-[#171717] p-[1.25rem] sm:p-[1.5rem] ${
              hasFourBoxes
                ? "min-[75rem]:min-h-[17.875rem]"
                : "min-[75rem]:min-h-[36.75rem]"
            }`}
          >
            <h3 className="break-words text-[1.125rem] font-semibold leading-[1.625rem] sm:text-[1.25rem] sm:leading-[1.75rem]">
              {card.title}
            </h3>

            {card.intro ? (
              <p className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]">
                {card.intro}
              </p>
            ) : null}

            {card.description ? (
              <p className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]">
                {card.description}
              </p>
            ) : null}

            {card.items?.length ? (
              <div className="mt-[1.25rem]">
                <List items={card.items} />
              </div>
            ) : null}

            {card.sections?.length ? (
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
            ) : null}

            {card.footer ? (
              <p className="mt-[1.5rem] text-[0.9375rem] leading-[1.5rem] text-white/70 sm:text-[1rem]">
                {card.footer}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}