import Image from "next/image";

const images = {
  meeting: "/Home/images/48_who_we_are.webp",
  presentation: "/Home/images/50_who_we_are.webp",
  team: "/Home/images/49_who_we_are.webp",
};

export default function WhoWeAre() {
  return (
    <section className="bg-[#151515] px-3 py-7 text-white min-[360px]:px-4 min-[360px]:py-8 sm:px-8 sm:py-10 lg:py-[46px]">
      <div className="mx-auto grid w-full max-w-[1028px] overflow-hidden bg-[#1b1b1b] min-[900px]:grid-cols-[1fr_1.06fr]">
        <div className="grid aspect-[1.18] grid-rows-[1.52fr_1fr] min-[480px]:aspect-[1.4] sm:aspect-[1.55] min-[900px]:aspect-auto min-[900px]:min-h-0">
          <div className="relative overflow-hidden">
            <Image
              src={images.meeting}
              alt="E Truck Dispatching team collaborating around a table"
              fill
              sizes="(max-width: 899px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="relative overflow-hidden">
              <Image
                src={images.presentation}
                alt="Dispatching team attending a presentation"
                fill
                sizes="(max-width: 899px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={images.team}
                alt="Members of the E Truck Dispatching team"
                fill
                sizes="(max-width: 899px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-7 min-[360px]:px-6 min-[360px]:py-8 sm:px-10 sm:py-10 min-[900px]:min-h-[390px] min-[900px]:px-8 min-[900px]:py-8 lg:min-h-[418px] lg:px-[42px]">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] sm:text-[29px] lg:text-[31px]">
            Who We Are
          </h2>

          <div className="mt-5 max-w-[470px] space-y-4 text-[12px] leading-[1.45] text-[#f0f0f0] sm:mt-6 md:leading-[1.38] lg:text-[12.5px] lg:leading-[1.32]">
            <p>
              E Truck Dispatching is a dedicated freight dispatch company built for owner-operators and small trucking companies operating across the continental United States. Our dispatchers carry hands-on experience in freight brokerage, carrier-side operations, and Federal Motor Carrier Safety Administration compliance standards.
            </p>
            <p>
              Each carrier is assigned a single point of contact who maintains full visibility into lane history, rate thresholds, equipment type, and broker interaction records. This continuity removes the inefficiency of rotating dispatchers and builds operational memory that improves load selection over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
