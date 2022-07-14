import { Request, Response } from "express";
import BandBusiness from "../business/BandBusiness";
import { BandInputDTO } from "../types/BandInputDTO";

export default class BandController {
    constructor(
        private bandBusiness: BandBusiness
    ) { }
    async createBandController(req: Request, res: Response) {

        try {
            const { name, music_genre, responsible } = req.body

            const token: string = req.headers.authorization as string

            const input: BandInputDTO = {
                name, music_genre, responsible
            }

            await this.bandBusiness.createBand(input, token)

            res.status(201).send({message: "Added band"})

        } catch (error: any) {
            res.send({ message: error.sqlMessage || error.message })
        }
    }

    async getBandByIdController(req:Request, res:Response){
        try{
            const id:string = req.params.id

            const token: string = req.headers.authorization as string

            const result = await this.bandBusiness.getBandById(id,token)

            res.status(201).send({ result })

        }catch(error:any){
            
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}