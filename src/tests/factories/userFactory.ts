import bcrypt from "bcrypt";
import { prisma } from "../../database.js";
import { CreateUserData } from "../../services/userService.js";

export default async function userFactory(user: CreateUserData) {
  await prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    },
  });
}