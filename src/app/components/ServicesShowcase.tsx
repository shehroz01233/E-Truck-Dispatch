// "use client";

// import Image from "next/image";
// import Link from "next/link";
// export type ServiceShowcaseItem = {
//   title: string;
//   description: string;
//   squareImage: string;
//   wideImage: string;
// };
// export default function ServicesShowcase({
//   services
// }: {
//   services: ServiceShowcaseItem[];
// }) {
//   return <>
    
//       <section className="bg-[#1a1a1a] px-4 py-[0.6875rem] text-white sm:px-8 lg:px-12 lg:py-20">
//         <div className="mx-auto flex w-full max-w-[22.875rem] flex-col gap-[clamp(0.25rem,1.282vw,1.25rem)] lg:max-w-[97.5rem]">
//         {services.map((service, index) => {
//           const reversed = index % 2 === 1;
//           return <article key={service.title} className={`grid aspect-[1560/350] gap-x-[1.282%] ${reversed ? "grid-cols-[51.795%_23.205%_22.436%]" : "grid-cols-[22.436%_23.205%_51.795%]"}`}>
              
//               <ServiceImage src={service.squareImage} alt={`${service.title} specialist`} className={reversed ? "order-3" : "order-1"} sizes="22.436vw" />
              

//               <div className="order-2 flex flex-col justify-center bg-[#161616] bg-[radial-gradient(ellipse_at_center,#272727_0%,#161616_80%)] px-[clamp(0.5rem,3.205vw,3.125rem)] py-[clamp(0.25rem,2.5vw,2.4375rem)]">
                
//                 <h2 className="font-['Outfit'] text-[clamp(0.275rem,1.41vw,1.375rem)] font-semibold leading-tight">
//                   {service.title}
//                 </h2>
//                 <p className="mt-[clamp(0.2rem,1.282vw,1.25rem)] max-w-[16.5625rem] font-['DM_Sans'] text-[clamp(0.2rem,1.026vw,1rem)] leading-[1.45] text-white/90">
//                   {service.description}
//                 </p>
//                 <Link href="#contact" className="mt-[clamp(0.2rem,1.538vw,1.5rem)] inline-flex min-h-[clamp(0.5rem,2.821vw,2.75rem)] w-fit items-center bg-[#b34b0c] px-[clamp(0.3rem,1.282vw,1.25rem)] py-1 font-['Outfit'] text-[clamp(0.2rem,1.154vw,1.125rem)] font-medium  hover:bg-[#d45c13]">
                  
//                   Read More
//                 </Link>
//               </div>

//               <ServiceImage src={service.wideImage} alt={`${service.title} truck`} className={reversed ? "order-1" : "order-3"} sizes="51.795vw" />
              
//             </article>;
//         })}
//         </div>
//       </section>
//     </>;
// }
// function ServiceImage({
//   src,
//   alt,
//   className,
//   sizes
// }: {
//   src: string;
//   alt: string;
//   className: string;
//   sizes: string;
// }) {
//   return <div className={`relative min-h-0 overflow-hidden bg-[#161616] ${className}`}>
      
//       <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
      
//     </div>;
// }
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export type ServiceShowcaseItem = {
  title: string;
  description: string;
  squareImage: string;
  wideImage: string;
};

type ServicesShowcaseProps = {
  services: ServiceShowcaseItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

export default function ServicesShowcase({
  services,
}: ServicesShowcaseProps) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="bg-[#1a1a1a] px-4 py-[0.6875rem] text-white sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[22.875rem] flex-col gap-[clamp(0.25rem,1.282vw,1.25rem)] lg:max-w-[97.5rem]">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.article
              key={`${service.title}-${index}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className={`grid aspect-[1560/350] gap-x-[1.282%] ${
                reversed
                  ? "grid-cols-[51.795%_23.205%_22.436%]"
                  : "grid-cols-[22.436%_23.205%_51.795%]"
              }`}
            >
              <ServiceImage
                src={service.squareImage}
                alt={`${service.title} specialist`}
                className={
                  reversed ? "order-3" : "order-1"
                }
                sizes="22.436vw"
                animationDirection={
                  reversed ? "right" : "left"
                }
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease,
                }}
                whileHover={{
                  y: -4,
                }}
                className="order-2 flex flex-col justify-center bg-[#161616] bg-[radial-gradient(ellipse_at_center,#272727_0%,#161616_80%)] px-[clamp(0.5rem,3.205vw,3.125rem)] py-[clamp(0.25rem,2.5vw,2.4375rem)]"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.22,
                    ease,
                  }}
                  className="font-['Outfit'] text-[clamp(0.275rem,1.41vw,1.375rem)] font-semibold leading-tight"
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease,
                  }}
                  className="mt-[clamp(0.2rem,1.282vw,1.25rem)] max-w-[16.5625rem] font-['DM_Sans'] text-[clamp(0.2rem,1.026vw,1rem)] leading-[1.45] text-white/90"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.38,
                    ease,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.025,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-[clamp(0.2rem,1.538vw,1.5rem)] w-fit"
                >
                  <Link
                    href="#contact"
                    className="inline-flex min-h-[clamp(0.5rem,2.821vw,2.75rem)] w-fit items-center bg-[#b34b0c] px-[clamp(0.3rem,1.282vw,1.25rem)] py-1 font-['Outfit'] text-[clamp(0.2rem,1.154vw,1.125rem)] font-medium hover:bg-[#d45c13]"
                  >
                    Read More
                  </Link>
                </motion.div>
              </motion.div>

              <ServiceImage
                src={service.wideImage}
                alt={`${service.title} truck`}
                className={
                  reversed ? "order-1" : "order-3"
                }
                sizes="51.795vw"
                animationDirection={
                  reversed ? "left" : "right"
                }
              />
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

type ServiceImageProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  animationDirection: "left" | "right";
};

function ServiceImage({
  src,
  alt,
  className,
  sizes,
  animationDirection,
}: ServiceImageProps) {
  const initialX =
    animationDirection === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.7,
        ease,
      }}
      whileHover={{
        scale: 1.015,
      }}
      className={`relative min-h-0 overflow-hidden bg-[#161616] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </motion.div>
  );
}