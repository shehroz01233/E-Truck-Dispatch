// import Image, { type StaticImageData } from "next/image";
// import type { ReactNode } from "react";
// import type { Variants } from "motion/react";
// import * as motion from "motion/react-client";

// export type CoveredState = {
//   name: ReactNode;
//   description: ReactNode;
//   image: string | StaticImageData;
//   imageAlt: string;
//   highlighted?: boolean;
// };

// export type StatesCoverageSectionProps = {
//   heading: ReactNode;
//   states: CoveredState[];
//   className?: string;
// };

// const smoothEase = [0.22, 1, 0.36, 1] as const;

// const sectionVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//     },
//   },
// };

// const headingVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: smoothEase,
//     },
//   },
// };

// const gridVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       delayChildren: 0.15,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//     scale: 0.985,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.55,
//       ease: smoothEase,
//     },
//   },
// };

// const imageVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 1.04,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.65,
//       ease: smoothEase,
//     },
//   },
// };

// const contentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 12,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: smoothEase,
//     },
//   },
// };

// export default function StatesCoverageSection({
//   heading,
//   states,
//   className = "",
// }: StatesCoverageSectionProps) {
//   return (
//     <motion.section
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{
//         once: true,
//         amount: 0.15,
//         margin: "0px 0px -60px 0px",
//       }}
//       className={`bg-[#1c1c1c] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
//     >
//       <div className="mx-auto w-full max-w-[97.5rem]">
//         <motion.h2
//           variants={headingVariants}
//           className="mx-auto max-w-[28rem] text-center font-['Outfit'] text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem]"
//         >
//           {heading}
//         </motion.h2>

//         <motion.div
//           variants={gridVariants}
//           className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4 xl:gap-7"
//         >
//           {states.map((state, index) => (
//             <motion.article
//               key={index}
//               variants={cardVariants}
//               whileHover={{
//                 y: -4,
//                 transition: {
//                   duration: 0.2,
//                   ease: smoothEase,
//                 },
//               }}
//               className={`flex min-h-[23rem] flex-col rounded-[0.75rem] bg-[#161616] p-4 sm:min-h-[21rem] lg:p-5 ${
//                 state.highlighted
//                   ? "border border-[#b34b0c]"
//                   : "border border-transparent"
//               }`}
//             >
//               <motion.div
//                 variants={imageVariants}
//                 className="relative aspect-[16/8.4] w-full overflow-hidden rounded-[0.5rem] bg-[#111111]"
//               >
//                 <Image
//                   src={state.image}
//                   alt={state.imageAlt}
//                   fill
//                   sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1279px) 45vw, 22vw"
//                   className="object-cover"
//                 />
//               </motion.div>

//               <motion.h3
//                 variants={contentVariants}
//                 className={`mt-5 font-['Outfit'] text-[1.125rem] font-semibold leading-tight ${
//                   state.highlighted ? "text-[#c6520c]" : "text-white"
//                 }`}
//               >
//                 {state.name}
//               </motion.h3>

//               <motion.div
//                 variants={contentVariants}
//                 className="mt-4 font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/85"
//               >
//                 {state.description}
//               </motion.div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type CoveredState = {
  name: ReactNode;
  description: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  highlighted?: boolean;
};

export type StatesCoverageSectionProps = {
  heading: ReactNode;
  states: CoveredState[];
  className?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

export default function StatesCoverageSection({
  heading,
  states,
  className = "",
}: StatesCoverageSectionProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -60px 0px",
      }}
      className={`bg-[#1c1c1c] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        <motion.h2
          variants={headingVariants}
          className="mx-auto max-w-[28rem] text-center font-['Outfit'] text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem]"
        >
          {heading}
        </motion.h2>

        <motion.div
          variants={gridVariants}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4 xl:gap-7"
        >
          {states.map((state, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.2,
                  ease: smoothEase,
                },
              }}
              className={`flex min-h-[23rem] flex-col rounded-[0.75rem] bg-[#161616] p-4 sm:min-h-[21rem] lg:p-5 ${
                state.highlighted
                  ? "border border-[#b34b0c]"
                  : "border border-transparent"
              }`}
            >
              <motion.div
                variants={imageVariants}
                className="relative aspect-[16/8.4] w-full overflow-hidden rounded-[0.5rem] bg-[#111111]"
              >
                <Image
                  src={state.image}
                  alt={state.imageAlt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1279px) 45vw, 22vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.h3
                variants={contentVariants}
                className={`mt-5 font-['Outfit'] text-[1.125rem] font-semibold leading-tight ${
                  state.highlighted ? "text-[#c6520c]" : "text-white"
                }`}
              >
                {state.name}
              </motion.h3>

              <motion.div
                variants={contentVariants}
                className="mt-4 font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/85"
              >
                {state.description}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}