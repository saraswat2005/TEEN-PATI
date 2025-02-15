import prisma from "@repo/db";

export const createUserInDB = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUserById = async (id: string, data: any) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

export const updatePhoneOrEmail = async (id: string, data: any) => {
  const dataToUpdate: any = {
    ...data,
    verified: false,
    updatedAt: new Date(),
  };
  return await prisma.user.update({
    where: { id },
    data: dataToUpdate,
  });
};
