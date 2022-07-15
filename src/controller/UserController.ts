
import { UserBussines } from "../userBussines";
import { SignupDTO } from "../types/SignupDTO";
import { Request, Response } from "express";
import { LoginDTO } from "../types/LoginDTO";

export class UserController {
    constructor(
        private userBussines: UserBussines
    ) { }
    signUp = async(req: Request, res: Response)=>{
        const {name, email,password,role} = req.body
        try {
            const inputUser: SignupDTO = {
                name: name,
                email: email,
                password: password,
                role: role
            }

            const token = await this.userBussines.inputSignup(inputUser)
            res.status(201).send({message:"User Createad",token})

            
        } catch (error: any) {
            res.send(error.message)

        }
    }

    login = async(req:Request,res:Response)=>{
        try {
            const {email,password} = req.body
            const input:LoginDTO={
                email,
                password   
            }

            const token = await this.userBussines.loginUser(input)
            res.status(200).send({message:"sucess",token})
            
        } catch (error:any) {
            res.send(error.message)
            
        }
    }
    
}