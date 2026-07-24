import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type ArticleContentBlock =
  | {
      type: "heading";
      content: ReactNode;
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
  image: string | StaticImageData;
  imageAlt?: string;
};

type ArticleContentSectionProps = {
  author: ArticleAuthor;
  updatedAt: string;
  dateTime?: string;
  updateLabel?: string;
  updateIconSrc?: string | StaticImageData;
  blocks: ArticleContentBlock[];
  className?: string;
};

export default function ArticleContentSection({
  author,
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
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        <div className="w-full max-w-[904px]">
          {/* Author and update information */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-[10px] sm:gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full sm:size-[70px]">
                <Image
                  src={author.image}
                  alt={author.imageAlt ?? author.name}
                  fill
                  sizes="70px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="font-['Outfit'] text-lg font-semibold leading-5 text-white sm:text-xl">
                  {author.name}
                </p>

                <p className="mt-3 font-['DM_Sans'] text-sm leading-6 text-white/70 sm:text-base">
                  {author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-['Poppins'] text-sm leading-4 text-white sm:pt-1">
              <span>{updateLabel}</span>

              {updateIconSrc ? (
                <Image
                  src={updateIconSrc}
                  alt=""
                  width={9}
                  height={10}
                  aria-hidden="true"
                  className="h-[10px] w-[9px] object-contain"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-[#b34b0c]"
                />
              )}

              <time dateTime={dateTime}>{updatedAt}</time>
            </div>
          </div>

          {/* Article content */}
          <article className="mt-12 space-y-6 sm:mt-[60px]">
            {blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`heading-${index}`}
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
      </div>
    </section>
  );
}
