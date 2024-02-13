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
    (user: PatientType): CreatePatientStart => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_START, user)
);
export const createPatientSuccess = withMatcher(
    (patients: PatientType): CreatePatientSuccess => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_SUCCESS, patients)
);
export const createPatientFailed = withMatcher(
    (error: Error | ServerResponse | string ): CreatePatientFailed => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT_FAILED, error)
);
// End Create Patients Session