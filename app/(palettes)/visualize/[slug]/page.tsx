import type { Metadata, ResolvingMetadata } from "next";

import { BB } from "@/app/aaa/a1/BB";
import VisualizerComponents from "./VisualizerComponents";

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
    metadataBase: new URL("https://calors.co"),
    title: `visualize: #` + slug,
    description: `Explore, create, and innovate with Calors - the ultimate platform for color enthusiasts.`,
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
      url: "https://calors.co",
      siteName: "Next.js",
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
      title: "Next.js",
      description: "The React Framework for the Web",
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
}

export default async function Page({ params, searchParams }: Props) {
  return (
    <main>
      <VisualizerComponents
        params={{
          slug: params.slug,
        }}
      />
    </main>
  );
}
