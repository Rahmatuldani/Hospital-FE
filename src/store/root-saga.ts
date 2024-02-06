import { all, call } from "typed-redux-saga";
import { usersSaga } from "./users/saga";

export function* rootSaga() {
    yield* all([
        call(usersSaga)
    ]);
}