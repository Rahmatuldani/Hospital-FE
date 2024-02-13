import { ServerResponse } from "../../config/types";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { PATIENTS_ACTION_TYPES, PatientType } from "./types";

// Fetch Session
export type FetchUsersStart = Action<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START>;
export type FetchUsersSuccess = ActionWithPayload<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_SUCCESS, PatientType[]>;
export type FetchUsersFailed = ActionWithPayload<PATIENTS_ACTION_TYPES.FETCH_PATIENTS_FAILED, Error | ServerResponse | string >;

export const fetchPatientsStart = withMatcher(
    (): FetchUsersStart => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START)
);
export const fetchPatientsSuccess = withMatcher(
    (patients: PatientType[]): FetchUsersSuccess => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_SUCCESS, patients)
);
export const fetchPatientsFailed = withMatcher(
    (error: Error | ServerResponse | string ): FetchUsersFailed => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS_FAILED, error)
);
// End Fetch Session