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

type FeatureItem =
  | string
  | {
      text: ReactNode;
      icon?: ReactNode;
      iconSrc?: string;
      iconAlt?: string;
    };

type Props = {
  heading: ReactNode;
  description?: ReactNode | ReactNode[];
  features?: FeatureItem[];
  image: string;
  imageAlt: string;
};

export default function FeatureIntroSection({
  heading,
  description,
  features = [],
  image,
  imageAlt,
}: Props) {
  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] py-12 sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,719px)] lg:gap-12 xl:gap-14">
        <div className="min-w-0">
          <h2 className="max-w-[703px] font-['Outfit'] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
            {heading}
          </h2>

          {descriptions.length > 0 && (
            <div className="mt-6 max-w-[649px] space-y-4 font-['DM_Sans'] text-base font-medium leading-7 text-white/80 sm:mt-8 sm:text-lg">
              {descriptions.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {features.length > 0 && (
            <ul className="mt-7 space-y-4">
              {features.map((feature, index) => {
                const isString = typeof feature === "string";
                const text = isString ? feature : feature.text;
                const icon = isString ? null : feature.icon;
                const iconSrc = isString ? "" : feature.iconSrc || "";
                const iconAlt = isString ? "" : feature.iconAlt || "";

                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-['DM_Sans'] text-sm font-medium leading-5 text-white/80 sm:text-base sm:leading-6"
                  >
                    <span className="mt-[0.1rem] flex h-7 w-7 shrink-0 items-center justify-center text-[#b34b0c]">
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={iconAlt}
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                      ) : icon ? (
                        <span className="[&_svg]:h-7 [&_svg]:w-7">
                          {icon}
                        </span>
                      ) : (
                        <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#b34b0c]" />
                      )}
                    </span>

                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="relative mx-auto aspect-[719/462] w-full max-w-[719px] overflow-hidden lg:mx-0 lg:justify-self-end">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1280px) 719px, (min-width: 1024px) 45vw, calc(100vw - 32px)"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}