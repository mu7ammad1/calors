"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-2 rounded-xl gap-10 w-52 max-md:w-full max-md:justify-center">
      <div className="flex flex-col-reverse gap-2 w-full max-md:block">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
          className={`py-6 text-base shadow-none`}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
          className={`py-6 text-base shadow-none`}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/admin" ? "default" : "outline"}
          className={`py-6 text-base shadow-none`}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/setting" ? "default" : "outline"}
          className={`py-6 text-base shadow-none`}
        >
          <Link href="/setting">Setting</Link>
        </Button>
      </div>
    </nav>
  );
};
