import { GoogleAnalytics } from "@next/third-parties/google";
import Palette from "./(palettes)/_components/Palettes";

export default function Home() {
  return (
    <main className="mt-5 flex justify-center items-center w-full px-5">
      <div className={`max-w-4xl w-full`}>
        <div className={`my-5`}>
          <h1 className={`text-4xl font-bold pb-5 `}>Palettes</h1>
          <h1 className={`text-xl font-normal pb-10`}>
            Discover inspiration from a myriad of stunning color palettes and
            innovate something fantastic!
          </h1>
        </div>
        <Palette />
      </div>
    </main>
  );
}
