import { MetadataRoute } from "next";

export async function generateSitemaps() {
  // Assuming you want to generate sitemaps for each batch of 50,000 colors
  const totalColors = 8388608; // Total number of colors
  const batchSize = 20000; // Google's limit is 50,000 URLs per sitemap
  const numSitemaps = Math.ceil(totalColors / batchSize);

  const sitemaps = [];
  for (let i = 0; i < numSitemaps; i++) {
    sitemaps.push({ id: i });
  }

  return sitemaps;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const start = id * 20000;
  const end = start + 20000;
  const products = await generateAllHexColors(start, end);

  return products.map((product) => ({
    url: `https://elcolors.com/${product.hexColor}`,
    priority: 0.5,
  }));
}

async function generateAllHexColors(startIndex: number, endIndex: number) {
  const colors = [];
  for (let r = 0; r <= 255; r++) {
    for (let g = 0; g <= 255; g++) {
      for (let b = 0; b <= 255; b++) {
        const hexR = ("0" + r.toString(16)).slice(-2);
        const hexG = ("0" + g.toString(16)).slice(-2);
        const hexB = ("0" + b.toString(16)).slice(-2);
        colors.push({
          hexColor: `${hexR}${hexG}${hexB}`, // Store the hex color value
        });
      }
    }
  }
  return colors.slice(startIndex, endIndex); // Limit the number of colors to 50,000;
}
