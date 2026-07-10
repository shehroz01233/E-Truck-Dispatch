import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type RevenueSystemCard = {
  title: string;
  description: string;
  iconSrc?: string;
  imageSrc?: string;
  logoSrc?: string;
  iconAlt?: string;
  imageAlt?: string;
  logoAlt?: string;
};

type RevenueSystemCta = {
  heading: ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundAlt?: string;
};

type RevenueSystemSectionProps = {
  cards: RevenueSystemCard[];
  cta: RevenueSystemCta;
};

export default function RevenueSystemSection({
  cards,
  cta,
}: RevenueSystemSectionProps) {
  return (
    <section className="bg-[#1c1c1c] py-10 text-white">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[97.5rem] gap-4 sm:w-[calc(100%-64px)] lg:h-[24.75rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="grid gap-4 sm:grid-cols-2 lg:h-full">
          {cards.map((card, index) => {
            const iconPath = card.iconSrc || card.imageSrc || card.logoSrc || "";

            const iconAlt =
              card.iconAlt ||
              card.imageAlt ||
              card.logoAlt ||
              `${card.title} icon`;

            return (
              <article
                key={`${card.title}-${index}`}
                className="min-h-[10.5rem] bg-[#171717] p-4 lg:min-h-0"
              >
                <span className="flex h-9 w-9 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
                  {iconPath ? (
                    <Image
                      src={iconPath}
                      alt={iconAlt}
                      width={30}
                      height={30}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <span className="text-xl">✓</span>
                  )}
                </span>

                <h3 className="mt-4 font-['Outfit'] text-[0.875rem] font-semibold leading-tight text-white">
                  {card.title}
                </h3>

                <p className="mt-3 font-['DM_Sans'] text-[0.6875rem] leading-[1.45] text-white/75">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <article className="relative flex min-h-[22rem] overflow-hidden bg-[#171717] p-7 sm:p-8 lg:min-h-full">
          {cta.backgroundImage ? (
            <Image
              src={cta.backgroundImage}
              alt={cta.backgroundAlt || ""}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain object-center"
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-br from-[#171717]/70 via-[#171717]/55 to-[#171717]/20" />

          <div className="relative z-10 my-auto max-w-[23rem]">
            <h2 className="font-['Outfit'] text-2xl font-bold leading-[1.08] sm:text-[1.75rem]">
              {cta.heading}
            </h2>

            <p className="mt-5 font-['DM_Sans'] text-[0.6875rem] leading-[1.45] text-white/85">
              {cta.description}
            </p>

            <Link
              href={cta.buttonHref}
              className="mt-5 inline-flex h-8 items-center justify-center bg-[#b34b0c] px-4 font-['Outfit'] text-[0.6875rem] font-semibold text-white hover:bg-[#cf5a13]"
            >
              {cta.buttonText}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
