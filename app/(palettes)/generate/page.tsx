import { FindManyPalettes } from "@/server/palettes/Palettes";
import GE from "../_components/GE";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate",
  description: "Generate",
  keywords: `Generate,Generate alcolor, Generate color`,
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
    console.error("Error fetching palettes:", error);
    return <div>Error fetching palettes</div>;
  }
}
