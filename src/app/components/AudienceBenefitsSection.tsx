import Image from "next/image";
type Props = { audiences: { title: string; image: string }[]; heading: string; benefits: string[] };
export default function AudienceBenefitsSection({ audiences, heading, benefits }: Props) {
  return <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-20 sm:w-[calc(100%-64px)]"><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{audiences.map(({ title, image }) => <article key={title} className="overflow-hidden bg-[#171717]"><div className="relative h-52"><Image src={image} alt={title} fill sizes="320px" className="object-contain" /></div><h3 className="p-5 text-xl font-semibold">{title}</h3></article>)}</div><h2 className="mt-20 text-center text-4xl font-bold sm:text-5xl">{heading}</h2><div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">{benefits.map((reason) => <p key={reason} className="flex min-h-36 items-center justify-center bg-[#171717] p-6 text-center text-lg">{reason}</p>)}</div></section>;
}
