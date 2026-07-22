import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type VisionFormSectionProps = {
  heading: ReactNode;
  paragraphs: string[];
  fields: string[][];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Whole section
|--------------------------------------------------------------------------
*/

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Left-side content
|--------------------------------------------------------------------------
*/

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.1,
      staggerChildren: 0.11,
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
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Form and fields
|--------------------------------------------------------------------------
*/

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.18,
      staggerChildren: 0.07,
    },
  },
};

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

export default function VisionFormSection({
  heading,
  paragraphs,
  fields,
}: VisionFormSectionProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="mx-auto mb-[5rem] w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#161616] text-white sm:w-[calc(100%-4rem)] xl:h-[33.4375rem]"
    >
      <div className="grid gap-[3rem] px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] xl:grid-cols-[minmax(18rem,24rem)_minmax(0,48.1875rem)] xl:justify-between xl:px-[clamp(3rem,6.41vw,6.25rem)] xl:pb-0 xl:pt-[3.125rem]">
        {/* Left-side content */}
        <motion.div
          variants={contentVariants}
          className="max-w-[24rem] xl:self-center"
        >
          <motion.h2
            variants={headingVariants}
            className="text-[clamp(2.25rem,3.2vw,3rem)] font-bold leading-[1.08]"
          >
            {heading}
          </motion.h2>

          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={`${paragraph}-${index}`}
              variants={paragraphVariants}
              className={`${
                index === 0 ? "mt-[2rem]" : "mt-[1.5rem]"
              } text-[1.125rem] leading-[1.55] text-white/75`}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          variants={formVariants}
          className="mt-[2.5rem] grid gap-x-[2.0625rem] gap-y-[1.25rem] bg-[#1c1c1c] p-[1.5rem] sm:grid-cols-2 sm:p-[2.5rem] xl:mt-0 xl:min-h-[24.875rem] xl:w-full xl:px-[3.125rem] xl:py-[2.4375rem]"
          action="#"
        >
          {fields.map(([label, placeholder, type], index) => {
            const fieldId = `vision-form-field-${index}`;

            const fieldName = label
              .trim()
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-");

            return (
              <motion.div
                key={`${label}-${index}`}
                variants={fieldVariants}
              >
                {/* Main field label */}
                <label
                  htmlFor={fieldId}
                  className="mb-[0.75rem] block text-[1rem] font-medium text-white"
                >
                  {label}
                </label>

                {/* Floating-placeholder field */}
                <div className="relative">
                  <input
                    id={fieldId}
                    name={fieldName}
                    type={type || "text"}
                    placeholder=" "
                    aria-label={label}
                    className="
                      peer
                      h-[2.875rem]
                      w-full
                      border
                      border-white/10
                      bg-[#161616]
                      px-[1.25rem]
                      pt-[0.25rem]
                      text-[0.875rem]
                      text-white
                      outline-none
                      transition-colors
                      duration-200
                      focus:border-[#b34b0c]
                    "
                  />

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-[0.875rem]
                      top-0
                      z-10
                      -translate-y-1/2
                      bg-[#1c1c1c]
                      px-[0.375rem]
                      text-[0.75rem]
                      text-white/70
                      transition-all
                      duration-200

                      peer-placeholder-shown:left-[1.25rem]
                      peer-placeholder-shown:top-1/2
                      peer-placeholder-shown:-translate-y-1/2
                      peer-placeholder-shown:bg-transparent
                      peer-placeholder-shown:px-0
                      peer-placeholder-shown:text-[0.875rem]
                      peer-placeholder-shown:text-white/50

                      peer-focus:left-[0.875rem]
                      peer-focus:top-0
                      peer-focus:-translate-y-1/2
                      peer-focus:bg-[#1c1c1c]
                      peer-focus:px-[0.375rem]
                      peer-focus:text-[0.75rem]
                      peer-focus:text-[#cf5a13]
                    "
                  >
                    {placeholder}
                  </span>
                </div>
              </motion.div>
            );
          })}

          <motion.button
            variants={buttonVariants}
            whileHover={{
              y: -2,
              scale: 1.01,
              transition: {
                duration: 0.2,
                ease: smoothEase,
              },
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="h-[2.75rem] bg-[#b34b0c] text-[1.125rem] font-medium capitalize text-white transition-colors hover:bg-[#cf5a13] sm:col-span-2"
            type="submit"
          >
            Get Started Now
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}