import type { MetadataRoute } from "next";

const sitemapUrls = generateSitemapUrls(
  "https://elcolors.com/sitemaps/sitemap.xml",
  0,
  198
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Applebot", "Bingbot", "Googlebot"],
        allow: ["/"],
      },
    ],
    sitemap: [
      "https://elcolors.com/sitemap.xml",
      "https://elcolors.com/sitemaps/colors/sitemap.xml",
      "https://elcolors.com/sitemaps/palettes/sitemap.xml",
      "https://elcolors.com/sitemaps/visualize/sitemap.xml",

      ...sitemapUrls,
    ],
  };
}

function generateSitemapUrls(
  baseURL: string,
  start: number,
  end: number
): string[] {
  const urls = [];
  for (let i = start; i <= end; i++) {
    urls.push(`${baseURL}/${i}`);
  }
  return urls;
}
