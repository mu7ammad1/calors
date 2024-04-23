"use client";
import { Loader } from "lucide-react";
// استيراد الحزم والوحدات الضرورية
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

// تعريف العرض
export default function GE({ data }: { data: any }) {
  const [randomPalette, setRandomPalette] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // إذا كانت هناك بيانات
    if (data && data.length > 0) {
      // اختر باليت عشوائي
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomPalette = data[randomIndex].Palette;
      // عرض الباليت بشكل عشوائي
      setRandomPalette(randomPalette);
    }
  }, [data]);
  useEffect(() => {
    if (randomPalette.length > 0) {
      router.replace(`/generate/${randomPalette}`);
    }
  }, [randomPalette, router]);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Loader className="w-5 h-5 animate-spin" />
    </div>
  );
}
