import Image from "next/image";

export type Specification = [value: string, label: string];

export type InformationCard = [
  title: string,
  content: string | string[],
];

type Props = {
  heading: string;
  description: string;
  backgroundImage: string;
  specifications: Specification[];
  trailerTypes: InformationCard[];
  specificationsHeading?: string;
  imageAlt?: string;
};

export default function SpecificationsFormSection({
  heading,
  description,
  backgroundImage,
  specifications,
  trailerTypes,
  specificationsHeading = "Core Specifications That Impact Dispatch Decisions",
  imageAlt = "Commercial trucking operations",
}: Props) {
  const hasFourSpecifications = specifications.length === 4;

  return (
    <section className="relative isolate overflow-hidden py-14 text-white lg:py-[50px] xl:h-[692px]">
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-[#171717]/90" />

      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-12 sm:w-[calc(100%-64px)] xl:grid-cols-[minmax(0,928px)_500px] xl:gap-[131px]">
        {/* Left content */}
        <div className="min-w-0">
          <h2 className="max-w-[882px] font-['Outfit'] text-4xl font-bold leading-[1.2] sm:text-5xl">
            {heading}
          </h2>

          <p className="mt-8 max-w-[767px] font-['DM_Sans'] text-base font-normal leading-7 text-white sm:text-lg">
            {description}
          </p>

          {specificationsHeading ? (
            <h3 className="mt-10 font-['Outfit'] text-xl font-semibold">
              {specificationsHeading}
            </h3>
          ) : null}

          {/* Specification boxes */}
          <div
            className={`grid gap-3 sm:grid-cols-2 ${
              specificationsHeading ? "mt-7" : "mt-[54px]"
            } ${
              hasFourSpecifications
                ? "xl:max-w-[852px] xl:grid-cols-4 xl:gap-7"
                : "xl:grid-cols-[320px_224px_112px]"
            }`}
          >
            {specifications.map(([value, label], index) => (
              <article
                key={`${value}-${label}`}
                className={`flex min-h-28 flex-col items-center justify-center bg-white/5 px-5 py-4 text-center backdrop-blur-[20.5px] ${
                  !hasFourSpecifications && index === 0
                    ? "sm:col-span-2 xl:col-span-2 xl:items-start xl:text-left"
                    : ""
                }`}
              >
                <strong className="font-['Outfit'] text-3xl font-bold leading-none">
                  {value}
                </strong>

                <p className="mt-4 font-['DM_Sans'] text-xl font-bold leading-none">
                  {label}
                </p>
              </article>
            ))}
          </div>

          {/* Information cards */}
          <div className="mt-[37px] grid gap-5 md:grid-cols-3 xl:max-w-[928px] xl:gap-8">
            {trailerTypes.map(([title, content]) => (
              <article
                key={title}
                className="min-h-52 bg-[#171717] p-5"
              >
                <h4 className="font-['Outfit'] text-xl font-semibold leading-tight">
                  {title}
                </h4>

                {Array.isArray(content) ? (
                  <ul className="mt-6 space-y-3">
                    {content.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-[10px] font-['DM_Sans'] text-sm leading-5 text-white"
                      >
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 font-['DM_Sans'] text-sm leading-5 text-white/80">
                    {content}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          action="#"
          className="h-fit bg-white/5 p-5 backdrop-blur-[20.5px] xl:mt-[58px] xl:h-[476px]"
        >
          <h3 className="text-center font-['Outfit'] text-3xl font-bold capitalize leading-9">
            Get a Free Load
          </h3>

          <div className="mt-8 space-y-5">
            {[
              ["Full Name", "Enter Full Name", "text", "fullName"],
              ["Number", "Your Number", "tel", "phone"],
              ["Email", "youremail@gmail.com", "email", "email"],
            ].map(([label, placeholder, type, name]) => (
              <label key={name} className="block">
                <span className="mb-3 block font-['DM_Sans'] text-lg font-normal">
                  {label}
                </span>

                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className="h-12 w-full bg-[#171717] px-5 font-['DM_Sans'] text-lg text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#b34b0c]"
                />
              </label>
            ))}

            <button
              type="submit"
              className="h-11 w-full bg-[#b34b0c] font-['Outfit'] text-lg font-medium capitalize text-white transition-colors hover:bg-[#cf5a13]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}