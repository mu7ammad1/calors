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
    title: `Colors`,
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: `Colors`,
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
