"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { CreateColorsAction } from "@/actions/CreatePalettesAction";
import { useRef } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const CreateColorsBTN = () => {
  const formRef = useRef<HTMLFormElement>(null);
  async function action(data: FormData) {
    const isame = data.get("name")?.toString().toLowerCase();
    const isalette = data.get("palette")?.toString().toLowerCase();
    if (!isame || !isalette) return;

    await CreateColorsAction(isalette, isame);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className={`p-5 gap-3 flex`}>
      <Input
        type="text"
        placeholder={`name`}
        name={`name`}
        className={`shadow-none`}
      />
      <Input
        type="text"
        placeholder={`palette`}
        name={`palette`}
        className={`shadow-none`}
      />
      <Button
        variant={"default"}
        size={"icon"}
        type="submit"
        className={`shadow-none w-full`}
      >
        <Plus />
      </Button>
    </form>
  );
};

export default CreateColorsBTN;
