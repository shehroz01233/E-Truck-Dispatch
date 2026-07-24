import "server-only";

import configPromise from "@payload-config";
import { cacheLife, cacheTag } from "next/cache";
import { getPayload } from "payload";
import type { Post } from "@/payload-types";

const publishedWhere = { status: { equals: "published" as const } };

const fallbackPosts: Record<string, { title: string; metaDescription: string; image: string }> = {
  "how-to-find-high-paying-truck-loads": {
    title: "How to Find High-Paying Truck Loads",
    metaDescription: "Learn how lane demand, deadhead distance, equipment type, and market timing influence load profitability.",
    image: "/Blog/images/4_rectangle_249.webp",
  },
  "truck-dispatching-strategies-improve-rpm": {
    title: "Truck Dispatching Strategies That Improve RPM",
    metaDescription: "Explore dispatch planning methods that reduce empty miles and improve revenue per loaded mile.",
    image: "/Blog/images/8_rectangle_250.webp",
  },
  "route-planning-reduces-operating-costs": {
    title: "How Route Planning Reduces Operating Costs",
    metaDescription: "See how stronger route selection helps carriers control fuel use, delays, tolls, and unnecessary mileage.",
    image: "/Blog/images/9_rectangle_251.webp",
  },
};

function buildFallbackPost(
  slug: string,
  data: { title: string; metaDescription: string; image: string },
): Post {
  return {
    id: "0",
    title: data.title,
    slug,
    metaDescription: data.metaDescription,
    featureImage: {
      id: "0",
      alt: data.title,
      url: data.image,
    },
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  } as Post;
}

export async function getPosts(page = 1, limit = 12) {
  "use cache";
  cacheLife("days");
  cacheTag("posts");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "posts",
    depth: 1,
    limit,
    page,
    pagination: true,
    sort: "-publishedDate",
    where: publishedWhere,
    select: {
      title: true,
      slug: true,
      featureImage: true,
      publishedDate: true,
      metaDescription: true,
      category: true,
    },
  });
}

export async function getPostBySlug(slug: string) {
  "use cache";
  cacheLife("days");
  cacheTag("posts", `post:${slug}`);

  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 1,
    pagination: false,
    where: {
      and: [publishedWhere, { slug: { equals: slug } }],
    },
    select: {
      title: true,
      slug: true,
      author: true,
      category: true,
      featureImage: true,
      content: true,
      faqs: true,
      metaTitle: true,
      metaDescription: true,
      jsonSchema: true,
      publishedDate: true,
    },
  });

  const post = result.docs[0] ?? null;
  if (post) return post;

  const fallback = fallbackPosts[slug];
  if (fallback) return buildFallbackPost(slug, fallback);

  return null;
}

export async function getPublishedPostSlugs() {
  "use cache";
  cacheLife("days");
  cacheTag("posts");

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      depth: 0,
      limit: 1000,
      pagination: false,
      where: publishedWhere,
      select: { slug: true },
    });

    const slugs = result.docs.map(({ slug }) => slug);
    if (slugs.length === 0) return Object.keys(fallbackPosts);
    return slugs;
  } catch {
    return Object.keys(fallbackPosts);
  }
}

export async function getCategories() {
  "use cache";
  cacheLife("days");
  cacheTag("categories");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "categories",
    depth: 0,
    limit: 100,
    pagination: false,
    sort: "name",
    select: { name: true, slug: true },
  });
}
