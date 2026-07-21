// "use client";

// import Image from "next/image";
// import Link from "next/link";
// const stats = [["300+", "Active Trucks", "Trucks we dispatch"], ["60+", "Team Members", "Experienced dispatchers"], ["150+", "MC Clients", "Actively working with us."], ["3+", "Years Experience", "Proven experience in truck"]];
// export default function Hero() {
//   return <section className="relative bg-[#171717] text-white">
//       <div className="relative min-h-[32.5rem] overflow-hidden sm:min-h-[35.625rem] lg:min-h-[35rem] xl:min-h-[36.875rem]">
//         <Image src="/Home/images/1_best_trucking_service__in_the_usa__e_truck_dispatching.webp" alt="Black semi truck driving through a mountain landscape" fill preload sizes="100vw" className="object-cover object-[64%_center] sm:object-[58%_center] lg:object-center" />
        
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent lg:from-black/65" />

//         <div className="relative z-10 mx-auto flex w-full max-w-[97.5rem] px-4 pb-10 pt-[8.5rem] min-[23.4375rem]:px-5 sm:px-8 sm:pt-[9rem] lg:px-16 lg:pt-[9.5rem] xl:px-[5.375rem]">
//           <div className="max-w-[36.875rem] sm:max-w-[33.125rem] lg:max-w-[37.5rem]">



            
//             <h1 className="text-[1.8125rem] font-bold leading-[1.08] tracking-[-0.035em] min-[24.375rem]:text-[2rem] sm:text-[2.375rem] lg:text-[2.625rem]">

              
//               Best Trucking Service
//               <br />In The USA
//               <span className="mt-2 block text-[2.0625rem] min-[24.375rem]:text-[2.25rem] sm:text-[2.6875rem] lg:text-[3rem]">E Truck Dispatching</span>
//             </h1>

//             <p className="mt-5 max-w-[35rem] text-[0.6875rem] leading-[1.5] text-white/90 sm:mt-6 sm:text-[0.75rem] lg:text-[0.75rem]">

              
//               Owner operators lose productive driving hours managing load boards, broker calls, and back office paperwork daily. E Truck Dispatching eliminates this operational drag by handling load booking, rate negotiation, broker communication, and same day invoice submission across all 48 states. You drive. We manage everything between pickup and payment.
//             </p>

//             <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">

              
//               <span className="flex items-center gap-1.5"><ReviewLogo src="/Home/images/4_rectangle_1060.webp" alt="Google" width={28} /><span className="text-[0.5625rem] tracking-[-0.0625rem] text-[#ffd323]">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span>
//               <span className="flex flex-col gap-1"><ReviewLogo src="/Home/images/11_rectangle_1067.webp" alt="Trustpilot" width={90} /><ReviewLogo src="/Home/images/12_rectangle_1068.webp" alt="Five star Trustpilot rating" width={74} /></span>
//               <ReviewLogo src="/Home/images/13_rectangle_1069.webp" alt="Yelp" width={62} />
//               <ReviewLogo src="/Home/images/14_rectangle_1070.webp" alt="Clutch" width={72} />
//             </div>

//             <div className="mt-6 inline-flex">




              
//               <Link href="/contact" className="inline-flex min-h-10 items-center bg-[#d95408] px-5 py-2 text-[0.6875rem] font-bold  hover:bg-[#f26718]">
//                 Start Trucking Dispatch
//               </Link>
//             </div>
//           </div>
//         </div>

//         <SideActions />
//       </div>

//       <LeadForm />

//       <div className="relative z-20 bg-[#1b1b1b]">
//         <div className="mx-auto grid w-full max-w-[97.5rem] grid-cols-2 gap-x-3 gap-y-7 px-4 py-8 min-[23.4375rem]:gap-x-5 min-[23.4375rem]:px-5 sm:px-8 md:grid-cols-4 lg:pr-[28.75rem] lg:pl-16 xl:pl-[5.375rem]">
//           {stats.map(([value, label, description]) => <div key={label}>
//               <strong className="block text-[1.6875rem] font-bold leading-none sm:text-[1.875rem]">{value}</strong>
//               <span className="mt-2.5 block text-[0.6875rem] font-bold sm:text-[0.75rem]">{label}</span>
//               <span className="mt-1.5 block text-[0.5625rem] text-white/75">{description}</span>
//             </div>)}
//         </div>
//       </div>
//     </section>;
// }
// function ReviewLogo({
//   src,
//   alt,
//   width
// }: {
//   src: string;
//   alt: string;
//   width: number;
// }) {
//   return <span className="inline-flex">


      
//       <Image src={src} alt={alt} width={width} height={30} className="h-auto max-h-8 w-auto object-contain" />
//     </span>;
// }
// function LeadForm() {
//   return <form className="relative z-30 mx-4 mb-8 space-y-4 bg-[#191919] p-4 shadow-2xl min-[23.4375rem]:mx-5 min-[23.4375rem]:p-5 sm:mx-8 sm:p-6 lg:absolute lg:bottom-5 lg:right-16 lg:mb-0 lg:w-[25rem] lg:p-6 xl:right-[5.375rem]">



      
//       <FormField label="Full Name" name="fullName" type="text" placeholder="Enter Full Name" />
//       <FormField label="Phone Number" name="phone" type="tel" placeholder="+1(000) 123-1234" />
//       <FormField label="Email Address" name="email" type="email" placeholder="email@gmail.com" />
//       <button type="submit" className="min-h-10 w-full bg-[#d95408] px-3 py-2 text-[0.6875rem] font-bold  hover:bg-[#f26718]">



        
//         Get Started Now
//       </button>
//     </form>;
// }
// function FormField({
//   label,
//   name,
//   type,
//   placeholder
// }: {
//   label: string;
//   name: string;
//   type: string;
//   placeholder: string;
// }) {
//   return <label className="block text-[0.6875rem] font-semibold">
//       {label}
//       <input name={name} type={type} placeholder={placeholder} className="mt-1.5 min-h-10 w-full border-0 bg-[#1f1f1f] px-3 py-2 text-[0.625rem] font-normal text-white outline-none placeholder:text-white/30 focus:ring-1 focus:ring-[#d95408]" />
//     </label>;
// }
// function SideActions() {
//   return <>
//       <div className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 sm:flex">
//         <a href="tel:+12164005753" aria-label="Call us" className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]">TEL</a>
//         <a href="mailto:dispatch@mnatransport.com" aria-label="Email us" className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]">@</a>
//       </div>
//       <div className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 lg:flex">
//         {['f', 'X', 'in', 'ig'].map(item => <span key={item} className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]">{item}</span>)}
//       </div>
//     </>;
// }
import Image from "next/image";
import Link from "next/link";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

const stats = [
  ["300+", "Active Trucks", "Trucks we dispatch"],
  ["60+", "Team Members", "Experienced dispatchers"],
  ["150+", "MC Clients", "Actively working with us."],
  ["3+", "Years Experience", "Proven experience in truck"],
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
  hidden: {
    opacity: 0.25,
    x: -46,
    y: 22,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
      delayChildren: 0.18,
      staggerChildren: 0.11,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 22,
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

const reviewVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0.25,
    x: 58,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.42,
      duration: 0.75,
      ease,
      delayChildren: 0.18,
      staggerChildren: 0.09,
    },
  },
};

const statsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 28,
    scale: 0.96,
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#171717] text-white">
      <div className="relative min-h-[32.5rem] overflow-hidden sm:min-h-[35.625rem] lg:min-h-[35rem] xl:min-h-[36.875rem]">
        {/* Background image */}
        <motion.div
          initial={{
            scale: 1.1,
            x: 18,
          }}
          animate={{
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.35,
            ease,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/Home/images/1_best_trucking_service__in_the_usa__e_truck_dispatching.webp"
            alt="Black semi truck driving through a mountain landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center] sm:object-[58%_center] lg:object-center"
          />
        </motion.div>

        {/* Background treatment */}
        <motion.div
          initial={{ opacity: 0.45 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease,
          }}
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent lg:from-black/65"
        />

        {/* Subtle orange scan */}
        <motion.span
          initial={{
            opacity: 0,
            x: "-160%",
          }}
          animate={{
            opacity: [0, 0.15, 0],
            x: ["-160%", "0%", "160%"],
          }}
          transition={{
            delay: 0.5,
            duration: 1.35,
            ease,
            times: [0, 0.5, 1],
          }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[14%] skew-x-[-17deg] bg-[#d95408]"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[97.5rem] px-4 pb-10 pt-[8.5rem] min-[23.4375rem]:px-5 sm:px-8 sm:pt-[9rem] lg:px-16 lg:pt-[9.5rem] xl:px-[5.375rem]">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[36.875rem] sm:max-w-[33.125rem] lg:max-w-[37.5rem]"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[1.8125rem] font-bold leading-[1.08] tracking-[-0.035em] min-[24.375rem]:text-[2rem] sm:text-[2.375rem] lg:text-[2.625rem]"
            >
              Best Trucking Service
              <br />
              In The USA

              <span className="mt-2 block text-[2.0625rem] min-[24.375rem]:text-[2.25rem] sm:text-[2.6875rem] lg:text-[3rem]">
                E Truck Dispatching
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-[35rem] text-[0.6875rem] leading-[1.5] text-white/90 sm:mt-6 sm:text-[0.75rem] lg:text-[0.75rem]"
            >
              Owner operators lose productive driving hours managing load
              boards, broker calls, and back office paperwork daily. E Truck
              Dispatching eliminates this operational drag by handling load
              booking, rate negotiation, broker communication, and same day
              invoice submission across all 48 states. You drive. We manage
              everything between pickup and payment.
            </motion.p>

            <motion.div
              variants={reviewVariants}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <motion.span
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                transition={{ duration: 0.2, ease }}
                className="flex items-center gap-1.5"
              >
                <ReviewLogo
                  src="/Home/images/4_rectangle_1060.webp"
                  alt="Google"
                  width={28}
                />

                <span className="text-[0.5625rem] tracking-[-0.0625rem] text-[#ffd323]">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </motion.span>

              <motion.span
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                transition={{ duration: 0.2, ease }}
                className="flex flex-col gap-1"
              >
                <ReviewLogo
                  src="/Home/images/11_rectangle_1067.webp"
                  alt="Trustpilot"
                  width={90}
                />

                <ReviewLogo
                  src="/Home/images/12_rectangle_1068.webp"
                  alt="Five star Trustpilot rating"
                  width={74}
                />
              </motion.span>

              <motion.span
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.06,
                }}
                transition={{ duration: 0.2, ease }}
              >
                <ReviewLogo
                  src="/Home/images/13_rectangle_1069.webp"
                  alt="Yelp"
                  width={62}
                />
              </motion.span>

              <motion.span
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.06,
                }}
                transition={{ duration: 0.2, ease }}
              >
                <ReviewLogo
                  src="/Home/images/14_rectangle_1070.webp"
                  alt="Clutch"
                  width={72}
                />
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 inline-flex">
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  boxShadow: "0 14px 30px rgba(217, 84, 8, 0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  duration: 0.2,
                  ease,
                }}
              >
                <Link
                  href="/contact"
                  className="inline-flex min-h-10 items-center bg-[#d95408] px-5 py-2 text-[0.6875rem] font-bold transition-colors hover:bg-[#f26718]"
                >
                  Start Trucking Dispatch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <SideActions />
      </div>

      <LeadForm />

      {/* Statistics */}
      <div className="relative z-20 overflow-hidden bg-[#1b1b1b]">
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="mx-auto grid w-full max-w-[97.5rem] grid-cols-2 gap-x-3 gap-y-7 px-4 py-8 min-[23.4375rem]:gap-x-5 min-[23.4375rem]:px-5 sm:px-8 md:grid-cols-4 lg:pl-16 lg:pr-[28.75rem] xl:pl-[5.375rem]"
        >
          {stats.map(([value, label, description]) => (
            <motion.div
              key={label}
              variants={statVariants}
              whileHover={{
                y: -5,
                x: 3,
              }}
              transition={{
                duration: 0.2,
                ease,
              }}
            >
              <strong className="block text-[1.6875rem] font-bold leading-none sm:text-[1.875rem]">
                {value}
              </strong>

              <span className="mt-2.5 block text-[0.6875rem] font-bold sm:text-[0.75rem]">
                {label}
              </span>

              <span className="mt-1.5 block text-[0.5625rem] text-white/75">
                {description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReviewLogo({
  src,
  alt,
  width,
}: {
  src: string;
  alt: string;
  width: number;
}) {
  return (
    <span className="inline-flex">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={30}
        className="h-auto max-h-8 w-auto object-contain"
      />
    </span>
  );
}

function LeadForm() {
  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="relative z-30 mx-4 mb-8 space-y-4 bg-[#191919] p-4 shadow-2xl min-[23.4375rem]:mx-5 min-[23.4375rem]:p-5 sm:mx-8 sm:p-6 lg:absolute lg:bottom-5 lg:right-16 lg:mb-0 lg:w-[25rem] lg:p-6 xl:right-[5.375rem]"
    >
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: {
              delay: 0.1,
              duration: 0.7,
              ease,
            },
          },
        }}
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[#d95408]"
      />

      <FormField
        label="Full Name"
        name="fullName"
        type="text"
        placeholder="Enter Full Name"
      />

      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="+1(000) 123-1234"
      />

      <FormField
        label="Email Address"
        name="email"
        type="email"
        placeholder="email@gmail.com"
      />

      <motion.button
        variants={itemVariants}
        whileHover={{
          y: -3,
          scale: 1.015,
          boxShadow: "0 12px 28px rgba(217, 84, 8, 0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.2,
          ease,
        }}
        type="submit"
        className="min-h-10 w-full bg-[#d95408] px-3 py-2 text-[0.6875rem] font-bold transition-colors hover:bg-[#f26718]"
      >
        Get Started Now
      </motion.button>
    </motion.form>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <motion.label
      variants={itemVariants}
      className="block text-[0.6875rem] font-semibold"
    >
      {label}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 min-h-10 w-full border-0 bg-[#1f1f1f] px-3 py-2 text-[0.625rem] font-normal text-white outline-none transition-[box-shadow,background-color] placeholder:text-white/30 focus:bg-[#232323] focus:ring-1 focus:ring-[#d95408]"
      />
    </motion.label>
  );
}

function SideActions() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0.25,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.75,
          duration: 0.6,
          ease,
        }}
        className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 sm:flex"
      >
        <motion.a
          href="tel:+12164005753"
          aria-label="Call us"
          whileHover={{
            x: 5,
            scale: 1.08,
          }}
          transition={{ duration: 0.2, ease }}
          className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]"
        >
          TEL
        </motion.a>

        <motion.a
          href="mailto:dispatch@mnatransport.com"
          aria-label="Email us"
          whileHover={{
            x: 5,
            scale: 1.08,
          }}
          transition={{ duration: 0.2, ease }}
          className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]"
        >
          @
        </motion.a>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0.25,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
          ease,
        }}
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      >
        {["f", "X", "in", "ig"].map((item) => (
          <motion.span
            key={item}
            whileHover={{
              x: -5,
              scale: 1.08,
            }}
            transition={{ duration: 0.2, ease }}
            className="grid h-7 w-7 place-items-center bg-[#c94f09] text-[0.625rem]"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}