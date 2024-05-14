import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elcolors.com"),

  title: { default: "elcolors", template: `%s | elcolors.com` },

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
  referrer: "origin-when-cross-origin",
  applicationName: "elcolors",
  creator: "hasub.net",
  publisher: "elcolors",
  robots: { follow: true, index: true },
  archives: "https://elcolors.com",
  appleWebApp: { capable: true, title: "Elcolors", statusBarStyle: "default" },
  twitter: {
    card: "summary",
    site: "@Elcolors.com",
    creator: "@Elcolors.com",
    images:
      "https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0",
  },
  openGraph: {
    type: "website",
    url: "https://elcolors.com",
    title: "Elcolors | Fonts",
    description:
      "شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم",
    siteName: "Elcolors",
    images: [
      {
        url: `https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0`,
      },
    ],
    locale: "ar_EGYPT",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="apple-mobile-web-app-title" content="elcolors" />
          <meta name="application-name" content="elcolors" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="_Cq5yDt7k5bAU6L4YIph8QTKUlUiPjIAv7cSmTDMwBQ"
          />
        </head>
        <body className={cn(poppins.className)}>
          <Navbar />
          {children}
          <Toaster />
        </body>
        <GoogleAnalytics gaId="G-W8YDCJ8Y0P" />
        <GoogleTagManager gtmId="GTM-WZJVDWRC" />
      </html>
    </SessionProvider>
  );
}
