import { USER_ROLES } from "../../src/types/AuthenticatorData"

export class AuthenticatorMock {
    public generateToken():string {
        return "TOKEN"
    }

    public getDataMock(token: string){
        const objeto = {
            id: "id_mock",
            role: USER_ROLES.ADMIN
        }
        return objeto
    }
}