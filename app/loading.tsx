import { FiLoader } from "react-icons/fi";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center w-full h-screen text-3xl ">
      <FiLoader className="animate-spin" />
    </div>
  );
}
