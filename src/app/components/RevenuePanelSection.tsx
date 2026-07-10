import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  groups: RevenueGroup[];
  image: string;
  backgroundImage: string;
};

export type RevenueGroup = {
  title: string;
  intro: string[];
  items?: string[];
  footer?: string;
};

const desktopCardPositions = [
  "left-[3.125rem] top-[10.625rem] h-[27.375rem] w-[18.75rem]",
  "left-[23.125rem] top-[12.4375rem] h-[25.625rem] w-[18.75rem]",
  "left-[43.125rem] top-[14.5625rem] h-[23.75rem] w-[18.75rem]",
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

        {description ? (
          <p className="absolute left-[3.125rem] top-[8.75rem] z-[3] w-[49.0625rem] text-[1.125rem] leading-[1.55] text-white/85">
            {description}
          </p>
        ) : null}

        {groups.map((group, index) => (
          <article
            key={group.title}
            className={`absolute z-[4] overflow-hidden border-[0.0625rem] border-neutral-700 bg-[#171717] px-[1.25rem] pb-[1.5rem] pt-[1.875rem] ${
              desktopCardPositions[index] ?? ""
            }`}
          >
            <RevenueCardContent group={group} desktop />
          </article>
        ))}
      </div>

      {/* mobile stacked layout */}
      <div className="px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] md:hidden">
        <h2 className="text-[2.125rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]">
          {heading}
        </h2>

        {description ? (
          <p className="mt-[1.75rem] max-w-[49rem] text-[1rem] leading-[1.55] text-white/85 sm:text-[1.125rem]">
            {description}
          </p>
        ) : null}

        <div className="mt-[2.5rem] grid gap-[1.25rem]">
          {groups.map((group) => (
            <article
              key={group.title}
              className="border-[0.0625rem] border-neutral-700 bg-[#171717] p-[1.5rem]"
            >
              <RevenueCardContent group={group} />
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

function RevenueCardContent({
  group,
  desktop = false,
}: {
  group: RevenueGroup;
  desktop?: boolean;
}) {
  return (
    <>
      <h3
        className={
          desktop
            ? "text-[1.375rem] font-semibold leading-[1.15]"
            : "text-[1.25rem] font-semibold leading-[1.3]"
        }
      >
        {group.title}
      </h3>

      <div
        className={
          desktop
            ? "mt-[1.25rem] space-y-[0.5rem] text-[1rem] leading-[1.25] text-white/80"
            : "mt-[1.25rem] space-y-[0.5rem] text-[0.875rem] leading-[1.45] text-white/80"
        }
      >
        {group.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {group.items?.length ? (
        <ul
          className={
            desktop
              ? "mt-[0.875rem] space-y-[0.625rem]"
              : "mt-[1rem] space-y-[0.75rem]"
          }
        >
          {group.items.map((item) => (
            <li
              key={item}
              className={
                desktop
                  ? "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.3] text-white/80"
                  : "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80"
              }
            >
              <span
                className={
                  desktop
                    ? "mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
                    : "mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
                }
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {group.footer ? (
        <p
          className={
            desktop
              ? "mt-[1.25rem] text-[1rem] leading-[1.25] text-white/80"
              : "mt-[1rem] text-[0.875rem] leading-[1.45] text-white/80"
          }
        >
          {group.footer}
        </p>
      ) : null}
    </>
  );
}