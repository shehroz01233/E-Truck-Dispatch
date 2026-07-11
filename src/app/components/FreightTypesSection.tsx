// import Image from "next/image";
// import type { ReactNode } from "react";

// export type FreightTypeCard = {
//   title: string;
//   description: string;
//   items?: string[];
//   footer?: string;
//   icon?: ReactNode;

//   // Use public folder paths only
//   // Example: "/icons/freight-icon.svg"
//   iconSrc?: string;
//   imageSrc?: string;
//   logoSrc?: string;

//   iconAlt?: string;
//   imageAlt?: string;
//   logoAlt?: string;
// };

// type FreightTypesSectionProps = {
//   heading: ReactNode;
//   description: string;
//   freightTypes: FreightTypeCard[];
// };

// export default function FreightTypesSection({
//   heading,
//   description,
//   freightTypes,
// }: FreightTypesSectionProps) {
//   return (
//     <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20">
//       <div className="mx-auto max-w-[97.5rem]">
//         <div className="mx-auto max-w-[46rem] text-center">
//           <h2 className="font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
//             {heading}
//           </h2>
//           <p className="mt-5 font-dm-sans text-sm leading-6 text-white/80 sm:text-base">
//             {description}
//           </p>
//         </div>

//         <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {freightTypes.map((freightType) => {
//             const iconPath =
//               freightType.iconSrc ||
//               freightType.imageSrc ||
//               freightType.logoSrc ||
//               "";

//             const iconAlt =
//               freightType.iconAlt ||
//               freightType.imageAlt ||
//               freightType.logoAlt ||
//               freightType.title;

//             return (
//               <article
//                 key={freightType.title}
//                 className="flex min-h-[27rem] flex-col bg-[#161616] p-6 sm:p-7 lg:p-8"
//               >
//                 <span className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
//                   {iconPath ? (
//                     <Image
//                       src={iconPath}
//                       alt={iconAlt}
//                       width={32}
//                       height={32}
//                       className="h-8 w-8 object-contain"
//                     />
//                   ) : (
//                     freightType.icon ?? <FreightTruckIcon />
//                   )}
//                 </span>

//                 <h3 className="mt-7 font-outfit text-xl font-semibold leading-tight">
//                   {freightType.title}
//                 </h3>

//                 <p className="mt-6 font-dm-sans text-sm leading-6 text-white/85">
//                   {freightType.description}
//                 </p>

//                 {freightType.items?.length ? (
//                   <ul className="mt-5 space-y-2">
//                     {freightType.items.map((item) => (
//                       <li
//                         key={item}
//                         className="flex gap-3 font-dm-sans text-sm leading-5 text-white/85"
//                       >
//                         <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : null}

//                 {freightType.footer ? (
//                   <p className="mt-auto pt-6 font-dm-sans text-sm leading-6 text-white/85">
//                     {freightType.footer}
//                   </p>
//                 ) : null}
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FreightTruckIcon() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 32 24"
//       className="h-7 w-8 fill-none stroke-current"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 4h18v13H2zM20 9h5l5 5v3H20z" />
//       <path d="M5 7h12M5 10h12M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM25 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
//     </svg>
//   );
// }
import Image from "next/image";
import type { ReactNode } from "react";

export type FreightTypeCard = {
  title: string;
  description: string;
  items?: string[];
  footer?: string;
  icon?: ReactNode;

  iconSrc?: string;
  imageSrc?: string;
  logoSrc?: string;

  iconAlt?: string;
  imageAlt?: string;
  logoAlt?: string;
};

type FreightTypesSectionProps = {
  heading: ReactNode;
  description: string;
  freightTypes: FreightTypeCard[];
  columns?: 3 | 4;
  variant?: "default" | "compact";
};

export default function FreightTypesSection({
  heading,
  description,
  freightTypes,
  columns,
  variant = "default",
}: FreightTypesSectionProps) {
  const resolvedColumns = columns ?? (freightTypes.length === 4 ? 4 : 3);
  const isCompact = variant === "compact" || resolvedColumns === 4;

  const gridColumns =
    resolvedColumns === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3";

  return (
    <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[97.5rem]">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>

          <p className="mx-auto mt-5 max-w-[34rem] font-dm-sans text-sm leading-6 text-white/80 sm:text-base">
            {description}
          </p>
        </div>

        <div className={`mt-12 grid gap-5 md:grid-cols-2 ${gridColumns}`}>
          {freightTypes.map((freightType) => {
            const iconPath =
              freightType.iconSrc ||
              freightType.imageSrc ||
              freightType.logoSrc ||
              "";

            const iconAlt =
              freightType.iconAlt ||
              freightType.imageAlt ||
              freightType.logoAlt ||
              freightType.title;

            return (
              <article
                key={freightType.title}
                className={`flex flex-col bg-[#161616] ${
                  isCompact
                    ? "h-[17.125rem] items-center justify-center px-6 py-7 text-center"
                    : "min-h-[27rem] p-6 text-left sm:p-7 lg:p-8"
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
                  {iconPath ? (
                    <Image
                      src={iconPath}
                      alt={iconAlt}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    freightType.icon ?? <FreightTruckIcon />
                  )}
                </span>

                <h3
                  className={`font-outfit text-xl font-semibold leading-tight ${
                    isCompact ? "mt-6" : "mt-7"
                  }`}
                >
                  {freightType.title}
                </h3>

                <p
                  className={`font-dm-sans text-sm leading-6 text-white/85 ${
                    isCompact ? "mt-4 max-w-[19rem]" : "mt-6"
                  }`}
                >
                  {freightType.description}
                </p>

                {!isCompact && freightType.items?.length ? (
                  <ul className="mt-5 space-y-2 text-left">
                    {freightType.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-dm-sans text-sm leading-5 text-white/85"
                      >
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {!isCompact && freightType.footer ? (
                  <p className="mt-auto pt-6 font-dm-sans text-sm leading-6 text-white/85">
                    {freightType.footer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FreightTruckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 24"
      className="h-7 w-8 fill-none stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h18v13H2zM20 9h5l5 5v3H20z" />
      <path d="M5 7h12M5 10h12M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM25 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}