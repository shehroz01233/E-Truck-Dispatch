import Image from "next/image";
import Link from "next/link";

const stats = [
  ["300+", "Active Trucks", "Trucks we dispatch"],
  ["60+", "Team Members", "Experienced dispatchers"],
  ["150+", "MC Clients", "Actively working with us."],
  ["3+", "Years Experience", "Proven experience in truck"],
];

export default function Hero() {
  return (
    <section className="relative bg-[#171717] text-white">
      <div className="relative min-h-[520px] overflow-hidden sm:min-h-[570px] lg:min-h-[560px] xl:min-h-[590px]">
        <Image
          src="/Home/images/1_best_trucking_service__in_the_usa__e_truck_dispatching.webp"
          alt="Black semi truck driving through a mountain landscape"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[64%_center] sm:object-[58%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent lg:from-black/65" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1560px] px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:px-16 lg:pt-[66px] xl:px-[86px] xl:pt-[72px]">
          <div className="max-w-[590px] sm:max-w-[530px] lg:max-w-[600px]">
            <h1 className="text-[29px] font-bold leading-[1.08] tracking-[-0.035em] min-[390px]:text-[32px] sm:text-[38px] lg:text-[42px]">
              Best Trucking Service
              <br />In The USA
              <span className="mt-2 block text-[33px] min-[390px]:text-[36px] sm:text-[43px] lg:text-[48px]">E Truck Dispatching</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[11px] leading-[1.5] text-white/90 sm:mt-6 sm:text-[12px] lg:text-[12px]">
              Owner operators lose productive driving hours managing load boards, broker calls, and back office paperwork daily. E Truck Dispatching eliminates this operational drag by handling load booking, rate negotiation, broker communication, and same day invoice submission across all 48 states. You drive. We manage everything between pickup and payment.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="flex items-center gap-1.5"><ReviewLogo src="/Home/images/4_rectangle_1060.webp" alt="Google" width={28} /><span className="text-[9px] tracking-[-1px] text-[#ffd323]">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span>
              <span className="flex flex-col gap-1"><ReviewLogo src="/Home/images/11_rectangle_1067.webp" alt="Trustpilot" width={90} /><ReviewLogo src="/Home/images/12_rectangle_1068.webp" alt="Five star Trustpilot rating" width={74} /></span>
              <ReviewLogo src="/Home/images/13_rectangle_1069.webp" alt="Yelp" width={62} />
              <ReviewLogo src="/Home/images/14_rectangle_1070.webp" alt="Clutch" width={72} />
            </div>

            <Link href="/contact" className="mt-6 inline-flex h-10 items-center bg-[#d95408] px-5 text-[11px] font-bold transition-colors hover:bg-[#f26718]">
              Start Trucking Dispatch
            </Link>
          </div>
        </div>

        <SideActions />
      </div>

      <LeadForm />

      <div className="relative z-20 bg-[#1b1b1b]">
        <div className="mx-auto grid w-full max-w-[1560px] grid-cols-2 gap-x-5 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4 lg:pr-[460px] lg:pl-16 xl:pl-[86px]">
          {stats.map(([value, label, description]) => (
            <div key={label}>
              <strong className="block text-[27px] font-bold leading-none sm:text-[30px]">{value}</strong>
              <span className="mt-2.5 block text-[11px] font-bold sm:text-[12px]">{label}</span>
              <span className="mt-1.5 block text-[9px] text-white/75">{description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewLogo({ src, alt, width }: { src: string; alt: string; width: number }) {
  return <Image src={src} alt={alt} width={width} height={30} className="h-auto max-h-8 w-auto object-contain" />;
}

function LeadForm() {
  return (
    <form className="relative z-30 mx-5 mb-8 space-y-4 bg-[#191919] p-5 shadow-2xl sm:mx-8 sm:p-6 lg:absolute lg:bottom-5 lg:right-16 lg:mb-0 lg:w-[400px] lg:p-6 xl:right-[86px]">
      <FormField label="Full Name" name="fullName" type="text" placeholder="Enter Full Name" />
      <FormField label="Phone Number" name="phone" type="tel" placeholder="+1(000) 123-1234" />
      <FormField label="Email Address" name="email" type="email" placeholder="email@gmail.com" />
      <button type="submit" className="h-10 w-full bg-[#d95408] text-[11px] font-bold transition-colors hover:bg-[#f26718]">
        Get Started Now
      </button>
    </form>
  );
}

function FormField({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <label className="block text-[11px] font-semibold">
      {label}
      <input name={name} type={type} placeholder={placeholder} className="mt-1.5 h-10 w-full border-0 bg-[#1f1f1f] px-3 text-[10px] font-normal text-white outline-none placeholder:text-white/30 focus:ring-1 focus:ring-[#d95408]" />
    </label>
  );
}

function SideActions() {
  return (
    <>
      <div className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 sm:flex">
        <a href="tel:+12164005753" aria-label="Call us" className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[10px]">TEL</a>
        <a href="mailto:dispatch@mnatransport.com" aria-label="Email us" className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[10px]">@</a>
      </div>
      <div className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 lg:flex">
        {['f', 'X', 'in', 'ig'].map((item) => <span key={item} className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[10px]">{item}</span>)}
      </div>
    </>
  );
}
