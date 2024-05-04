import React from "react";

import { BB } from "@/app/aaa/a1/BB";
import dynamic from "next/dynamic";

const SlugComponent = dynamic(
  () => import("@/app/(palettes)/_components/slug"),
  {
    loading: () => <p>…Loading</p>,
    ssr: false,
  }
);
export default async function Slug({ params }: { params: { slug: string } }) {
  return (
    <div>
      <BB p={`${params.slug}`} />
      <SlugComponent
        params={{
          slug: params.slug,
        }}
      />
    </div>
  );
}
