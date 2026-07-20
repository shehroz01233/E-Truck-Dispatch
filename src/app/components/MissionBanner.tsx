export default function MissionBanner({ heading, children }: { heading: string; children: string }) {
  return <section className="mx-auto mt-[110px] min-h-96 w-[calc(100%-40px)] max-w-[1560px] rounded-[10px] bg-gradient-to-r from-[#b34b0c] to-[#8e3908] p-8 sm:w-[calc(100%-64px)] sm:p-12"><span className="text-5xl" aria-hidden="true">◎</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">{heading}</h2><p className="mt-7 max-w-[1455px] text-lg leading-8 sm:text-xl">{children}</p></section>;
}
