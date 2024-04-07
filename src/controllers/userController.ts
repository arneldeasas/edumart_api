import { Request, Response } from "express";
import { User } from "../types/user";
import { db } from "../utils/dbServer";

const createUser = async (req: Request, res: Response) => {
  try {
    let user = req.body;
    console.log(user);

    delete user.confirmPassword;
    const newUser = await db?.user.create({
      data: user,
    });
    console.log('EYYYY',newUser);
  
    res.json(newUser).status(200);
  } catch (error:any) {
    res.status(400).json(error)
  }
};

export const userController = {
  createUser,
};
