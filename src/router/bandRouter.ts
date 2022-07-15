import { Router } from "express";
import BandBusiness from "../business/BandBusiness";
import BandController from "../controller/BandController";
import { BandDataBase } from "../data/BandDataBase";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/Generator";

export const bandRouter = Router()

const bandBusness = new BandBusiness(
new BandDataBase(),
new Authenticator(),
new IdGenerator())

const bandController = new BandController(bandBusness)

bandRouter.post("/adicionar", bandController.createBandController)
bandRouter.get("/:id", bandController.getBandByIdController)