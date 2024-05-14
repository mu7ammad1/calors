import { PrismaClient } from "@prisma/client";

import type { Metadata, ResolvingMetadata } from "next";

import CopyColors from "../_components/CopyColors";
import Link from "next/link";

const prisma = new PrismaClient();

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    metadataBase: new URL("https://elcolors.com"),
    title: `all colors`,
    description: `Get more information about the color Colors, including possible combinations, color blindness simulation, compatibility with color libraries, as well as the ability to convert it into other formats such as RGB, HSB, HSL, and more.`,
    keywords: [
      ` Colors color scheme, color scheme, scheme color, color schemes,Colors color theme, color theme, color palette, color themes, color palettes, color combinations, color, colors, palettes, hex color wheel, pastel color palette, color wheel, color combination, color pallete, color names, web color schemes, color wheel generator, extract color palette from image, random color palette generator, color schemes generator, ui color palette generator, pretty colors, vintage color, color palette from image`,
    ],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: `Colors is Elcolors.com`,
      description: `Get more information about the color Colors, including possible combinations, color blindness simulation, compatibility with color libraries, as well as the ability to convert it into other formats such as RGB, HSB, HSL, and more.`,
      url: "https://elcolors.com",
      siteName: "elcolors.com",
      locale: "en_US",
      type: "website",
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    twitter: {
      card: "app",
      title: "elcolors",
      description: "The React Framework for the Web",
      siteId: "1467726470533754880",
      creator: "@elcolors",
      creatorId: "1467726470533754880",
      images: {
        url: "https://elcolors.org/og.png",
        alt: "elcolors Logo",
      },
      app: {
        name: "twitter_app",
        id: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
          googleplay: "twitter_app://googleplay",
        },
        url: {
          iphone: "https://elcolors.com",
          ipad: "https://elcolors.com",
        },
      },
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const FindManyPsalette = await prisma.colors.findMany({
    select: {
      Palette: true,
      Name: true,
    },
  });
  return (
    <section>
      <div className={`flex justify-center w-full`}>
        <div className={`grid grid-cols-3 gap-5 max-w-4xl w-full my-10`}>
          {FindManyPsalette.map((Data, index) => (
            <div key={index} className={`border rounded-2xl text-center`}>
              <div
                style={{ background: `#${Data.Palette}` }}
                className={`text-center rounded-t-2xl h-32 flex justify-center items-center`}
              >
                <CopyColors Copying={Data.Palette} />
              </div>
              <div className={`my-1`}>
                <Link
                  href={`/${Data.Palette}`}
                  className={`my-1 flex justify-center items-center`}
                >
                  {Data.Name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
