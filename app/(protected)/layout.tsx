import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex items-start justify-start my-5 max-md:block">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
