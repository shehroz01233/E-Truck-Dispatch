import Link from "next/link";

type Stat = {
  value: string;
  title: string;
  text: string;
};

type QuestionStatsProps = {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  {
    value: "300+",
    title: "Active Trucks",
    text: "Trucks we dispatch",
  },
  {
    value: "60+",
    title: "Team Members",
    text: "Experienced dispatchers",
  },
  {
    value: "150+",
    title: "MC Clients",
    text: "Actively working with us.",
  },
];

export default function QuestionStats({
  heading = "Still Have Questions?",
  description = "Our billing experts are here to help. Get in touch for a free consultation.",
  buttonText = "Talk to an Expert",
  buttonHref = "/contact",
  stats = defaultStats,
}: QuestionStatsProps) {
  return (
    <section className="bg-[#1C1C1C] px-4 py-16 text-white sm:px-6 lg:py-20">
      <div className="relative mx-auto h-[320px] w-full max-w-[1560px]">
        <div className="absolute left-0 right-0 top-[82px] h-[256px] bg-[#111111]" />

        <div className="absolute left-[100px] top-0 z-10 flex h-[320px] w-[384px] flex-col justify-center bg-[#B34B0C] px-[44px]">
          <h2 className="max-w-[300px] font-['Outfit'] text-[42px] font-semibold leading-[1.15] text-white">
            {heading}
          </h2>

          <p className="mt-8 max-w-[300px] font-['DM_Sans'] text-[16px] font-normal leading-[24px] text-white">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="mt-8 inline-flex h-[44px] w-fit items-center justify-center bg-[#111111] px-5 font-['Outfit'] text-[14px] font-medium text-white"
          >
            {buttonText}
          </Link>
        </div>

        <div className="absolute left-[585px] right-[80px] top-[145px] z-10 grid grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`px-[58px] ${
                index !== stats.length - 1
                  ? "border-r border-[#333333]"
                  : ""
              }`}
            >
              <h3 className="font-['Outfit'] text-[48px] font-bold leading-none text-white">
                {stat.value}
              </h3>

              <p className="mt-5 font-['DM_Sans'] text-[20px] font-bold leading-tight text-white">
                {stat.title}
              </p>

              <p className="mt-5 font-['DM_Sans'] text-[16px] font-normal leading-tight text-white">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}