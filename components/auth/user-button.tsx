"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { UserRound } from "lucide-react";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          className={`outline-2 outline-[#ffc000] outline outline-offset-2 w-8 h-8`}
        >
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 rounded-2xl mt-2 py-2" align="end">
        <DropdownMenuItem
          className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl font-bold`}
        >
          <div className={`flex flex-col justify-end gap-y-1 pr-1`}>
            <p>Sigin As</p>
            <p className={`line-clamp-1`}>{user?.email}</p>
          </div>
        </DropdownMenuItem>
        <Link href={`/account`}>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl`}
          >
            <UserRound className="h-4 w-4 mr-2" />
            Setting
          </DropdownMenuItem>
        </Link>
        <Link href={`/account`}>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl`}
          >
            <UserRound className="h-4 w-4 mr-2" />
            Account
          </DropdownMenuItem>
        </Link>
        <Link href={`/account`}>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl`}
          >
            <UserRound className="h-4 w-4 mr-2" />
            Account
          </DropdownMenuItem>
        </Link>
        <Link href={`/account`}>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl`}
          >
            <UserRound className="h-4 w-4 mr-2" />
            Account
          </DropdownMenuItem>
        </Link>
        <Link href={`/account`}>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-stone-200 rounded-2xl`}
          >
            <UserRound className="h-4 w-4 mr-2" />
            Account
          </DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem
            className={`py-2 px-3 cursor-pointer focus:hover:bg-rose-500 rounded-2xl text-rose-500 focus:hover:text-white`}
          >
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
