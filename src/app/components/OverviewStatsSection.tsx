import Image from "next/image";

type OverviewStatsSectionProps = {
  heading: string;
  paragraphs: string[];
  stats: string[][];
  asideHeading: string;
  challenges: string[];
  gallery: { src: string; alt: string }[];
};

export default function OverviewStatsSection({ heading, paragraphs, stats, asideHeading, challenges, gallery }: OverviewStatsSectionProps) {
  return <>
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-14 py-20 sm:w-[calc(100%-64px)] xl:grid-cols-[1fr_548px]">
      <div><h1 className="text-4xl font-bold leading-tight sm:text-6xl">{heading}</h1><div className="mt-7 max-w-[738px] space-y-5 text-lg leading-7 text-white/65">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-10 grid max-w-[570px] grid-cols-3 gap-4 text-center">{stats.map(([value, label]) => <div key={label}><p className="text-3xl font-bold text-[#b34b0c] sm:text-5xl">{value}</p><p className="mt-2 text-xs text-white/55 sm:text-sm">{label}</p></div>)}</div></div>
      <aside className="self-center rounded-[10px] bg-[#171717] p-8"><h2 className="text-2xl font-bold text-[#b34b0c]">{asideHeading}</h2><ul className="mt-6 space-y-3">{challenges.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />{item}</li>)}</ul></aside>
    </section>
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-8 sm:w-[calc(100%-64px)] md:grid-cols-3">{gallery.map(({ src, alt }) => <div key={src} className="relative h-72 overflow-hidden rounded-[10px]"><Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-l from-[#171717]/80 to-transparent" /></div>)}</section>
  </>;
}
