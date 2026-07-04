import Image from "next/image";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: boolean;
};

export type OurServicesProps = {
  heading: ReactNode;
  description: string;
  services: Service[];
};

export default function OurServices({
  heading,
  description,
  services,
}: OurServicesProps) {
  return (
    <section className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 sm:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[97.5rem]">
        <header className="mx-auto text-center">
          <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-tight sm:text-[2.375rem] xl:text-[3rem] xl:leading-[3.625rem]">
            {heading}
          </h2>

          <p className="mx-auto mt-5 max-w-[55rem] font-['DM_Sans'] text-[0.75rem] leading-[1.5] text-white/90 sm:text-[0.9375rem] xl:mt-8 xl:text-[1.125rem] xl:leading-[1.6875rem]">
            {description}
          </p>
        </header>

        <div className="mt-10 grid overflow-hidden sm:grid-cols-2 xl:mt-[4.9375rem] xl:grid-cols-4">
          {services.map((service, index) => (
            <ServicePair key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePair({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const imageOrder =
    [
      "order-1 xl:order-1",
      "order-1 xl:order-3",
      "order-2 xl:order-6",
      "order-2 xl:order-8",
    ][index] || "order-1";

  const textOrder =
    [
      "order-2 xl:order-2",
      "order-2 xl:order-4",
      "order-1 xl:order-5",
      "order-1 xl:order-7",
    ][index] || "order-2";

  return (
    <div className="grid grid-rows-2 xl:contents">
      <div className={`relative aspect-[390/361] overflow-hidden ${imageOrder}`}>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 39.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 24.375rem"
          className="object-cover"
        />
      </div>

      <article
        className={`flex min-h-[21rem] flex-col items-center justify-center px-6 py-8 text-center sm:aspect-[390/361] sm:min-h-0 sm:px-12 xl:px-[4.6875rem] ${
          service.accent ? "bg-[#B34B0C]" : "bg-[#161616]"
        } ${textOrder}`}
      >
        <h3 className="font-['Outfit'] text-[1.0625rem] font-semibold leading-tight sm:text-[1.1875rem] xl:text-[1.375rem] xl:leading-7">
          {service.title}
        </h3>

        <p className="mt-3 max-w-[15rem] font-['DM_Sans'] text-[0.75rem] leading-[1.5] text-white sm:text-[0.875rem] xl:text-[1rem] xl:leading-6">
          {service.description}
        </p>
      </article>
    </div>
  );
}
