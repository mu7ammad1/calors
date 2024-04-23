"use client";

import { Button } from "@/components/ui/button";
import { CreatePalettesAction } from "@/actions/CreatePalettesAction";
import { useRef } from "react";
import { Plus } from "lucide-react";

const CreatePaletteBTN = ({ ispalette }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  async function action(data: FormData) {
    const palette = ispalette.toLowerCase();
    if (!palette || !palette) return;

    await CreatePalettesAction(palette);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action}>
      <Button variant={"outline"} size={"icon"} type="submit">
        <Plus />
      </Button>
    </form>
  );
};

export default CreatePaletteBTN;
