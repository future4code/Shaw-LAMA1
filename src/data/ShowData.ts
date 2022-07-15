import Show from "../model/Show";
import { BaseDatabase } from "./BaseDataBase";

export default class ShowData extends BaseDatabase {
    protected TABLE_NAME = "tabela_shows"


    insertShow = async (showTime: Show) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(showTime)

        } catch (error: any) {
            throw new Error(error.sqlMessage)

        }

    }

    get= async(week_day: string)=>{
        try {
           const result = await this.connection(this.TABLE_NAME)
            .select('*')
            .where({week_day})
            .orderBy(`start_time`)
            return result 
        } catch (error:any) {
            throw new Error(error.sqlMessage)
        };
    }

}