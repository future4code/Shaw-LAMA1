import User from "../../src/model/User"
import { userMock1 } from "./UserMocks"

export default class UserDataMock {
   
    insert = async (user: User) => {}

    findByEmail = async (email: string) => {
      return userMock1
    }

}