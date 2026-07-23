// import Image from "next/image";
// import Link from "next/link";
// import type { CSSProperties } from "react";
// import type { Variants } from "motion/react";
// import * as motion from "motion/react-client";

// type TruckType = {
//   title: string;
//   description: string;
//   image?: string;
//   active?: boolean;
// };

// type OurTrucksProps = {
//   backgroundImage?: string;
//   heading?: string;
//   description?: string;
//   buttonText?: string;
//   buttonHref?: string;
//   trucks?: TruckType[];
// };

// type CardStyle = CSSProperties & {
//   willChange?: string;
// };

// type PositionState = {
//   left: number;
//   opacity: number;
// };

// type CarouselTimeline = {
//   left: string[];
//   opacity: number[];
//   times: number[];
// };

// const defaultTrucks: TruckType[] = [
//   {
//     title: "Dry Van Dispatch",
//     description:
//       "Standard 48 to 53 foot enclosed trailers moving retail goods, consumer products, and packaged freight through high-volume distribution corridors nationwide.",
//     active: true,
//   },
//   {
//     title: "Flatbed Dispatch",
//     image: "/Home/images/Flatbed Dispatch Services.webp",
//     description:
//       "Open-deck trailers transporting construction materials, steel, lumber, and heavy machinery with tarping, strapping, and load securement compliance built into every booking.",
//   },
//   {
//     title: "Step Deck Dispatch",
//     image: "/Home/images/Step Deck Dispatch.webp",
//     description:
//       "Designed for 8.5 to 10 foot tall cargo including industrial machinery and construction equipment, with multi-state permit coordination and oversized load documentation.",
//   },
//   {
//     title: "Reefer Dispatch",
//     image: "/Home/images/Reefer Dispatch Services.webp",
//     description:
//       "Temperature-controlled trailers for food, pharmaceuticals, and perishables requiring cold chain integrity and direct relationships with food-grade brokers.",
//   },
//   {
//     title: "Hotshot Dispatch",
//     image: "/Home/images/Hotshot Truck Dispatching Services.webp",
//     description:
//       "Time-sensitive freight for oil fields, perishable cargo, and construction industries using 40-foot-plus trucks with same-day or next-day delivery turnaround.",
//   },
//   {
//     title: "Box Truck Dispatch",
//     image: "/Home/images/Box Truck.webp",
//     description:
//       "Straight trucks handling local and regional retail, household, and final-mile freight with careful route planning for dock access, liftgate needs, and appointment windows.",
//   },
//   {
//     title: "Power Only Dispatch",
//     image: "/Home/images/Power Only Dispatch Service.webp",
//     description:
//       "Tractor-only carriers pulling customer, broker, or leased trailers with drop-and-hook planning, trailer compatibility checks, and efficient empty-mile management.",
//   },
//   {
//     title: "Conestoga Dispatch",
//     image: "/Home/images/Conestoga Dispatch Services.webp",
//     description:
//       "Retractable-tarp trailers protecting steel, machinery, and specialized freight while preserving fast side-loading access and open-deck securement flexibility.",
//   },
// ];

// const ease = [0.22, 1, 0.36, 1] as const;

// const viewport = {
//   once: true,
//   amount: 0.2,
//   margin: "0px 0px -70px 0px",
// } as const;

// const contentVariants: Variants = {
//   hidden: {
//     opacity: 0.3,
//     x: -44,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: {
//       duration: 0.72,
//       ease,
//       delayChildren: 0.08,
//       staggerChildren: 0.11,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0.3,
//     y: 20,
//     scale: 0.985,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease,
//     },
//   },
// };

// function getPositionState({
//   step,
//   total,
//   visibleCount,
//   slots,
//   leftExit,
//   rightExit,
// }: {
//   step: number;
//   total: number;
//   visibleCount: number;
//   slots: number[];
//   leftExit: number;
//   rightExit: number;
// }): PositionState {
//   const normalizedStep = step % total;

//   const relativeOffset =
//     (total - normalizedStep) % total;

//   if (relativeOffset < visibleCount) {
//     return {
//       left: slots[relativeOffset],
//       opacity: 1,
//     };
//   }

//   /*
//    * The active left card exits through the left edge.
//    */
//   if (normalizedStep === 1) {
//     return {
//       left: leftExit,
//       opacity: 0,
//     };
//   }

//   /*
//    * Hidden cards wait outside the right edge before entering.
//    */
//   return {
//     left: rightExit,
//     opacity: 0,
//   };
// }

// function createCardTimeline({
//   total,
//   visibleCount,
//   slots,
//   leftExit,
//   rightExit,
//   holdRatio,
// }: {
//   total: number;
//   visibleCount: number;
//   slots: number[];
//   leftExit: number;
//   rightExit: number;
//   holdRatio: number;
// }): CarouselTimeline {
//   const firstState = getPositionState({
//     step: 0,
//     total,
//     visibleCount,
//     slots,
//     leftExit,
//     rightExit,
//   });

//   const left = [`${firstState.left}%`];
//   const opacity = [firstState.opacity];
//   const times = [0];

//   for (let step = 0; step < total; step += 1) {
//     const currentState = getPositionState({
//       step,
//       total,
//       visibleCount,
//       slots,
//       leftExit,
//       rightExit,
//     });

//     const nextState = getPositionState({
//       step: step + 1,
//       total,
//       visibleCount,
//       slots,
//       leftExit,
//       rightExit,
//     });

//     /*
//      * Hold the current card position for 2.4 seconds.
//      */
//     left.push(`${currentState.left}%`);
//     opacity.push(currentState.opacity);
//     times.push((step + holdRatio) / total);

//     /*
//      * Move to the next position during the final 0.6 seconds.
//      */
//     left.push(`${nextState.left}%`);
//     opacity.push(nextState.opacity);
//     times.push((step + 1) / total);
//   }

//   return {
//     left,
//     opacity,
//     times,
//   };
// }

// function createActiveTimeline(
//   total: number,
//   holdRatio: number,
// ) {
//   const opacity = [1];
//   const times = [0];

//   for (let step = 0; step < total; step += 1) {
//     const currentOpacity = step === 0 ? 1 : 0;

//     const nextOpacity =
//       step + 1 === total ? 1 : 0;

//     opacity.push(currentOpacity);
//     times.push((step + holdRatio) / total);

//     opacity.push(nextOpacity);
//     times.push((step + 1) / total);
//   }

//   return {
//     opacity,
//     times,
//   };
// }

// export default function OurTrucks({
//   backgroundImage = "/Home/images/22_rectangle_1424.webp",
//   heading = "Our Trucks",
//   description = "E Truck Dispatching covers 8 equipment categories, each requiring distinct load board strategies, broker relationships, and securement knowledge.",
//   buttonText = "View All States",
//   buttonHref = "/states",
//   trucks = defaultTrucks,
// }: OurTrucksProps) {
//   const resolvedTrucks =
//     trucks.length > 0 ? trucks : defaultTrucks;

//   const totalTrucks = resolvedTrucks.length;

//   if (totalTrucks === 0) {
//     return null;
//   }

//   const initialActiveIndex = Math.max(
//     resolvedTrucks.findIndex(
//       (truck) => truck.active,
//     ),
//     0,
//   );

//   const visibleCount = Math.min(
//     totalTrucks,
//     5,
//   );

//   /*
//    * Each card remains active for three seconds.
//    *
//    * 2.4 seconds = hold
//    * 0.6 seconds = movement
//    */
//   const changeEverySeconds = 3;
//   const transitionSeconds = 0.6;

//   const holdRatio =
//     (changeEverySeconds - transitionSeconds) /
//     changeEverySeconds;

//   const carouselDuration =
//     totalTrucks * changeEverySeconds;

//   const gapPercent = 2.667;

//   const cardWidthPercent =
//     (100 -
//       (visibleCount - 1) * gapPercent) /
//     visibleCount;

//   const slots = Array.from(
//     {
//       length: visibleCount,
//     },
//     (_, index) =>
//       index *
//       (cardWidthPercent + gapPercent),
//   );

//   const leftExit =
//     -(cardWidthPercent + gapPercent);

//   const rightExit = 100 + gapPercent;

//   const cardTimeline = createCardTimeline({
//     total: totalTrucks,
//     visibleCount,
//     slots,
//     leftExit,
//     rightExit,
//     holdRatio,
//   });

//   const activeTimeline =
//     createActiveTimeline(
//       totalTrucks,
//       holdRatio,
//     );

//   return (
//     <motion.section
//       initial={{
//         opacity: 0.35,
//         y: 30,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={viewport}
//       transition={{
//         duration: 0.72,
//         ease,
//       }}
//       className="group/section relative w-full overflow-hidden bg-[#1c1c1c] text-white"
//     >
//       {/* Automatically changing background images */}
//       <div className="absolute inset-0">
//         {resolvedTrucks.map(
//           (truck, index) => {
//             const offset =
//               (
//                 index -
//                 initialActiveIndex +
//                 totalTrucks
//               ) % totalTrucks;

//             const phaseStep =
//               (
//                 totalTrucks - offset
//               ) % totalTrucks;

//             const delay =
//               -(
//                 phaseStep *
//                 changeEverySeconds
//               );

//             const isInitiallyActive =
//               offset === 0;

//             return (
//               <motion.div
//                 key={`${truck.title}-background`}
//                 initial={false}
//                 animate={{
//                   opacity:
//                     activeTimeline.opacity,
//                   scale:
//                     activeTimeline.opacity.map(
//                       (value) =>
//                         value === 1
//                           ? 1
//                           : 1.025,
//                     ),
//                 }}
//                 transition={{
//                   duration:
//                     carouselDuration,
//                   delay,
//                   ease: "linear",
//                   repeat: Infinity,
//                   times:
//                     activeTimeline.times,
//                 }}
//                 style={{
//                   opacity:
//                     isInitiallyActive
//                       ? 1
//                       : 0,
//                   willChange:
//                     "opacity, transform",
//                 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={
//                     truck.image ??
//                     backgroundImage
//                   }
//                   alt=""
//                   fill
//                   priority={
//                     isInitiallyActive
//                   }
//                   sizes="100vw"
//                   className="object-cover object-center transition-transform duration-1000 group-hover/section:scale-[1.015] motion-reduce:transition-none"
//                 />
//               </motion.div>
//             );
//           },
//         )}
//       </div>

//       {/* Background overlays */}
//       <div className="pointer-events-none absolute inset-0 bg-black/30" />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/25" />

//       <div className="relative z-10">
//         {/* Desktop */}
//         <div className="mx-auto hidden min-h-[clamp(42rem,41.6667vw,50rem)] w-full max-w-[120rem] flex-col xl:flex">
//           {/* Heading content */}
//           <div className="w-full px-[9.375%] pt-[clamp(4.75rem,4.6875vw,5.625rem)]">
//             <motion.div
//               variants={contentVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewport}
//               className="w-[25.2%] min-w-[18rem] max-w-[24rem]"
//             >
//               <motion.h2
//                 variants={itemVariants}
//                 className="break-words font-['Outfit'] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.2] [overflow-wrap:anywhere]"
//               >
//                 {heading}
//               </motion.h2>

//               {description ? (
//                 <motion.p
//                   variants={itemVariants}
//                   className="mt-[6%] break-words font-['DM_Sans'] text-[clamp(0.75rem,0.94vw,1.125rem)] leading-[1.5] [overflow-wrap:anywhere]"
//                 >
//                   {description}
//                 </motion.p>
//               ) : null}

//               <motion.div
//                 variants={itemVariants}
//                 className="mt-[8%] inline-flex"
//               >
//                 <motion.div
//                   whileHover={{
//                     y: -4,
//                     scale: 1.025,
//                     boxShadow:
//                       "0 14px 32px rgba(179,75,12,0.3)",
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease,
//                   }}
//                 >
//                   <Link
//                     href={buttonHref}
//                     className="group/button inline-flex min-h-[clamp(2.125rem,2.3vw,2.75rem)] items-center overflow-hidden bg-[#b34b0c] px-5 py-1 font-['Outfit'] text-[clamp(0.8125rem,0.94vw,1.125rem)] font-medium capitalize transition-colors duration-300 hover:bg-[#c6530d]"
//                   >
//                     <span className="transition-transform duration-300 group-hover/button:translate-x-0.5">
//                       {buttonText}
//                     </span>
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Controls and cards */}
//           <div className="mt-auto grid w-full grid-cols-[9.375%_3.65%_1.0375%_78.125%_7.8125%] items-end">
//             <div />

//             {/* Original arrow appearance */}
//             <div
//               aria-hidden="true"
//               className="flex h-full min-h-[clamp(16rem,16.3vw,19.5625rem)] flex-col justify-end gap-[clamp(0.5rem,0.55vw,0.6875rem)] pb-[2.5%]"
//             >
//               <motion.div
//                 whileHover={{
//                   x: -4,
//                   y: -3,
//                   scale: 1.04,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                   ease,
//                 }}
//                 className="flex aspect-square w-full items-center justify-center bg-[#161616]"
//               >
//                 <Arrow direction="left" />
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   x: 4,
//                   y: -3,
//                   scale: 1.04,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                   ease,
//                 }}
//                 className="flex aspect-square w-full items-center justify-center bg-[#b34b0c]"
//               >
//                 <Arrow direction="right" />
//               </motion.div>
//             </div>

//             <div />

//             {/* Automatic text-card carousel */}
//             <div className="relative min-h-[clamp(16rem,16.3vw,19.5625rem)] overflow-hidden">
//               {resolvedTrucks.map(
//                 (truck, index) => {
//                   const offset =
//                     (
//                       index -
//                       initialActiveIndex +
//                       totalTrucks
//                     ) % totalTrucks;

//                   const phaseStep =
//                     (
//                       totalTrucks -
//                       offset
//                     ) % totalTrucks;

//                   const delay =
//                     -(
//                       phaseStep *
//                       changeEverySeconds
//                     );

//                   const initialPosition =
//                     offset < visibleCount
//                       ? {
//                           left:
//                             slots[offset],
//                           opacity: 1,
//                         }
//                       : {
//                           left: rightExit,
//                           opacity: 0,
//                         };

//                   const cardStyle: CardStyle =
//                     {
//                       width: `${cardWidthPercent}%`,
//                       left: `${initialPosition.left}%`,
//                       opacity:
//                         initialPosition.opacity,
//                       willChange:
//                         "left, opacity",
//                     };

//                   return (
//                     <motion.div
//                       key={`${truck.title}-desktop`}
//                       initial={false}
//                       animate={{
//                         left:
//                           cardTimeline.left,
//                         opacity:
//                           cardTimeline.opacity,
//                       }}
//                       transition={{
//                         duration:
//                           carouselDuration,
//                         delay,
//                         ease: "linear",
//                         repeat: Infinity,
//                         times:
//                           cardTimeline.times,
//                       }}
//                       style={cardStyle}
//                       className="absolute inset-y-0"
//                     >
//                       <motion.article
//                         whileHover={{
//                           y: -8,
//                           scale: 1.02,
//                           boxShadow:
//                             "0 22px 50px rgba(0,0,0,0.24)",
//                         }}
//                         transition={{
//                           duration: 0.28,
//                           ease,
//                         }}
//                         tabIndex={0}
//                         className="group/card relative isolate flex h-full cursor-default flex-col overflow-hidden bg-transparent px-[11.2%] pb-[12%] pt-[18.65%] outline-none focus-visible:ring-2 focus-visible:ring-[#b34b0c] focus-visible:ring-inset"
//                       >
//                         {/* Active orange background */}
//                         <motion.span
//                           initial={false}
//                           animate={{
//                             opacity:
//                               activeTimeline.opacity,
//                           }}
//                           transition={{
//                             duration:
//                               carouselDuration,
//                             delay,
//                             ease: "linear",
//                             repeat: Infinity,
//                             times:
//                               activeTimeline.times,
//                           }}
//                           style={{
//                             opacity:
//                               offset === 0
//                                 ? 1
//                                 : 0,
//                           }}
//                           aria-hidden="true"
//                           className="absolute inset-0 bg-[#b34b0c]/80"
//                         />

//                         {/* Active left rail */}
//                         <motion.span
//                           initial={false}
//                           animate={{
//                             opacity:
//                               activeTimeline.opacity,
//                             scaleY:
//                               activeTimeline.opacity,
//                           }}
//                           transition={{
//                             duration:
//                               carouselDuration,
//                             delay,
//                             ease: "linear",
//                             repeat: Infinity,
//                             times:
//                               activeTimeline.times,
//                           }}
//                           style={{
//                             opacity:
//                               offset === 0
//                                 ? 1
//                                 : 0,
//                             scaleY:
//                               offset === 0
//                                 ? 1
//                                 : 0,
//                           }}
//                           aria-hidden="true"
//                           className="absolute inset-y-0 left-0 w-[3px] origin-top bg-white/80"
//                         />

//                         <h3 className="relative z-10 max-w-[9.75rem] break-words font-['Outfit'] text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-[1.27] transition-transform duration-300 group-hover/card:-translate-y-0.5 [overflow-wrap:anywhere]">
//                           {truck.title}
//                         </h3>

//                         <p className="relative z-10 mt-[14%] max-w-[13rem] break-words font-['DM_Sans'] text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.38] [overflow-wrap:anywhere]">
//                           {truck.description}
//                         </p>

//                         {/* Active bottom line */}
//                         <motion.span
//                           initial={false}
//                           animate={{
//                             opacity:
//                               activeTimeline.opacity,
//                             scaleX:
//                               activeTimeline.opacity,
//                           }}
//                           transition={{
//                             duration:
//                               carouselDuration,
//                             delay,
//                             ease: "linear",
//                             repeat: Infinity,
//                             times:
//                               activeTimeline.times,
//                           }}
//                           style={{
//                             opacity:
//                               offset === 0
//                                 ? 1
//                                 : 0,
//                             scaleX:
//                               offset === 0
//                                 ? 1
//                                 : 0,
//                           }}
//                           aria-hidden="true"
//                           className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-white/90"
//                         />
//                       </motion.article>
//                     </motion.div>
//                   );
//                 },
//               )}
//             </div>

//             <div />
//           </div>
//         </div>

//         {/* Mobile and tablet */}
//         <div className="px-5 py-12 sm:px-8 xl:hidden">
//           <motion.div
//             variants={contentVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewport}
//             className="max-w-[26.875rem]"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-tight [overflow-wrap:anywhere]"
//             >
//               {heading}
//             </motion.h2>

//             {description ? (
//               <motion.p
//                 variants={itemVariants}
//                 className="mt-5 break-words font-['DM_Sans'] text-[0.8125rem] leading-[1.5] text-white/90 [overflow-wrap:anywhere]"
//               >
//                 {description}
//               </motion.p>
//             ) : null}

//             <motion.div
//               variants={itemVariants}
//               className="mt-6 inline-flex"
//             >
//               <Link
//                 href={buttonHref}
//                 className="group/button inline-flex min-h-10 items-center bg-[#b34b0c] px-5 py-2 font-['Outfit'] text-[0.8125rem] font-medium transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#c6530d] hover:shadow-[0_0.75rem_2rem_rgba(179,75,12,0.25)]"
//               >
//                 <span className="transition-transform duration-300 group-hover/button:translate-x-0.5">
//                   {buttonText}
//                 </span>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Original responsive grid */}
//           <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
//             {resolvedTrucks.map(
//               (truck, index) => {
//                 const offset =
//                   (
//                     index -
//                     initialActiveIndex +
//                     totalTrucks
//                   ) % totalTrucks;

//                 const phaseStep =
//                   (
//                     totalTrucks -
//                     offset
//                   ) % totalTrucks;

//                 const delay =
//                   -(
//                     phaseStep *
//                     changeEverySeconds
//                   );

//                 return (
//                   <motion.article
//                     key={`${truck.title}-mobile`}
//                     whileHover={{
//                       y: -7,
//                       scale: 1.015,
//                       boxShadow:
//                         "0 16px 40px rgba(0,0,0,0.22)",
//                     }}
//                     transition={{
//                       duration: 0.3,
//                       ease,
//                     }}
//                     tabIndex={0}
//                     className="group/card relative isolate min-h-[13.75rem] cursor-default overflow-hidden bg-[#161616]/80 p-6 outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-[#b34b0c] focus-visible:ring-inset"
//                   >
//                     <motion.span
//                       initial={false}
//                       animate={{
//                         opacity:
//                           activeTimeline.opacity,
//                       }}
//                       transition={{
//                         duration:
//                           carouselDuration,
//                         delay,
//                         ease: "linear",
//                         repeat: Infinity,
//                         times:
//                           activeTimeline.times,
//                       }}
//                       style={{
//                         opacity:
//                           offset === 0
//                             ? 1
//                             : 0,
//                       }}
//                       aria-hidden="true"
//                       className="absolute inset-0 bg-[#b34b0c]/80"
//                     />

//                     <h3 className="relative z-10 break-words font-['Outfit'] text-[1.125rem] font-semibold leading-snug transition-transform duration-300 group-hover/card:-translate-y-0.5 [overflow-wrap:anywhere]">
//                       {truck.title}
//                     </h3>

//                     <p className="relative z-10 mt-5 break-words font-['DM_Sans'] text-[0.75rem] leading-[1.5] [overflow-wrap:anywhere]">
//                       {truck.description}
//                     </p>
//                   </motion.article>
//                 );
//               },
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// function Arrow({
//   direction,
// }: {
//   direction: "left" | "right";
// }) {
//   return (
//     <motion.svg
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       className={`h-1/2 w-1/2 fill-none stroke-current stroke-2 ${
//         direction === "left"
//           ? "rotate-180"
//           : ""
//       }`}
//     >
//       <path d="m8 4 8 8-8 8" />
//     </motion.svg>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TruckType = {
  title: string;
  description: string;
  image?: string;
  active?: boolean;
};

export type OurTrucksProps = {
  backgroundImage?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  trucks?: TruckType[];
};

type VisibleTruck = {
  truck: TruckType;
  originalIndex: number;
  slotIndex: number;
};

const AUTO_CHANGE_DELAY = 3000;
const MAX_VISIBLE_CARDS = 5;
const CARD_GAP_PERCENTAGE = 2.667;

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -70px 0px",
} as const;

const contentVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: -44,
    y: 22,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.11,
    },
  },
};

const itemVariants: Variants = {
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
      duration: 0.5,
      ease,
    },
  },
};

const desktopCardVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 60 : -60,
  }),

  center: {
    opacity: 1,
    x: 0,
  },

  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -60 : 60,
  }),
};

const defaultTrucks: TruckType[] = [
  {
    title: "Dry Van Dispatch",
    image: "/Home/images/22_rectangle_1424.webp",
    description:
      "Standard 48 to 53 foot enclosed trailers moving retail goods, consumer products, and packaged freight through high-volume distribution corridors nationwide.",
    active: true,
  },
  {
    title: "Flatbed Dispatch",
    image:
      "/Home/images/Flatbed Dispatch Services.webp",
    description:
      "Open-deck trailers transporting construction materials, steel, lumber, and heavy machinery with tarping, strapping, and load securement compliance built into every booking.",
  },
  {
    title: "Step Deck Dispatch",
    image:
      "/Home/images/Step Deck Dispatch.webp",
    description:
      "Designed for 8.5 to 10 foot tall cargo including industrial machinery and construction equipment, with multi-state permit coordination and oversized load documentation.",
  },
  {
    title: "Reefer Dispatch",
    image:
      "/Home/images/Reefer Dispatch Services.webp",
    description:
      "Temperature-controlled trailers for food, pharmaceuticals, and perishables requiring cold chain integrity and direct relationships with food-grade brokers.",
  },
  {
    title: "Hotshot Dispatch",
    image:
      "/Home/images/Hotshot Truck Dispatching Services.webp",
    description:
      "Time-sensitive freight for oil fields, perishable cargo, and construction industries using 40-foot-plus trucks with same-day or next-day delivery turnaround.",
  },
  {
    title: "Box Truck Dispatch",
    image: "/Home/images/Box Truck.webp",
    description:
      "Straight trucks handling local and regional retail, household, and final-mile freight with careful route planning for dock access, liftgate needs, and appointment windows.",
  },
  {
    title: "Power Only Dispatch",
    image:
      "/Home/images/Power Only Dispatch Service.webp",
    description:
      "Tractor-only carriers pulling customer, broker, or leased trailers with drop-and-hook planning, trailer compatibility checks, and efficient empty-mile management.",
  },
  {
    title: "Conestoga Dispatch",
    image:
      "/Home/images/Conestoga Dispatch Services.webp",
    description:
      "Retractable-tarp trailers protecting steel, machinery, and specialized freight while preserving fast side-loading access and open-deck securement flexibility.",
  },
];

function getInitialActiveIndex(
  trucks: TruckType[],
): number {
  const activeIndex = trucks.findIndex(
    (truck) => truck.active,
  );

  return activeIndex >= 0 ? activeIndex : 0;
}

function getMovementDirection(
  currentIndex: number,
  targetIndex: number,
  total: number,
): 1 | -1 {
  if (
    total <= 1 ||
    currentIndex === targetIndex
  ) {
    return 1;
  }

  const forwardDistance =
    (targetIndex - currentIndex + total) %
    total;

  const backwardDistance =
    (currentIndex - targetIndex + total) %
    total;

  return forwardDistance <= backwardDistance
    ? 1
    : -1;
}

export default function OurTrucks({
  backgroundImage = "/Home/images/22_rectangle_1424.webp",
  heading = "Our Trucks",
  description = "E Truck Dispatching covers 8 equipment categories, each requiring distinct load board strategies, broker relationships, and securement knowledge.",
  buttonText = "View All States",
  buttonHref = "/states",
  trucks = defaultTrucks,
}: OurTrucksProps) {
  const resolvedTrucks =
    Array.isArray(trucks) && trucks.length > 0
      ? trucks
      : defaultTrucks;

  const totalTrucks = resolvedTrucks.length;

  const [activeIndex, setActiveIndex] =
    useState(() =>
      getInitialActiveIndex(resolvedTrucks),
    );

  const [direction, setDirection] =
    useState<1 | -1>(1);

  const [timerResetKey, setTimerResetKey] =
    useState(0);

  const safeActiveIndex =
    activeIndex >= 0 &&
    activeIndex < totalTrucks
      ? activeIndex
      : 0;

  useEffect(() => {
    if (activeIndex >= totalTrucks) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalTrucks]);

  useEffect(() => {
    if (totalTrucks <= 1) {
      return;
    }

    const timeoutId = window.setTimeout(
      () => {
        setDirection(1);

        setActiveIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            totalTrucks,
        );
      },
      AUTO_CHANGE_DELAY,
    );

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    safeActiveIndex,
    timerResetKey,
    totalTrucks,
  ]);

  const selectTruck = useCallback(
    (
      targetIndex: number,
      forcedDirection?: 1 | -1,
    ) => {
      if (totalTrucks <= 0) {
        return;
      }

      const normalizedIndex =
        ((targetIndex % totalTrucks) +
          totalTrucks) %
        totalTrucks;

      setDirection(
        forcedDirection ??
          getMovementDirection(
            safeActiveIndex,
            normalizedIndex,
            totalTrucks,
          ),
      );

      setActiveIndex(normalizedIndex);

      setTimerResetKey(
        (currentKey) => currentKey + 1,
      );
    },
    [safeActiveIndex, totalTrucks],
  );

  const showPreviousTruck =
    useCallback(() => {
      selectTruck(
        safeActiveIndex - 1,
        -1,
      );
    }, [
      safeActiveIndex,
      selectTruck,
    ]);

  const showNextTruck =
    useCallback(() => {
      selectTruck(
        safeActiveIndex + 1,
        1,
      );
    }, [
      safeActiveIndex,
      selectTruck,
    ]);

  const visibleCount = Math.min(
    totalTrucks,
    MAX_VISIBLE_CARDS,
  );

  const visibleTrucks =
    useMemo<VisibleTruck[]>(() => {
      return Array.from(
        {
          length: visibleCount,
        },
        (_, slotIndex) => {
          const originalIndex =
            (safeActiveIndex +
              slotIndex) %
            totalTrucks;

          return {
            truck:
              resolvedTrucks[
                originalIndex
              ],
            originalIndex,
            slotIndex,
          };
        },
      );
    }, [
      resolvedTrucks,
      safeActiveIndex,
      totalTrucks,
      visibleCount,
    ]);

  if (totalTrucks === 0) {
    return null;
  }

  const activeTruck =
    resolvedTrucks[safeActiveIndex];

  const activeImage =
    activeTruck.image ??
    backgroundImage;

  const cardWidthPercentage =
    (100 -
      (visibleCount - 1) *
        CARD_GAP_PERCENTAGE) /
    visibleCount;

  return (
    <motion.section
      initial={{
        opacity: 0.35,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.72,
        ease,
      }}
      className="group/section relative w-full overflow-hidden bg-[#1c1c1c] text-white"
    >
      {/* Background images */}
      <div className="absolute inset-0">
        <AnimatePresence
          initial={false}
        >
          <motion.div
            key={`${safeActiveIndex}-${activeImage}`}
            initial={{
              opacity: 0,
              scale: 1.025,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.015,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt=""
              fill
              priority={
                safeActiveIndex === 0
              }
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 group-hover/section:scale-[1.015] motion-reduce:transition-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/25" />

      <div className="relative z-10">
        {/* Desktop */}
        <div className="mx-auto hidden min-h-[clamp(42rem,41.6667vw,50rem)] w-full max-w-[120rem] flex-col xl:flex">
          {/* Heading content */}
          <div className="w-full px-[9.375%] pt-[clamp(4.75rem,4.6875vw,5.625rem)]">
            <motion.div
              variants={
                contentVariants
              }
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="w-[25.2%] min-w-[18rem] max-w-[24rem]"
            >
              <motion.h2
                variants={
                  itemVariants
                }
                className="break-words font-['Outfit'] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.2] [overflow-wrap:anywhere]"
              >
                {heading}
              </motion.h2>

              {description ? (
                <motion.p
                  variants={
                    itemVariants
                  }
                  className="mt-[6%] break-words font-['DM_Sans'] text-[clamp(0.75rem,0.94vw,1.125rem)] leading-[1.5] [overflow-wrap:anywhere]"
                >
                  {description}
                </motion.p>
              ) : null}

              <motion.div
                variants={
                  itemVariants
                }
                className="mt-[8%] inline-flex"
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.025,
                    boxShadow:
                      "0 14px 32px rgba(179,75,12,0.3)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
                >
                  <Link
                    href={
                      buttonHref
                    }
                    className="group/button inline-flex min-h-[clamp(2.125rem,2.3vw,2.75rem)] items-center overflow-hidden bg-[#b34b0c] px-5 py-1 font-['Outfit'] text-[clamp(0.8125rem,0.94vw,1.125rem)] font-medium capitalize transition-colors duration-300 hover:bg-[#c6530d]"
                  >
                    <span className="transition-transform duration-300 group-hover/button:translate-x-0.5">
                      {buttonText}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Controls and cards */}
          <div className="mt-auto grid w-full grid-cols-[9.375%_3.65%_1.0375%_78.125%_7.8125%] items-end">
            <div />

            {/* Arrow controls */}
            <div className="flex h-full min-h-[clamp(16rem,16.3vw,19.5625rem)] flex-col justify-end gap-[clamp(0.5rem,0.55vw,0.6875rem)] pb-[2.5%]">
              <motion.button
                type="button"
                onClick={
                  showPreviousTruck
                }
                aria-label="Show previous truck"
                whileHover={{
                  x: -4,
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.2,
                  ease,
                }}
                className="flex aspect-square w-full items-center justify-center bg-[#161616] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              >
                <Arrow direction="left" />
              </motion.button>

              <motion.button
                type="button"
                onClick={
                  showNextTruck
                }
                aria-label="Show next truck"
                whileHover={{
                  x: 4,
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.2,
                  ease,
                }}
                className="flex aspect-square w-full items-center justify-center bg-[#b34b0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              >
                <Arrow direction="right" />
              </motion.button>
            </div>

            <div />

            {/* Desktop cards */}
            <div className="relative min-h-[clamp(16rem,16.3vw,19.5625rem)] overflow-hidden">
              <motion.div
                layout
                className="absolute inset-0 flex items-stretch gap-[2.667%]"
              >
                <AnimatePresence
                  initial={false}
                  mode="popLayout"
                  custom={
                    direction
                  }
                >
                  {visibleTrucks.map(
                    ({
                      truck,
                      originalIndex,
                      slotIndex,
                    }) => {
                      const isActive =
                        slotIndex === 0;

                      return (
                        <motion.div
                          layout
                          custom={
                            direction
                          }
                          variants={
                            desktopCardVariants
                          }
                          initial="enter"
                          animate="center"
                          exit="exit"
                          key={`${originalIndex}-${truck.title}`}
                          transition={{
                            layout: {
                              duration: 0.6,
                              ease,
                            },
                            opacity: {
                              duration: 0.35,
                            },
                            x: {
                              duration: 0.6,
                              ease,
                            },
                          }}
                          style={{
                            width: `${cardWidthPercentage}%`,
                          }}
                          className="h-full shrink-0"
                        >
                          <motion.button
                            type="button"
                            onClick={() =>
                              selectTruck(
                                originalIndex,
                              )
                            }
                            aria-pressed={
                              isActive
                            }
                            whileHover={{
                              y: -8,
                              scale: 1.02,
                              boxShadow:
                                "0 22px 50px rgba(0,0,0,0.24)",
                            }}
                            whileTap={{
                              scale: 0.985,
                            }}
                            transition={{
                              duration: 0.28,
                              ease,
                            }}
                            className="group/card relative isolate flex h-full w-full cursor-pointer flex-col overflow-hidden bg-transparent px-[11.2%] pb-[12%] pt-[18.65%] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#b34b0c] focus-visible:ring-inset"
                          >
                            {/* Active background */}
                            <motion.span
                              initial={
                                false
                              }
                              animate={{
                                opacity:
                                  isActive
                                    ? 1
                                    : 0,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              aria-hidden="true"
                              className="absolute inset-0 bg-[#b34b0c]/80"
                            />

                            {/* Active left line */}
                            <motion.span
                              initial={
                                false
                              }
                              animate={{
                                opacity:
                                  isActive
                                    ? 1
                                    : 0,
                                scaleY:
                                  isActive
                                    ? 1
                                    : 0,
                              }}
                              transition={{
                                duration: 0.35,
                                ease,
                              }}
                              aria-hidden="true"
                              className="absolute inset-y-0 left-0 w-[3px] origin-top bg-white/80"
                            />

                            <h3 className="relative z-10 max-w-[9.75rem] break-words font-['Outfit'] text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-[1.27] transition-transform duration-300 group-hover/card:-translate-y-0.5 [overflow-wrap:anywhere]">
                              {truck.title}
                            </h3>

                            <p className="relative z-10 mt-[14%] max-w-[13rem] break-words font-['DM_Sans'] text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.38] [overflow-wrap:anywhere]">
                              {
                                truck.description
                              }
                            </p>

                            {/* Active bottom line */}
                            <motion.span
                              initial={
                                false
                              }
                              animate={{
                                opacity:
                                  isActive
                                    ? 1
                                    : 0,
                                scaleX:
                                  isActive
                                    ? 1
                                    : 0,
                              }}
                              transition={{
                                duration: 0.35,
                                ease,
                              }}
                              aria-hidden="true"
                              className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-white/90"
                            />
                          </motion.button>
                        </motion.div>
                      );
                    },
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div />
          </div>
        </div>

        {/* Mobile and tablet */}
        <div className="px-5 py-12 sm:px-8 xl:hidden">
          <motion.div
            variants={
              contentVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-[26.875rem]"
          >
            <motion.h2
              variants={
                itemVariants
              }
              className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-tight [overflow-wrap:anywhere]"
            >
              {heading}
            </motion.h2>

            {description ? (
              <motion.p
                variants={
                  itemVariants
                }
                className="mt-5 break-words font-['DM_Sans'] text-[0.8125rem] leading-[1.5] text-white/90 [overflow-wrap:anywhere]"
              >
                {description}
              </motion.p>
            ) : null}

            <motion.div
              variants={
                itemVariants
              }
              className="mt-6 inline-flex"
            >
              <Link
                href={buttonHref}
                className="group/button inline-flex min-h-10 items-center bg-[#b34b0c] px-5 py-2 font-['Outfit'] text-[0.8125rem] font-medium transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#c6530d] hover:shadow-[0_0.75rem_2rem_rgba(179,75,12,0.25)]"
              >
                <span className="transition-transform duration-300 group-hover/button:translate-x-0.5">
                  {buttonText}
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Responsive cards */}
          <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedTrucks.map(
              (truck, index) => {
                const isActive =
                  index ===
                  safeActiveIndex;

                return (
                  <motion.button
                    type="button"
                    key={`${truck.title}-${index}`}
                    onClick={() =>
                      selectTruck(
                        index,
                      )
                    }
                    aria-pressed={
                      isActive
                    }
                    whileHover={{
                      y: -7,
                      scale: 1.015,
                      boxShadow:
                        "0 16px 40px rgba(0,0,0,0.22)",
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className="group/card relative isolate min-h-[13.75rem] cursor-pointer overflow-hidden bg-[#161616]/80 p-6 text-left outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-[#b34b0c] focus-visible:ring-inset"
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        opacity:
                          isActive
                            ? 1
                            : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#b34b0c]/80"
                    />

                    <h3 className="relative z-10 break-words font-['Outfit'] text-[1.125rem] font-semibold leading-snug transition-transform duration-300 group-hover/card:-translate-y-0.5 [overflow-wrap:anywhere]">
                      {truck.title}
                    </h3>

                    <p className="relative z-10 mt-5 break-words font-['DM_Sans'] text-[0.75rem] leading-[1.5] [overflow-wrap:anywhere]">
                      {
                        truck.description
                      }
                    </p>
                  </motion.button>
                );
              },
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Arrow({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-1/2 w-1/2 fill-none stroke-current stroke-2 ${
        direction === "left"
          ? "rotate-180"
          : ""
      }`}
    >
      <path d="m8 4 8 8-8 8" />
    </svg>
  );
}