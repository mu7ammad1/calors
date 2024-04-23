"use client";
import { Button } from "@/components/ui/button";
import { colord } from "colord";
import { CheckCheck } from "lucide-react";
import React, { useState } from "react";

interface CopyBTNProps {
  Copying: string;
}

const CopyColors: React.FC<CopyBTNProps> = ({ Copying }) => {
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
      className={`text-lg shadow-none px-2 bg-white/0 border-none relative top-0 left-0 right-0 bottom-0 w-full h-full hover:bg-white/0 opacity-0 hover:opacity-100`}
      style={{ color: colord(`#${Copying}`).invert().toHex() }}
    >
      {!copied ? (
        <div>{Copying}</div>
      ) : (
        <div className={`flex justify-center items-center gap-x-3`}>
          <CheckCheck absoluteStrokeWidth size={28} strokeWidth={1} />
          <p>{Copying}</p>
        </div>
      )}
    </Button>
  );
};

export default CopyColors;
