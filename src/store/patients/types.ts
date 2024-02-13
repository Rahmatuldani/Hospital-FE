export enum PATIENTS_ACTION_TYPES {
    FETCH_PATIENTS_START = 'patients/FETCH_PATIENTS_START',
    FETCH_PATIENTS_SUCCESS = 'patients/FETCH_PATIENTS_SUCCESS',
    FETCH_PATIENTS_FAILED = 'patients/FETCH_PATIENTS_FAILED',
}

export type PatientType = {
    _id: string;
    nik: string;
    name: string;
    birthPlace: string;
    birthDate: string;
    sex: string;
    blood: string | null;
    address: string;
    religion: string;
    married: string;
    job: string | null;
    citizenship: string;
    phone: string;
    bpjs: string | null;
    parent: string;
};