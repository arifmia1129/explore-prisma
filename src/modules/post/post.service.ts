import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export const createPostService = async (post: Post): Promise<Post> => {
  return await prisma.post.create({ data: post });
};
