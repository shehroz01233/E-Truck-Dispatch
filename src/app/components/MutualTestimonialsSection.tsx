import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type TestimonialCard = {
  name: string;
  content: ReactNode;
  avatar: string | StaticImageData;
  avatarAlt?: string;
};

export type RatingImage = {
  image: string | StaticImageData;
  imageAlt?: string;
  width: number;
  height: number;
};

export type ReviewBadge = {
  variant: "google" | "trustpilot" | "plain";

  logo: string | StaticImageData;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;

  label?: ReactNode;

  /**
   * Used for Google:
   * four full stars + yellow half + gray half.
   */
  ratingImages?: RatingImage[];

  /**
   * Used for Trustpilot:
   * one complete green rating-strip image.
   */
  ratingStrip?: string | StaticImageData;
  ratingStripAlt?: string;
  ratingStripWidth?: number;
  ratingStripHeight?: number;
};

type MutualTestimonialsSectionProps = {
  heading: ReactNode;
  rating?: number;
  reviewText: ReactNode;
  testimonials: TestimonialCard[];

  /**
   * Five separate large star images.
   */
  starImages?: RatingImage[];

  reviewBadges?: ReviewBadge[];
};

const desktopCardPositions = [
  "xl:translate-y-0",
  "xl:translate-y-20",
  "xl:translate-y-40",
  "xl:translate-y-20",
  "xl:translate-y-0",
];

export default function MutualTestimonialsSection({
  heading,
  rating = 4.9,
  reviewText,
  testimonials,
  starImages = [],
  reviewBadges = [],
}: MutualTestimonialsSectionProps) {
  return (
    <section className="overflow-hidden px-5 py-12 text-white sm:px-8 lg:px-12 xl:pb-[10rem]">
      <div className="mx-auto max-w-[97.5rem]">
        {/* Review summary */}
        <div className="relative z-10 flex min-h-[14.1875rem] flex-col items-center text-center">
          <h2 className="font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
            {heading}
          </h2>

          {/* Large rating stars */}
          {starImages.length > 0 && (
            <div
              className="mt-8 flex items-center justify-center gap-[0.3125rem]"
              aria-label={`${rating} out of 5 stars`}
            >
              {starImages.map((star, index) => (
                <Image
                  key={`${star.imageAlt ?? "rating-star"}-${index}`}
                  src={star.image}
                  alt={star.imageAlt ?? ""}
                  width={star.width}
                  height={star.height}
                  className="shrink-0 object-contain"
                />
              ))}
            </div>
          )}

          <div className="mt-4 font-dm-sans text-base leading-normal text-white sm:text-lg">
            {reviewText}
          </div>

          {/* Google and Trustpilot ratings */}
          {reviewBadges.length > 0 && (
            <div className="mt-5 grid w-full max-w-[17.1875rem] grid-cols-2 items-start gap-[3.4375rem]">
              {reviewBadges.map((badge, index) => (
                <ReviewPlatform
                  key={`${badge.logoAlt}-${index}`}
                  badge={badge}
                />
              ))}
            </div>
          )}
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:-mt-[6.25rem] xl:grid-cols-5 xl:gap-[1.875rem]">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className={`flex min-h-[20rem] flex-col justify-between border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 ${
                desktopCardPositions[index] ?? ""
              }`}
            >
              <div className="font-dm-sans text-base font-normal leading-[1.5] text-white">
                {testimonial.content}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.avatarAlt ?? testimonial.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <h3 className="font-outfit text-xl font-medium capitalize leading-tight text-white">
                  {testimonial.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ReviewPlatformProps = {
  badge: ReviewBadge;
};

function ReviewPlatform({ badge }: ReviewPlatformProps) {
  if (badge.variant === "google") {
    return (
      <div className="flex items-start justify-self-center">
        <Image
          src={badge.logo}
          alt={badge.logoAlt}
          width={badge.logoWidth}
          height={badge.logoHeight}
          className="shrink-0 object-contain"
        />
        <div className="ml-0 pt-2">
          {badge.ratingImages && badge.ratingImages.length > 0 && (
            <div className="flex items-center">
              {badge.ratingImages.map((star, index) => (
                <Image
                  key={`${star.imageAlt ?? "google-star"}-${index}`}
                  src={star.image}
                  alt={star.imageAlt ?? ""}
                  width={star.width}
                  height={star.height}
                  className="shrink-0 object-contain"
                />
              ))}
            </div>
          )}

          {badge.label && (
            <div className="mt-1 whitespace-nowrap font-dm-sans text-[0.625rem] font-bold leading-none text-white">
              {badge.label}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (badge.variant === "trustpilot") {
    return (
      <div className="relative h-11 w-[6.875rem] shrink-0 justify-self-center">
        <Image
          src={badge.logo}
          alt={badge.logoAlt}
          width={badge.logoWidth}
          height={badge.logoHeight}
          className="absolute left-0 top-0 h-[2.1875rem] w-[6.875rem] object-contain"
        />

        {badge.ratingStrip && (
          <Image
            src={badge.ratingStrip}
            alt={badge.ratingStripAlt ?? ""}
            width={badge.ratingStripWidth ?? 77}
            height={badge.ratingStripHeight ?? 24}
            className="absolute right-0 top-5 h-6 w-[4.8125rem] object-contain"
          />
        )}
      </div>
    );
  }

  return (
    <Image
      src={badge.logo}
      alt={badge.logoAlt}
      width={badge.logoWidth}
      height={badge.logoHeight}
      className="shrink-0 object-contain"
    />
  );
}
