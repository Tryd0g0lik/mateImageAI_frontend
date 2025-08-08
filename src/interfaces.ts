/**
 * src\interfaces.ts
 */
const APP_HOST = process.env.APP_HOST || "127.0.0.1";
const APP_PORT  = process.env.APP_PORT || "8000";
const APP_PROTOCOL = process.env.HTTP || "http";

export const APP_URL = !APP_PORT ? `${APP_PROTOCOL}://${APP_HOST}` : `${APP_PROTOCOL}://${APP_HOST}:${APP_PORT}`;

export enum APIPerson {
    API__POST_REGISTERATION = "/api/auth/register/",
    API__POST_LOGIN = "/",
    API__POST_LOGOUT = "/",
    API__POST_GET_USER = "/",
    API__POST_GET_USERS = "/",
    API__POST_GET_USERS_BY_ID = "/",
}

export type BasisData = {
    username: string,
    password: string,
    email?: string,
}
export interface DataForDAPI extends BasisData {
    is_active?: boolean,
    is_staff?: boolean,
    is_superuser?: boolean,
    date_joined?: string,
    created_at?: string,
    is_verified?: boolean,
    updated_at?: string,
    is_sent?: boolean,
    balance?: number
}

export type HandlerApiProps = {
    api: {
        url: string,
        method: string,
        body:FormData
    }

}