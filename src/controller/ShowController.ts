import { Request, Response } from "express";
import ShowBussines from "../ShowBussines";
import { ShowDTO } from "../types/ShowDTO";
export default class ShowController {
    constructor(
        private showBussines: ShowBussines
    ) { }

    signUpShow = async (req: Request, res: Response) => {
        const { week_day, start_time, end_time, band_id } = req.body
        try {
            const showTime: ShowDTO = {
                week_day,
                start_time,
                end_time,
                band_id
            }
            const token: string = req.headers.authorization as string
            await this.showBussines.signUpShow(showTime, token)
            res.status(201).send({ message: "I'TS SHOW TIME!!!", token })

        } catch (error: any) {
            res.status(500).send(error.message)

        }
    }


    getAll = async (req: Request, res: Response) => {
        const { week_day } = req.body
        try {
            const showTime = await this.showBussines.getAllshows(week_day)
            res.status(200).send({ message: "showTime!!", showTime })

        } catch (error: any) {
            res.status(500).send(error.message)

        }






    }


}


// //  id VARCHAR(255) PRIMARY KEY,
// week_day VARCHAR(255) NOT NULL,
// start_time INT NOT NULL,
// end_time INT NOT NULL,
// band_id VARCHAR(255) NOT NULL,
// FOREIGN KEY(band_id) REFERENCES bands(id)