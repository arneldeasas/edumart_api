import { Request, Response } from "express";
import { User } from "../types/user";

const createUser = async (req: Request, res: Response) => {
  try {
    const user:User = req.body ;
    console.log(user.email);
    
    res.json(user).status(200);
  } catch (error) {
    res.json(error).status(500);
  }
};

export const userController = {
  createUser,
};
