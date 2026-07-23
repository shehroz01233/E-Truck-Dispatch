import RichText from "@/lib/lexical-renderer";
import { getPublishedPostSlugs, getPostBySlug } from "@/lib/payload-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQSection from "../../components/FAQs";
import HeroSection from "../../components/HeroSection";
import VisionFormSection from "../../components/VisionFormSection";


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

  const featureImage = post.featureImage as { url?: string; alt?: string } | null | undefined;
  const category = post.category as { name?: string } | null | undefined;
  const faqs = (post.faqs as { question: string; answer: string | { root: unknown } }[] | null | undefined) ?? [];

  const formattedFaqs = faqs.map((faq) => ({
    question: faq.question,
    answer:
      typeof faq.answer === "string"
        ? faq.answer
        : (() => {
            try {
              const root = faq.answer?.root as { children?: { text?: string }[] } | undefined;
              return root?.children?.map((c) => c.text ?? "").join("") ?? "";
            } catch {
              return "";
            }
          })(),
  }));

  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>{post.title}</>}
        paragraphs={[
          category?.name ? `Category: ${category.name}` : "",
          post.publishedDate
            ? `Published: ${new Date(post.publishedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}`
            : "",
        ].filter(Boolean)}
        backgroundImage={featureImage?.url ?? "/Blog/images/1_rectangle_1450.webp"}
        backgroundAlt={featureImage?.alt ?? post.title}
      />

      <section className="mx-auto w-[calc(100%-40px)] max-w-[900px] py-12 sm:w-[calc(100%-64px)] lg:py-20">
        <RichText content={post.content} />
      </section>

      {formattedFaqs.length > 0 && (
        <FAQSection
          heading="Frequently Asked Questions"
          description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
          image="/Blog/images/1_rectangle_1450.webp"
          imageAlt="Dispatcher answering questions"
          faqs={formattedFaqs}
        />
      )}

      {post.jsonSchema != null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.jsonSchema as Record<string, unknown>) }}
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
