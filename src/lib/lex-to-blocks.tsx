import type { ReactNode } from "react";
import Image from "next/image";
import type { ArticleContentBlock } from "@/app/(app)/components/ArticleContentSection";

type LexicalNode = {
  type: string;
  version?: number;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  fields?: Record<string, unknown>;
  listType?: string;
  [k: string]: unknown;
};

type LexicalRoot = {
  root: {
    type: string;
    children: LexicalNode[];
    [k: string]: unknown;
  };
};

function renderInline(node: LexicalNode): ReactNode {
  const text = node.text ?? "";
  const format = node.format ?? 0;

  let element: ReactNode = text;

  if (format & 1) element = <strong>{element}</strong>;
  if (format & 2) element = <em>{element}</em>;
  if (format & 8) element = <u>{element}</u>;
  if (format & 16)
    element = (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
        {element}
      </code>
    );

  return element;
}

function renderChildren(node: LexicalNode): ReactNode[] {
  return (
    node.children?.map((child, i) => {
      if (child.type === "text") {
        return <span key={i}>{renderInline(child)}</span>;
      }
      if (child.type === "linebreak") {
        return <br key={i} />;
      }
      if (child.type === "link") {
        const href = String(child.fields?.url ?? "#");
        const target = child.fields?.newTab ? "_blank" : undefined;
        const rel = child.fields?.newTab ? "noopener noreferrer" : undefined;
        const children = child.children?.map((c, j) =>
          c.type === "text" ? <span key={j}>{renderInline(c)}</span> : null,
        );
        return (
          <a
            key={i}
            href={href}
            target={target}
            rel={rel}
            className="text-[#b34b0c] underline underline-offset-2 transition-colors hover:text-[#cf5a13]"
          >
            {children}
          </a>
        );
      }
      if (child.type === "upload") {
        const url = String(child.fields?.url ?? "");
        const alt = String(child.fields?.alt ?? "");
        if (!url) return null;
        return (
          <figure key={i} className="my-6">
            <Image
              src={url}
              alt={alt}
              width={1200}
              height={600}
              className="w-full rounded object-cover"
            />
          </figure>
        );
      }
      return null;
    }) ?? []
  );
}

function lexToListItems(node: LexicalNode): ReactNode[] {
  return (
    node.children?.map((child, i) => {
      if (child.type === "listitem") {
        const children = renderChildren(child);
        return <span key={i}>{children}</span>;
      }
      return null;
    }) ?? []
  );
}

function collectBlocks(nodes: LexicalNode[]): ArticleContentBlock[] {
  const blocks: ArticleContentBlock[] = [];

  for (const node of nodes) {
    if (node.type === "heading") {
      blocks.push({
        type: "heading",
        content: <>{renderChildren(node)}</>,
      });
    } else if (node.type === "paragraph") {
      const children = renderChildren(node);
      const hasContent = node.children?.some(
        (c) => c.text?.trim() || c.type !== "text",
      );
      if (!hasContent) continue;
      blocks.push({
        type: "paragraph",
        content: <>{children}</>,
      });
    } else if (node.type === "list") {
      blocks.push({
        type: "list",
        items: lexToListItems(node),
      });
    } else if (node.type === "upload") {
      const url = String(node.fields?.url ?? "");
      const alt = String(node.fields?.alt ?? "");
      if (url) {
        blocks.push({
          type: "paragraph",
          content: (
            <figure className="my-4">
              <Image
                src={url}
                alt={alt}
                width={1200}
                height={600}
                className="w-full rounded object-cover"
              />
              {alt && (
                <figcaption className="mt-2 text-center text-sm text-white/60">
                  {alt}
                </figcaption>
              )}
            </figure>
          ),
        });
      }
    } else if (node.type === "listitem") {
      blocks.push({
        type: "list",
        items: [<span key={0}>{renderChildren(node)}</span>],
      });
    } else if (node.type === "quote") {
      blocks.push({
        type: "paragraph",
        content: (
          <blockquote className="border-l-4 border-[#b34b0c] pl-4 italic text-white/70">
            {renderChildren(node)}
          </blockquote>
        ),
      });
    } else if (node.type === "horizontalrule") {
      blocks.push({
        type: "paragraph",
        content: <hr className="my-8 border-white/10" />,
      });
    } else if (node.type === "indent" || node.type === "overflow" || node.type === "root") {
      if (node.children) {
        blocks.push(...collectBlocks(node.children));
      }
    } else if (node.children && node.children.length > 0) {
      blocks.push(...collectBlocks(node.children));
    }
  }

  return blocks;
}

export function lexToBlocks(
  content: LexicalRoot | null | undefined,
): ArticleContentBlock[] {
  if (!content?.root?.children) return [];
  return collectBlocks(content.root.children);
}
