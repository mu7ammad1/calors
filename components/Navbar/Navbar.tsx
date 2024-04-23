"use client";
import Link from "next/link";
import Bar from "./Bar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserButton } from "../auth/user-button";
import Drawers from "./Drawers";
import Navigation from "./Navigation";

const Navbar = () => {
  const user = useCurrentUser();

  return (
    <nav className="flex justify-between items-center w-full px-4 nav z-50 p-2 border-b">
      <div className="flex gap-x-3">
        <h1 className={"text-4xl font-bold leading-8 max-md:text-3xl"}>
          <Link href="/">
            <span className="text-[#ffc000] tracking-widest">Calors</span>
          </Link>
        </h1>
        <Navigation />
      </div>
      <div className="flex justify-end gap-x-3 w-1/3 max-sm:w-full">
        <Drawers />
        {!user?.username && <Bar />}
        {user?.username && <UserButton />}
      </div>
    </nav>
  );
};

export default Navbar;
