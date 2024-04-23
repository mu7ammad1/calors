"use server";

import {
  CreateColors,
  CreateLove,
  CreatePalette,
  CreateSave,
  DeleteManyPsalette,
} from "@/server/palettes/Palettes";
import { revalidatePath } from "next/cache";

export async function CreatePalettesAction(palette: any) {
  await CreatePalette(palette);
  revalidatePath("/");
}

export async function CreateSaveAction(color: any, title: any, username: any) {
  await CreateSave(color, title, username);
  revalidatePath("/");
}

export async function CreateColorsAction(isPalette: any, isName: any) {
  await CreateColors(isPalette, isName);
  revalidatePath("/");
}

export async function CreateLovesAction(love: any, username: any) {
  await CreateLove(love, username);
  revalidatePath("/");
}
export async function DeleteManyPsaletteAction(love: any, username: any) {
  await DeleteManyPsalette(love, username);
  revalidatePath("/");
}
