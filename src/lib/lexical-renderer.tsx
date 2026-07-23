import Image from "next/image";
import type { ReactNode } from "react";

type LexicalNode = {
  type: string;
  version?: number;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  style?: string;
  mode?: string;
  tag?: string;
  listType?: string;
  start?: number;
  value?: number;
  fields?: Record<string, unknown>;
  [k: string]: unknown;
};

type LexicalRoot = {
  root: {
    type: string;
    children: LexicalNode[];
    direction: "ltr" | "rtl" | null;
    format: string;
    indent: number;
    version: number;
  };
};

function renderTextNode(node: LexicalNode): ReactNode {
  const text = node.text ?? "";
  const format = node.format ?? 0;

  let element: ReactNode = text;

  if (format & 1) element = <strong>{element}</strong>;
  if (format & 2) element = <em>{element}</em>;
  if (format & 8) element = <u>{element}</u>;
  if (format & 16) element = <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">{element}</code>;

  return element;
}

function renderNode(node: LexicalNode, key: number): ReactNode {
  switch (node.type) {
    case "text":
      return <span key={key}>{renderTextNode(node)}</span>;

    case "linebreak":
      return <br key={key} />;

    case "paragraph": {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      return (
        <p key={key} className="mb-4 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
          {children}
        </p>
      );
    }

    case "heading": {
      const tag = node.tag ?? "h2";
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      const id = children
        .filter((c): c is React.ReactElement => typeof c === "object" && c !== null && "props" in c)
        .map((c) => String((c.props as { children?: unknown }).children ?? ""))
        .join("")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      const className = "mb-4 mt-8 font-outfit font-bold leading-tight text-white";

      if (tag === "h1") {
        return <h1 key={key} id={id} className={`${className} text-3xl sm:text-4xl`}>{children}</h1>;
      }
      if (tag === "h2") {
        return <h2 key={key} id={id} className={`${className} text-2xl sm:text-3xl`}>{children}</h2>;
      }
      if (tag === "h3") {
        return <h3 key={key} id={id} className={`${className} text-xl sm:text-2xl`}>{children}</h3>;
      }
      if (tag === "h4") {
        return <h4 key={key} id={id} className={`${className} text-lg sm:text-xl`}>{children}</h4>;
      }
      if (tag === "h5") {
        return <h5 key={key} id={id} className={`${className} text-base sm:text-lg`}>{children}</h5>;
      }
      return <h6 key={key} id={id} className={`${className} text-sm sm:text-base`}>{children}</h6>;
    }

    case "list": {
      const items = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      if (node.listType === "number" || node.listType === "check") {
        return (
          <ol key={key} className="mb-4 list-decimal pl-6 space-y-2 text-base leading-7 text-white/85 sm:text-lg">
            {items}
          </ol>
        );
      }
      return (
        <ul key={key} className="mb-4 list-disc pl-6 space-y-2 text-base leading-7 text-white/85 sm:text-lg">
          {items}
        </ul>
      );
    }

    case "listitem": {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      return <li key={key}>{children}</li>;
    }

    case "link": {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      const href = String(node.fields?.url ?? "#");
      const target = node.fields?.newTab ? "_blank" : undefined;
      const rel = node.fields?.newTab ? "noopener noreferrer" : undefined;
      return (
        <a
          key={key}
          href={href}
          target={target}
          rel={rel}
          className="text-[#b34b0c] underline underline-offset-2 transition-colors hover:text-[#cf5a13]"
        >
          {children}
        </a>
      );
    }

    case "quote": {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      return (
        <blockquote
          key={key}
          className="mb-4 border-l-4 border-[#b34b0c] pl-4 italic text-white/70"
        >
          {children}
        </blockquote>
      );
    }

    case "upload": {
      const url = String(node.fields?.url ?? "");
      const alt = String(node.fields?.alt ?? "");
      if (!url) return null;
      return (
        <figure key={key} className="my-6">
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
      );
    }

    case "horizontalrule":
      return <hr key={key} className="my-8 border-white/10" />;

    case "indent":
    case "overflow":
    case "root": {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      return <div key={key}>{children}</div>;
    }

    default: {
      const children = node.children?.map((child, i) => renderNode(child, i)) ?? [];
      if (children.length === 0) return null;
      return <div key={key}>{children}</div>;
    }
  }
}

export default function RichText({ content }: { content: LexicalRoot | null | undefined }) {
  if (!content?.root?.children) return null;

  return (
    <article className="prose-custom">
      {content.root.children.map((node, index) => renderNode(node, index))}
    </article>
  );
}
