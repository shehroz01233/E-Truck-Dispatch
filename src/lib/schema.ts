import { extractAllText } from "./extract-headings";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const ORG_NAME = "E Truck Dispatching";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildArticleSchema(post: Record<string, any>) {
  const featureImage =
    typeof post.featureImage === "object" && post.featureImage !== null
      ? post.featureImage
      : null;

  const imageUrl = String(featureImage?.url ?? "");
  const imageAlt = String(featureImage?.alt ?? post.title ?? "");

  const authorObj =
    typeof post.author === "object" && post.author !== null
      ? post.author
      : null;
  const authorName =
    authorObj?.email ?? (typeof post.author === "string" ? post.author : "Author");

  const datePublished = post.publishedDate
    ? new Date(post.publishedDate).toISOString()
    : new Date(post.updatedAt ?? post.createdAt ?? Date.now()).toISOString();

  const dateModified = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : datePublished;

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? "",
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    datePublished,
    dateModified,
  };

  if (imageUrl) {
    article.image = {
      "@type": "ImageObject",
      url: imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`,
      alt: imageAlt,
    };
  }

  const faqs = post.faqs ?? [];
  if (faqs.length > 0) {
    article.mainEntity = {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq: { question: string; answer: unknown }) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            typeof faq.answer === "string"
              ? faq.answer
              : extractAllText(faq.answer),
        },
      })),
    };
  }

  return article;
}
