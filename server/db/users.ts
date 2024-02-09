import { prismaC } from ".";
import bycript from 'bycript'

export const createUser = (userData) => {
  const finalUser = {
    ...userData,
    password: bycript.hashSync(userData.password, 10)
  }

  return prismaC.user.create({
    data: finalUser,
  });
};
