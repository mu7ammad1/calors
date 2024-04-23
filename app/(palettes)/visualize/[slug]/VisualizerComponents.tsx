import {
  Download,
  Ellipsis,
  ExternalLink,
  Files,
  Grid3X3,
  LifeBuoy,
  Share2,
} from "lucide-react";
import tinycolor from "tinycolor2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import ClickCopy from "../../_components/ClickCopy";
import Visualizer from "../../_components/Visualizer";

export default function VisualizerComponents({
  params,
}: {
  params: { slug: string };
}) {
  const colors = params.slug.split("-");
  const color = tinycolor(params.slug);
  const isColor = color.isValid();
  let textColor = "#000";

  const changePop = (hexColor: any) => {
    const color = tinycolor(hexColor);
    return color.toHex();
  };

  if (isColor) {
    const isDark = color.isDark();
    textColor = isDark ? "#fff" : "#000";
  }

  return (
    <main className="px-5 w-full my-10 flex justify-center">
      <section className="max-w-5xl w-full">
        <div className="w-full flex justify-center items-center max-w-5xl">
          {colors.map((color, index) => {
            const validColor = tinycolor(color).isValid();
            textColor = validColor
              ? tinycolor(color).isDark()
                ? "#fff"
                : "#000"
              : "#000";

            if (!validColor) return null;
            return (
              <div
                key={index}
                style={{ color: textColor, backgroundColor: `#${color}` }}
                className={`w-full h-32 relative`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="absolute top-2 right-5">
                    <Ellipsis absoluteStrokeWidth strokeWidth={1} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-64 *:text-base py-3 h-full border-none rounded-2xl"
                  >
                    <Link href={`/${color}`}>
                      <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                        <ExternalLink strokeWidth={1} size={20} />
                        Open Color
                      </DropdownMenuItem>
                    </Link>
                    <Separator className={`my-2`} />
                    <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                      <Share2 strokeWidth={1} size={20} />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                      <Grid3X3 strokeWidth={1} size={20} />
                      Team
                    </DropdownMenuItem>
                    <Separator className={`my-2`} />
                    <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                      <Download strokeWidth={1} size={20} />
                      Subscription
                    </DropdownMenuItem>
                    <div className="py-2">
                      <Separator />
                    </div>
                    <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                      <LifeBuoy strokeWidth={1} size={20} />
                      Subscription
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-x-3 py-3 rounded-xl">
                      <Files strokeWidth={1} size={20} />
                      Subscription
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div
                  style={{ color: textColor }}
                  className="h-full flex justify-center items-center text-base cursor-pointer rounded-full"
                >
                  <ClickCopy
                    Copying={validColor ? changePop(`${color}`) : `not a color`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={`flex justify-center items-center w-full`}>
          <Visualizer fill={params.slug} />
        </div>
      </section>
    </main>
  );
}
