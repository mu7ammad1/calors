"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Heart } from "lucide-react";
import { CreateLovesAction } from "@/actions/CreatePalettesAction";

const CreateLoveBTN = ({
  love,
  username,
  value,
}: {
  love: any;
  username: any;
  value: String;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const loves = love;
    const usernames = username;

    if (!love || !usernames) return;

    await CreateLovesAction(loves, usernames);
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      action={action}
      className={`flex gap-x-4 justify-start w-full max-w-3xl`}
    >
      <Button
        variant={"outline"}
        size={"default"}
        type="submit"
        className={`shadow-none flex justify-between gap-x-3 px-3`}
      >
        <Heart absoluteStrokeWidth size={23} strokeWidth={1} />
        <p className={`text-base`}>{value}</p>
      </Button>
    </form>
  );
};

export default CreateLoveBTN;
