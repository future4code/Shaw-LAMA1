import BandBusiness from "../src/business/BandBusiness"
import ShowBussines from "../src/business/ShowBussines"
import { UserBussines } from "../src/business/userBussines"
import { USER_ROLES } from "../src/types/AuthenticatorData"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { BandDataBaseMocks } from "./mocks/BandDatabaseMock"
import { bandMock } from "./mocks/BandMocks"
import IdGeneratorMocks from "./mocks/GeneratorMock"
import { HashGeneratorMock } from "./mocks/HashManageMok"
import ShowDataMock from "./mocks/ShowDataBaseMock"
import UserDataMock from "./mocks/UserDataBaseMock"


// const userBusinessMock = new UserBussines(
//     new UserDataMock as any,
//     new AuthenticatorMock as any,
//     new IdGeneratorMocks,
//     new HashGeneratorMock as any
// )

// describe("testes de singUp", () =>{
//     test("Erro quando nome vazio", async ()=>{
//         try{
//             const user = {id: "id",
//             name:  "",
//             email: "email",
//             password:"password",
//             role: USER_ROLES.ADMIN}

//             await userBusinessMock.inputSignup(user)
//         }catch(error:any){
//             expect(error.message).toBe("Invalid fields")
//         }
//     })
// })

const bandBusinessMock = new BandBusiness(
    new BandDataBaseMocks as any,
    new IdGeneratorMocks as any,
    new AuthenticatorMock as any
)

const showBusinessMock = new ShowBussines(
    new BandDataBaseMocks as any,
    new ShowDataMock as any,
    new IdGeneratorMocks as any,
    new AuthenticatorMock as any
)

describe("Band table tests", () => {
    test("Test getBandById, empty paramater", async () => {
        try {
            await bandBusinessMock.getBandById("", "TOKEN")
        } catch (error: any) {
            expect(error.message).toBe("Fill in the fields, please")
        }
    })

    // test("Success test", async () => {
    //     try {
    //         const getDetails = jest.fn((input: string, token: string) => bandBusinessMock.getBandById(input, token))
    //         const result = await getDetails("id_mock2", "TOKEN")
    //         expect(result).toBe(bandMock)
    //         expect(getDetails).toHaveBeenCalledWith("id_mock2", "TOKEN")
    //     } catch (error: any) {
    //         console.log(error)
    //     } finally {
    //         expect.assertions(2)
    //     }
    // })
})
