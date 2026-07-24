import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPostBySlug, getPublishedPostSlugs } from "@/lib/payload-data";
import { lexToBlocks } from "@/lib/lex-to-blocks";
import { extractAllText, extractHeadings } from "@/lib/extract-headings";

import ArticleContentSection from "../../components/ArticleContentSection";
import HeroSection from "../../components/HeroSection";
import VisionFormSection from "../../components/VisionFormSection";
import FAQSection from "../../components/FAQs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || "",
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const featureImage = post.featureImage as
    | { url?: string; alt?: string }
    | null
    | undefined;
  const author = post.author as { email?: string } | string | null | undefined;
  const category = post.category as
    | { name?: string }
    | string
    | null
    | undefined;

  const authorName =
    typeof author === "object" && author?.email
      ? author.email
      : typeof author === "string"
        ? author
        : "Author";

  const publishedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  const categoryName =
    typeof category === "object" && category?.name
      ? category.name
      : typeof category === "string"
        ? category
        : "Dispatch Insights";

  const articleBlocks = lexToBlocks(post.content);
  const headings = extractHeadings(post.content);

  const formattedFaqs = (post.faqs ?? []).map((faq) => ({
    question: faq.question,
    answer: extractAllText(faq.answer),
  }));

  const featureImageUrl = featureImage?.url ?? "/Blog/images/1_rectangle_1450.webp";
  const featureImageAlt = featureImage?.alt ?? post.title;

  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Guides & Dispatch
            <span className="block">Insights</span>
          </>
        }
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog Single Page/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

      <ArticleContentSection
        author={{
          name: authorName,
          role: "Professional",
          imageAlt: authorName,
        }}
        category={categoryName}
        featureImage={featureImageUrl}
        featureImageAlt={featureImageAlt}
        tableOfContents={headings.map((heading) => ({
          title: heading.text,
          href: `#${heading.id}`,
        }))}
        updateLabel="Latest Update"
        updatedAt={publishedDate}
        dateTime={post.publishedDate ?? undefined}
        updateIconSrc="/Blog/images/calendar-icon.webp"
        blocks={articleBlocks}
      />
      {formattedFaqs.length > 0 && (
        <FAQSection
          heading="Frequently Asked Questions"
          description="Get answers about trucking bookkeeping, freight invoicing, payroll, IFTA reporting, tax preparation, and financial management."
          image="/Accounting/images/37_rectangle_1441.webp"
          imageAlt="Accounting professional managing trucking financial records"
          faqs={formattedFaqs}
        />
      )}
      <VisionFormSection
        heading={
          <>
            <span className="block whitespace-nowrap">Get Real Dispatch</span>
            <span className="block whitespace-nowrap">
              Support That Drives{" "}
            </span>
            <span className="block">Revenue</span>
          </>
        }
        paragraphs={[
          "From load booking to paperwork and compliance, we handle everything so you can focus on driving and scaling your business.",
        ]}
        fields={formFields}
      />
    </main>
  );
}
