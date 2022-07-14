export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
 }

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
 } 