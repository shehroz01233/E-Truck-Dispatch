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
  description?: string;
  services: Service[];
};

export default function OurServices({
  heading,
  description,
  services,
}: OurServicesProps) {
  return (
    <section className="bg-[#1c1c1c] px-[1rem] py-[3rem] text-white min-[30rem]:px-[1.5rem] min-[30rem]:py-[4rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:py-[5rem]">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[97.5rem] min-[30rem]:w-[calc(100%-3rem)] min-[48rem]:w-[calc(100%-4rem)] min-[64rem]:w-[calc(100%-6rem)]">
        <header className="mx-auto text-center">
          <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-[1.15] text-white min-[48rem]:text-[2.375rem] min-[80rem]:text-[3rem] min-[80rem]:leading-[3.625rem]">
            {heading}
          </h2>

          {description ? (
            <p className="mx-auto mt-[1.25rem] max-w-[55rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.55] text-white min-[48rem]:text-[1rem] min-[80rem]:mt-[2rem] min-[80rem]:text-[1.125rem] min-[80rem]:leading-[1.6875rem]">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-[2.5rem] grid items-stretch overflow-hidden min-[48rem]:grid-cols-2 min-[80rem]:mt-[3rem] min-[80rem]:grid-cols-4 min-[80rem]:[grid-auto-rows:minmax(22.5625rem,auto)]">
          {services.map((service, index) => (
            <ServicePair
              key={`${service.title}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePair({ service, index }: { service: Service; index: number }) {
  const imageOrder =
    [
      "order-1 min-[80rem]:order-1",
      "order-1 min-[80rem]:order-3",
      "order-2 min-[80rem]:order-6",
      "order-2 min-[80rem]:order-8",
    ][index] || "order-1";

  const textOrder =
    [
      "order-2 min-[80rem]:order-2",
      "order-2 min-[80rem]:order-4",
      "order-1 min-[80rem]:order-5",
      "order-1 min-[80rem]:order-7",
    ][index] || "order-2";

  return (
    <div className="grid min-[80rem]:contents">
      <div
        className={`relative aspect-[390/361] overflow-hidden min-[80rem]:h-full min-[80rem]:min-h-[22.5625rem] min-[80rem]:aspect-auto ${imageOrder}`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 47.9375rem) calc(100vw - 2rem), (max-width: 79.9375rem) calc((100vw - 4rem) / 2), (max-width: 95.9375rem) calc((100vw - 6rem) / 4), 390px"
          className="object-cover"
        />
      </div>

      <article
        className={`flex aspect-[390/361] flex-col items-center justify-center overflow-hidden bg-[#161616] px-[1.25rem] py-[2rem] text-center text-white transition-colors duration-300 ease-out hover:bg-[#b34b0c] min-[80rem]:h-full min-[80rem]:min-h-[22.5625rem] min-[80rem]:aspect-auto ${textOrder}`}
      >
        <h3 className="w-full max-w-[20rem] font-['Outfit'] text-[1.0625rem] font-semibold leading-[1.35] text-white min-[48rem]:text-[1.125rem] min-[80rem]:text-[1.25rem] min-[80rem]:leading-[1.4]">
          {service.title}
        </h3>

        <p className="mt-[1.25rem] w-full max-w-[20rem] font-['DM_Sans'] text-[0.8125rem] font-normal leading-[1.55] text-white min-[48rem]:text-[0.875rem] min-[80rem]:text-[1rem] min-[80rem]:leading-[1.5]">
          {service.description}
        </p>
      </article>
    </div>
  );
}
