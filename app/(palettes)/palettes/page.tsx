import { Metadata } from "next";
import Palette from "@/app/(palettes)/_components/Palettes";

export const metadata: Metadata = {
  title: "Palettes",
  description:
    "Discover inspiration from a myriad of stunning color palettes and innovate something fantastic!",
};

export default function Palettes() {
  return (
    <main className="mt-5 flex justify-center items-center w-full px-5">
      <div className={`max-w-4xl w-full`}>
        <div className={`my-5`}>
          <h1 className={`text-center text-4xl font-bold pb-5 `}>Palettes</h1>
          <h1 className={`text-center text-xl font-normal pb-10`}>
            Discover inspiration from a myriad of stunning color palettes and
            innovate something fantastic!
          </h1>
        </div>
        <Palette />
      </div>
    </main>
  );
}
