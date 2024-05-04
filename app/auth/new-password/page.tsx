import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Password",
  description: "description",
  keywords: `Palettes,Palettes elcolors, Palettes color`,
};

const NewPasswordPage = () => {
  return <NewPasswordForm />;
};

export default NewPasswordPage;
