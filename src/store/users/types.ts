export enum USERS_ACTION_TYPES {
    FETCH_USERS_START = 'users/FETCH_USERS_START',
    FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED',
    
    CREATE_USER_START = 'users/CREATE_USER_START',
    CREATE_USER_FAILED = 'users/CREATE_USER_FAILED',

    UPDATE_USER_START = 'users/UPDATE_USER_START',
    UPDATE_USER_FAILED = 'users/UPDATE_USER_FAILED',

    DELETE_USER_START = 'users/DELETE_USER_START',
    DELETE_USER_FAILED = 'users/DELETE_USER_FAILED',
}

export type UserType = {
    _id: string;
    name: string;
    email: string;
    role: string;
    polyclinic?: string;
    phone: string;
    photo?: string;
}

export type UserAccount = UserType & {
    password: string;
}

export const UserRole = [
    'Administrator',
    'Receptionist',
    'Doctor',
    'Logistic',
    'Pharmacist',
    'Cashier'
];

export const Polyclinic =[
    'THT',
    'Mata',
    'Gigi',
    'Bedah Anak'
];