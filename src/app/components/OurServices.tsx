import Image from "next/image";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: boolean;
};

type OurServicesProps = {
  heading?: ReactNode;
  description?: string;
  services?: Service[];
};

const defaultServices: Service[] = [
  {
    title: "Trucking Accounting",
    description: "Revenue tracking, expense categorization, and financial reporting structured around each load cycle to maintain clear visibility into per-mile profitability and overall business performance.",
    image: "/Home/images/54_rectangle_1078.webp",
    imageAlt: "Worker loading freight into a truck",
  },
  {
    title: "MC/DOT Setup",
    description: "Motor Carrier authority registration, USDOT number application, BOC-3 process agent filing, and initial compliance documentation handled from start to activation.",
    image: "/Home/images/53_rectangle_1076.webp",
    imageAlt: "Logistics professional managing documents",
  },
  {
    title: "Truck Dispatching",
    description: "Load sourcing, rate negotiation, broker communication, appointment scheduling, and same-day invoice submission managed by a dedicated dispatcher aligned to your lanes, equipment type, and revenue targets.",
    image: "/Home/images/52_rectangle_1077.webp",
    imageAlt: "Warehouse worker reviewing freight information",
    accent: true,
  },
  {
    title: "Document Management",
    description: "Carrier packets, rate confirmations, BOL (Bill of Lading), POD (Proof of Delivery), insurance certificates, and compliance paperwork organized and maintained within a centralized workflow.",
    image: "/Home/images/51_rectangle_1074.webp",
    imageAlt: "Freight trucks traveling on a highway",
  },
];

export default function OurServices({
  heading = "Our Services",
  description = "E Truck Dispatching provides end-to-end operational support beyond load booking — covering financial management, regulatory setup, and documentation handling for owner-operators and small carriers.",
  services = defaultServices,
}: OurServicesProps) {
  return (
    <section className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 sm:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1560px]">
        <header className="mx-auto text-center">
          <h2 className="font-['Outfit'] text-[30px] font-bold leading-tight sm:text-[38px] xl:text-[48px] xl:leading-[58px]">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[880px] font-['DM_Sans'] text-[12px] leading-[1.5] text-white/90 sm:text-[15px] xl:mt-8 xl:text-[18px] xl:leading-[27px]">
            {description}
          </p>
        </header>

        <div className="mt-10 grid overflow-hidden sm:grid-cols-2 xl:mt-[79px] xl:grid-cols-4">
          {services.map((service, index) => (
            <ServicePair key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePair({ service, index }: { service: Service; index: number }) {
  const imageOrder = [
    "order-1 xl:order-1",
    "order-1 xl:order-3",
    "order-2 xl:order-6",
    "order-2 xl:order-8",
  ][index];
  const textOrder = [
    "order-2 xl:order-2",
    "order-2 xl:order-4",
    "order-1 xl:order-5",
    "order-1 xl:order-7",
  ][index];

  return (
    <div className="grid grid-rows-2 xl:contents">
      <div className={`relative aspect-[390/361] overflow-hidden ${imageOrder}`}>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 390px"
          className="object-cover"
        />
      </div>

      <article className={`flex aspect-[390/361] flex-col items-center justify-center px-8 py-8 text-center sm:px-12 xl:px-[75px] ${service.accent ? "bg-[#B34B0C]" : "bg-[#161616]"} ${textOrder}`}>
        <h3 className="font-['Outfit'] text-[17px] font-semibold leading-tight sm:text-[19px] xl:text-[22px] xl:leading-7">
          {service.title}
        </h3>
        <p className="mt-3 max-w-[240px] font-['DM_Sans'] text-[12px] leading-[1.5] text-white sm:text-[14px] xl:text-[16px] xl:leading-6">
          {service.description}
        </p>
      </article>
    </div>
  );
}
