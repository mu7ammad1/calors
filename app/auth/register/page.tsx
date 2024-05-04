import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "description",
  keywords: `Palettes,Palettes elcolors, Palettes color`,
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
