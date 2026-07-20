type BulletContent = {
  intro?: string;
  bullets: string[];
};
type ProcessStep = [title: string, content: string | string[] | BulletContent];
export default function ProcessGridSection({
  heading,
  steps
}: {
  heading: string;
  steps: ProcessStep[];
}) {
  return <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] pb-16 pt-28 sm:w-[calc(100%-64px)]">
      <div className="grid gap-x-5 gap-y-[17px] md:grid-cols-2 lg:grid-cols-3">
        <div className="flex min-h-64 items-start bg-[#b34b0c] px-[30px] py-8">
          <h2 className="max-w-[461px] font-['Outfit'] text-3xl font-bold leading-[1.2] text-white sm:text-4xl xl:text-[2.5rem]">
            {heading}
          </h2>
        </div>

        {steps.map(([title, content]) => {
        const isSimpleBulletList = Array.isArray(content);
        const isBulletObject = typeof content === "object" && content !== null && !Array.isArray(content);
        const bullets = isSimpleBulletList ? content : isBulletObject ? content.bullets : [];
        return <article key={title} className="min-h-64 bg-[#171717] px-[30px] py-8">
              <h3 className="font-['Outfit'] text-xl font-semibold leading-tight text-white">
                {title}
              </h3>

              {typeof content === "string" ? <p className="mt-5 font-['DM_Sans'] text-base leading-6 text-white">
                  {content}
                </p> : <>
                  {isBulletObject && content.intro ? <p className="mt-5 font-['DM_Sans'] text-base leading-6 text-white">
                      {content.intro}
                    </p> : null}

                  <ul className={`space-y-[9px] font-['DM_Sans'] text-sm leading-[1.25] text-white ${isBulletObject && content.intro ? "mt-[17px]" : "mt-5"}`}>
                    {bullets.map(item => <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </>}
            </article>;
      })}
      </div>
    </section>;
}
