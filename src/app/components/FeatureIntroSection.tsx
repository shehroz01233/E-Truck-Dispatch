// import Image from "next/image";

// type Props = {
//   heading: string;
//   description: string;
//   features: string[];
//   image: string;
//   imageAlt: string;
// };

// export default function FeatureIntroSection({
//   heading,
//   description,
//   features,
//   image,
//   imageAlt,
// }: Props) {
//   return (
//     <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] py-12 sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
//       <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,719px)] lg:gap-12 xl:gap-14">
//         {/* Content */}
//         <div className="min-w-0">
//           <h1 className="max-w-[703px] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
//             {heading}
//           </h1>

//           <p className="mt-6 max-w-[649px] text-base font-medium leading-7 text-white/80 sm:mt-8 sm:text-lg">
//             {description}
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
//             {features.map((item) => (
//               <p
//                 key={item}
//                 className="flex items-center gap-3 text-sm font-medium leading-6 text-white/80 sm:text-base"
//               >
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
//                   ✓
//                 </span>
//                 <span>{item}</span>
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Image */}
//         <div className="relative mx-auto aspect-[719/462] w-full max-w-[719px] overflow-hidden bg-[#171717] lg:mx-0 lg:justify-self-end">
//           <Image
//             src={image}
//             alt={imageAlt}
//             fill
//             priority
//             sizes="(min-width: 1280px) 719px, (min-width: 1024px) 45vw, calc(100vw - 32px)"
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import type { ReactNode } from "react";
type FeatureItem = string | {
  text: ReactNode;
  icon?: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
};
type FeatureCard = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
};
type Props = {
  heading: ReactNode;
  description?: ReactNode | ReactNode[];
  features?: FeatureItem[];
  footerDescription?: ReactNode | ReactNode[];
  image?: string;
  imageAlt?: string;
  cards?: FeatureCard[];
  variant?: "default" | "cards" | "process";
};
export default function FeatureIntroSection({
  heading,
  description,
  features = [],
  footerDescription,
  image,
  imageAlt = "",
  cards = [],
  variant = "default"
}: Props) {
  const descriptions = Array.isArray(description) ? description : description ? [description] : [];
  const footerDescriptions = Array.isArray(footerDescription) ? footerDescription : footerDescription ? [footerDescription] : [];
  if (variant === "cards") {
    return <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] py-12 text-white sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
        <div className="mx-auto max-w-[48rem] text-center">
          <h2 className="font-['Outfit'] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {heading}
          </h2>

          {descriptions.length > 0 && <div className="mx-auto mt-6 max-w-[35rem] space-y-4 font-['DM_Sans'] text-sm font-medium leading-6 text-white/75 sm:text-base">
              {descriptions.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(card => <article key={card.title} className="bg-[#171717] p-6 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
                {card.iconSrc ? <Image src={card.iconSrc} alt={card.iconAlt ?? ""} width={32} height={32} className="h-8 w-8 object-contain" /> : card.icon ? <span className="[&_svg]:h-8 [&_svg]:w-8">{card.icon}</span> : <span className="h-2 w-2 rounded-full bg-[#b34b0c]" />}
              </span>

              <h3 className="mt-6 font-['Outfit'] text-xl font-semibold leading-tight">
                {card.title}
              </h3>
              <p className="mt-5 font-['DM_Sans'] text-sm leading-6 text-white/75">
                {card.description}
              </p>
            </article>)}
        </div>
      </section>;
  }
  if (variant === "process") {
    return <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] py-12 text-white sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
        <div className="relative overflow-hidden bg-[#161616] px-6 py-10 sm:px-10 lg:min-h-[39rem] lg:px-12 lg:py-14">
          <div className="relative z-10 max-w-[52rem]">
            <h2 className="font-['Outfit'] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[52px]">
              {heading}
            </h2>

            {descriptions.length > 0 && <div className="mt-6 max-w-[50rem] space-y-4 font-['DM_Sans'] text-sm font-medium leading-6 text-white/80 sm:text-base">
                {descriptions.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>}
          </div>

          <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-3 lg:max-w-[58rem]">
            {cards.map(card => <article key={card.title} className="border border-white/15 bg-[#161616]/90 p-6">
                <h3 className="font-['Outfit'] text-xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="mt-5 font-['DM_Sans'] text-sm leading-6 text-white/75">
                  {card.description}
                </p>
              </article>)}
          </div>

          {image && <div className="relative mt-10 min-h-[18rem] lg:absolute lg:bottom-12 lg:right-0 lg:mt-0 lg:h-[33rem] lg:w-[45rem]">
              <div className="absolute inset-y-4 right-0 w-[88%] bg-[#b34b0c] [clip-path:polygon(18%_0,100%_0,88%_15%,34%_15%,25%_39%,82%_39%,72%_55%,15%_55%,6%_80%,75%_80%,64%_100%,0_100%)]" />
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 45rem, calc(100vw - 4rem)" className="relative z-10 object-contain object-right-bottom" />
            </div>}
        </div>
      </section>;
  }
  return <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] py-12 sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,719px)] lg:gap-12 xl:gap-14">
        <div className="min-w-0">
          <h2 className="max-w-[703px] font-['Outfit'] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
            {heading}
          </h2>

          {descriptions.length > 0 && <div className="mt-6 max-w-[649px] space-y-4 font-['DM_Sans'] text-base font-medium leading-7 text-white/80 sm:mt-8 sm:text-lg">
              {descriptions.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>}

          {features.length > 0 && <ul className="mt-7 space-y-4">
              {features.map((feature, index) => {
            const isString = typeof feature === "string";
            const text = isString ? feature : feature.text;
            const icon = isString ? null : feature.icon;
            const iconSrc = isString ? "" : feature.iconSrc || "";
            const iconAlt = isString ? "" : feature.iconAlt || "";
            return <li key={index} className="flex items-start gap-3 font-['DM_Sans'] text-sm font-medium leading-5 text-white/80 sm:text-base sm:leading-6">
                    <span className="mt-[0.1rem] flex h-7 w-7 shrink-0 items-center justify-center text-[#b34b0c]">
                      {iconSrc ? <Image src={iconSrc} alt={iconAlt} width={28} height={28} className="h-7 w-7 object-contain" /> : icon ? <span className="[&_svg]:h-7 [&_svg]:w-7">
                          {icon}
                        </span> : <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#b34b0c]" />}
                    </span>

                    <span>{text}</span>
                  </li>;
          })}
            </ul>}

          {footerDescriptions.length > 0 && <div className="mt-6 max-w-[649px] space-y-4 font-['DM_Sans'] text-base font-medium leading-7 text-white/80">
              {footerDescriptions.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>}
        </div>

        {image && <div className="relative mx-auto aspect-[719/462] w-full max-w-[719px] overflow-hidden lg:mx-0 lg:justify-self-end">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1280px) 719px, (min-width: 1024px) 45vw, calc(100vw - 32px)" className="object-contain" />
          </div>}
      </div>
    </section>;
}
