import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type ShowcaseService = {
  title: string;
  href?: string;
};

type ServicesShowcaseSectionProps = {
  image: string | StaticImageData;
  imageAlt: string;
  services: ShowcaseService[];
  activeIndex?: number;
  className?: string;
};

export default function ServicesShowcaseSection({
  image,
  imageAlt,
  services,
  activeIndex = 0,
  className = "",
}: ServicesShowcaseSectionProps) {
  const activeService = services[activeIndex] ?? services[0];

  return (
    <section
      className={`bg-[#1c1c1c] py-16 text-white lg:py-20 ${className}`}
    >
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-10 sm:w-[calc(100%-64px)] xl:grid-cols-[minmax(0,904px)_minmax(0,556px)] xl:gap-[100px]">
        {/* Left image */}
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px] xl:h-[600px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 904px, calc(100vw - 64px)"
            className="object-cover"
          />
        </div>

        {/* Services */}
        <div className="min-w-0 xl:h-[600px]">
          {activeService ? (
            <div className="flex min-h-14 items-center bg-[#b34b0c] px-6 sm:px-[31px]">
              <p className="font-['Outfit'] text-lg font-semibold leading-8 text-white sm:text-xl sm:leading-9">
                {activeService.title}
              </p>
            </div>
          ) : null}

          <div className="mt-6 space-y-2.5">
            {services.map((service, index) => {
              const content = (
                <span
                  className={`block w-full font-['Outfit'] text-lg font-semibold leading-8 transition-colors sm:text-xl sm:leading-9 ${
                    index === activeIndex
                      ? "text-[#b34b0c]"
                      : "text-white hover:text-[#b34b0c]"
                  }`}
                >
                  {service.title}
                </span>
              );

              return (
                <div
                  key={`${service.title}-${index}`}
                  className="border-b border-white/60 pb-2 last:border-b-0"
                >
                  {service.href ? (
                    <Link href={service.href} className="block w-full">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}