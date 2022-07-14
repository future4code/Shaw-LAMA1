import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserBussines } from "../userBussines";

export const userRouter = Router()

const userBussines = new UserBussines()
const userController = new UserController(userBussines)

userRouter.post("/signUp",userController.signUp)
userRouter.post("/login",userController.login)