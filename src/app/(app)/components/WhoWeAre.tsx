// "use client";

// import Image from "next/image";
// import type { ReactNode } from "react";
// export type WhoWeAreImages = {
//   meeting: string;
//   presentation: string;
//   team: string;
// };
// export type WhoWeAreProps = {
//   heading: ReactNode;
//   paragraphs: ReactNode[];
//   images: WhoWeAreImages;
//   imageAlts?: {
//     meeting?: string;
//     presentation?: string;
//     team?: string;
//   };
// };
// export default function WhoWeAre({
//   heading,
//   paragraphs,
//   images,
//   imageAlts
// }: WhoWeAreProps) {
//   return <section className="w-full overflow-x-hidden bg-[#151515] px-4 py-[1.75rem] text-white min-[22.5rem]:py-[2rem] sm:px-[2rem] sm:py-[2.5rem] lg:px-[3rem] lg:py-[2.875rem] xl:py-[3.5rem] 2xl:py-[4rem]">
      
//       <div className="mx-auto grid w-full max-w-none items-stretch overflow-hidden bg-[#1b1b1b] sm:max-w-[64.25rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] xl:max-w-[80rem] 2xl:max-w-[90rem]">
//         {/* Image collage */}
//         <div className="grid min-h-[18rem] min-w-0 grid-rows-[1.52fr_1fr] self-stretch min-[22.5rem]:min-h-[20rem] min-[30rem]:aspect-[1.4] min-[30rem]:min-h-0 sm:aspect-[1.55] lg:aspect-auto lg:min-h-[26.125rem] xl:min-h-[31.25rem] 2xl:min-h-[35rem]">
          
//           <div className="relative min-h-0 min-w-0 overflow-hidden">
            
//             <Image src={images.meeting} alt={imageAlts?.meeting || "Team collaborating around a table"} fill priority sizes="(max-width: 39.9375rem) 100vw, (max-width: 63.9375rem) 100vw, (max-width: 79.9375rem) 31.25rem, 43.75rem" className="object-cover" />
            
//           </div>

//           <div className="grid min-h-0 min-w-0 grid-cols-2">
//             <div className="relative min-h-0 min-w-0 overflow-hidden">
              
//               <Image src={images.presentation} alt={imageAlts?.presentation || "Team attending a presentation"} fill sizes="(max-width: 39.9375rem) 50vw, (max-width: 63.9375rem) 50vw, (max-width: 79.9375rem) 15.625rem, 21.875rem" className="object-cover" />
              
//             </div>

//             <div className="relative min-h-0 min-w-0 overflow-hidden">
              
//               <Image src={images.team} alt={imageAlts?.team || "Team members working together"} fill sizes="(max-width: 39.9375rem) 50vw, (max-width: 63.9375rem) 50vw, (max-width: 79.9375rem) 15.625rem, 21.875rem" className="object-cover" />
              
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex min-h-0 min-w-0 self-stretch flex-col justify-center px-[1.25rem] py-[1.75rem] min-[22.5rem]:px-[1.5rem] min-[22.5rem]:py-[2rem] sm:px-[2.5rem] sm:py-[2.5rem] lg:min-h-[26.125rem] lg:px-[2.625rem] lg:py-[2rem] xl:min-h-[31.25rem] xl:px-[3.25rem] 2xl:min-h-[35rem] 2xl:px-[4rem]">
          
//           <h2 className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] tracking-[-0.02em] [overflow-wrap:anywhere] sm:text-[2.5rem] xl:text-[3rem]">
            
//             {heading}
//           </h2>

//           {paragraphs.length > 0 && <div className="mt-[1.25rem] w-full max-w-none space-y-[1rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-[#f0f0f0] [overflow-wrap:anywhere] sm:mt-[1.5rem] sm:max-w-[29.375rem] xl:max-w-[36rem] xl:text-[1.125rem] 2xl:max-w-[42rem]">
//               {paragraphs.map((paragraph, index) => <p key={index}>
//                   {paragraph}
//                 </p>)}
//             </div>}
//         </div>
//       </div>
//     </section>;
// }
import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type WhoWeAreImages = {
  meeting: string;
  presentation: string;
  team: string;
};

export type WhoWeAreProps = {
  heading: ReactNode;
  paragraphs: ReactNode[];
  images: WhoWeAreImages;
  imageAlts?: {
    meeting?: string;
    presentation?: string;
    team?: string;
  };
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -60px 0px",
} as const;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0.35,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const collageVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const meetingImageVariants: Variants = {
  hidden: {
    opacity: 0.35,
    x: -48,
    y: 20,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const presentationImageVariants: Variants = {
  hidden: {
    opacity: 0.35,
    x: -34,
    y: 34,
    scale: 1.07,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease,
    },
  },
};

const teamImageVariants: Variants = {
  hidden: {
    opacity: 0.35,
    x: 34,
    y: 34,
    scale: 1.07,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: 50,
    y: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
      delayChildren: 0.12,
      staggerChildren: 0.12,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0.3,
    y: 20,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease,
    },
  },
};

const paragraphsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: 22,
    y: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.48,
      ease,
    },
  },
};

export default function WhoWeAre({
  heading,
  paragraphs,
  images,
  imageAlts,
}: WhoWeAreProps) {
  return (
    <section className="w-full overflow-x-hidden bg-[#151515] px-4 py-[1.75rem] text-white min-[22.5rem]:py-[2rem] sm:px-[2rem] sm:py-[2.5rem] lg:px-[3rem] lg:py-[2.875rem] xl:py-[3.5rem] 2xl:py-[4rem]">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid w-full max-w-none items-stretch overflow-hidden bg-[#1b1b1b] sm:max-w-[64.25rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] xl:max-w-[80rem] 2xl:max-w-[90rem]"
      >
        {/* Image collage */}
        <motion.div
          variants={collageVariants}
          className="grid min-h-[18rem] min-w-0 grid-rows-[1.52fr_1fr] self-stretch min-[22.5rem]:min-h-[20rem] min-[30rem]:aspect-[1.4] min-[30rem]:min-h-0 sm:aspect-[1.55] lg:aspect-auto lg:min-h-[26.125rem] xl:min-h-[31.25rem] 2xl:min-h-[35rem]"
        >
          {/* Main meeting image */}
          <motion.div
            variants={meetingImageVariants}
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
            className="group relative min-h-0 min-w-0 overflow-hidden"
          >
            <motion.div
              whileHover={{
                scale: 1.045,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src={images.meeting}
                alt={
                  imageAlts?.meeting ||
                  "Team collaborating around a table"
                }
                fill
                priority
                sizes="(max-width: 39.9375rem) 100vw, (max-width: 63.9375rem) 100vw, (max-width: 79.9375rem) 31.25rem, 43.75rem"
                className="object-cover"
              />
            </motion.div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#b34b0c]/10 via-transparent to-black/10"
            />

            <motion.span
              initial={{
                opacity: 0,
                x: "-150%",
              }}
              whileInView={{
                opacity: [0, 0.22, 0],
                x: ["-150%", "0%", "150%"],
              }}
              viewport={viewport}
              transition={{
                delay: 0.35,
                duration: 1.1,
                ease,
                times: [0, 0.5, 1],
              }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[18%] skew-x-[-16deg] bg-[#b34b0c]"
            />
          </motion.div>

          {/* Bottom images */}
          <div className="grid min-h-0 min-w-0 grid-cols-2">
            <motion.div
              variants={presentationImageVariants}
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="relative min-h-0 min-w-0 overflow-hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={images.presentation}
                  alt={
                    imageAlts?.presentation ||
                    "Team attending a presentation"
                  }
                  fill
                  sizes="(max-width: 39.9375rem) 50vw, (max-width: 63.9375rem) 50vw, (max-width: 79.9375rem) 15.625rem, 21.875rem"
                  className="object-cover"
                />
              </motion.div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#b34b0c]/5"
              />
            </motion.div>

            <motion.div
              variants={teamImageVariants}
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="relative min-h-0 min-w-0 overflow-hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={images.team}
                  alt={
                    imageAlts?.team ||
                    "Team members working together"
                  }
                  fill
                  sizes="(max-width: 39.9375rem) 50vw, (max-width: 63.9375rem) 50vw, (max-width: 79.9375rem) 15.625rem, 21.875rem"
                  className="object-cover"
                />
              </motion.div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#b34b0c]/5"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentVariants}
          className="relative flex min-h-0 min-w-0 self-stretch flex-col justify-center overflow-hidden px-[1.25rem] py-[1.75rem] min-[22.5rem]:px-[1.5rem] min-[22.5rem]:py-[2rem] sm:px-[2.5rem] sm:py-[2.5rem] lg:min-h-[26.125rem] lg:px-[2.625rem] lg:py-[2rem] xl:min-h-[31.25rem] xl:px-[3.25rem] 2xl:min-h-[35rem] 2xl:px-[4rem]"
        >
          <motion.span
            variants={{
              hidden: {
                scaleY: 0,
                opacity: 0.3,
              },
              visible: {
                scaleY: 1,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease,
                },
              },
            }}
            aria-hidden="true"
            className="absolute bottom-[12%] left-0 top-[12%] w-[3px] origin-top bg-[#b34b0c]"
          />

          <motion.h2
            variants={contentItemVariants}
            className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] tracking-[-0.02em] [overflow-wrap:anywhere] sm:text-[2.5rem] xl:text-[3rem]"
          >
            {heading}
          </motion.h2>

          {paragraphs.length > 0 ? (
            <motion.div
              variants={paragraphsVariants}
              className="mt-[1.25rem] w-full max-w-none space-y-[1rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-[#f0f0f0] [overflow-wrap:anywhere] sm:mt-[1.5rem] sm:max-w-[29.375rem] xl:max-w-[36rem] xl:text-[1.125rem] 2xl:max-w-[42rem]"
            >
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
}