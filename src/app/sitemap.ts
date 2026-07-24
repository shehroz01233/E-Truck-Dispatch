import { getPublishedPostSlugs } from "@/lib/payload-data";
import type { MetadataRoute } from "next";

const publicRoutes = [
  "",
  "/about",
  "/accounting",
  "/blog",
  "/box_truck",
  "/california",
  "/conestoga_dispatch_services",
  "/contact",
  "/dedicated-truck-dispatching",
  "/document-management-revised",
  "/driver-recruiting",
  "/dry-van-dispatch",
  "/factoring",
  "/flatbed_dispatch_services",
  "/hotshot_truck_dispatch_service",
  "/lease_on_company",
  "/load_booking",
  "/mc_setup",
  "/power_only_dispatch_service",
  "/refer_dispatch_service",
  "/services",
  "/states",
  "/step_deck_dispatch",
  "/truck_types",
] as const;

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const postSlugs = await getPublishedPostSlugs();

  const pages: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
