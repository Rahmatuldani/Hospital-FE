import { ServerResponse } from "../../config/types";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { PATIENTS_ACTION_TYPES, PatientType } from "./types";

// Fetch Patients Session
export type FetchPatientsStart = Action<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START>;
export type FetchPatientsSuccess = ActionWithPayload<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_SUCCESS, PatientType[]>;
export type FetchPatientsFailed = ActionWithPayload<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_FAILED, Error | ServerResponse | string >;

export const fetchPatientsStart = withMatcher(
    (): FetchPatientsStart => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START)
);
export const fetchPatientsSuccess = withMatcher(
    (patients: PatientType[]): FetchPatientsSuccess => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_SUCCESS, patients)
);
export const fetchPatientsFailed = withMatcher(
    (error: Error | ServerResponse | string ): FetchPatientsFailed => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_FAILED, error)
);
// End Fetch Patients Session

// Create Patient Session
export type CreatePatientStart = ActionWithPayload<PATIENTS_ACTION_TYPES.CREATE_PATIENT_START, PatientType>;
export type CreatePatientSuccess = ActionWithPayload<PATIENTS_ACTION_TYPES.CREATE_PATIENT_SUCCESS, PatientType>;
export type CreatePatientFailed = ActionWithPayload<PATIENTS_ACTION_TYPES.CREATE_PATIENT_FAILED, Error | ServerResponse | string >;

export const createPatientStart = withMatcher(
    (patient: PatientType): CreatePatientStart => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_START, patient)
);
export const createPatientSuccess = withMatcher(
    (patient: PatientType): CreatePatientSuccess => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_SUCCESS, patient)
);
export const createPatientFailed = withMatcher(
    (error: Error | ServerResponse | string ): CreatePatientFailed => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_FAILED, error)
);
// End Create Patients Session

// Edit Patient Session
export type EditPatientStart = ActionWithPayload<PATIENTS_ACTION_TYPES.EDIT_PATIENT_START, PatientType>;
export type EditPatientSuccess = ActionWithPayload<PATIENTS_ACTION_TYPES.EDIT_PATIENT_SUCCESS, PatientType>;
export type EditPatientFailed = ActionWithPayload<PATIENTS_ACTION_TYPES.EDIT_PATIENT_FAILED, Error | ServerResponse | string >;

export const editPatientStart = withMatcher(
    (patient: PatientType): EditPatientStart => createAction(PATIENTS_ACTION_TYPES.EDIT_PATIENT_START, patient)
);
export const editPatientSuccess = withMatcher(
    (patient: PatientType): EditPatientSuccess => createAction(PATIENTS_ACTION_TYPES.EDIT_PATIENT_SUCCESS, patient)
);
export const editPatientFailed = withMatcher(
    (error: Error | ServerResponse | string ): EditPatientFailed => createAction(PATIENTS_ACTION_TYPES.EDIT_PATIENT_FAILED, error)
);
// End Edit Patients Session

// Create Patient Session
export type DeletePatientStart = ActionWithPayload<PATIENTS_ACTION_TYPES.DELETE_PATIENT_START, string>;
export type DeletePatientSuccess = ActionWithPayload<PATIENTS_ACTION_TYPES.DELETE_PATIENT_SUCCESS, string>;
export type DeletePatientFailed = ActionWithPayload<PATIENTS_ACTION_TYPES.DELETE_PATIENT_FAILED, Error | ServerResponse | string >;

export const deletePatientStart = withMatcher(
    (id: string): DeletePatientStart => createAction(PATIENTS_ACTION_TYPES.DELETE_PATIENT_START, id)
);
export const deletePatientSuccess = withMatcher(
    (id: string): DeletePatientSuccess => createAction(PATIENTS_ACTION_TYPES.DELETE_PATIENT_SUCCESS, id)
);
export const deletePatientFailed = withMatcher(
    (error: Error | ServerResponse | string ): DeletePatientFailed => createAction(PATIENTS_ACTION_TYPES.DELETE_PATIENT_FAILED, error)
);
// End Create Patients Session