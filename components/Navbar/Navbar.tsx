import Link from "next/link";
import Bar from "./Bar";
import { UserButton } from "../auth/user-button";
import Drawers from "./Drawers";
import Navigation from "./Navigation";
import { auth } from "@/auth";
import Drop from "./Drop";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center w-full px-4 nav z-50 p-2 border-b">
      <div className="flex w-1/2 justify-start items-center gap-x-3">
        <h1 className={"text-4xl font-bold leading-8 max-md:text-3xl"}>
          <Link href="/">
            <span className="text-[#2ec4b6] tracking-widest">Calors</span>
          </Link>
        </h1>
        <Navigation />
      </div>
      <div className="flex justify-end gap-x-3 w-2/3 max-sm:w-full">
        <Drawers />
        {!session?.user?.username && <Bar />}
        {session?.user?.username && <UserButton />}
        <Drop />
      </div>
    </nav>
  );
}
