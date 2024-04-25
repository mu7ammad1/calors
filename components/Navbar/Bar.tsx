import { Button } from "../ui/button";
import { LoginButton } from "../auth/login-button";
import { UserRound } from "lucide-react";

export default function Bar() {
  return (
    <div className="md:flex justify-center items-center">
      <LoginButton mode="modal" asChild>
        <Button
          variant="outline"
          size="default"
          className="w-full shadow-none border-none rounded-2xl bg-[#2ec4b6] hover:bg-[#37c2b4] text-white hover:text-white font-medium text-xs gap-x-2"
        >
          <span className={`max-md:hidden`}>Sign Up</span>
          <UserRound absoluteStrokeWidth strokeWidth={1.2} size={20} />
        </Button>
      </LoginButton>
    </div>
  );
}
