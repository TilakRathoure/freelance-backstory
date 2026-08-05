import { type MetadataRoute } from "next";
import { getProjectSlugs } from "~/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://backstory.studio";
  const projects = getProjectSlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects,
  ];
}
