import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type ArticleContentBlock =
  | {
      type: "heading";
      content: ReactNode;
      id?: string;
    }
  | {
      type: "paragraph";
      content: ReactNode;
    }
  | {
      type: "list";
      items: ReactNode[];
    };

export type ArticleAuthor = {
  name: string;
  role: string;
  image?: string | StaticImageData;
  imageAlt?: string;
};

type ArticleContentSectionProps = {
  author: ArticleAuthor;
  category: string;
  featureImage: string | StaticImageData;
  featureImageAlt: string;
  tableOfContents?: { title: string; href: string }[];
  updatedAt: string;
  dateTime?: string;
  updateLabel?: string;
  updateIconSrc?: string | StaticImageData;
  blocks: ArticleContentBlock[];
  className?: string;
};

export default function ArticleContentSection({
  author,
  category,
  featureImage,
  featureImageAlt,
  tableOfContents = [],
  updatedAt,
  dateTime,
  updateLabel = "Latest Update",
  updateIconSrc,
  blocks,
  className = "",
}: ArticleContentSectionProps) {
  return (
    <section
      className={`bg-[#1c1c1c] py-12 text-white sm:py-16 lg:py-20 ${className}`}
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[904px] sm:w-[calc(100%-64px)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-[10px] sm:gap-4">
              <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-[#b34b0c] sm:size-16">
                {author.image ? (
                <Image
                  src={author.image}
                  alt={author.imageAlt ?? author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
                ) : (
                  <span
                    aria-hidden="true"
                    className="font-['Outfit'] text-lg font-semibold uppercase text-white"
                  >
                    {author.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="break-words font-['Outfit'] text-base font-semibold leading-5 text-white sm:text-lg">
                  {author.name}
                </p>

                <p className="mt-1 font-['DM_Sans'] text-sm leading-5 text-white/70">
                  {author.role}
                </p>

                {updatedAt && (
                  <div className="mt-1 flex items-center gap-2 font-['DM_Sans'] text-xs text-white/60">
                    <span>{updateLabel}</span>
                    {updateIconSrc && (
                      <Image
                        src={updateIconSrc}
                        alt=""
                        width={9}
                        height={10}
                        aria-hidden="true"
                        className="h-[10px] w-[9px] object-contain"
                      />
                    )}
                    <time dateTime={dateTime}>{updatedAt}</time>
                  </div>
                )}
              </div>
            </div>

            <span className="w-fit rounded-sm bg-[#b34b0c] px-6 py-2 font-['Outfit'] text-sm font-semibold text-white sm:min-w-32 sm:text-center">
              {category}
            </span>
          </div>

          <div className="relative mt-6 aspect-[904/520] min-h-[240px] overflow-hidden rounded-md">
            <Image
              src={featureImage}
              alt={featureImageAlt}
              fill
              priority
              sizes="(min-width: 968px) 904px, calc(100vw - 64px)"
              className="object-cover"
            />
          </div>

          {tableOfContents.length > 0 && (
            <details className="group mt-5" name="article-table-of-contents">
              <summary className="flex cursor-pointer list-none items-center justify-center gap-3 rounded bg-[#b34b0c] px-5 py-3 font-['Outfit'] text-sm font-semibold text-white transition-colors hover:bg-[#c6530e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d86620] [&::-webkit-details-marker]:hidden">
                <span>Table of Contents</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-4 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    d="m5 7.5 5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </summary>

              <nav
                className="mt-2 rounded border border-white/10 bg-[#242424] px-5 py-5 shadow-lg sm:px-7"
                aria-label="Table of contents"
              >
                <ol className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {tableOfContents.map((item, index) => (
                    <li
                      key={item.href}
                      className="flex items-start gap-3 font-['DM_Sans'] text-sm leading-6"
                    >
                      <span
                        aria-hidden="true"
                        className="min-w-6 font-semibold tabular-nums text-[#b34b0c]"
                      >
                        {index + 1}.
                      </span>
                      <a
                        href={item.href}
                        className="text-white/75 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>
          )}

          <article className="mt-10 space-y-6 sm:mt-12">
            {blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`heading-${index}`}
                    id={block.id}
                    className="font-['Outfit'] text-xl font-semibold leading-8 text-white"
                  >
                    {block.content}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={`list-${index}`}
                    className="space-y-2 font-['DM_Sans'] text-base font-normal leading-7 text-white/90 sm:text-lg sm:leading-8"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={`item-${itemIndex}`}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.75rem] size-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`paragraph-${index}`}
                  className="font-['DM_Sans'] text-base font-normal leading-7 text-white sm:text-lg sm:leading-8"
                >
                  {block.content}
                </p>
              );
            })}
          </article>
      </div>
    </section>
  );
}
