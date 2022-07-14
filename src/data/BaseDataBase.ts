import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export class BaseDatabase {
    protected connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: 3306,
            multipleStatements: true
        }
    })

    public Connection(){
        return this.connection
    }
} 