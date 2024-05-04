async function generateAllHexColors() {
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
  return colors.slice(3260000, 3280000); // Limit the number of colors to 50;
}

export default async function Sitemap() {
  try {
    const allArticles = await generateAllHexColors();

    const articles = allArticles.map((article) => {
      return {
        url: `https://elcolors.com/${article.hexColor}`,
        changeFrequency: `weekly`,
        priority: 0.7,
      };
    });

    return [
      {
        url: "https://elcolors.com",
        lastModified: new Date().toISOString(),
        changeFrequency: `daily`,
        priority: 1,
      },
      ...articles,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return []; // Return an empty array in case of error
  }
}
