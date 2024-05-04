import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "description",
  keywords: `Palettes,Palettes elcolors, Palettes color`,
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
