import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export const createPostService = async (post: Post): Promise<Post> => {
  return await prisma.post.create({ data: post });
};
export const getPostService = async (
  options: any
): Promise<{ total: number; data: Post[] } | null> => {
  const { sortBy, sortOrder, searchTerm, page = 1, limit = 2 } = options;

  const take = parseInt(limit);
  const skip = parseInt(limit) * (parseInt(page) - 1);

  return await prisma.$transaction(async (tx) => {
    const res = await tx.post.findMany({
      take,
      skip,
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

    const total = await tx.post.count();

    return { data: res, total };
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
export const updatePostByIdService = async (
  id: number,
  payload: Partial<Post>
): Promise<Post | null> => {
  return await prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });
};
export const deletePostByIdService = async (
  id: number
): Promise<Post | null> => {
  return await prisma.post.delete({
    where: {
      id,
    },
  });
};
