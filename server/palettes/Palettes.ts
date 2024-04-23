import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function FindManyPalettes() {
  try {
    const FindManyPalettes = await prisma.palettes.findMany({
      select: {
        id: true,
        Palette: true,
      },

      orderBy: {
        Palette: "desc",
      },
    });

    return FindManyPalettes;
  } catch (error) {
    console.error("Error sending palettes:", error);
  }
}

export async function CreatePalette(palette: any) {
  try {
    const createdPalette = await prisma.palettes.create({
      data: {
        Palette: palette,
      },
    });

    return createdPalette;
  } catch (error) {
    console.error("Error creating palette:", error);
    throw error;
  }
}

export async function CreateLove(love: any, username: any) {
  try {
    const CreatedLove = await prisma.love.create({
      data: {
        love: love,
        usernameID: username,
      },
    });

    return CreatedLove;
  } catch (error) {
    console.error("Error creating palette:", error);
    throw error;
  }
}

export async function CreateSave(color: any, title: any, username: any) {
  try {
    const createdPalette = await prisma.save.create({
      data: {
        colors: color,
        title: title,
        usernameID: username,
      },
    });

    console.log(createdPalette);
    return createdPalette;
  } catch (error) {
    console.error("Error CreateSave palette:", error);
    throw error;
  }
}

export async function CreateColors(isPalette: any, isName: any) {
  try {
    const createColors = await prisma.colors.create({
      data: {
        Palette: isPalette,
        Name: isName,
      },
    });

    console.log(createColors);
    return createColors;
  } catch (error) {
    console.error("Error CreateSave palette:", error);
    throw error;
  }
}

export async function FindManyColors() {
  try {
    const FindManyPalettes = await prisma.colors.findMany({
      select: {
        Palette: true,
        Name: true,
      },
      orderBy: {
        Palette: "asc",
      },
    });

    return FindManyPalettes;
  } catch (error) {
    console.error("Error sending palettes:", error);
  }
}
export async function FindUniquePalette(palette: any, username: any) {
  try {
    const FindUniquePsalette = await prisma.love.findUnique({
      where: {
        id: ``,
        usernameID: username,
        love: palette,
      },
      select: {
        love: true,
        usernameID: true,
      },
    });
    return FindUniquePsalette;
  } catch (error) {
    console.error("Error FindUniquePalette palette:", error);
    throw error;
  }
}
export async function DeleteManyPsalette(palette: any, username: any) {
  try {
    const deleteManyPsalette = await prisma.love.deleteMany({
      where: {
        love: palette,
        usernameID: username,
      },
    });
    console.log(deleteManyPsalette);
    return deleteManyPsalette;
  } catch (error) {
    console.error("Error deleteManyPsalette palette:", error);
    throw error;
  }
}
