"use server";

import { prisma } from "@/app/utils/prisma";

export async function getCategories() {
  return await prisma.category.findMany();
}
