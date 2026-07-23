import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

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

type LayoutVariant =
  | "default"
  | "driver-onboarding"
  | "box-truck-compliance";

type Props = {
  heading: string;
  intro?: string;
  image: string;
  imageAlt?: string;
  cards: Card[];
  contentPosition?: "left" | "right";
  layoutVariant?: LayoutVariant;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const cardTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

const sectionsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const nestedSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
      delayChildren: 0.08,
    },
  },
};

type AnimatedListProps = {
  items: string[];
  variant?: LayoutVariant;
};

function AnimatedList({
  items,
  variant = "default",
}: AnimatedListProps) {
  const isDriverOnboarding = variant === "driver-onboarding";
  const isBoxTruckCompliance = variant === "box-truck-compliance";

  const listClassName = isBoxTruckCompliance
    ? "mt-6 space-y-2.5 font-['DM_Sans'] text-sm leading-[1.35] text-white"
    : isDriverOnboarding
      ? "mt-[1.5rem] space-y-[0.65rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.35] text-white"
      : "space-y-[0.65rem]";

  const itemClassName =
    isDriverOnboarding || isBoxTruckCompliance
      ? "flex min-w-0 items-start gap-[0.75rem]"
      : "flex min-w-0 gap-[0.75rem] text-[0.875rem] leading-[1.5rem] text-white/75";

  return (
    <motion.ul
      variants={listVariants}
      className={listClassName}
    >
      {items.map((item, index) => (
        <motion.li
          key={`${item}-${index}`}
          variants={listItemVariants}
          className={itemClassName}
        >
          <motion.span
            variants={bulletVariants}
            aria-hidden="true"
            className="mt-[0.4rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
          />

          <span className="min-w-0 break-words">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
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

  /*
  |--------------------------------------------------------------------------
  | Box truck compliance layout
  |--------------------------------------------------------------------------
  */

  if (layoutVariant === "box-truck-compliance") {
    const contentVariants: Variants = {
      hidden: {
        opacity: 0,
        x: 32,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: smoothEase,
          delayChildren: 0.12,
          staggerChildren: 0.1,
        },
      },
    };

    return (
      <section className="w-full bg-[#1d1d1d] py-12 text-white sm:py-16 xl:py-20">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Right heading and image */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="order-1 flex min-w-0 flex-col xl:order-2"
          >
            <div className="pb-8 xl:px-5 xl:pt-0">
              <motion.h2
                variants={contentItemVariants}
                className="max-w-[560px] font-['Outfit'] text-4xl font-bold leading-[1.2] sm:text-5xl"
              >
                {heading}
              </motion.h2>

              {intro ? (
                <motion.p
                  variants={contentItemVariants}
                  className="mt-6 max-w-[560px] font-['DM_Sans'] text-base leading-[1.5] text-white/85"
                >
                  {intro}
                </motion.p>
              ) : null}
            </div>

            <motion.div
              variants={imageVariants}
              className="relative mt-auto min-h-[288px] w-full overflow-hidden sm:min-h-[320px]"
            >
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
            </motion.div>
          </motion.div>

          {/* Exact two-column cards area */}
          <div className="order-2 grid min-w-0 gap-5 md:grid-cols-2 xl:order-1">
            {cards.map((card, index) => {
              const complianceCardVariants: Variants = {
                hidden: {
                  opacity: 0,
                  y: 28,
                  scale: 0.985,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: index * 0.07,
                    duration: 0.58,
                    ease: smoothEase,
                    delayChildren: 0.1,
                    staggerChildren: 0.08,
                  },
                },
              };

              return (
                <motion.article
                  key={`${card.title}-${index}`}
                  variants={complianceCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  className="h-full min-h-[570px] min-w-0 border border-neutral-700 bg-neutral-900 p-5"
                >
                  <motion.h3
                    variants={contentItemVariants}
                    className="max-w-[260px] font-['Outfit'] text-xl font-semibold leading-[1.25]"
                  >
                    {card.title}
                  </motion.h3>

                  {card.intro ? (
                    <motion.p
                      variants={contentItemVariants}
                      className="mt-6 font-['DM_Sans'] text-sm leading-[1.35] text-white/90"
                    >
                      {card.intro}
                    </motion.p>
                  ) : null}

                  {card.description ? (
                    <motion.p
                      variants={contentItemVariants}
                      className="mt-6 font-['DM_Sans'] text-sm leading-[1.35] text-white/90"
                    >
                      {card.description}
                    </motion.p>
                  ) : null}

                  {card.items?.length ? (
                    <AnimatedList
                      items={card.items}
                      variant="box-truck-compliance"
                    />
                  ) : null}

                  {card.sections?.length ? (
                    <motion.div
                      variants={sectionsContainerVariants}
                      className="mt-6 space-y-6"
                    >
                      {card.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={`${section.title}-${sectionIndex}`}
                          variants={nestedSectionVariants}
                        >
                          <motion.h4
                            variants={cardTitleVariants}
                            className="font-['Outfit'] text-base font-semibold leading-[1.25]"
                          >
                            {section.title}
                          </motion.h4>

                          <AnimatedList
                            items={section.items}
                            variant="box-truck-compliance"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : null}

                  {card.footer ? (
                    <motion.p
                      variants={contentItemVariants}
                      className="mt-6 font-['DM_Sans'] text-sm leading-[1.35] text-white/90"
                    >
                      {card.footer}
                    </motion.p>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Driver onboarding layout
  |--------------------------------------------------------------------------
  */

  if (layoutVariant === "driver-onboarding") {
    const driverContentVariants: Variants = {
      hidden: {
        opacity: 0,
        x: 32,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: smoothEase,
          delayChildren: 0.12,
          staggerChildren: 0.1,
        },
      },
    };

    const driverCardsGridClass =
      cards.length === 1
        ? "md:grid-cols-1 xl:grid-cols-1"
        : cards.length === 2 || cards.length === 4
          ? "md:grid-cols-2 xl:grid-cols-2"
          : "md:grid-cols-2 xl:grid-cols-3";

    return (
      <section className="m-0 w-full bg-[#1d1d1d] px-0 py-[3rem] text-white sm:py-[4rem] min-[75rem]:py-[5rem]">
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[97.5rem] gap-[1.25rem] xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <motion.div
            variants={driverContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="order-1 flex min-w-0 flex-col xl:order-2"
          >
            <div className="pb-[2rem] xl:p-[1.25rem] xl:pt-0">
              <motion.h2
                variants={contentItemVariants}
                className="max-w-[35rem] font-['Outfit'] text-[2.25rem] font-bold leading-[1.2] sm:text-[3rem]"
              >
                {heading}
              </motion.h2>

              {intro ? (
                <motion.p
                  variants={contentItemVariants}
                  className="mt-[2rem] max-w-[35rem] font-['DM_Sans'] text-[1rem] leading-[1.35] text-white/90 sm:text-[1.125rem]"
                >
                  {intro}
                </motion.p>
              ) : null}
            </div>

            <motion.div
              variants={imageVariants}
              className="relative mt-auto min-h-[18rem] w-full overflow-hidden sm:min-h-[20rem]"
            >
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
            </motion.div>
          </motion.div>

          <div
            className={`order-2 grid min-w-0 auto-rows-fr gap-[1.25rem] xl:order-1 ${driverCardsGridClass}`}
          >
            {cards.map((card, index) => {
              const driverCardVariants: Variants = {
                hidden: {
                  opacity: 0,
                  y: 28,
                  scale: 0.985,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: (index % 3) * 0.07,
                    duration: 0.58,
                    ease: smoothEase,
                    delayChildren: 0.1,
                    staggerChildren: 0.08,
                  },
                },
              };

              return (
                <motion.article
                  key={`${card.title}-${index}`}
                  variants={driverCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  className="h-full min-h-[20rem] min-w-0 border border-neutral-700 bg-neutral-900 p-[1.25rem]"
                >
                  <motion.h3
                    variants={cardTitleVariants}
                    className="max-w-[16rem] font-['Outfit'] text-[1.25rem] font-semibold leading-[1.25]"
                  >
                    {card.title}
                  </motion.h3>

                  {card.intro ? (
                    <motion.p
                      variants={cardTextVariants}
                      className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] leading-[1.35] text-white/90"
                    >
                      {card.intro}
                    </motion.p>
                  ) : null}

                  {card.description ? (
                    <motion.p
                      variants={cardTextVariants}
                      className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] leading-[1.35] text-white/90"
                    >
                      {card.description}
                    </motion.p>
                  ) : null}

                  {card.items?.length ? (
                    <AnimatedList
                      items={card.items}
                      variant="driver-onboarding"
                    />
                  ) : null}

                  {card.sections?.length ? (
                    <motion.div
                      variants={sectionsContainerVariants}
                      className="mt-[1.5rem] space-y-[1.5rem]"
                    >
                      {card.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={`${section.title}-${sectionIndex}`}
                          variants={nestedSectionVariants}
                        >
                          <motion.h4
                            variants={cardTitleVariants}
                            className="font-['Outfit'] text-[1rem] font-semibold leading-[1.25]"
                          >
                            {section.title}
                          </motion.h4>

                          <AnimatedList
                            items={section.items}
                            variant="driver-onboarding"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : null}

                  {card.footer ? (
                    <motion.p
                      variants={cardTextVariants}
                      className="mt-[1.5rem] font-['DM_Sans'] text-[0.875rem] leading-[1.35] text-white/90"
                    >
                      {card.footer}
                    </motion.p>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Default layout
  |--------------------------------------------------------------------------
  */

  const sectionGridClass = contentRight
    ? "min-[75rem]:grid-cols-[minmax(0,1fr)_37.5rem]"
    : hasFourBoxes
      ? "min-[75rem]:grid-cols-[37.5rem_minmax(0,1fr)]"
      : "min-[75rem]:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)_minmax(0,1fr)] 2xl:grid-cols-[37.5rem_28.75rem_28.75rem]";

  const desktopCardsGridClass =
    cards.length === 1
      ? "min-[75rem]:grid-cols-1"
      : cards.length === 2 || cards.length === 4
        ? "min-[75rem]:grid-cols-2"
        : "min-[75rem]:grid-cols-3";

  const cardsWrapperClass = contentRight
    ? `grid min-w-0 gap-[1rem] sm:gap-[1.25rem] md:col-span-2 md:grid-cols-2 min-[75rem]:order-1 min-[75rem]:col-span-1 min-[75rem]:content-start min-[75rem]:self-start ${desktopCardsGridClass}`
    : hasFourBoxes
      ? "grid min-w-0 gap-[1rem] sm:gap-[1.25rem] md:col-span-2 md:grid-cols-2 min-[75rem]:col-span-1 min-[75rem]:content-start min-[75rem]:self-start"
      : "contents";

  const defaultContentVariants: Variants = {
    hidden: {
      opacity: 0,
      x: contentRight ? 32 : -32,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: smoothEase,
        delayChildren: 0.12,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className={`mx-auto grid w-[calc(100%-1.5rem)] max-w-[97.5rem] grid-cols-1 gap-[1rem] py-[3rem] text-white sm:w-[calc(100%-2rem)] sm:gap-[1.25rem] sm:py-[4rem] md:grid-cols-2 lg:w-[calc(100%-4rem)] min-[75rem]:items-start min-[75rem]:py-[5rem] ${sectionGridClass}`}
    >
      <motion.div
        variants={defaultContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className={`min-w-0 md:col-span-2 min-[75rem]:col-span-1 min-[75rem]:self-start ${
          contentRight ? "min-[75rem]:order-2" : ""
        }`}
      >
        <motion.h2
          variants={contentItemVariants}
          className="max-w-[42rem] break-words text-[2rem] font-bold leading-[1.12] sm:text-[2.5rem] lg:text-[3rem] min-[75rem]:max-w-none"
        >
          {heading}
        </motion.h2>

        {intro ? (
          <motion.p
            variants={contentItemVariants}
            className="mt-[1.25rem] max-w-[38rem] text-[1rem] leading-[1.625rem] text-white/70 sm:mt-[1.75rem] sm:text-[1.125rem] sm:leading-[1.75rem] min-[75rem]:max-w-[32rem]"
          >
            {intro}
          </motion.p>
        ) : null}

        <motion.div
          variants={imageVariants}
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
        </motion.div>
      </motion.div>

      <div className={cardsWrapperClass}>
        {cards.map((card, index) => {
          const defaultCardVariants: Variants = {
            hidden: {
              opacity: 0,
              y: 28,
              scale: 0.985,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: (index % 3) * 0.07,
                duration: 0.58,
                ease: smoothEase,
                delayChildren: 0.1,
                staggerChildren: 0.08,
              },
            },
          };

          return (
            <motion.article
              key={`${card.title}-${index}`}
              variants={defaultCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className={`min-w-0 overflow-hidden border border-neutral-700 bg-[#171717] p-[1.25rem] sm:p-[1.5rem] ${
                hasFourBoxes
                  ? "min-[75rem]:min-h-[17.875rem]"
                  : "min-[75rem]:min-h-[36.75rem]"
              }`}
            >
              <motion.h3
                variants={cardTitleVariants}
                className="break-words text-[1.125rem] font-semibold leading-[1.625rem] sm:text-[1.25rem] sm:leading-[1.75rem]"
              >
                {card.title}
              </motion.h3>

              {card.intro ? (
                <motion.p
                  variants={cardTextVariants}
                  className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]"
                >
                  {card.intro}
                </motion.p>
              ) : null}

              {card.description ? (
                <motion.p
                  variants={cardTextVariants}
                  className="mt-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:mt-[1.5rem] sm:text-[1rem]"
                >
                  {card.description}
                </motion.p>
              ) : null}

              {card.items?.length ? (
                <motion.div
                  variants={cardTextVariants}
                  className="mt-[1.25rem]"
                >
                  <AnimatedList items={card.items} />
                </motion.div>
              ) : null}

              {card.sections?.length ? (
                <motion.div
                  variants={sectionsContainerVariants}
                  className="mt-[1.25rem] space-y-[1.25rem]"
                >
                  {card.sections.map((section, sectionIndex) => (
                    <motion.div
                      key={`${section.title}-${sectionIndex}`}
                      variants={nestedSectionVariants}
                    >
                      <motion.h4
                        variants={cardTitleVariants}
                        className="mb-[0.75rem] text-[1rem] font-semibold leading-[1.5rem] text-white sm:text-[1.125rem]"
                      >
                        {section.title}
                      </motion.h4>

                      <AnimatedList items={section.items} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}

              {card.footer ? (
                <motion.p
                  variants={cardTextVariants}
                  className="mt-[1.5rem] text-[0.9375rem] leading-[1.5rem] text-white/70 sm:text-[1rem]"
                >
                  {card.footer}
                </motion.p>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}