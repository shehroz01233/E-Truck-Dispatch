import type { CollectionConfig } from "payload";

import { revalidateDeletedPost, revalidatePost } from "../lib/payload-revalidation";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "status", "publishedDate"],
    group: "Blog",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePost],
    afterDelete: [revalidateDeletedPost],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title (H1)",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title && !data?.slug) {
              return data.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
            }
            return data?.slug;
          },
        ],
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "relationship",
      index: true,
      relationTo: "categories",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featureImage",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "Article Content",
    },
    {
      name: "faqs",
      type: "array",
      label: "FAQs",
      labels: {
        singular: "FAQ",
        plural: "FAQs",
      },
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Question (H3)",
        },
        {
          name: "answer",
          type: "richText",
          required: true,
          label: "Answer",
        },
      ],
    },
    {
      name: "metaTitle",
      type: "text",
      label: "Meta Title",
      maxLength: 60,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      label: "Meta Description",
      maxLength: 160,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "focusKeyphrase",
      type: "text",
      label: "Focus Keyphrase",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "jsonSchema",
      type: "json",
      label: "JSON Schema (Structured Data)",
      admin: {
        position: "sidebar",
        description:
          "Manually enter JSON-LD structured data for this post (e.g. Article, FAQPage schema).",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      index: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "status",
      type: "select",
      index: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
