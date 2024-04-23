"use client";
import { ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

interface ClickCopyProps {
  Copying: string;
}

const ClickCopy: React.FC<ClickCopyProps> = ({ Copying }) => {
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
    <div
      onClick={handleCopy}
      className="flex w-full h-full justify-center items-center"
    >
      {copied ? (
        <span className="flex gap-3 items-center">
          <ClipboardCheck absoluteStrokeWidth size={20} strokeWidth={1} />
          Copying
        </span>
      ) : (
        Copying
      )}
    </div>
  );
};

export default ClickCopy;
