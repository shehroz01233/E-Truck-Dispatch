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
      <div className="mx-auto w-full max-w-[97.5rem]">
        <header className="mx-auto text-center">
          <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-tight min-[48rem]:text-[2.375rem] min-[80rem]:text-[3rem] min-[80rem]:leading-[3.625rem]">
            {heading}
          </h2>

          {description ? (
            <p className="mx-auto mt-[1.25rem] max-w-[55rem] font-['DM_Sans'] text-[0.75rem] leading-[1.5] text-white/90 min-[48rem]:text-[0.9375rem] min-[80rem]:mt-[2rem] min-[80rem]:text-[1.125rem] min-[80rem]:leading-[1.6875rem]">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-[2.5rem] grid overflow-hidden min-[48rem]:grid-cols-2 min-[80rem]:mt-[4.9375rem] min-[80rem]:grid-cols-4">
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
    <div className="grid grid-rows-2 min-[80rem]:contents">
      <div
        className={`relative aspect-[390/361] overflow-hidden ${imageOrder}`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 24.375rem"
          className="object-cover"
        />
      </div>

      <article
        className={`flex aspect-[390/361] min-h-[21rem] flex-col items-center justify-center overflow-hidden px-[1.5rem] py-[2rem] text-center min-[30rem]:px-[2rem] min-[48rem]:min-h-0 min-[48rem]:px-[2.5rem] min-[80rem]:px-[2.25rem] min-[96rem]:px-[3rem] ${
          service.accent ? "bg-[#b34b0c]" : "bg-[#161616]"
        } ${textOrder}`}
      >
        <h3 className="max-w-[13rem] font-['Outfit'] text-[1.0625rem] font-semibold leading-[1.2] text-white min-[48rem]:text-[1.125rem] min-[80rem]:text-[1.125rem] min-[96rem]:text-[1.25rem] min-[96rem]:leading-[1.45]">
          {service.title}
        </h3>

        <p className="mt-[0.75rem] max-w-[14rem] font-['DM_Sans'] text-[0.75rem] leading-[1.45] text-white min-[48rem]:text-[0.8125rem] min-[80rem]:text-[0.8125rem] min-[80rem]:leading-[1.45] min-[96rem]:text-[0.875rem] min-[96rem]:leading-[1.5]">
          {service.description}
        </p>
      </article>
    </div>
  );
}
