import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function generateAllHexColors() {
  try {
    const allPalettes = await prisma.colors.findMany({
      select: {
        Palette: true,
      },
    });
    return allPalettes;
  } catch (error) {
    console.error("Error fetching palettes:", error);
    throw error;
  }
}

export default async function Sitemap() {
  try {
    const allPalettes = await generateAllHexColors();
    const paletteUrls = allPalettes.map((Data) => {
      return {
        url: `https://elcolors.com/${Data.Palette}`,
        changeFrequency: `weekly`,
        priority: 0.7,
      };
    });

    return [
      {
        url: "https://elcolors.com",
        lastModified: new Date(),
        changeFrequency: `daily`,
        priority: 1,
      },
      ...paletteUrls,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return []; // Return an empty array in case of error
  }
}
