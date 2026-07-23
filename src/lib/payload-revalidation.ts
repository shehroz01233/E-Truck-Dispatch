import { revalidateTag } from "next/cache";
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

export const revalidatePost: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  revalidateTag("posts", "max");
  if (doc.slug) revalidateTag(`post:${doc.slug}`, "max");
  if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
    revalidateTag(`post:${previousDoc.slug}`, "max");
  }
  return doc;
};

export const revalidateDeletedPost: CollectionAfterDeleteHook = ({ doc }) => {
  revalidateTag("posts", "max");
  if (doc?.slug) revalidateTag(`post:${doc.slug}`, "max");
  return doc;
};

export const revalidateCategories: CollectionAfterChangeHook = ({ doc }) => {
  revalidateTag("categories", "max");
  revalidateTag("posts", "max");
  return doc;
};

export const revalidateDeletedCategory: CollectionAfterDeleteHook = ({ doc }) => {
  revalidateTag("categories", "max");
  revalidateTag("posts", "max");
  return doc;
};