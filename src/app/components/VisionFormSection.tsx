import { ReactNode } from "react";

type VisionFormSectionProps = {
  heading: ReactNode;
  paragraphs: string[];
  fields: string[][];
  compactBottom?: boolean;
};

export default function VisionFormSection({
  heading,
  paragraphs,
  fields,
  compactBottom = false,
}: VisionFormSectionProps) {
  return (
    <section
      className={`mx-auto w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#161616] text-white sm:w-[calc(100%-4rem)] xl:h-[33.4375rem] ${
        compactBottom ? "mb-0" : "mb-[5rem]"
      }`}
    >
      <div className="grid gap-[3rem] px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] xl:grid-cols-[minmax(18rem,24rem)_minmax(0,48.1875rem)] xl:justify-between xl:px-[clamp(3rem,6.41vw,6.25rem)] xl:pb-0 xl:pt-[3.125rem]">
        <div className="max-w-[24rem] xl:self-center">
          <h2 className="text-[clamp(2.25rem,3.2vw,3rem)] font-bold leading-[1.08]">
            {heading}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${
                index === 0 ? "mt-[2rem]" : "mt-[1.5rem]"
              } text-[1.125rem] leading-[1.55] text-white/75`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <form
          className="mt-[2.5rem] grid gap-x-[2.0625rem] gap-y-[1.25rem] bg-[#1c1c1c] p-[1.5rem] sm:grid-cols-2 sm:p-[2.5rem] xl:mt-0 xl:w-full xl:min-h-[24.875rem] xl:px-[3.125rem] xl:py-[2.4375rem]"
          action="#"
        >
          {fields.map(([label, placeholder, type]) => (
            <label key={label}>
              <span className="mb-[0.75rem] block text-[1rem] font-medium text-white">
                {label}
              </span>

              <input
                className="h-[2.75rem] w-full bg-[#161616] px-[1.25rem] text-[0.875rem] text-white outline-none placeholder:text-white/50 focus:ring-1 focus:ring-[#b34b0c]"
                type={type || "text"}
                placeholder={placeholder}
              />
            </label>
          ))}

          <button
            className="h-[2.75rem] bg-[#b34b0c] text-[1.125rem] font-medium capitalize text-white hover:bg-[#cf5a13] sm:col-span-2"
            type="submit"
          >
            Get Started Now
          </button>
        </form>
      </div>
    </section>
  );
}
