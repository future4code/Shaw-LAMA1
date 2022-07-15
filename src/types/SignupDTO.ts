import { USER_ROLES } from "./AuthenticatorData";

export interface SignupDTO{
    email:string,
    password:string,
    name:string,
    role:USER_ROLES
}