import Band from "../model/Band";
import { BaseDatabase } from "./BaseDataBase";


export class BandDataBase extends BaseDatabase{
    protected TABLE_NAME = "tabela_shows"

    async insertBand(band:Band){
        try{
            await this.connection(this.TABLE_NAME)
            .insert(band)
            
        }catch (error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectNameBand(name:string){
        try{
            const [result] = await this.connection(this.TABLE_NAME)
            .select("name")
            .where({name})

            return result

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectBandById(id:string){
        try{
            const [result] = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({id})

            return result
        }catch (error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}