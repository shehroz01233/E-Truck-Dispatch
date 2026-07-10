import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type BrokerNetworkFeature = {
  title: ReactNode;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

export type BrokerNetworkSectionProps = {
  heading: ReactNode;
  description: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  features: BrokerNetworkFeature[];
  className?: string;
};

export default function BrokerNetworkSection({
  heading,
  description,
  image,
  imageAlt,
  features,
  className = "",
}: BrokerNetworkSectionProps) {
  return (
    <section
      className={`overflow-hidden mt-20 mb-20 bg-transparent px-5 text-white sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto grid w-full max-w-[97.5rem] overflow-hidden lg:h-[27rem] lg:grid-cols-[minmax(0,47rem)_minmax(0,50.5rem)]">
        {/* Content */}
        <div className="flex min-w-0 flex-col py-12 lg:pb-0 lg:pt-[2.0625rem]">
          <h2 className="w-full max-w-[43.9375rem] font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <div className="mt-7 w-full max-w-[40.5625rem] font-outfit text-base font-medium leading-[1.35] text-white/90 sm:text-lg lg:mt-[2.75rem] lg:leading-[1.25]">
            {description}
          </div>

          {features.length > 0 && (
            <div className="mt-8 grid w-full max-w-[40.5625rem] grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:mt-[1.9375rem] lg:grid-cols-[18.1875rem_minmax(0,1fr)]">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="grid min-w-0 grid-cols-[2.625rem_minmax(0,1fr)] items-start gap-[0.625rem]"
                >
                  <span className="flex size-[2.625rem] shrink-0 items-center justify-center text-[#b34b0c]">
                    {feature.icon ? (
                      feature.icon
                    ) : feature.iconSrc ? (
                      <Image
                        src={feature.iconSrc}
                        alt={feature.iconAlt ?? ""}
                        width={42}
                        height={42}
                        className="size-[2.625rem] object-contain"
                      />
                    ) : (
                      <NetworkFeatureIcon />
                    )}
                  </span>

                  <div className="min-w-0 pt-[0.625rem] font-dm-sans text-base font-normal leading-[1.35] text-white">
                    {feature.title}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[27rem] lg:h-[24rem] lg:min-h-0 lg:self-start">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={false}
            sizes="(min-width: 1024px) 50.5rem, 100vw"
            className="object-contain object-center lg:object-right-top"
          />
        </div>
      </div>
    </section>
  );
}

function NetworkFeatureIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 42 42"
      className="size-full fill-none stroke-current"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="21" cy="21" r="18" />
      <circle cx="21" cy="21" r="5" />

      <path d="M21 3v13M21 26v13M3 21h13M26 21h13" />

      <path d="m8.3 8.3 9.2 9.2M24.5 24.5l9.2 9.2M33.7 8.3l-9.2 9.2M17.5 24.5l-9.2 9.2" />
    </svg>
  );
}