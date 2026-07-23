import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: boolean;
};

export type OurServicesProps = {
  heading: ReactNode;
  description?: string;
  services: Service[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headerViewport = {
  once: true,
  amount: 0.6,
  margin: "0px 0px -50px 0px",
} as const;

const tileViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -55px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Section heading
|--------------------------------------------------------------------------
*/

const headerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Image animations
|--------------------------------------------------------------------------
*/

const imageInnerVariants: Variants = {
  hidden: {
    opacity: 0.35,
    scale: 1.12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.045,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const imageShadeVariants: Variants = {
  hidden: {
    opacity: 0.72,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const imageSweepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-130%",
  },
  visible: {
    opacity: [0, 0.38, 0],
    x: ["-130%", "0%", "130%"],
    transition: {
      delay: 0.18,
      duration: 0.95,
      ease: smoothEase,
      times: [0, 0.5, 1],
    },
  },
};

const accentSweepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-120%",
  },
  visible: {
    opacity: [0, 0.32, 0],
    x: ["-120%", "0%", "120%"],
    transition: {
      delay: 0.3,
      duration: 1.1,
      ease: smoothEase,
      times: [0, 0.5, 1],
    },
  },
};

/*
|--------------------------------------------------------------------------
| Text-card animations
|--------------------------------------------------------------------------
*/

const serviceTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: smoothEase,
    },
  },
  hover: {
    y: -3,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const serviceDescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

export default function OurServices({
  heading,
  description,
  services,
}: OurServicesProps) {
  return (
    <section className="bg-[#1c1c1c] px-[1rem] py-[3rem] text-white min-[30rem]:px-[1.5rem] min-[30rem]:py-[4rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:py-[5rem]">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[97.5rem] min-[30rem]:w-[calc(100%-3rem)] min-[48rem]:w-[calc(100%-4rem)] min-[64rem]:w-[calc(100%-6rem)]">
        {/* Heading */}
        <motion.header
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headerViewport}
          className="mx-auto text-center"
        >
          <motion.h2
            variants={headingVariants}
            className="font-['Outfit'] text-[1.875rem] font-bold leading-[1.15] text-white min-[48rem]:text-[2.375rem] min-[80rem]:text-[3rem] min-[80rem]:leading-[3.625rem]"
          >
            {heading}
          </motion.h2>

          {description ? (
            <motion.p
              variants={descriptionVariants}
              className="mx-auto mt-[1.25rem] max-w-[55rem] font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.55] text-white min-[48rem]:text-[1rem] min-[80rem]:mt-[2rem] min-[80rem]:text-[1.125rem] min-[80rem]:leading-[1.6875rem]"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.header>

        {/* Checkerboard grid */}
        <div className="mt-[2.5rem] grid items-stretch overflow-hidden min-[48rem]:grid-cols-2 min-[80rem]:mt-[3rem] min-[80rem]:grid-cols-4 min-[80rem]:[grid-auto-rows:minmax(22.5625rem,auto)]">
          {services.map((service, index) => (
            <ServicePair
              key={`${service.title}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePair({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const imageOrder =
    [
      "order-1 min-[80rem]:order-1",
      "order-1 min-[80rem]:order-3",
      "order-2 min-[80rem]:order-6",
      "order-2 min-[80rem]:order-8",
    ][index] || "order-1";

  const textOrder =
    [
      "order-2 min-[80rem]:order-2",
      "order-2 min-[80rem]:order-4",
      "order-1 min-[80rem]:order-5",
      "order-1 min-[80rem]:order-7",
    ][index] || "order-2";

  const isAccent = Boolean(service.accent);

  const imageDirection = [
    { x: -42, y: 0 },
    { x: 42, y: 0 },
    { x: 36, y: 24 },
    { x: -36, y: 24 },
  ][index] ?? {
    x: 0,
    y: 32,
  };

  const textDirection = [
    { x: 40, y: 0 },
    { x: -40, y: 0 },
    { x: -40, y: 20 },
    { x: 40, y: 20 },
  ][index] ?? {
    x: 0,
    y: 30,
  };

  const imageDelay = Math.min(index * 0.1, 0.3);
  const textDelay = Math.min(index * 0.1 + 0.08, 0.38);

  /*
   * The image wrapper is no longer clipped or fully transparent.
   * It only moves and scales into position.
   */
  const imageTileVariants: Variants = {
    hidden: {
      x: imageDirection.x,
      y: imageDirection.y,
      scale: 0.98,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: imageDelay,
        duration: 0.75,
        ease: smoothEase,
        delayChildren: 0.05,
      },
    },
    hover: {
      scale: 1.005,
      transition: {
        duration: 0.3,
        ease: smoothEase,
      },
    },
  };

  const textTileVariants: Variants = {
    hidden: {
      opacity: 0,
      x: textDirection.x,
      y: textDirection.y,
      scale: isAccent ? 0.94 : 0.97,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: textDelay,
        duration: 0.68,
        ease: smoothEase,
        delayChildren: 0.16,
        staggerChildren: 0.1,
      },
    },
    hover: {
      scale: 1.012,
      transition: {
        duration: 0.24,
        ease: smoothEase,
      },
    },
  };

  return (
    <div className="grid min-[80rem]:contents">
      {/* Image tile */}
      <motion.div
        variants={imageTileVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={tileViewport}
        className={`relative aspect-[390/361] overflow-hidden bg-[#161616] min-[80rem]:h-full min-[80rem]:min-h-[22.5625rem] min-[80rem]:aspect-auto ${imageOrder}`}
      >
        <motion.div
          variants={imageInnerVariants}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 47.9375rem) calc(100vw - 2rem), (max-width: 79.9375rem) calc((100vw - 4rem) / 2), (max-width: 95.9375rem) calc((100vw - 6rem) / 4), 390px"
            className="object-cover"
          />
        </motion.div>

        {/* Soft dark reveal layer */}
        <motion.div
          variants={imageShadeVariants}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#1c1c1c]"
        />

        {/* Thin orange light sweep */}
        <motion.div
          variants={imageSweepVariants}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[18%] skew-x-[-12deg] bg-[#b34b0c]"
        />

        {/* Accent image gets an extra sweep */}
        {isAccent ? (
          <motion.div
            variants={accentSweepVariants}
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[42%] skew-x-[-15deg] bg-[#b34b0c]"
          />
        ) : null}
      </motion.div>

      {/* Text tile */}
      <motion.article
        variants={textTileVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={tileViewport}
        className={`flex aspect-[390/361] flex-col items-center justify-center overflow-hidden bg-[#161616] px-[1.25rem] py-[2rem] text-center text-white transition-colors duration-300 ease-out hover:bg-[#b34b0c] min-[80rem]:h-full min-[80rem]:min-h-[22.5625rem] min-[80rem]:aspect-auto ${textOrder}`}
      >
        <motion.h3
          variants={serviceTitleVariants}
          className="w-full max-w-[20rem] font-['Outfit'] text-[1.0625rem] font-semibold leading-[1.35] text-white min-[48rem]:text-[1.125rem] min-[80rem]:text-[1.25rem] min-[80rem]:leading-[1.4]"
        >
          {service.title}
        </motion.h3>

        <motion.p
          variants={serviceDescriptionVariants}
          className="mt-[1.25rem] w-full max-w-[20rem] font-['DM_Sans'] text-[0.8125rem] font-normal leading-[1.55] text-white min-[48rem]:text-[0.875rem] min-[80rem]:text-[1rem] min-[80rem]:leading-[1.5]"
        >
          {service.description}
        </motion.p>
      </motion.article>
    </div>
  );
}