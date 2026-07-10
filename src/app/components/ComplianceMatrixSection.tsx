
import Image from "next/image";

export type ComplianceCard = {
  title: string;
  intro?: string;
  items: string[];
  footer?: string;
};

type Props = {
  heading: string;
  description: string;
  cards: ComplianceCard[];
  image: string;
  imageAlt?: string;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-white/75">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComplianceCardBlock({ card }: { card: ComplianceCard }) {
  return (
    <article className="flex h-full min-h-80 flex-col bg-[#171717] p-5">
      <h3 className="text-xl font-semibold">{card.title}</h3>

      {card.intro ? (
        <p className="mt-6 text-sm leading-6 text-white/75">{card.intro}</p>
      ) : null}

      <BulletList items={card.items} />

      {card.footer ? (
        <p className="mt-6 text-sm leading-6 text-white/75">
          {card.footer}
        </p>
      ) : null}
    </article>
  );
}

export default function ComplianceMatrixSection({
  heading,
  description,
  cards,
  image,
  imageAlt = "Real-time compliance monitoring",
}: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] items-stretch gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-fr">
        <div className="flex h-full min-h-80 flex-col justify-center bg-[#b34b0c] p-[50px] md:col-span-2">
          <h2 className="max-w-[563px] text-4xl font-bold sm:text-5xl">
            {heading}
          </h2>

          <p className="mt-8 max-w-[578px] text-lg leading-7">
            {description}
          </p>
        </div>

        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`h-full min-h-80 ${
              index > 1 ? "xl:row-start-2" : ""
            }`}
          >
            <ComplianceCardBlock card={card} />
          </div>
        ))}

        <div className="relative h-full min-h-80 overflow-hidden md:col-span-2 xl:col-start-3 xl:row-start-2">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="767px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/50 to-[#b34b0c]/20" />
        </div>
      </div>
    </section>
  );
}