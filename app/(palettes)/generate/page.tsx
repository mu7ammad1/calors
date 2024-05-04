import { FindManyPalettes } from "@/server/palettes/Palettes";
import GE from "../_components/GE";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate",
  description: "Generate colors and Palettes and Visualize",
  keywords: `Generate,Generate elcolors, Generate color`,
};
export default async function Generate() {
  try {
    const palettes = await FindManyPalettes();
    return (
      <div>
        <GE data={palettes} />
      </div>
    );
  } catch (error) {
    return <div>Error fetching palettes</div>;
  }
}
