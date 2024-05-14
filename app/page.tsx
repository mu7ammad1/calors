import { GoogleAnalytics } from "@next/third-parties/google";
import Palette from "./(palettes)/_components/Palettes";

import { Metadata } from "next";

const meta = {
  title:
    "Discover inspiration from a myriad of stunning color palettes and innovate something fantastic! - ELcolors.com",
  description:
    "Explore diverse and exciting color palettes with our Visualizer, and discover how colors can transform your space.",
  keywords: [
    `elcolors,coolors,color schema,colorhunt,color palettes,colorhunt,palettes,`,
    `Discover vibrant color palettes with our Visualizer`,
    `Transform your space with diverse color options`,
    `Explore exciting hues and shades`,
    `Unleash your creativity with our Visualizer tool`,
    `Find inspiration for your décor with our color palettes`,
    `Visualize endless possibilities for your space`,
    `Experience the power of color in transforming your home`,
    `Create a space that reflects your style with our Visualizer`,
    `Unlock the potential of your space with our color tools`,
    `Explore, visualize, and design with ease`,
    `color schema`,
    `colors`,
    `teal color`,
    `pink mirror`,
    `dusty rose color`,
    `black colour`,
    `colour`,
    `teal blue`,
    `dark green`,
    `green`,
    `blue`,
    `colorhunt`,
    `color palettes`,
    `palettes`,
    `color palette`,
    `color schema`,
    `Color Visualization`,
    `elcolors`,
    `Visualizer`,
    `happy color`,
    `faber castell polychromos`,
    `color wheel`,
    `polaroid 600 film`,
    `siser easy color dtv`,
    `red heart yarn`,
    `color factory`,
    `faber castell polychromos`,
    `yellow`,
    `adobe color`,
    `color of the year 2023`,
    `acrylic paint set`,
    `burgundy color`,
    `black paint`,
    `taupe color`,
    `tints`,
    `music visualizer`,
    `audio visualizer`,
    `color match`,
    `music visualizer free`,
    `white background photo`,
    `soft pastels`,
    `color io`,
    `sage green`,
    `emerald green`,
    `Visualizer colors`,
    `Visualizer palettes`,
    `Visualizer`,
    `Creative Inspiration`,
    `Color Discovery `,
    `Vibrant Palettes`,
    `Diverse Color Options`,
    `Creative Visualization`,
    `Exciting Hues`,
    `Inspiration for Décor`,
    `Endless Possibilities`,
    `Transformative Colors`,
    `Reflective Spaces`,
    `Space Potential`,
    `Easy Design`,
    `Creative Inspiration`,
    `Visualizer Tool`,
    `Color Visualization`,
    `Palette Exploration`,
    `Visual Design`,
  ],
  creator: "Shamlul",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shamlul.vercel.app"),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  archives: "https://shamlul.vercel.app",
  abstract: meta.description,
  creator: meta.creator,
  openGraph: {
    type: "website",
    url: "https://shamlul.vercel.app",
    title: "Shamlul - الصفحة الرئيسية",
    description: meta.description,
    siteName: "Shamlul",
    images: [
      {
        url: `https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0`,
      },
    ],
    locale: "ar_EGYPT",
  },
};
export default function Home() {
  return (
    <main className="mt-5 flex justify-center items-center w-full px-5">
      <div className={`max-w-4xl w-full`}>
        <div className={`my-5`}>
          <h1 className={`text-4xl font-bold pb-5 `}>Palettes</h1>
          <h1 className={`text-xl font-normal pb-10`}>
            Discover inspiration from a myriad of stunning color palettes and
            innovate something fantastic!
          </h1>
        </div>
        <Palette />
      </div>
    </main>
  );
}
