import { ResetForm } from "@/components/auth/reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "description",
  keywords: `Palettes,Palettes alcolor, Palettes color`,
};
const ResetPage = () => {
  return <ResetForm />;
};

export default ResetPage;
