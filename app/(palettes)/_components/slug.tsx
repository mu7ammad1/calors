"use client";
import {
  Download,
  Ellipsis,
  ExternalLink,
  Files,
  Fullscreen,
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
import { toast } from "sonner";

import ClickCopy from "./ClickCopy";
import Link from "next/link";
import Visualizer from "./Visualizer";

export default function SlugComponent({
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
    <main className="px-5 w-full my-10 mb-32">
      <section className="flex justify-center">
        <div className="w-full grid grid-cols-3 max-w-5xl max-md:grid-cols-2 max-sm:grid-cols-1">
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
                className={`w-full h-48 relative`}
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
                  className="h-full flex justify-center items-center text-2xl cursor-pointer"
                >
                  <ClickCopy
                    Copying={validColor ? changePop(`${color}`) : `not a color`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
