import { all, call } from "typed-redux-saga";
import { usersSaga } from "./users/saga";
import { patientsSaga } from "./patients/saga";
import { authSaga } from "./auth/saga";

export function* rootSaga() {
    yield* all([
        call(authSaga),
        call(usersSaga),
        call(patientsSaga)
    ]);
}