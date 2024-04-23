import React from "react";
import SlugComponent from "../../_components/slug";
import { PrismaClient } from "@prisma/client";
import { BB } from "@/app/aaa/a1/BB";
const prisma = new PrismaClient();

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
