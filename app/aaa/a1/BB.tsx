import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import { Heart, Shapes } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
const prisma = new PrismaClient();

const CreateSAveBTN = dynamic(() => import("./CreateSAveBTN"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
const CopyBTN = dynamic(() => import("@/app/(palettes)/_components/CopyBTN"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
const CreatePaletteBTN = dynamic(() => import("./CreatePaletteBTN"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
const CreateLoveBTN = dynamic(() => import("./CreateLoveBTN"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
const DeleteLoveBTN = dynamic(() => import("./DeleteLoveBTN"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
export async function BB({ p }: any) {
  const session = await auth();

  const FindUniquePsalette = await prisma.love.findFirst({
    where: {
      love: `${p}`,
      usernameID: `${session?.user.username}`,
    },
  });
  const FindManyPsalette = await prisma.love.findMany({
    where: {
      love: `${p}`,
    },
    select: {
      usernameID: true,
    },
  });
  const FindManyPalettes = await prisma.palettes.findFirst({
    where: {
      Palette: p,
    },
  });

  const numberFindManyPsalette = FindManyPsalette.length;

  return (
    <section className="flex justify-center items-center w-full p-5 mt-16">
      <div className=" gap-x-3 w-full max-w-5xl">
        <h1
          className={`text-7xl text-center font-semibold mb-10 max-md:text-4xl`}
        >
          Palette
        </h1>
        <div className="flex justify-between items-center gap-x-3">
          <div className={`flex justify-center items-center gap-x-3`}>
            {FindManyPalettes?.Palette ? (
              <h1></h1>
            ) : (
              <Suspense fallback={<span>CreatePaletteBTN is leading...</span>}>
                <CreatePaletteBTN ispalette={`${p}`} />
              </Suspense>
            )}

            <Suspense fallback={<span>CreateSAveBTN is leading...</span>}>
              {session?.user ? (
                <CreateSAveBTN
                  iscolor={`${p}`}
                  istitle={`Title`}
                  isusername={`${session?.user.username}`}
                />
              ) : null}
            </Suspense>
          </div>
          <div className={`flex justify-center items-center gap-x-3`}>
            <Suspense fallback={<span>CopyBTN is leading...</span>}>
              <CopyBTN Copying={`https://www.elcolors.com/palettes/${p}`} />
            </Suspense>
            <Link href={`/visualize/${p}`}>
              <Button
                variant={"outline"}
                size={"default"}
                type="submit"
                className={`shadow-none flex justify-between gap-x-3 px-3 hover:bg-stone-50/0`}
              >
                <Shapes absoluteStrokeWidth size={23} strokeWidth={1} />
                <p className={`text-base`}>Visualizer</p>
              </Button>
            </Link>
            {session?.user ? (
              !FindUniquePsalette?.usernameID ? (
                <Suspense fallback={<span>CreateLoveBTN is leading...</span>}>
                  <CreateLoveBTN
                    love={p}
                    username={`${session?.user.username}`}
                    value={`${numberFindManyPsalette}`}
                  />
                </Suspense>
              ) : (
                <Suspense fallback={<span>DeleteLoveBTN is leading...</span>}>
                  <DeleteLoveBTN
                    love={p}
                    username={`${session?.user.username}`}
                    value={`${numberFindManyPsalette}`}
                  />
                </Suspense>
              )
            ) : (
              <Button
                variant={"outline"}
                size={"default"}
                type="submit"
                className={`shadow-none flex justify-between gap-x-3 px-3 hover:bg-stone-50/0`}
              >
                <Heart absoluteStrokeWidth size={23} strokeWidth={1} />
                <p className={`text-base`}>{numberFindManyPsalette}</p>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
