import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type ResourceCategory = {
  label: string;
  href: string;
  active?: boolean;
};

export type LearningResource = {
  title: string;
  description: string;
  date: string;
  image: string | StaticImageData;
  imageAlt?: string;
  href: string;
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  nextLabel?: string;
};

type LearningResourcesSectionProps = {
  heading: ReactNode;
  categories?: ResourceCategory[];
  resources: LearningResource[];
  pagination?: Pagination;
};

export default function LearningResourcesSection({
  heading,
  categories = [],
  resources,
  pagination,
}: LearningResourcesSectionProps) {
  const getPageHref = (page: number) => {
    if (!pagination) return "#";

    const separator = pagination.basePath.includes("?") ? "&" : "?";

    return `${pagination.basePath}${separator}page=${page}`;
  };

  return (
    <section className="w-full bg-[#1c1c1c] py-16 text-white lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Heading */}
        <h1 className="mx-auto max-w-[30.75rem] text-center font-['Outfit'] text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
          {heading}
        </h1>

        {/* Categories */}
        {categories.length > 0 ? (
          <nav
            aria-label="Resource categories"
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12"
          >
            {categories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                aria-current={category.active ? "page" : undefined}
                className={`inline-flex min-h-10 items-center justify-center px-5 py-2.5 font-['Outfit'] text-sm font-semibold transition-colors sm:text-base ${
                  category.active
                    ? "bg-[#cf5a13] text-white"
                    : "bg-[#b34b0c] text-white hover:bg-[#cf5a13]"
                }`}
              >
                {category.label}
              </Link>
            ))}
          </nav>
        ) : null}

        {/* Resource cards */}
        <div
          className={`grid grid-cols-1 gap-x-[30px] gap-y-14 md:grid-cols-2 xl:grid-cols-3 ${
            categories.length > 0 ? "mt-14 lg:mt-16" : "mt-12"
          }`}
        >
          {resources.map((resource, index) => (
            <article
              key={`${resource.title}-${index}`}
              className="group min-w-0"
            >
              <Link href={resource.href} className="block">
                <div className="relative aspect-[500/330] w-full overflow-hidden bg-[#171717]">
                  <Image
                    src={resource.image}
                    alt={resource.imageAlt ?? resource.title}
                    fill
                    sizes="(min-width: 1280px) 500px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-5 flex items-center gap-2 font-['DM_Sans'] text-sm leading-4 text-white/80">
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-[#b34b0c]"
                  />
                  <time>{resource.date}</time>
                </div>

                <h2 className="mt-3 max-w-[24rem] font-['Outfit'] text-xl font-semibold leading-8 text-white transition-colors group-hover:text-[#cf5a13]">
                  {resource.title}
                </h2>

                <p className="mt-3 max-w-[30rem] font-['DM_Sans'] text-base leading-6 text-white/80">
                  {resource.description}
                </p>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 ? (
          <nav
            aria-label="Resource pagination"
            className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:mt-16"
          >
            {Array.from(
              { length: pagination.totalPages },
              (_, index) => index + 1,
            ).map((page) => {
              const isActive = page === pagination.currentPage;

              return (
                <Link
                  key={page}
                  href={getPageHref(page)}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex size-10 items-center justify-center rounded-full font-['Outfit'] text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#b34b0c] text-[#171717]"
                      : "text-white hover:bg-[#171717]"
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {pagination.currentPage < pagination.totalPages ? (
              <Link
                href={getPageHref(pagination.currentPage + 1)}
                className="ml-2 inline-flex min-h-10 items-center gap-2 px-2 font-['Outfit'] text-base font-semibold text-white transition-colors hover:text-[#cf5a13]"
              >
                <span>{pagination.nextLabel ?? "Next"}</span>
                <span aria-hidden="true" className="text-xl">
                  ›
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </section>
  );
}