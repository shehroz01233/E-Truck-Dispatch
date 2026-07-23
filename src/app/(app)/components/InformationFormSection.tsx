import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import { fieldClass } from "./formStyles";

type IconType = "pin" | "phone" | "mail" | "clock";

export type InformationDetail = {
  label: string;
  value: string;
  icon: IconType;
};

const defaultDetails: InformationDetail[] = [
  {
    label: "Address",
    value: "447 Broadway, 2nd Floor, New York, NY 10013, USA",
    icon: "pin",
  },
  {
    label: "Phone",
    value: "+1 (347) 555-7284",
    icon: "phone",
  },
  {
    label: "Email",
    value: "dispatch@etruckdispatching.com",
    icon: "mail",
  },
  {
    label: "Hours",
    value: "Monday – Saturday: 8:00 AM – 8:00 PM (EST)",
    icon: "clock",
  },
];

const formFields = [
  ["Name *", "Your full name", "text", "name", "sm:col-span-2"],
  [
    "Company Name *",
    "Your company name",
    "text",
    "company",
    "sm:col-span-2",
  ],
  ["Phone *", "+1 (555) 000-0000", "tel", "phone", ""],
  ["Email *", "your@email.com", "email", "email", ""],
  [
    "Equipment Type *",
    "",
    "select",
    "equipment",
    "sm:col-span-2",
  ],
  [
    "Preferred Freight Lanes",
    "e.g., NY to FL, CA to TX",
    "text",
    "lanes",
    "sm:col-span-2",
  ],
  [
    "Fleet Size",
    "Number of trucks",
    "number",
    "fleetSize",
    "sm:col-span-2",
  ],
] as const;

const equipmentOptions = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Box Truck",
  "Power Only",
  "Other",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

const informationVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: -48,
    y: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: 52,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease: smoothEase,
      delayChildren: 0.16,
      staggerChildren: 0.075,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0.2,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const detailVariants: Variants = {
  hidden: {
    opacity: 0.15,
    x: -38,
    y: 14,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      delayChildren: 0.06,
    },
  },
  hover: {
    x: 7,
    scale: 1.012,
    borderColor: "rgba(179, 75, 12, 0.8)",
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    scale: 0.55,
    rotate: -12,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.12,
    rotate: 6,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

function InformationIcon({ type }: { type: IconType }) {
  const common = "h-5 w-5 fill-none stroke-current stroke-[1.8]";

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M7.1 3.5 4.7 5.9c-1.1 1.1.2 5.2 3.5 8.5s7.4 4.6 8.5 3.5l2.4-2.4-4-2-1.6 1.6c-1.7-.7-3.9-2.9-4.6-4.6l1.6-1.6-2-4Z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MessageForm() {
  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      action="#"
      className="relative h-fit overflow-hidden bg-white/[0.04] p-6 sm:p-10 lg:min-h-[818px]"
    >
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: {
              duration: 0.75,
              ease: smoothEase,
            },
          },
        }}
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[#b34b0c]"
      />

      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold"
      >
        Send Us a Message
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-2 text-sm leading-6 text-white/70"
      >
        Fill out the form below and our team will contact you shortly.
      </motion.p>

      <div className="mt-[26px] grid gap-x-[15px] gap-y-4 sm:grid-cols-2">
        {formFields.map(
          ([label, placeholder, type, name, className]) => (
            <motion.label
              key={name}
              variants={itemVariants}
              className={className}
            >
              <span className="mb-2 block text-sm font-medium uppercase tracking-wide">
                {label}
              </span>

              {type === "select" ? (
                <select
                  className={fieldClass}
                  name={name}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select equipment type
                  </option>

                  {equipmentOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  className={fieldClass}
                  name={name}
                  type={type}
                  min={name === "fleetSize" ? 1 : undefined}
                  placeholder={placeholder}
                  required={label.endsWith("*")}
                />
              )}
            </motion.label>
          ),
        )}

        <motion.button
          variants={itemVariants}
          whileHover={{
            y: -3,
            scale: 1.015,
            boxShadow: "0 12px 28px rgba(179, 75, 12, 0.3)",
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
            ease: smoothEase,
          }}
          className="mt-1 h-14 bg-[#b34b0c] text-lg font-medium transition-colors hover:bg-[#cf5a13] sm:col-span-2"
          type="submit"
        >
          Submit Message
        </motion.button>
      </div>
    </motion.form>
  );
}

export default function InformationFormSection({
  details = defaultDetails,
}: {
  details?: InformationDetail[];
}) {
  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-12 overflow-hidden pb-20 pt-20 sm:w-[calc(100%-64px)] lg:grid-cols-2 lg:pt-[174px] 2xl:grid-cols-[730px_730px] 2xl:gap-[100px]">
      <motion.div
        variants={informationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact Information
        </motion.h2>

        <motion.div
          variants={listVariants}
          className="mt-[30px] w-full space-y-[18px] lg:-ml-[10px] lg:max-w-[488px]"
        >
          {details.map((detail) => (
            <motion.article
              key={detail.label}
              variants={detailVariants}
              whileHover="hover"
              className="flex h-28 items-center gap-[22px] border border-transparent bg-[#171717] px-[30px]"
            >
              <motion.span
                variants={iconVariants}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b34b0c]"
              >
                <InformationIcon type={detail.icon} />
              </motion.span>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c95816]">
                  {detail.label}
                </p>

                <p className="mt-1 break-words text-base leading-6 text-white/90">
                  {detail.value}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <MessageForm />
    </section>
  );
}