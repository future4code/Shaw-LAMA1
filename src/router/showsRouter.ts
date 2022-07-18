import { Router } from "express";
import ShowController from "../controller/ShowController";
import ShowBussines from "../business/ShowBussines";

export const showsRouter = Router()


const showBussiness =  new ShowBussines()
const showController = new ShowController(showBussiness)


showsRouter.post("/register",showController.signUpShow)
showsRouter.get("/getAllshows",showController.getAll)