import Image from "next/image";
import type { ReactNode } from "react";

export type WorkflowStep = {
  number?: string;
  title: string;
  description: string;
  includes?: string[];
  footer?: string;
};

type HowWeWorkProps = {
  heading?: ReactNode;
  image?: string;
  imageAlt?: string;
  orangeShape?: string;
  steps?: WorkflowStep[];
};

const defaultSteps: WorkflowStep[] = [
  {
    number: "1",
    title: "Onboarding and Dispatch Setup",
    description:
      "Your operating parameters are defined upfront — preferred lanes, home time schedule, equipment type, weight limits, and minimum rate per mile. These act as filters for every load sourced.",
  },
  {
    number: "2",
    title: "Dedicated Dispatcher Assignment",
    description:
      "A dispatcher is assigned with full context of your lanes, broker history, and rate expectations, creating continuity from day one.",
  },
  {
    number: "3",
    title: "Load Evaluation and Rate Negotiation",
    description:
      "Each load is assessed against real-time market data from platforms like DAT Solutions. Only freight meeting your approved rate floor and operational criteria is presented.",
  },
  {
    number: "4",
    title: "Broker Confirmation and Dispatch",
    description:
      "Approved loads are confirmed with broker details, pickup instructions, appointment windows, commodity information, and driver communication prepared before dispatch.",
  },
  {
    number: "5",
    title: "Active Load Tracking",
    description:
      "Shipment progress is monitored from pickup to delivery with check calls, route updates, delay communication, and broker coordination handled throughout the trip.",
  },
  {
    number: "6",
    title: "Paperwork and Payment Follow-Up",
    description:
      "Rate confirmations, BOLs, PODs, invoices, and supporting documents are organized after delivery so billing and payment follow-up stay consistent.",
  },
];

export default function HowWeWork({
  heading = (
    <>
      How We Work
      <br />
      Our Dispatch Workflow
    </>
  ),
  image = "/Home/images/55_vector_5.webp",
  imageAlt = "Dispatcher handling freight boxes",
  orangeShape = "/Vector 1.svg",
  steps = defaultSteps,
}: HowWeWorkProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#161616] text-white">
      <TopWave />

      <div className="relative z-10 mx-auto grid min-h-[408px] w-full max-w-[1920px] grid-cols-1 items-center lg:grid-cols-[50.7%_49.3%]">
        {/* Left visual */}
        <div className="relative h-[350px] sm:h-[430px] lg:h-[408px]">
          {/* Orange background shape */}
          <div className="absolute bottom-[27%] left-0 top-[13.2%] w-[78%] sm:w-[70%] lg:w-[77.5%]">
            <Image
              src={orangeShape}
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 1023px) 78vw, 40vw"
              className="object-fill object-left"
            />
          </div>

          {/* Worker and boxes */}
          <div className="absolute bottom-[8%] left-[5%] top-[14%] w-[87%] sm:left-[10%] sm:w-[75%] lg:left-[8.5%] lg:w-[81%]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 43vw"
              className="object-contain object-left-bottom"
            />
          </div>
        </div>

        {/* Right workflow content */}
        <div className="relative px-5 pb-20 pt-8 sm:px-10 lg:self-stretch lg:px-0 lg:pb-[37px] lg:pl-[2.4%] lg:pr-[9.3%] lg:pt-[79px]">
          <h2 className="max-w-[360px] font-sans text-[28px] font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[22px] xl:text-[30px]">
            {heading}
          </h2>

          <div className="relative mt-[22px] lg:mt-[20px]">
            <div className="workflow-scrollbar max-h-[235px] space-y-[8px] overflow-y-auto pr-[30px] sm:max-h-[300px] lg:max-h-[235px] lg:pr-[28px] xl:max-h-[260px]">
              {steps.map((step, index) => (
                <WorkflowCard
                  key={`${step.title}-${index}`}
                  step={step}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomWave />

      <style>{`
        .workflow-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #b34b0c #3e3e3e;
        }

        .workflow-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .workflow-scrollbar::-webkit-scrollbar-track {
          background: #3e3e3e;
        }

        .workflow-scrollbar::-webkit-scrollbar-thumb {
          background: #b34b0c;
          border-radius: 0;
        }

        .workflow-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c85a15;
        }
      `}</style>
    </section>
  );
}

function WorkflowCard({
  step,
  index,
}: {
  step: WorkflowStep;
  index: number;
}) {
  return (
    <article className="flex min-h-[68px] w-full items-stretch border border-[#242424] bg-[#1c1c1c] p-[9px] sm:min-h-[90px] sm:p-3 lg:min-h-[68px] lg:p-[9px] xl:min-h-[86px] xl:p-3">
      {/* Number */}
      <div className="flex w-[52px] shrink-0 items-center justify-center bg-[#2a201a] sm:w-[72px] lg:w-[51px] xl:w-[68px]">
        <span className="font-sans text-[38px] font-bold leading-none text-[#b34b0c] sm:text-[50px] lg:text-[38px] xl:text-[50px]">
          {step.number ?? index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center pl-[8px] sm:pl-4 lg:pl-[8px] xl:pl-4">
        <h3 className="font-sans text-[11px] font-semibold leading-[1.2] text-[#d45a0d] sm:text-[15px] lg:text-[10px] xl:text-[14px]">
          {step.title}
        </h3>

        <p className="mt-[6px] max-w-[510px] font-sans text-[8px] leading-[1.28] text-white/90 sm:text-[11px] lg:mt-[5px] lg:text-[7px] xl:text-[10px]">
          {step.description}
        </p>

        {step.includes?.length ? (
          <div className="mt-3">
            <h4 className="text-[11px] font-semibold text-white">
              The application includes:
            </h4>

            <ul className="mt-2 space-y-1">
              {step.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[10px] leading-[1.4] text-white/75"
                >
                  <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b34b0c]" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step.footer ? (
          <p className="mt-3 text-[10px] leading-[1.4] text-white/75">
            {step.footer}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function TopWave() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-20 h-[34px] w-full overflow-hidden"
    >
      <div className="absolute -top-[3px] left-0 h-[37px] w-full">
        <Image
          src="/Home/images/Upperborder.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-fill"
          unoptimized
        />
      </div>
    </div>
  );
}

function BottomWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 860 40"
      preserveAspectRatio="none"
      className="pointer-events-none absolute bottom-0 left-0 z-30 h-[40px] w-full"
      fill="none"
    >
      <path
        d="M0 17
        C23 15 44 6 64 9
        C86 12 96 22 119 22
        C143 22 162 15 184 18
        C209 22 228 31 254 29
        C278 27 299 22 324 23
        C348 25 365 31 391 30
        C415 29 433 22 458 24
        C485 27 499 35 527 33
        C553 31 570 23 597 24
        C622 26 644 34 671 32
        C696 30 714 23 740 24
        C766 25 783 31 809 29
        C832 27 846 22 860 21
        V40
        H0
        Z"
        fill="#1c1c1c"
      />
    </svg>
  );
}
