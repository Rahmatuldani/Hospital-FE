import { all, call, put, takeLatest } from "typed-redux-saga";
import { PATIENTS_ACTION_TYPES } from "./types";
import patientApi from "../../api/patient";
import { fetchPatientsFailed, fetchPatientsSuccess } from "./action";
import { isAxiosError } from "../../utils/typeCheck";
import { ServerResponse } from "../../config/types";

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

export function* onFetchPatient() {
    yield takeLatest(
        PATIENTS_ACTION_TYPES.FETCH_PATIENTS_START,
        fetchPatientAsync
    );
}

export function* patientsSaga() {
    yield* all([
        call(onFetchPatient)
    ]);
}