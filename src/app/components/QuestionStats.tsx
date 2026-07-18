import Link from "next/link";

export type Stat = {
  value: string;
  title: string;
  text: string;
};

export type QuestionStatsProps = {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  stats: Stat[];
};

export default function QuestionStats({
  heading,
  description,
  buttonText,
  buttonHref,
  stats,
}: QuestionStatsProps) {
  return (
    <section className="bg-[#1c1c1c] px-[1rem] pb-[2.75rem] pt-[3.75rem] text-white min-[30rem]:px-[1.5rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:pb-[3.25rem]">
      <div className="mx-auto flex w-full max-w-[97.5rem] flex-col bg-[#111111] min-[64rem]:flex-row min-[64rem]:items-stretch min-[80rem]:h-[11.875rem] min-[80rem]:items-center min-[80rem]:pl-[4.375rem]">
        <div className="flex min-h-[14rem] w-full flex-col justify-center bg-[#b34b0c] px-[1.5rem] py-[2rem] min-[30rem]:min-h-[15.5rem] min-[30rem]:px-[1.875rem] min-[64rem]:w-[19rem] min-[80rem]:-mt-[3.75rem] min-[80rem]:h-[15.5rem] min-[80rem]:shrink-0 min-[80rem]:py-0">
          <h2 className="max-w-[12.5rem] font-['Outfit'] text-[1.625rem] font-semibold leading-[1.12] text-white min-[30rem]:text-[1.875rem]">
            {heading}
          </h2>

          <p className="mt-[1.25rem] max-w-[13.75rem] font-['DM_Sans'] text-[0.75rem] leading-[1.45] text-white/95 min-[30rem]:mt-[1.625rem]">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="mt-[1.125rem] inline-flex h-[2rem] w-fit items-center justify-center bg-[#111111] px-[0.875rem] font-['Outfit'] text-[0.75rem] font-medium text-white"
          >
            {buttonText}
          </Link>
        </div>

        <div className="grid w-full bg-[#111111] px-[1.5rem] py-[2rem] min-[48rem]:grid-cols-3 min-[48rem]:items-center min-[64rem]:px-[1.75rem] min-[80rem]:ml-[4.5rem] min-[80rem]:h-full min-[80rem]:flex-1 min-[80rem]:px-0 min-[80rem]:py-0">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`flex w-full flex-col justify-center py-[1.35rem] first:pt-0 last:pb-0 min-[48rem]:py-0 min-[80rem]:h-full min-[80rem]:items-center ${
                index !== stats.length - 1
                  ? "border-b border-[#2b2b2b] min-[48rem]:border-b-0 min-[48rem]:border-r"
                  : ""
              }`}
            >
              <div className="w-full min-[80rem]:w-[8.875rem]">
                <strong className="block font-['Outfit'] text-[1.75rem] font-bold leading-none text-white min-[30rem]:text-[2rem]">
                  {stat.value}
                </strong>

                <h3 className="mt-[0.875rem] font-['DM_Sans'] text-[0.8125rem] font-bold leading-[1.15] text-white">
                  {stat.title}
                </h3>

                <p className="mt-[0.75rem] font-['DM_Sans'] text-[0.75rem] leading-[1.2] text-white/90">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
