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
    metadataBase: new URL("https://elcolors.com"),
    title: `Visualize: #` + params.slug,
    description: `Explore, create, and innovate with elcolors - the ultimate platform for color enthusiasts.`,
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
      url: `https://elcolors.com/visualize/${params.slug}`,
      siteName: "elcolors",
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
