import Image from "next/image";

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-[0.75rem]">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 gap-[0.75rem] text-[0.875rem] leading-[1.5rem] text-white/75"
        >
          <span className="mt-[0.5rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

type Props = {
  heading: string;
  intro: string;
  image: string;
  industries: string[];
  compliance: string[];
};

export default function SupportColumnsSection({
  heading,
  intro,
  image,
  industries,
  compliance,
}: Props) {
  return (
    <section className="mx-auto grid w-[calc(100%-1.5rem)] max-w-[97.5rem] grid-cols-1 gap-[1rem] py-[3rem] text-white sm:w-[calc(100%-2rem)] sm:gap-[1.25rem] sm:py-[4rem] md:grid-cols-2 lg:w-[calc(100%-4rem)] min-[75rem]:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)_minmax(0,1fr)] min-[75rem]:py-[5rem] 2xl:grid-cols-[37.5rem_28.75rem_28.75rem]">
      <div className="min-w-0 md:col-span-2 min-[75rem]:col-span-1">
        <h2 className="max-w-[42rem] text-[2rem] font-bold leading-[1.12] sm:text-[2.5rem] lg:text-[3rem] min-[75rem]:max-w-none">
          {heading}
        </h2>

        <p className="mt-[1.25rem] max-w-[38rem] text-[1rem] leading-[1.625rem] text-white/70 sm:mt-[1.75rem] sm:text-[1.125rem] sm:leading-[1.75rem] min-[75rem]:max-w-[32rem]">
          {intro}
        </p>

        <div className="relative mt-[2rem] overflow-hidden bg-[#111111] min-[75rem]:mt-[2.5rem] min-[75rem]:h-[18rem]">
          <Image
            src={image}
            alt="Freight industry operations"
            width={1200}
            height={675}
            sizes="(min-width: 1536px) 37.5rem, (min-width: 1200px) 40vw, (min-width: 1024px) calc(100vw - 4rem), (min-width: 768px) calc(100vw - 2rem), calc(100vw - 1.5rem)"
            className="h-auto w-full object-contain min-[75rem]:h-full min-[75rem]:object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/20 to-[#b34b0c]/10" />
        </div>
      </div>

      <article className="min-w-0 bg-[#171717] p-[1.25rem] sm:p-[1.5rem] min-[75rem]:min-h-[36.75rem]">
        <h3 className="break-words text-[1.125rem] font-semibold leading-[1.625rem] sm:text-[1.25rem] sm:leading-[1.75rem]">
          Industries We Support
        </h3>

        <p className="my-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:my-[1.75rem] sm:text-[1rem]">
          We help carriers move freight across multiple industries:
        </p>

        <List items={industries} />

        <p className="mt-[1.5rem] text-[0.9375rem] leading-[1.5rem] text-white/70 sm:mt-[2rem] sm:text-[1rem]">
          We support freight movement across retail, food and beverage,
          automotive, construction, manufacturing, medical, agricultural,
          industrial, and temperature-controlled transportation operations.
        </p>
      </article>

      <article className="min-w-0 bg-[#171717] p-[1.25rem] sm:p-[1.5rem] min-[75rem]:min-h-[36.75rem]">
        <h3 className="break-words text-[1.125rem] font-semibold leading-[1.625rem] sm:text-[1.25rem] sm:leading-[1.75rem]">
          Compliance and Operational Support
        </h3>

        <p className="my-[1.25rem] text-[0.9375rem] leading-[1.5rem] text-white/75 sm:my-[1.75rem] sm:text-[1rem]">
          Our dispatch operations support carrier compliance through:
        </p>

        <List items={compliance} />

        <p className="mt-[1.5rem] text-[0.9375rem] leading-[1.5rem] text-white/70 sm:mt-[2rem] sm:text-[1rem]">
          We provide dispatch coordination, scheduling management, route
          planning, driver communication, documentation support, detention
          tracking, and load verification to improve operational accuracy and
          freight efficiency.
        </p>
      </article>
    </section>
  );
}
