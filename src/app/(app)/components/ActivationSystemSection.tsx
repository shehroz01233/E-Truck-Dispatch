// "use client";

// import Image from "next/image";
// import type { ReactNode } from "react";
// export type ActivationListItem = string | {
//   highlight?: string;
//   text: string;
// };
// export type ActivationCard = {
//   title: string;
//   items?: ActivationListItem[];
//   description?: string;
// };
// type Props = {
//   heading: ReactNode;
//   description: string;
//   cards: ActivationCard[];
//   image: string;
//   imageAlt?: string;
// };
// function CardList({
//   items
// }: {
//   items: ActivationListItem[];
// }) {
//   return <ul className="space-y-[0.625rem]">
//       {items.map((item, index) => <li key={index} className="flex min-w-0 items-start gap-[0.625rem] font-['DM_Sans'] text-[0.75rem] leading-[1.35] text-white/80">
        
//           <span className="mt-[0.375rem] h-[0.3125rem] w-[0.3125rem] shrink-0 rounded-full bg-[#b34b0c]" />

//           <span className="min-w-0">
//             {typeof item === "string" ? item : <>
//                 {item.highlight ? <span className="font-semibold text-[#b34b0c]">
//                     {item.highlight}
//                   </span> : null}
//                 {item.text}
//               </>}
//           </span>
//         </li>)}
//     </ul>;
// }
// function ActivationCardBlock({
//   card
// }: {
//   card: ActivationCard;
// }) {
//   return <article className="group relative min-h-[11.75rem] overflow-hidden border border-[#3f3f3f] bg-[#171717] px-[1.25rem] py-[1.25rem] text-white min-[75rem]:min-h-[12.875rem]">
      
//       <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b34b0c] to-transparent opacity-0   group-hover:opacity-100" />
//       <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-[28%] skew-x-[-18deg] bg-white/5 opacity-0    group-hover:left-[115%] group-hover:opacity-100" />

//       <h3 className="max-w-[14rem] font-['Outfit'] text-[1.125rem] font-semibold leading-[1.2] text-white">
//         {card.title}
//       </h3>

//       {card.items?.length ? <div className="mt-[0.875rem]">
//           <CardList items={card.items} />
//         </div> : null}

//       {card.description ? <p className="mt-[1rem] font-['DM_Sans'] text-[0.75rem] leading-[1.35] text-white/80">
//           {card.description}
//         </p> : null}
//     </article>;
// }
// export default function ActivationSystemSection({
//   heading,
//   description,
//   cards,
//   image,
//   imageAlt = "MC DOT activation system"
// }: Props) {
//   return <>
    
//     <section className="bg-[#1c1c1c] px-[1rem] py-[3rem] text-white sm:px-[2rem] sm:py-[4rem] lg:px-[3rem] min-[75rem]:py-[5rem]">
//       <div className="mx-auto grid w-full max-w-[97.5rem] gap-[1.5rem] min-[75rem]:grid-cols-[minmax(0,58.5rem)_minmax(0,37.5rem)] min-[75rem]:items-stretch">
//         <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 min-[75rem]:gap-[1rem]">
//           {cards.map((card) => <ActivationCardBlock key={card.title} card={card} />)}
//         </div>

//         <div className="flex min-w-0 flex-col">
//           <h2 className="max-w-[34rem] font-['Outfit'] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] min-[75rem]:text-[3rem]">
            
//             {heading}
//           </h2>

//           <p className="mt-[1.5rem] max-w-[34rem] font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/80 sm:text-[1rem] min-[75rem]:text-[1rem]">
            
//             {description}
//           </p>

//           <div className="group relative mt-[2rem] h-[14rem] w-full overflow-hidden bg-[#171717] sm:h-[18rem] min-[75rem]:mt-auto min-[75rem]:h-[16.125rem]">
            
//             <Image src={image} alt={imageAlt} fill sizes="(min-width: 1200px) 37.5rem, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)" className="object-cover object-center" />
            

//             <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/10 to-[#b34b0c]/20" />
//             <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-[30%] skew-x-[-18deg] bg-white/10 opacity-0    group-hover:left-[115%] group-hover:opacity-100" />
//           </div>
//         </div>
//       </div>
//     </section>
//     </>;
// }
import Image from "next/image";
import type { ReactNode } from "react";
import * as motion from "motion/react-client";

export type ActivationListItem =
  | string
  | {
      highlight?: string;
      text: string;
    };

export type ActivationCard = {
  title: string;
  items?: ActivationListItem[];
  description?: string;
};

type ActivationSystemSectionProps = {
  heading: ReactNode;
  description: string;
  cards: ActivationCard[];
  image: string;
  imageAlt?: string;
};

type CardListProps = {
  items: ActivationListItem[];
};

type ActivationCardBlockProps = {
  card: ActivationCard;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -70px 0px",
} as const;

function CardList({ items }: CardListProps) {
  return (
    <ul className="space-y-[0.625rem]">
      {items.map((item, index) => (
        <motion.li
          key={
            typeof item === "string"
              ? `${item}-${index}`
              : `${item.highlight ?? ""}-${item.text}-${index}`
          }
          initial={{
            opacity: 0,
            x: -12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.4,
            delay: index * 0.06,
            ease,
          }}
          className="flex min-w-0 items-start gap-[0.625rem] font-['DM_Sans'] text-[0.75rem] leading-[1.35] text-white/80"
        >
          <motion.span
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={viewport}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
              ease,
            }}
            className="mt-[0.375rem] h-[0.3125rem] w-[0.3125rem] shrink-0 rounded-full bg-[#b34b0c]"
          />

          <span className="min-w-0">
            {typeof item === "string" ? (
              item
            ) : (
              <>
                {item.highlight ? (
                  <span className="font-semibold text-[#b34b0c]">
                    {item.highlight}
                  </span>
                ) : null}

                {item.text}
              </>
            )}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function ActivationCardBlock({
  card,
  index,
}: ActivationCardBlockProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease,
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
      }}
      className="group relative min-h-[11.75rem] overflow-hidden border border-[#3f3f3f] bg-[#171717] px-[1.25rem] py-[1.25rem] text-white min-[75rem]:min-h-[12.875rem]"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b34b0c] to-transparent opacity-0 group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-[28%] skew-x-[-18deg] bg-white/5 opacity-0 group-hover:left-[115%] group-hover:opacity-100" />

      <motion.h3
        initial={{
          opacity: 0,
          y: 14,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={viewport}
        transition={{
          duration: 0.45,
          delay: index * 0.07 + 0.1,
          ease,
        }}
        className="max-w-[14rem] font-['Outfit'] text-[1.125rem] font-semibold leading-[1.2] text-white"
      >
        {card.title}
      </motion.h3>

      {card.items?.length ? (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.45,
            delay: index * 0.07 + 0.16,
            ease,
          }}
          className="mt-[0.875rem]"
        >
          <CardList items={card.items} />
        </motion.div>
      ) : null}

      {card.description ? (
        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.45,
            delay: index * 0.07 + 0.18,
            ease,
          }}
          className="mt-[1rem] font-['DM_Sans'] text-[0.75rem] leading-[1.35] text-white/80"
        >
          {card.description}
        </motion.p>
      ) : null}
    </motion.article>
  );
}

export default function ActivationSystemSection({
  heading,
  description,
  cards,
  image,
  imageAlt = "MC DOT activation system",
}: ActivationSystemSectionProps) {
  if (!cards?.length) {
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
      className="bg-[#1c1c1c] px-[1rem] py-[3rem] text-white sm:px-[2rem] sm:py-[4rem] lg:px-[3rem] min-[75rem]:py-[5rem]"
    >
      <div className="mx-auto grid w-full max-w-[97.5rem] gap-[1.5rem] min-[75rem]:grid-cols-[minmax(0,58.5rem)_minmax(0,37.5rem)] min-[75rem]:items-stretch">
        <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 min-[75rem]:gap-[1rem]">
          {cards.map((card, index) => (
            <ActivationCardBlock
              key={`${card.title}-${index}`}
              card={card}
              index={index}
            />
          ))}
        </div>

        <div className="flex min-w-0 flex-col">
          <motion.h2
            initial={{
              opacity: 0,
              x: 40,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="max-w-[34rem] font-['Outfit'] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] min-[75rem]:text-[3rem]"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              x: 35,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease,
            }}
            className="mt-[1.5rem] max-w-[34rem] font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/80 sm:text-[1rem] min-[75rem]:text-[1rem]"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={viewport}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            whileHover={{
              scale: 1.015,
            }}
            className="group relative mt-[2rem] h-[14rem] w-full overflow-hidden bg-[#171717] sm:h-[18rem] min-[75rem]:mt-auto min-[75rem]:h-[16.125rem]"
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1200px) 37.5rem, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)"
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/10 to-[#b34b0c]/20" />

            <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-[30%] skew-x-[-18deg] bg-white/10 opacity-0 group-hover:left-[115%] group-hover:opacity-100" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}