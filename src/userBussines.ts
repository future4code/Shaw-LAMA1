import  UserData  from "./data/userData";
import User from "./model/User";
import { Authenticator } from "./services/Authenticator";
import IdGenerator from "./services/Generator";
import { HashManager } from "./services/HashManage";
import { LoginDTO } from "./types/LoginDTO";
import { SignupDTO } from "./types/SignupDTO";

export class UserBussines{
    constructor(
        private userData = new UserData,
        private authenticator = new Authenticator,
        private idGenerate = new IdGenerator,
        private hashManager = new HashManager
    ){}

    inputSignup= async(inputUser: SignupDTO)=> {
        const {name,email,password,role}=inputUser
        
        if(!name || !email || !password ){
            throw new Error("Invalid fields")

        }
        // if(name || email){
        //     throw new Error("name and email is already registered")
        // }

        if(password.length < 6){
            throw new Error("password need to have at least 6 characters")
        }
       
     const id = this.idGenerate.generateId()

        const hashpassword = await this.hashManager.hash(inputUser.password)

     
        const user = new User(
            id,
            name,
            email,
            hashpassword,
            role
        )

        await this.userData.insert(user)
        
        const token = this.authenticator.generateToken({id,role})
        return token

    }


    loginUser = async(input: LoginDTO)=>{

        const {email,password}=input

        
        if(!email || !password){
            throw new Error("email or password invalid")
        }
        const userFromDB = await this.userData.findByEmail(email) 
        
        
        const passwordIsCorrect = await this.hashManager.compare(password,userFromDB.password)
        
        if(!passwordIsCorrect){
            throw new Error("password is invalid")
        }
       
    const token = this.authenticator.generateToken({id:userFromDB.id ,role:userFromDB.role})

        return token


    }

    
}