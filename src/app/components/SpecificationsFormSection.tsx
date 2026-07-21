import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type Specification = [value: string, label: string];

export type InformationCard = [
  title: string,
  content: string | string[],
];

type Props = {
  heading: string;
  description: string;
  backgroundImage: string;
  specifications: Specification[];
  trailerTypes: InformationCard[];
  specificationsHeading?: string;
  imageAlt?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -55px 0px",
} as const;

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.68,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease,
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
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
  hover: {
    y: -5,
    borderColor: "rgba(179, 75, 12, 0.8)",
    transition: {
      duration: 0.22,
      ease,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 42,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function SpecificationsFormSection({
  heading,
  description,
  backgroundImage,
  specifications,
  trailerTypes,
  specificationsHeading = "Core Specifications That Impact Dispatch Decisions",
  imageAlt = "Commercial trucking operations",
}: Props) {
  const hasFourSpecifications = specifications.length === 4;

  return (
    <section className="relative isolate overflow-hidden py-14 text-white lg:py-[50px] xl:h-[692px]">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{
          duration: 1.2,
          ease,
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-[#171717]/90" />

      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-12 sm:w-[calc(100%-64px)] xl:grid-cols-[minmax(0,928px)_500px] xl:gap-[131px]">
        {/* Left content */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="min-w-0"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="max-w-[882px] font-['Outfit'] text-4xl font-bold leading-[1.2] sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-8 max-w-[767px] font-['DM_Sans'] text-base font-normal leading-7 text-white sm:text-lg"
          >
            {description}
          </motion.p>

          {specificationsHeading ? (
            <motion.h3
              variants={fadeUpVariants}
              className="mt-10 font-['Outfit'] text-xl font-semibold"
            >
              {specificationsHeading}
            </motion.h3>
          ) : null}

          {/* Specification boxes */}
          <motion.div
            variants={gridVariants}
            className={`grid gap-3 sm:grid-cols-2 ${
              specificationsHeading ? "mt-7" : "mt-[54px]"
            } ${
              hasFourSpecifications
                ? "xl:max-w-[852px] xl:grid-cols-4 xl:gap-7"
                : "xl:grid-cols-[320px_224px_112px]"
            }`}
          >
            {specifications.map(([value, label], index) => (
              <motion.article
                key={`${value}-${label}`}
                variants={cardVariants}
                whileHover="hover"
                className={`flex min-h-28 flex-col items-center justify-center border border-transparent bg-white/5 px-5 py-4 text-center backdrop-blur-[20.5px] ${
                  !hasFourSpecifications && index === 0
                    ? "sm:col-span-2 xl:col-span-2 xl:items-start xl:text-left"
                    : ""
                }`}
              >
                <strong className="font-['Outfit'] text-3xl font-bold leading-none">
                  {value}
                </strong>

                <p className="mt-4 font-['DM_Sans'] text-xl font-bold leading-none">
                  {label}
                </p>
              </motion.article>
            ))}
          </motion.div>

          {/* Information cards */}
          <motion.div
            variants={gridVariants}
            className="mt-[37px] grid gap-5 md:grid-cols-3 xl:max-w-[928px] xl:gap-8"
          >
            {trailerTypes.map(([title, content]) => (
              <motion.article
                key={title}
                variants={cardVariants}
                whileHover="hover"
                className="min-h-52 border border-transparent bg-[#171717] p-5"
              >
                <h4 className="font-['Outfit'] text-xl font-semibold leading-tight">
                  {title}
                </h4>

                {Array.isArray(content) ? (
                  <ul className="mt-6 space-y-3">
                    {content.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-[10px] font-['DM_Sans'] text-sm leading-5 text-white"
                      >
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 font-['DM_Sans'] text-sm leading-5 text-white/80">
                    {content}
                  </p>
                )}
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          action="#"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="h-fit bg-white/5 p-5 backdrop-blur-[20.5px] xl:mt-[58px] xl:h-[476px]"
        >
          <h3 className="text-center font-['Outfit'] text-3xl font-bold capitalize leading-9">
            Get a Free Load
          </h3>

          <div className="mt-8 space-y-5">
            {[
              ["Full Name", "Enter Full Name", "text", "fullName"],
              ["Number", "Your Number", "tel", "phone"],
              ["Email", "youremail@gmail.com", "email", "email"],
            ].map(([label, placeholder, type, name]) => (
              <label key={name} className="block">
                <span className="mb-3 block font-['DM_Sans'] text-lg font-normal">
                  {label}
                </span>

                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className="h-12 w-full bg-[#171717] px-5 font-['DM_Sans'] text-lg text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#b34b0c]"
                />
              </label>
            ))}

            <motion.button
              type="submit"
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease,
              }}
              className="h-11 w-full bg-[#b34b0c] font-['Outfit'] text-lg font-medium capitalize text-white transition-colors hover:bg-[#cf5a13]"
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}