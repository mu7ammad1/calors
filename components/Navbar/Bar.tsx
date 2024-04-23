import { Button } from "../ui/button";
import { LoginButton } from "../auth/login-button";

export default function Bar() {
  return (
    <div className="md:flex justify-center items-center">
      <LoginButton mode="modal" asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full shadow-none border-none rounded-2xl bg-[#ffc000] hover:bg-black hover:text-white font-medium text-base"
        >
          Sign Up
        </Button>
      </LoginButton>
    </div>
  );
}
