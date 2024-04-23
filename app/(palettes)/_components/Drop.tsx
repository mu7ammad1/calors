import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Drop(colors: any) {
  return (
    <section className={`mt-2 flex gap-x-3`}>
      <Button variant={"outline"} size={"default"} className={`shadow-none font-normal`}>
        <Link href={`palettes/${colors.colors}`}>Visit</Link>
      </Button>
    </section>
  );
}