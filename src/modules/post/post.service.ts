import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export const createPostService = async (post: Post): Promise<Post> => {
  return await prisma.post.create({ data: post });
};
export const getPostService = async (options: any): Promise<Post[] | null> => {
  const { sortBy, sortOrder, searchTerm } = options;
  return await prisma.post.findMany({
    include: {
      user: true,
      category: true,
    },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: "desc",
          },

    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          user: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
  });
};
export const getPostByIdService = async (id: number): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      category: true,
    },
  });
};
