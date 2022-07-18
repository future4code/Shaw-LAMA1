import { BandDataBase } from "../data/BandDataBase";
import { CustomError } from "../error/CustomError";
import Band from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import  IdGenerator  from "../services/Generator";
import { BandInputDTO } from "../types/BandInputDTO";

export default class BandBusiness {
    constructor(
        private bandDataBase: BandDataBase,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){}

    async createBand(band:BandInputDTO, token:string){
       
        if (!token) {
            throw new CustomError(401,'Not authorized')
        }

        const authenticatorRole = this.authenticator.getData(token)

        if(authenticatorRole.role !== "ADMIN"){

            throw new CustomError(406,'Invalid values')
        }

        const {name, music_genre, responsible} = band

        const registeredNameBand = await this.bandDataBase.selectNameBand(name)
       
        if(registeredNameBand){
            throw new CustomError(409,"Band already registered")
        }

        if (!name || !music_genre || !responsible) {
            throw new CustomError(406,'Fill in the fields, please')
        }

        if (name !== String(name) || music_genre !== String(music_genre) || responsible !== String(responsible)) {
            throw new CustomError(406,'Invalid values')
        }

        const id = this.idGenerator.generateId()

        const modelBand = new Band(
            id,
            name,
            music_genre,
            responsible
        )
        console.log(modelBand);
        

        await this.bandDataBase.insertBand(modelBand)
        
    } 

    async getBandById(id:string, token:string){

        if (!token) {
            throw new CustomError(401,'Not authorized')
        }
        

        if (!id) {
            throw new CustomError(406,'Fill in the fields, please')
        }

        const band = await this.bandDataBase.selectBandById(id)

        if (!band) {
            throw new CustomError(404,'Post not found!')
        }

        return band
    }
}