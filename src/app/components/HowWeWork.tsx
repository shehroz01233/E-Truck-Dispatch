import Image from "next/image";
import type { ReactNode } from "react";

type WorkflowStep = {
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
  const hasDetailedSteps = steps.some(
    (step) => step.includes?.length || step.footer,
  );

  return (
    <section className="relative overflow-hidden bg-[#161616] px-4 pb-14 pt-20 text-white sm:px-8 xl:px-[9.375vw] xl:pb-[clamp(2.5rem,3.125vw,3.75rem)] xl:pt-[clamp(5rem,7.03vw,8.4375rem)]">
      <TopWave />

      <div className="relative z-10 mx-auto grid w-full max-w-[97.5rem] items-start gap-10 xl:grid-cols-[minmax(0,800fr)_minmax(0,729fr)] xl:gap-[clamp(1.125rem,1.615vw,1.9375rem)]">
        <div className="relative min-h-[20rem] sm:min-h-[26.875rem] xl:-mt-[clamp(3rem,4.17vw,5rem)] xl:aspect-[800/742] xl:min-h-0">
          <div className="absolute left-0 top-0 h-[72.64%] w-[93.375%] xl:-left-[9.375vw]">
            <Image
              src="/Vector 1.svg"
              alt=""
              fill
              sizes="(max-width: 79.9375rem) 93vw, 38.90625vw"
              className="object-fill"
              unoptimized
            />
          </div>

          <div className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 79.9375rem) 100vw, 42vw"
              className="object-contain object-left-bottom"
              priority
            />
          </div>
        </div>

        <div className="relative">
          <h2 className="font-sans text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.375rem] xl:text-[clamp(2.125rem,2.5vw,3rem)]">
            {heading}
          </h2>

          <div className={`mt-10 space-y-[clamp(0.75rem,1.04vw,1.25rem)] pr-[9.5%] xl:mt-[clamp(2.375rem,2.86vw,3.4375rem)] ${hasDetailedSteps ? "max-h-[28rem] overflow-y-auto [scrollbar-color:#B34B0C_#3F3F3F] [scrollbar-width:thin]" : ""}`}>
            {steps.map((step, index) => (
              <WorkflowCard
                key={`${step.title}-${index}`}
                step={step}
                index={index}
                detailed={hasDetailedSteps}
              />
            ))}
          </div>

          {!hasDetailedSteps ? (
            <div className="absolute right-0 top-[22%] h-[71.2%] w-[clamp(0.25rem,0.47vw,0.5625rem)] bg-[#3F3F3F]">
              <div className="h-[48.8%] w-[55%] bg-[#B34B0C]" />
            </div>
          ) : null}
        </div>
      </div>

      <BottomWave />
    </section>
  );
}

function WorkflowCard({
  step,
  index,
  detailed,
}: {
  step: WorkflowStep;
  index: number;
  detailed: boolean;
}) {
  return (
    <article className={`grid min-h-[7.5rem] grid-cols-[4rem_1fr] border border-[#3F3F3F] bg-[#1C1C1C] p-3 min-[23.4375rem]:grid-cols-[5.625rem_1fr] sm:grid-cols-[6.875rem_1fr] xl:grid-cols-[16.67%_1fr] xl:p-[3%] ${detailed ? "" : "xl:aspect-[660/151] xl:min-h-0"}`}>
      <div className="flex aspect-square items-center justify-center bg-[#B34B0C]/10">
        <span className="font-sans text-[clamp(2.625rem,4.11vw,4.9375rem)] font-bold leading-none text-[#B34B0C]">
          {step.number ?? index + 1}
        </span>
      </div>

      <div className="flex min-w-0 flex-col justify-center pl-[3%]">
        <h3 className="font-sans text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-tight text-[#B34B0C]">
          {step.title}
        </h3>

        <p className="mt-[2%] max-w-[31.0625rem] font-sans text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.4] text-white/90">
          {step.description}
        </p>

        {step.includes?.length ? (
          <>
            <h4 className="mt-3 font-sans text-[clamp(0.6875rem,0.73vw,0.875rem)] font-semibold text-white">
              The application includes:
            </h4>
            <ul className="mt-2 space-y-1">
              {step.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-[clamp(0.5625rem,0.63vw,0.75rem)] leading-[1.35] text-white/80">
                  <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-[#B34B0C]" />
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {step.footer ? (
          <p className="mt-3 max-w-[31.0625rem] font-sans text-[clamp(0.5625rem,0.63vw,0.75rem)] leading-[1.4] text-white/80">
            {step.footer}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function TopWave() {
  return (
    <svg
      className="absolute left-0 top-0 h-[1.75rem] w-full xl:h-[4.375rem]"
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
      className="absolute bottom-0 left-0 h-[3rem] w-full"
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