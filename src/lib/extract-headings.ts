export type Heading = { id: string; text: string; tag: "h2" | "h3"; level: number };

function walkNodes(node: unknown, callback: (n: Record<string, unknown>) => void) {
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  callback(obj);
  if (Array.isArray(obj.children)) {
    obj.children.forEach((child) => walkNodes(child, callback));
  }
}

function resolveRoot(content: unknown): Record<string, unknown> {
  if (!content || typeof content !== "object") return {};
  const obj = content as Record<string, unknown>;
  const root = obj.root as Record<string, unknown> | undefined;
  return root?.type === "root" ? root : obj;
}

export function extractHeadings(content: unknown): Heading[] {
  const headings: Heading[] = [];
  const root = resolveRoot(content);

  walkNodes(root, (node) => {
    if (node.type === "heading" && (node.tag === "h2" || node.tag === "h3")) {
      const children = node.children as Array<Record<string, unknown>> | undefined;
      const text = children?.map((c) => String(c.text ?? "")).join("") || "";
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      headings.push({
        id: id || `h-${headings.length}`,
        text,
        tag: node.tag as "h2" | "h3",
        level: node.tag === "h2" ? 2 : 3,
      });
    }
  });

  return headings;
}

export function extractAllText(content: unknown): string {
  const texts: string[] = [];
  const root = resolveRoot(content);

  walkNodes(root, (node) => {
    if (node.type === "text" && typeof node.text === "string") {
      texts.push(node.text);
    }
  });

  return texts.join(" ");
}

export function calculateReadingTime(content: unknown): number {
  const text = extractAllText(content);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
