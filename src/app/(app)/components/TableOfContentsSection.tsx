import type { Heading } from "@/lib/extract-headings";

type TableOfContentsSectionProps = {
  headings: Heading[];
};

export default function TableOfContentsSection({
  headings,
}: TableOfContentsSectionProps) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of Contents">
      <p className="font-['Outfit'] text-sm font-semibold uppercase tracking-wider text-white/50">
        On This Page
      </p>
      <ul className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "pl-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              className="block text-sm leading-6 text-white/70 transition-colors hover:text-[#b34b0c]"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
