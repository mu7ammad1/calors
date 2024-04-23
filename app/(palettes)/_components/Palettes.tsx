import { FindManyPalettes } from "@/server/palettes/Palettes";
import tinycolor from "tinycolor2";
import ClickCopy from "./ClickCopy";

import Drop from "./Drop";

export default async function Palette() {
  const Data = await FindManyPalettes();

  if (!Data) {
    return null;
  }

  return (
    <section className={`flex justify-center items-center w-full`}>
      <div className={`max-w-4xl w-full`}>
        <div
          className={`grid grid-cols-3 gap-5 justify-center w-full max-sm:grid-cols-1 max-md:grid-cols-2`}
        >
          {Data.map((palette: any, id: any) => {
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
        <button>Read More</button>
      </div>
    </section>
  );
}
