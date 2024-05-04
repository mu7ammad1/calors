import React from "react";
import SlugComponent from "../../_components/slug";

import type { Metadata, ResolvingMetadata } from "next";

import { BB } from "@/app/aaa/a1/BB";
import Palette from "../../_components/Palettes";
import { PrismaClient } from "@prisma/client";
import CopyColors from "../../_components/CopyColors";
import Link from "next/link";
import Drop from "../../_components/Drop";
import ClickCopy from "../../_components/ClickCopy";
import tinycolor from "tinycolor2";

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
  const slug = params.slug.split(`-`).join(`  #`).toUpperCase();

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    metadataBase: new URL("https://elcolors.com"),
    title: `Palette: #` + slug,
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: slug,
      description: "The React Framework for the Web",
      url: "https://elcolors.com",
      siteName: "elcolors",
      locale: "en_US",
      type: "website",
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
  const FindManyPalettes = await prisma.palettes.findMany({
    select: {
      id: true,
      Palette: true,
    },
    take: 10,
    distinct: "Palette",
  });

  return (
    <div>
      <BB p={`${params.slug}`} />
      <SlugComponent
        params={{
          slug: params.slug,
        }}
      />
      <h1 className={`text-5xl text-center font-semibold mb-10`}>Popular</h1>
      <section className={`flex justify-center items-center w-full`}>
        <div className={`grid grid-cols-3 gap-3 max-w-4xl w-full`}>
          {FindManyPalettes.map((palette, id) => {
            // Splitting the Palette string into an array of colors
            const colors = palette.Palette.split("-");

            return (
              <div key={id} className={`my-2`}>
                <div className="w-full h-80 flex flex-col">
                  {colors.map((color: string, index: number) => {
                    const validColor = tinycolor(color).isValid();
                    const textColor = validColor
                      ? tinycolor(color).isLight()
                        ? "#000000"
                        : "#ffffff"
                      : "#FFB703";

                    if (!validColor) return null;
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundColor: tinycolor(color).toHexString(),
                          color: textColor,
                        }}
                        className={`h-full hover:h-[2000px] text-opacity-0 duration-300 transition-all first:rounded-ss-2xl first:rounded-se-2xl last:rounded-ee-2xl last:rounded-es-2xl sticky overflow-hidden cursor-pointer`}
                      >
                        <span className="text-xl tttt uppercase w-full h-full flex justify-center items-center">
                          <ClickCopy Copying={color} />
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Drop colors={colors.join(`-`)} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
