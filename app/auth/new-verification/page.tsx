import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification",
  description: "description",
  keywords: `Palettes,Palettes alcolor, Palettes color`,
};

const NewVerificationPage = () => {
  return <NewVerificationForm />;
};

export default NewVerificationPage;
