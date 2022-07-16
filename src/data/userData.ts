import User from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "users"
    insert = async (user: User) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(user)   

        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    findByEmail = async (email: string) => {
        try {
          const [result] = await this.connection(this.TABLE_NAME)
                .select('*')
                .where({ email })
              
                return result
        } catch (error: any) {
            throw new Error(error.sqlMessage)

        }
    }

}