import { User, Profile, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserService = async (user: User): Promise<User> => {
  return await prisma.user.create({
    data: user,
  });
};
export const getUserService = async (): Promise<object[]> => {
  // return await prisma.user.findMany({
  //   select: {
  //     email: true,
  //     id: true,
  //   },
  // });

  return await prisma.$queryRaw`select * from users`;
};
export const getUserByIdService = async (id: number): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });

  if (!user) {
    throw Error("Can't get user");
  }
  return user;
};

export const createUpdateUserProfileService = async (
  profile: Profile
): Promise<Profile> => {
  let res;

  const isUserProfileExist = await prisma.profile.findUnique({
    where: {
      userId: profile.userId,
    },
  });

  if (isUserProfileExist) {
    res = await prisma.profile.update({
      where: {
        userId: profile.userId,
      },
      data: {
        bio: profile.bio,
      },
    });
  } else {
    res = await prisma.profile.create({
      data: profile,
    });
  }
  return res;
};

export const learnAggregateGroupingService = async () => {
  // const res = await prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _count: {
  //     authorId: true,
  //   },
  //   _sum: {
  //     authorId: true,
  //   },
  // });

  const res = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });

  return res;
};
