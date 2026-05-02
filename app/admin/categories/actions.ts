"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/utils/prisma";
import type { ApiResponse } from "@/lib/types";

type Request = {
  category: string;
  order: number;
};

export async function CreateCategoryAction({
  category,
  order,
}: Request): Promise<ApiResponse> {
  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (existingCategory) {
      return {
        status: "error",
        message: "Categoria já existe",
      };
    }

    const createdCategory = await prisma.category.create({
      data: {
        name: category,
        order,
      },
    });

    console.log(createdCategory);

    revalidatePath("/admin/categories");

    return {
      status: "success",
      message: "Categoria criada com sucesso!",
    };
  } catch (error) {
    console.error("CreateCategoryAction error:", error);

    return {
      status: "error",
      message: "Erro ao criar categoria",
    };
  }
}
