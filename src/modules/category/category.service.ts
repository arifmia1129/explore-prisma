import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategoryService = async (
  category: Category
): Promise<Category> => {
  return await prisma.category.create({ data: category });
};
