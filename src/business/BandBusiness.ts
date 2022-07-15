import { BandDataBase } from "../data/BandDataBase";
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
            throw new Error('Not authorized')
        }

        const authenticatorRole = this.authenticator.getData(token)

        if(authenticatorRole.role !== "ADMIN"){

            throw new Error('Invalid values')
        }

        const {name, music_genre, responsible} = band

        const registeredNameBand = await this.bandDataBase.selectNameBand(name)
       
        if(registeredNameBand){
            throw new Error("Band already registered")
        }

        if (!name || !music_genre || !responsible) {
            throw new Error('Fill in the fields, please')
        }

        if (name !== String(name) || music_genre !== String(music_genre) || responsible !== String(responsible)) {
            throw new Error('Invalid values')
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
            throw new Error('Not authorized')
        }
        

        if (!id) {
            throw new Error('Fill in the fields, please')
        }

        const band = await this.bandDataBase.selectBandById(id)

        if (!band) {
            throw new Error('Post not found!')
        }

        return band
    }
}