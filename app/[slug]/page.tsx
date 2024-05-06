import type { Metadata, ResolvingMetadata } from "next";
import colorNameList from "color-name-list";

import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import harmoniesPlugin from "colord/plugins/harmonies";
import namesPlugin from "colord/plugins/names";
import a11yPlugin from "colord/plugins/a11y";
import cmykPlugin from "colord/plugins/cmyk";
import hwbPlugin from "colord/plugins/hwb";
import labPlugin from "colord/plugins/lab";
import lchPlugin from "colord/plugins/lch";
import xyzPlugin from "colord/plugins/xyz";
import harmonies from "colord/plugins/harmonies";
import Conversion from "@/components/conversion";
import ClickCopy from "../(palettes)/_components/ClickCopy";

extend([harmonies]);
extend([xyzPlugin]);
extend([lchPlugin]);
extend([labPlugin]);
extend([hwbPlugin]);
extend([namesPlugin]);
extend([mixPlugin]);
extend([harmoniesPlugin]);
extend([a11yPlugin]);
extend([cmykPlugin]);

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
    twitter: {
      card: "app",
      title: "elcolors.com",
      description: "The React Framework for the Web",
      siteId: "1467726470533754880",
      creator: "@elcolors",
      creatorId: "1467726470533754880",
      images: {
        url: "https://elcolors.com/og.png",
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

export default function Color({ params }: { params: { slug: string } }) {
  const color = colord(`#${params.slug}`);
  const Hex = color.toHex();

  // Calculate tints
  const tints = color.tints(15).map((c) => c.toHex());
  // Calculate shades
  const shades = color.shades(15).map((c) => c.toHex());
  // Calculate tones
  const tones = color.tones(15).map((c) => c.toHex());

  // Calculate hues
  const hues = Array.from({ length: 15 }, (_, index) =>
    color.hue(index * (-235 / 15)).toHex()
  ).slice(2);

  const analogous = color.harmonies("analogous").map((c) => c.toHex());
  const complementary = color.harmonies("complementary").map((c) => c.toHex());
  const double_split_complementary = color
    .harmonies("double-split-complementary")
    .map((c) => c.toHex());
  const rectangle = color.harmonies("rectangle").map((c) => c.toHex());
  const split_complementary = color
    .harmonies("split-complementary")
    .map((c) => c.toHex());
  const tetradic = color.harmonies("tetradic").map((c) => c.toHex());
  const triadic = color.harmonies("triadic").map((c) => c.toHex());

  function renderContrastMessage(contrastValue: any) {
    if (contrastValue >= 21) {
      return <p className="text-green-500">({contrastValue})</p>;
    } else if (contrastValue >= 15) {
      return <p className="text-blue-500">({contrastValue})</p>;
    } else if (contrastValue >= 10) {
      return <p className="text-yellow-500">({contrastValue})</p>;
    } else if (contrastValue >= 5) {
      return <p className="text-orange-500">({contrastValue})</p>;
    } else {
      return <p className="text-red-500">({contrastValue})</p>;
    }
  }

  function someColor(params: any) {
    const Color = colorNameList.find((color) => color.hex === `#${params}`);
    return Color?.name;
  }

  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <section className={`w-full flex justify-center`}>
          <div
            className={`w-full flex justify-between items-center gap-3 mt-16 flex-row *:h-72 *:p-3 *:border *:rounded-xl`}
          >
            <div
              style={{
                backgroundColor: Hex,
                color: colord(Hex).invert().toHex(),
              }}
              className="w-full text-center text-4xl flex justify-center items-center"
            >
              {someColor(params.slug)}
            </div>
          </div>
        </section>
        <h1 className="text-center text-4xl font-bold mt-16 mb-10 uppercase">
          Conversion
        </h1>
        <section className={`w-full font-medium text-base uppercase `}>
          <div className=" flex justify-center items-center">
            <div className="w-full">
              <Conversion
                HEX={color.toHex()}
                RGB={color.toRgbString()}
                HSL={color.toHslString()}
                CMYK={color.toCmykString()}
                HWB={color.toHwbString()}
                LCH={color.toLchString()}
              />
            </div>
          </div>
        </section>
        <h1 className="text-center text-4xl font-bold mt-16 mb-10 uppercase">
          Manipulation
        </h1>
        <section className={`w-full font-medium text-base uppercase `}>
          <h1 className="text-left text-sm font-medium my-5 uppercase">
            Tints
          </h1>
          <div className="flex justify-center items-center">
            {tints.map((tint, index) => (
              <div
                key={index}
                style={{ backgroundColor: tint }}
                className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[250%] text-opacity-0 duration-300 transition-all sticky overflow-hidden cursor-pointer"
              >
                <span
                  className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                >
                  <ClickCopy Copying={tint} />
                </span>
              </div>
            ))}
          </div>
          <h1 className="text-left text-sm font-medium my-5 uppercase">
            Shades
          </h1>
          <div className="flex justify-center items-center">
            {shades.map((shade, index) => (
              <div
                key={index}
                style={{ backgroundColor: shade }}
                className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[250%] text-opacity-0 duration-300 transition-all sticky overflow-hidden cursor-pointer"
              >
                <span
                  className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                >
                  <ClickCopy Copying={shade} />
                </span>
              </div>
            ))}
          </div>
          <h1 className="text-left text-sm font-medium my-5 uppercase">
            Tones
          </h1>
          <div className="flex justify-center items-center">
            {tones.map((tone, index) => (
              <div
                key={index}
                style={{ backgroundColor: tone }}
                className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[250%] text-opacity-0 duration-300 transition-all sticky overflow-hidden cursor-pointer"
              >
                <span
                  className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                >
                  <ClickCopy Copying={tone} />
                </span>
              </div>
            ))}
          </div>
          <h1 className="text-left text-sm font-medium my-5 uppercase">hues</h1>
          <div className="flex justify-center items-center">
            {hues.map((hue, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: hue,
                }}
                className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[250%] text-opacity-0 duration-300 transition-all sticky overflow-hidden cursor-pointer"
              >
                <span
                  className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                >
                  <ClickCopy Copying={hue} />
                </span>
              </div>
            ))}
          </div>
        </section>

        <h1 className="text-center text-4xl font-bold mt-20 mb-10 uppercase">
          Harmonies
        </h1>
        <section
          className={`w-full font-medium text-base uppercase grid grid-cols-2 gap-2 mb-20`}
        >
          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              analogous
            </h1>
            <div className="flex justify-center items-center">
              {analogous.map((analogou, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: analogou }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={analogou} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              complementary
            </h1>
            <div className="flex justify-center items-center">
              {complementary.map((analogou, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: analogou }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={analogou} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              double split complementary
            </h1>
            <div className="flex justify-center items-center my-3">
              {double_split_complementary.map((tone, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: tone }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={tone} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              double split complementary
            </h1>
            <div className="w-full flex justify-center items-center">
              {rectangle.map((hue, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: hue,
                  }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={hue} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              split complementary
            </h1>
            <div className="w-full flex justify-center items-center">
              {split_complementary.map((hue, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: hue,
                  }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={hue} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              tetradic
            </h1>
            <div className="w-full flex justify-center items-center">
              {tetradic.map((hue, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: hue,
                  }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={hue} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-left text-sm font-medium my-5 uppercase">
              triadic
            </h1>
            <div className="w-full flex justify-center items-center">
              {triadic.map((hue, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: hue,
                  }}
                  className="w-full h-20 last:rounded-e-lg first:rounded-s-lg hover:w-[200%] duration-300 transition-all sticky overflow-hidden cursor-pointer"
                >
                  <span
                    className={`opacity-0 hover:opacity-100 uppercase w-full h-full flex justify-center items-center`}
                  >
                    <ClickCopy Copying={hue} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <h1 className="text-center text-4xl font-bold mt-20 mb-10 uppercase">
          CONTRAST
        </h1>
        <section
          className={`w-full font-medium text-base uppercase grid grid-cols-2 gap-2 mb-20`}
        >
          <div>
            <div className="flex justify-between items-center mx-5 my-2">
              <h1>BackGround Black</h1>
              <h1>
                {renderContrastMessage(colord(color).contrast("#000000"))}
              </h1>
            </div>
            <div
              style={{ color: `${color.toRgbString()}` }}
              className="border w-full h-52 bg-black rounded-2xl flex flex-col justify-evenly items-center text-3xl"
            >
              <h2>contrast</h2>
              <p className="text-center text-base">
                HARMONIES HARMONIES HARMONIES HARMONIES HARMONIES
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mx-5 my-2">
              <h1>BackGround White</h1>
              {renderContrastMessage(colord(color).contrast("#ffffff"))}
            </div>
            <div
              style={{ color: `${color.toRgbString()}` }}
              className="border w-full h-52 bg-white rounded-2xl flex flex-col justify-evenly items-center text-3xl"
            >
              <h2>contrast</h2>
              <p className="text-center text-base">
                HARMONIES HARMONIES HARMONIES HARMONIES HARMONIES
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
