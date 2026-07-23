import type { CollectionConfig } from "payload";

const webp = { format: "webp" as const, options: { quality: 82 } };

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    displayPreview: true,
    formatOptions: webp,
    imageSizes: [
      { name: "thumbnail", width: 320, height: 180, position: "centre", withoutEnlargement: true, formatOptions: webp },
      { name: "card", width: 640, height: 420, position: "centre", withoutEnlargement: true, formatOptions: webp },
      { name: "article", width: 1200, height: 600, position: "centre", withoutEnlargement: true, formatOptions: webp },
      { name: "hero", width: 1920, height: 900, position: "centre", withoutEnlargement: true, formatOptions: webp },
    ],
    mimeTypes: ["image/*"],
  },
};