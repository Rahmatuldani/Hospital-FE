export type UserType = {
    _id: string;
    uid: string;
    name: string;
    role: string;
    polyclinic?: string;
    phone: string;
    photo?: string;
    email?: string;
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