import Image from "next/image";

export type ComplianceDocumentItem = {
  label: string;
  icon: string;
  iconAlt?: string;
};

type Props = {
  heading: string;
  description?: string;
  items: ComplianceDocumentItem[];
  image: string;
  imageAlt?: string;
  className?: string;
};

export default function ComplianceDocumentsSection({
  heading,
  description,
  items,
  image,
  imageAlt = "Trucking compliance and regulatory documents",
  className = "",
}: Props) {
  const splitIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, splitIndex);
  const rightItems = items.slice(splitIndex);

  return (
    <section
      className={`mx-auto my-12 w-[calc(100%-2rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] text-white sm:w-[calc(100%-3rem)] md:relative md:h-[calc(27rem*var(--cds))] md:w-[calc(100%-4rem)] md:[--cds:min(calc((100vw-4rem)/97.5rem),1)] ${className}`}
    >
      {/* Tablet and desktop scaled layout */}
      <div className="relative hidden h-[27rem] w-[97.5rem] origin-top-left scale-[var(--cds)] md:block">
        {/* Left image */}
        <div className="absolute left-0 top-0 h-full w-[50.5rem]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="50.5rem"
            className="object-cover"
          />
        </div>

        {/* Right content */}
        <div className="absolute left-[53.5625rem] top-[1.25rem] h-[25.75rem] w-[43.9375rem]">
          <h2 className="absolute left-0 top-0 w-[43.9375rem] text-[3rem] font-bold leading-[1.02] tracking-[-0.02em]">
            {heading}
          </h2>

          {description ? (
            <p className="absolute left-0 top-[9.375rem] w-[40.5625rem] text-[1.125rem] font-medium leading-[1.45] text-white/90">
              {description}
            </p>
          ) : null}

          <div className="absolute left-0 top-[14.125rem] grid w-full grid-cols-[20.1875rem_1fr]">
            <DocumentColumn items={leftItems} desktop />
            <DocumentColumn items={rightItems} desktop />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="relative aspect-[808/384] w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="px-[1.5rem] pb-[2.75rem] pt-[2rem] sm:px-[2rem] sm:pb-[3rem] sm:pt-[2.5rem]">
          <h2 className="max-w-[43rem] text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[2.5rem]">
            {heading}
          </h2>

          {description ? (
            <p className="mt-[1.25rem] max-w-[40rem] text-[0.9375rem] font-medium leading-[1.55] text-white/85 sm:text-[1rem]">
              {description}
            </p>
          ) : null}

          <div className="mt-[2rem] grid gap-[1.25rem] sm:grid-cols-2 sm:gap-x-[2rem]">
            {items.map((item) => (
              <DocumentItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentColumn({
  items,
  desktop = false,
}: {
  items: ComplianceDocumentItem[];
  desktop?: boolean;
}) {
  return (
    <div className={desktop ? "space-y-[1.25rem]" : "space-y-[1rem]"}>
      {items.map((item) => (
        <DocumentItem key={item.label} item={item} desktop={desktop} />
      ))}
    </div>
  );
}

function DocumentItem({
  item,
  desktop = false,
}: {
  item: ComplianceDocumentItem;
  desktop?: boolean;
}) {
  return (
    <div
      className={
        desktop
          ? "flex h-[2.625rem] items-center gap-[0.625rem]"
          : "flex min-w-0 items-center gap-[0.75rem]"
      }
    >
      <div
        className={
          desktop
            ? "relative size-[2.625rem] shrink-0"
            : "relative size-[2.625rem] shrink-0"
        }
      >
        <Image
          src={item.icon}
          alt={item.iconAlt ?? ""}
          fill
          sizes="2.625rem"
          className="object-contain"
        />
      </div>

      <span
        className={
          desktop
            ? "text-[1rem] font-normal leading-[1.3] text-white"
            : "text-[0.9375rem] font-normal leading-[1.4] text-white/90"
        }
      >
        {item.label}
      </span>
    </div>
  );
}