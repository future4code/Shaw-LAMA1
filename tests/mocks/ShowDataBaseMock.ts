import Show from "../../src/model/Show"
import { showMock1, showMock2 } from "./ShowMock"

export default class ShowDataMock {

    insertShow = async (showTime: Show) => {   }

    get= async(week_day: string)=>{
       return [showMock1, showMock2]
    }

}