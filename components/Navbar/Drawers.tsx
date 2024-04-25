import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function Drawers() {
  return (
    <Dialog>
      <DialogTrigger className="w-60 hover:bg-stone-100 bg-stone-50 rounded-2xl max-md:w-32">
        <div className="w-full h-9 flex justify-start items-center px-2 text-sm gap-x-2 shadow-none">
          <Search absoluteStrokeWidth strokeWidth={1} size={18} />
          <span>Searching...</span>
        </div>
      </DialogTrigger>
      <DialogContent className={`h-96 p-2`}>
        <DialogHeader>
          <DialogTitle>
            <Input
              placeholder="search..."
              className="border-none shadow-none rounded-full focus-visible:ring-0 text-lg placeholder:uppercase"
            />
          </DialogTitle>
          <DialogDescription>DialogDescription</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
