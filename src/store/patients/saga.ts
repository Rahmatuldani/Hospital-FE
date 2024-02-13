import { all, call, put, takeLatest } from "typed-redux-saga";
import { PATIENTS_ACTION_TYPES, PatientType } from "./types";
import patientApi from "../../api/patient";
import { isAxiosError } from "../../utils/typeCheck";
import { ServerResponse } from "../../config/types";
import { 
    createPatientFailed,
    createPatientSuccess, 
    fetchPatientsFailed, 
    fetchPatientsSuccess 
} from "./action";
import Alert from "../../utils/alert";

export function* fetchPatientAsync() {
    try {
        const [status, response] = yield* call(patientApi.readAll);
        switch (status) {
            case 200:
                return yield* put(fetchPatientsSuccess(response.data.patients));
        
            default:
                return yield* put(fetchPatientsFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(fetchPatientsFailed(error.response.data as ServerResponse));
            }
            return yield* put(fetchPatientsFailed(error.message));
        }
        return yield* put(fetchPatientsFailed(error as Error));
    }
}

export function* createPatientAsync(action: { type: string, payload: PatientType}) {
    try {
        const [status, response] = yield* call(patientApi.create, action.payload);
        switch (status) {
            case 200:
                Alert({ icon: 'success', title: 'Success', text: 'Success create patient' });
                return yield* put(createPatientSuccess(response.data.patient));
        
            default:
                return yield* put(createPatientFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(createPatientFailed(error.response.data as ServerResponse));
            }
            return yield* put(createPatientFailed(error.message));
        }
        return yield* put(createPatientFailed(error as Error));
    }
}

export function* onFetchPatient() {
    yield takeLatest(
        PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START,
        fetchPatientAsync
    );
}

export function* onCreatePatient() {
    yield takeLatest(
        PATIENTS_ACTION_TYPES.CREATE_PATIENT_START,
        createPatientAsync
    );
}

export function* patientsSaga() {
    yield* all([
        call(onFetchPatient),
        call(onCreatePatient),
    ]);
}