import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calors.co"),

  title: { default: "calors", template: `%s | calors` },

  description:
    "Explore diverse and exciting color palettes with our Visualizer, and discover how colors can transform your space.",
  keywords: [
    `calors,coolors,color schema,colorhunt,color palettes,colorhunt,palettes,`,
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
    `Calors`,
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
  applicationName: "calors",
  creator: "mu7ammad osama",
  publisher: "calors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "app",
    title: "Calors",
    description:
      "Explore diverse and exciting color palettes with our Visualizer, and discover how colors can transform your space.",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
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
        <Head>
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
          <meta name="apple-mobile-web-app-title" content="Calors" />
          <meta name="application-name" content="Calors" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className={cn(poppins.className)}>
          <Navbar />
          {children}
          <Toaster />
        </body>
        <GoogleAnalytics gaId="G-W8YDCJ8Y0P" />
      </html>
    </SessionProvider>
  );
}