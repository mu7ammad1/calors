import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Ellipsis } from "lucide-react";
import Link from "next/link";

export default function Drop() {
  return (
    <Menubar className={`border-none shadow-none`}>
      <MenubarMenu>
        <MenubarTrigger className={`rounded-full p-0`} name="menu">
          <Ellipsis absoluteStrokeWidth strokeWidth={1.5} size={32} />
        </MenubarTrigger>
        <MenubarContent className={`border-none`}>
          <MenubarItem>Create</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Social media</MenubarSubTrigger>
            <MenubarSubContent className={`mr-3 w-40 border-none`}>
              <MenubarItem>elcolors.com</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Facebook</MenubarItem>
              <MenubarItem>Instagram</MenubarItem>
              <MenubarItem>Pintrest</MenubarItem>
              <MenubarItem>Twitter</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <Link href={`/about`}>
            <MenubarItem>About</MenubarItem>
          </Link>
          <Link href={`/terms`}>
            <MenubarItem>Terms of Service</MenubarItem>
          </Link>
          <Link href={`/privacy`}>
            <MenubarItem>Privacy Policy</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
