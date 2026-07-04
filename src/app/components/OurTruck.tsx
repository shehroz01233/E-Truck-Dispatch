import Image from "next/image";
import Link from "next/link";

type TruckType = { title: string; description: string; active?: boolean };
type OurTrucksProps = {
  backgroundImage?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  trucks?: TruckType[];
};

const defaultTrucks: TruckType[] = [
  { title: "Dry Van Dispatch", description: "Standard 48 to 53 foot enclosed trailers moving retail goods, consumer products, and packaged freight through high-volume distribution corridors nationwide.", active: true },
  { title: "Flatbed Dispatch", description: "Open-deck trailers transporting construction materials, steel, lumber, and heavy machinery with tarping, strapping, and load securement compliance built into every booking." },
  { title: "Step Deck Dispatch", description: "Designed for 8.5 to 10 foot tall cargo including industrial machinery and construction equipment, with multi-state permit coordination and oversized load documentation." },
  { title: "Reefer Dispatch", description: "Temperature-controlled trailers for food, pharmaceuticals, and perishables requiring cold chain integrity and direct relationships with food-grade brokers." },
  { title: "Hotshot Dispatch", description: "Time-sensitive freight for oil fields, perishable cargo, and construction industries using 40-foot-plus trucks with same-day or next-day delivery turnaround." },
];

export default function OurTrucks({
  backgroundImage = "/Home/images/22_rectangle_1424.webp",
  heading = "Our Trucks",
  description = "E Truck Dispatching covers 8 equipment categories, each requiring distinct load board strategies, broker relationships, and securement knowledge.",
  buttonText = "View All States",
  buttonHref = "/states",
  trucks = defaultTrucks,
}: OurTrucksProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1C1C1C] text-white xl:aspect-[12/5] xl:max-h-[50rem]">
      <Image src={backgroundImage} alt="Black semi truck at night" fill sizes="100vw" className="object-cover object-center" />

      <div className="relative z-10 mx-auto hidden aspect-[12/5] h-full w-full max-w-[120rem] xl:block">
        <div className="absolute left-[9.375%] top-[11.25%] w-[20.47%]">
          <h2 className="font-['Outfit'] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.2]">{heading}</h2>
          <p className="mt-[6%] font-['DM_Sans'] text-[clamp(0.75rem,0.94vw,1.125rem)] leading-[1.5]">{description}</p>
          <Link href={buttonHref} className="mt-[8%] inline-flex h-[clamp(2.125rem,2.3vw,2.75rem)] items-center bg-[#B34B0C] px-5 font-['Outfit'] text-[clamp(0.8125rem,0.94vw,1.125rem)] font-medium capitalize">{buttonText}</Link>
        </div>

        <button type="button" aria-label="Previous truck type" className="absolute bottom-[13.75%] left-[9.375%] flex aspect-square w-[3.65%] items-center justify-center bg-[#161616]"><Arrow direction="left" /></button>
        <button type="button" aria-label="Next truck type" className="absolute bottom-[2.5%] left-[9.375%] flex aspect-square w-[3.65%] items-center justify-center bg-[#B34B0C]"><Arrow direction="right" /></button>

        <div className="absolute bottom-0 left-[14.0625%] grid h-[39.125%] w-[78.125%] grid-cols-5 gap-[2.667%]">
          {trucks.map((truck) => (
            <article key={truck.title} className={`h-full min-w-0 px-[11.2%] pt-[18.65%] ${truck.active ? "bg-[#B34B0C]/80" : "bg-transparent"}`}>
              <h3 className="max-w-[9.75rem] font-['Outfit'] text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-[1.27]">{truck.title}</h3>
              <p className="mt-[14%] max-w-[13rem] font-['DM_Sans'] text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.38]">{truck.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-5 py-12 sm:px-8 xl:hidden">
        <div className="max-w-[26.875rem]">
          <h2 className="font-['Outfit'] text-[2.125rem] font-bold leading-tight">{heading}</h2>
          <p className="mt-5 font-['DM_Sans'] text-[0.8125rem] leading-[1.5] text-white/90">{description}</p>
          <Link href={buttonHref} className="mt-6 inline-flex h-10 items-center bg-[#B34B0C] px-5 font-['Outfit'] text-[0.8125rem] font-medium">{buttonText}</Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trucks.map((truck) => (
            <article key={truck.title} className={`min-h-[13.75rem] p-6 ${truck.active ? "bg-[#B34B0C]/80" : "bg-[#161616]/80 backdrop-blur-sm"}`}>
              <h3 className="font-['Outfit'] text-[1.125rem] font-semibold">{truck.title}</h3>
              <p className="mt-5 font-['DM_Sans'] text-[0.75rem] leading-[1.5]">{truck.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-1/2 w-1/2 fill-none stroke-current stroke-2 ${direction === "left" ? "rotate-180" : ""}`}><path d="m8 4 8 8-8 8" /></svg>;
}
