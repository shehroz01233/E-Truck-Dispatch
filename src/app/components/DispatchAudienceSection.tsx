import type { ReactNode } from "react";

export type DispatchAudience = {
  title: string;
  description: string;
};

type DispatchAudienceSectionProps = {
  heading: ReactNode;
  audiences: DispatchAudience[];
};

export default function DispatchAudienceSection({
  heading,
  audiences,
}: DispatchAudienceSectionProps) {
  return (
    <section className="bg-[#1c1c1c] px-5 py-14 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[97.5rem]">
        <h2 className="mx-auto max-w-[44rem] text-center font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="min-h-[13.25rem] bg-[#c04d08] p-6 sm:p-8 lg:p-10"
            >
              <h3 className="font-outfit text-lg font-semibold leading-tight">
                {audience.title}
              </h3>
              <p className="mt-6 font-dm-sans text-sm leading-6 text-white/95">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
