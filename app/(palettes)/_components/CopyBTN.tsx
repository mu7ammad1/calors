"use client";
import { Button } from "@/components/ui/button";
import { CheckCheck, ClipboardCheck, Copy } from "lucide-react";
import React, { useState } from "react";

interface CopyBTNProps {
  Copying: string;
}

const CopyBTN: React.FC<CopyBTNProps> = ({ Copying }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(Copying)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset the 'copied' state after 2 seconds
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <Button
      onClick={handleCopy}
      variant={"outline"}
      size={"icon"}
      className="shadow-none px-2"
    >
      {copied ? (
        <CheckCheck absoluteStrokeWidth size={20} strokeWidth={1} />
      ) : (
        <Copy absoluteStrokeWidth size={20} strokeWidth={1} />
      )}
    </Button>
  );
};

export default CopyBTN;
