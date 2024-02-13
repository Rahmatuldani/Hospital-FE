import { all, call } from "typed-redux-saga";
import { usersSaga } from "./users/saga";
import { patientsSaga } from "./patients/saga";

export function* rootSaga() {
    yield* all([
        call(usersSaga),
        call(patientsSaga)
    ]);
}