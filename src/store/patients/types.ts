export enum PATIENTS_ACTION_TYPES {
    FETCH_PATIENTS_START = 'patients/FETCH_PATIENTS_START',
    FETCH_PATIENTS_SUCCESS = 'patients/FETCH_PATIENTS_SUCCESS',
    FETCH_PATIENTS_FAILED = 'patients/FETCH_PATIENTS_FAILED',

    CREATE_PATIENT_START = 'patients/CREATE_PATIENT_START',
    CREATE_PATIENT_SUCCESS = 'patients/CREATE_PATIENT_SUCCESS',
    CREATE_PATIENT_FAILED = 'patients/CREATE_PATIENT_FAILED',
    
    EDIT_PATIENT_START = 'patients/EDIT_PATIENT_START',
    EDIT_PATIENT_SUCCESS = 'patients/EDIT_PATIENT_SUCCESS',
    EDIT_PATIENT_FAILED = 'patients/EDIT_PATIENT_FAILED',

    DELETE_PATIENT_START = 'patients/DELETE_PATIENT_START',
    DELETE_PATIENT_SUCCESS = 'patients/DELETE_PATIENT_SUCCESS',
    DELETE_PATIENT_FAILED = 'patients/DELETE_PATIENT_FAILED',
}

export type PatientType = {
    _id: string;
    nik: string;
    name: string;
    birthPlace: string;
    birthDate: string;
    gender: string;
    blood: string;
    address: string;
    religion: string;
    married: string;
    job: string;
    citizenship: string;
    phone: string;
    bpjs: string;
    parent: string;
};