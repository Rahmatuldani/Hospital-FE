import { AnyAction } from "redux";
import { ServerResponse } from "../../config/types";
import { PatientType } from "./types";
import { 
    createPatientFailed, 
    createPatientStart, 
    createPatientSuccess, 
    deletePatientFailed, 
    deletePatientStart, 
    deletePatientSuccess, 
    editPatientFailed, 
    editPatientStart, 
    editPatientSuccess, 
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
        createPatientStart.match(action) ||
        editPatientStart.match(action) ||
        deletePatientStart.match(action) 
    ) {
        return {...state, isLoading: true};
    }

    if (fetchPatientsSuccess.match(action)) {
        return {...state, isLoading: false, patients: action.payload, error: null};
    }
    if (createPatientSuccess.match(action)) {
        return {...state, isLoading: false, patients: [...state.patients, action.payload], error: null};
    }
    if (editPatientSuccess.match(action)) {
        const updatePatients = state.patients.map((patient) => {
            if (patient._id === action.payload._id) {
                return action.payload;
            }
            return patient;
        });
        return {...state, isLoading: false, patients: updatePatients, error: null};
    }
    if (deletePatientSuccess.match(action)) {
        const newPatient = state.patients.filter(patient => patient._id !== action.payload);
        return {...state, isLoading: false, patients: newPatient, error: null};
    }

    if (
        fetchPatientsFailed.match(action) ||
        createPatientFailed.match(action) ||
        editPatientFailed.match(action) ||
        deletePatientFailed.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}