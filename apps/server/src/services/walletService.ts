import prisma from "@repo/db";

export const getWalletBalance = async (userId: any) => {
  return await prisma.wallet.findFirst({
    where: {
      userId,
    },
  });
};

export const incrementTheBalance = async (userId: any, amount: number) => {
  const wallet = await prisma.wallet.findFirst({
    where: {
      userId,
    },
  });

  if (wallet) {
    return await prisma.wallet.update({
      where: {
        id: wallet.id,
      },
      data: {
        balance: wallet.balance + amount,
      },
    });
  }
  return null;
};

export const decrementTheBalance = async (userId: any, amount: number) => {
  const wallet = await prisma.wallet.findFirst({
    where: {
      userId,
    },
  });

  if (wallet) {
    return await prisma.wallet.update({
      where: {
        id: wallet.id,
      },
      data: {
        balance: wallet.balance - amount,
      },
    });
  }
  return null;
};
