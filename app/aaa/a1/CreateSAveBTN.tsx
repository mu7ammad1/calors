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
import { CreateSaveAction } from "@/actions/CreatePalettesAction";
import { useRef } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const CreateSAveBTN = ({ iscolor, isusername }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  async function action(data: FormData) {
    const color = iscolor.toLowerCase();
    const title = data.get("titleInput")?.toString().toLowerCase();
    const username = isusername.toLowerCase();
    if (!color || !title || !username) return;

    await CreateSaveAction(color, title, username);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action}>
      <Dialog>
        <div>
          <DialogTrigger>
            <Button
              variant={"outline"}
              size={"default"}
              className={`shadow-none gap-x-3`}
            >
              <Plus />
              <span>Save</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Save the palettes</DialogTitle>
              <DialogDescription
                className={`py-5 flex justify-center items-center gap-x-1`}
              >
                <Input
                  type="text"
                  placeholder={`Title of Palette`}
                  name={`titleInput`}
                  className={`shadow-none`}
                />
                <Button
                  variant={"outline"}
                  size={"icon"}
                  type="submit"
                  className={`shadow-none`}
                >
                  <Plus />
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </form>
  );
};

export default CreateSAveBTN;
