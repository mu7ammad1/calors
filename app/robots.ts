import type { MetadataRoute } from "next";

const sitemapUrls = generateSitemapUrls(0, 198);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["*"],
        allow: ["/"],
      },
      {
        userAgent: ["Mediapartners-Google"],
        allow: ["/"],
      },
      {
        userAgent: ["ia_archiver"],
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

function generateSitemapUrls(start: number, end: number): string[] {
  const urls = [];
  for (let i = start; i <= end; i++) {
    urls.push(`https://elcolors.com/sitemaps/sitemap/${i}.xml`);
  }
  return urls;
}
