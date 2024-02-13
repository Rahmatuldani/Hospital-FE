import { AnyAction } from "redux";
import { ServerResponse } from "../../config/types";
import { PatientType } from "./types";
import { 
    createPatientFailed, 
    createPatientStart, 
    createPatientSuccess, 
    fetchPatientsFailed, 
    fetchPatientsStart, 
    fetchPatientsSuccess 
} from "./action";

export type PatientsState = {
    readonly patients: PatientType[];
    readonly isLoading: boolean;
    readonly error: Error | ServerResponse | string | null;
}

export const PATIENTS_INITIAL_STATE: PatientsState = {
    patients: [],
    isLoading: false,
    error: null
};

export function patientReducer(
    state = PATIENTS_INITIAL_STATE,
    action: AnyAction
): PatientsState {
    if (
        fetchPatientsStart.match(action) ||
        createPatientStart.match(action)
    ) {
        return {...state, isLoading: true};
    }

    if (fetchPatientsSuccess.match(action)) {
        return {...state, isLoading: false, patients: action.payload, error: null};
    }
    if (createPatientSuccess.match(action)) {
        return {...state, isLoading: false, patients: [...state.patients, action.payload], error: null};
    }

    if (
        fetchPatientsFailed.match(action) ||
        createPatientFailed.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}