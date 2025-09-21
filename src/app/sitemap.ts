import type { MetadataRoute } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
