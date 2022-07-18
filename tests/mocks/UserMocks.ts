import User from "../../src/model/User";
import { USER_ROLES } from "../../src/types/AuthenticatorData";

export const userMock1 = new User(
    "id",
    "name",
    "email",
    "password",
    USER_ROLES.ADMIN
)

export const userMock2 = new User(
    "id",
    "name",
    "email",
    "password",
    USER_ROLES.NORMAL
)

