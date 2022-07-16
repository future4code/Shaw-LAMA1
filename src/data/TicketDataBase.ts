import Ticket from "../model/Ticket";
import { BaseDatabase } from "./BaseDataBase";

export class TicketiDataBase extends BaseDatabase{
    protected TABLE_NAME = "tickets"

    async insertTicket(ticket: Ticket){
        try{
            const result =  await this.connection(this.TABLE_NAME)
            .insert(ticket)

            return result
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}