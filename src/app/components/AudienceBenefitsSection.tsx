import Image from "next/image";

type Audience = {
  title: string;
  image: string;
};

type Props = {
  audiences?: Audience[];
  heading: string;
  benefits: string[];
  showAudiences?: boolean;
};

export default function AudienceBenefitsSection({
  audiences = [],
  heading,
  benefits,
  showAudiences = true,
}: Props) {
  const hasAudiences = showAudiences && audiences.length > 0;

  return (
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-20 sm:w-[calc(100%-64px)]">
      {hasAudiences && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {audiences.map(({ title, image }) => (
            <article key={title} className="overflow-hidden bg-[#171717] pt-4">
              <div className="relative h-56">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </div>

              <h3 className="p-5 pt-3 text-xl font-semibold">{title}</h3>
            </article>
          ))}
        </div>
      )}

      <h2
        className={`${hasAudiences ? "mt-20" : ""} mx-auto max-w-[42rem] text-center font-['Outfit'] text-4xl font-bold leading-[1.15] text-white sm:text-5xl`}
      >
        {heading}
      </h2>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((reason) => (
          <p
            key={reason}
            className="flex min-h-36 items-center justify-center bg-[#171717] p-6 text-center text-lg"
          >
            {reason}
          </p>
        ))}
      </div>
    </section>
  );
}