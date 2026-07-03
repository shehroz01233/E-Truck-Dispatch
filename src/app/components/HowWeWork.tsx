import Image from "next/image";
import type { ReactNode } from "react";

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

type HowWeWorkProps = {
  heading?: ReactNode;
  image?: string;
  imageAlt?: string;
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
  steps = defaultSteps,
}: HowWeWorkProps) {
  return (
    <section className="relative overflow-hidden bg-[#161616] px-4 pb-14 pt-20 text-white sm:px-8 xl:px-[9.375vw] xl:pb-[clamp(40px,3.125vw,60px)] xl:pt-[clamp(80px,7.03vw,135px)]">
      <TopWave />

      <div className="relative z-10 mx-auto grid w-full max-w-[1560px] items-start gap-10 xl:grid-cols-[minmax(0,800fr)_minmax(0,729fr)] xl:gap-[clamp(18px,1.615vw,31px)]">
        <div className="relative min-h-[430px] xl:-mt-[clamp(48px,4.17vw,80px)] xl:aspect-[800/742] xl:min-h-0">
          <div className="absolute left-0 top-0 h-[72%] w-[72%] rounded-tl-[80px] bg-gradient-to-b from-[#B34B0C] to-[#B34B0C]/10 [clip-path:polygon(12%_0,100%_0,82%_22%,72%_100%,0_100%,0_38%)]" />

          <div className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1279px) 100vw, 42vw"
              className="object-contain object-left-bottom"
              priority
            />
          </div>
        </div>

        <div className="relative">
          <h2 className="font-sans text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[38px] xl:text-[clamp(34px,2.5vw,48px)]">
            {heading}
          </h2>

          <div className="mt-10 space-y-[clamp(12px,1.04vw,20px)] pr-[9.5%] xl:mt-[clamp(38px,2.86vw,55px)]">
            {steps.map((step) => (
              <WorkflowCard key={step.number} step={step} />
            ))}
          </div>

          <div className="absolute right-0 top-[22%] h-[71.2%] w-[clamp(4px,0.47vw,9px)] bg-[#3F3F3F]">
            <div className="h-[48.8%] w-[55%] bg-[#B34B0C]" />
          </div>
        </div>
      </div>

      <BottomWave />
    </section>
  );
}

function WorkflowCard({ step }: { step: WorkflowStep }) {
  return (
    <article className="grid min-h-[120px] grid-cols-[90px_1fr] border border-[#3F3F3F] bg-[#1C1C1C] p-3 sm:grid-cols-[110px_1fr] xl:aspect-[660/151] xl:min-h-0 xl:grid-cols-[16.67%_1fr] xl:p-[3%]">
      <div className="flex aspect-square items-center justify-center bg-[#B34B0C]/10">
        <span className="font-sans text-[clamp(42px,4.11vw,79px)] font-bold leading-none text-[#B34B0C]">
          {step.number}
        </span>
      </div>

      <div className="flex min-w-0 flex-col justify-center pl-[3%]">
        <h3 className="font-sans text-[clamp(14px,1.15vw,22px)] font-semibold leading-tight text-[#B34B0C]">
          {step.title}
        </h3>

        <p className="mt-[2%] max-w-[497px] font-sans text-[clamp(10px,0.84vw,16px)] leading-[1.4] text-white/90">
          {step.description}
        </p>
      </div>
    </article>
  );
}

function TopWave() {
  return (
    <svg
      className="absolute left-0 top-0 h-[28px] w-full xl:h-[70px]"
      viewBox="0 0 1440 28"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 14C78 3 113 24 184 13C267 0 330 28 414 15C491 3 551 20 632 12C725 2 779 26 872 14C964 2 1041 25 1131 12C1231 -3 1324 24 1440 9"
        stroke="#B34B0C"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
    </svg>
  );
}

function BottomWave() {
  return (
    <svg
      className="absolute bottom-0 left-0 h-[48px] w-full"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 23C90 45 174 9 270 28C375 49 475 17 595 29C715 41 801 13 925 27C1051 42 1167 17 1275 25C1350 31 1400 20 1440 18V48H0V23Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
