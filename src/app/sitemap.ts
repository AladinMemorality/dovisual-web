import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dovisual.com";
  const routes = [
    "",
    "/deck",
    "/products/cli",
    "/products/api",
    "/products/sdks",
    "/products/governance",
    "/docs",
    "/blog",
    "/changelog",
    "/status",
    "/about",
    "/terms",
    "/privacy",
    "/security",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/status" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : 0.6,
  }));
}
