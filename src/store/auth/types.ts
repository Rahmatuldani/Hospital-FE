export enum AUTH_ACTION_TYPES {
    LOGIN_START = 'users/LOGIN_START',
    LOGIN_SUCCESS = 'users/LOGIN_SUCCESS',
    LOGIN_FAILED = 'users/LOGIN_FAILED',
    
    LOGOUT = 'users/LOGOUT',
}

export type AuthType = {
    email: string;
    password: string;
}