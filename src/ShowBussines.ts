
import { stringify } from "uuid";
import ShowData from "./data/ShowData";
import Show from "./model/Show";
import { Authenticator } from "./services/Authenticator";
import IdGenerator from "./services/Generator";
import { HashManager } from "./services/HashManage";
import { ShowDTO } from "./types/ShowDTO";

export default class ShowBussines {
    
    constructor(
        private showData = new ShowData,
        private authenticator = new Authenticator,
        private idGenerate = new IdGenerator,
        private hashManager = new HashManager
    ) { }
    signUpShow = async (showTime: ShowDTO,token:string) => {

        const { week_day, start_time, end_time, band_id } = showTime


        if (week_day !== "Sexta-feira" || "Sábado" || "Domingo") {
            throw new Error("You can only book the shows on the weekend")
        }

        if (start_time > 8 || start_time < 23) {
            throw new Error("you can only book the show on this until 23h")
        }

        const id = this.idGenerate.generateId()

        const newShow = new Show (
            id,
            week_day,
            start_time,
            end_time,
            band_id
            )
            
        

        
        await this.showData.insertShow(newShow)
        const getTokenData = this.authenticator.getTokenData(token)

        return getTokenData
    }


    getAllshows = async(week_day: string,)=>{

        if(!week_day){
            throw new Error("404 Not Found")
        }

        if(week_day !== "Sexta feira" && week_day !== "Sabado" && week_day !== "Domingo"){
            throw new Error("404 the shows only happen on the week_days")
        }

        const showHA = await this.showData.get(week_day)
        if (showHA.length===0) {
            throw new Error( "Get rest folk the show will be happen, only on the next week")
        }
        return showHA


       
       
    }



}  


