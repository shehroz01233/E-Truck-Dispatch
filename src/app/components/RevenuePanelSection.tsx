import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  groups: [string, string[]][];
  image: string;
  backgroundImage: string;
};

const desktopCardPositions = [
  "left-[3.125rem] top-[16.625rem] h-[20rem] w-[18rem]",
  "left-[23.125rem] top-[18.5rem] h-[20rem] w-[18rem]",
  "left-[43.125rem] top-[20.375rem] h-[18rem] w-[18rem]",
];

export default function RevenuePanelSection({
  heading,
  description,
  groups,
  image,
  backgroundImage,
}: Props) {
  return (
    <section className="mx-auto w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] text-white sm:w-[calc(100%-4rem)] md:relative md:h-[calc(41.25rem*var(--rp))] md:[--rp:min(calc((100vw-4rem)/97.5rem),1)]">
      {/* laptop / desktop scaled layout */}
      <div className="relative hidden h-[41.25rem] w-[97.5rem] origin-top-left scale-[var(--rp)] md:block">
        {/* svg background image */}
        <div className="absolute left-[50.875rem] top-[3.75rem] z-[1] h-[33.6875rem] w-[46.652rem]">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="46.652rem"
            className="object-contain object-right-top"
            unoptimized
          />
        </div>

        {/* truck image */}
        <div className="absolute left-[61.875rem] top-[10.625rem] z-[2] h-[23.125rem] w-[46.75rem]">
          <Image
            src={image}
            alt="Dispatch revenue planning"
            fill
            sizes="46.75rem"
            className="object-contain object-left-bottom"
          />
        </div>

        <h2 className="absolute left-[3.125rem] top-[3.125rem] z-[3] w-[56.4375rem] text-[3rem] font-bold leading-[1.02] tracking-[-0.02em]">
          {heading}
        </h2>

        <p className="absolute left-[3.125rem] top-[12.5rem] z-[3] w-[49.0625rem] text-[1.125rem] leading-[1.55] text-white/85">
          {description}
        </p>

        {groups.map(([title, items], index) => (
          <article
            key={title}
            className={`absolute z-[4] border-[0.0625rem] border-neutral-700 bg-[#171717] px-[1.5625rem] py-[1.75rem] ${
              desktopCardPositions[index] ?? ""
            }`}
          >
            <h3 className="text-[1.25rem] font-semibold leading-[1.25]">
              {title}
            </h3>

            <ul className="mt-[1.75rem] space-y-[1rem]">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80"
                >
                  <span className="mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* mobile stacked layout */}
      <div className="px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] md:hidden">
        <h2 className="text-[2.125rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]">
          {heading}
        </h2>

        <p className="mt-[1.75rem] max-w-[49rem] text-[1rem] leading-[1.55] text-white/85 sm:text-[1.125rem]">
          {description}
        </p>

        <div className="mt-[2.5rem] grid gap-[1.25rem]">
          {groups.map(([title, items]) => (
            <article
              key={title}
              className="border-[0.0625rem] border-neutral-700 bg-[#171717] p-[1.5rem]"
            >
              <h3 className="text-[1.25rem] font-semibold leading-[1.3]">
                {title}
              </h3>

              <ul className="mt-[1.5rem] space-y-[0.875rem]">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80"
                  >
                    <span className="mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="relative mt-[2.5rem] h-[18rem] w-full">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-contain object-right-bottom"
            unoptimized
          />

          <Image
            src={image}
            alt="Dispatch revenue planning"
            fill
            sizes="100vw"
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}