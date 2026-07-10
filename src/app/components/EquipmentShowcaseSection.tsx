import Image from "next/image";

type EquipmentShowcaseSectionProps = {
  heading: string;
  names: string[];
  images: string[];
  descriptions: string[];
  imageHeights: number[];
  columns: number[][];
};

export default function EquipmentShowcaseSection({
  heading,
  names,
  images,
  descriptions,
  imageHeights,
  columns,
}: EquipmentShowcaseSectionProps) {
  return (
    <section className="pb-16 pt-16">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        <h2 className="mx-auto max-w-[456px] text-center font-['Outfit'] text-[34px] font-bold leading-[1.08] text-white sm:text-5xl">
          {heading}
        </h2>
        <div className="mt-20 grid gap-x-[11px] gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-[72px]">
              {column.map((equipmentIndex) => {
                const name = names[equipmentIndex];
                const reverse = columnIndex % 2 === 1;
                const image = (
                  <div
                    className="relative w-full"
                    style={{ height: imageHeights[equipmentIndex] }}
                  >
                    <Image
                      src={images[equipmentIndex]}
                      alt={`${name} dispatch`}
                      fill
                      sizes="(min-width: 1280px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                );
                const copy = (
                  <div className="px-12 py-6">
                    <h3 className="font-['Outfit'] text-xl font-semibold text-white">
                      {name} Dispatch
                    </h3>
                    <p className="mt-[26px] font-['DM_Sans'] text-base leading-5 text-white/80">
                      {descriptions[equipmentIndex]}
                    </p>
                    <div className="mt-7 inline-flex items-center gap-3 font-['DM_Sans'] text-sm font-medium text-[#b34b0c]">
                      <span>Explore More</span>
                      <span className="h-0.5 w-20 bg-[#b34b0c]" />
                    </div>
                  </div>
                );
                return (
                  <article key={name}>
                    {reverse ? (
                      <>
                        {copy}
                        {image}
                      </>
                    ) : (
                      <>
                        {image}
                        {copy}
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}