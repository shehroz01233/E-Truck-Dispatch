import { getPosts, getCategories } from "@/lib/payload-data";
import { Metadata } from "next";
import { Suspense } from "react";
import HeroSection from "../components/HeroSection";
import LearningResourcesSection, { LearningResource, ResourceCategory } from "../components/LearningResourcesSection";
import VisionFormSection from "../components/VisionFormSection";


export const metadata: Metadata = {
  title: "Blog | E-Truck Dispatching",
  description:
    "Expert guides on truck dispatching, load booking, rate negotiation, and freight operations for owner-operators and small fleets.",
};

const POSTS_PER_PAGE = 9;

const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

function BlogSkeleton() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <div className="min-h-[600px] animate-pulse bg-[#1a1a1a]" />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-16 sm:w-[calc(100%-64px)]">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[500/330] w-full bg-[#1a1a1a]" />
              <div className="mt-5 h-4 w-24 bg-[#1a1a1a]" />
              <div className="mt-3 h-6 w-3/4 bg-[#1a1a1a]" />
              <div className="mt-3 h-4 w-full bg-[#1a1a1a]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

async function BlogContent({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const activeCategory = params.category ?? "";

  const [postsResult, categoriesResult] = await Promise.all([
    getPosts(currentPage, POSTS_PER_PAGE),
    getCategories(),
  ]);

  const resources: LearningResource[] = postsResult.docs.map((post) => {
    const featureImage = post.featureImage as
      | { url?: string; alt?: string }
      | null
      | undefined;

    return {
      title: post.title,
      description: post.metaDescription ?? "",
      date: post.publishedDate
        ? new Date(post.publishedDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "",
      image: featureImage?.url ?? "/Blog/images/4_rectangle_249.webp",
      imageAlt: featureImage?.alt ?? post.title,
      href: `/blog/${post.slug}`,
    };
  });

  const categories: ResourceCategory[] = [
    {
      label: "All Resources",
      href: "/blog",
      active: !activeCategory,
    },
    ...categoriesResult.docs.map((cat) => ({
      label: cat.name,
      href: `/blog?category=${cat.slug}`,
      active: activeCategory === cat.slug,
    })),
  ];

  const totalPages = postsResult.totalPages || 1;

  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Guides &amp; Dispatch
            <span className="block">Insights</span>
          </>
        }
        fixedTitle="Guides & Dispatch"
        typingTitles={[
          "Insights",
          "Strategies",
          "Resources",
          "Carrier Growth Tips",
        ]}
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

      <LearningResourcesSection
        heading={
          <>
            Our Learning
            <br />
            Resources
          </>
        }
        categories={categories}
        resources={resources}
        pagination={
          totalPages > 1
            ? {
                currentPage,
                totalPages,
                basePath: "/blog",
                nextLabel: "Next",
              }
            : undefined
        }
      />

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

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogContent searchParams={searchParams} />
    </Suspense>
  );
}
