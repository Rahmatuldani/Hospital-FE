import { all, call, put, takeLatest } from "typed-redux-saga";
import { USERS_ACTION_TYPES } from "./types";
import api from "../../utils/api";
import { fetchUsersFailed, fetchUsersSuccess } from "./action";
import { isAxiosError } from "../../utils/typeCheck";

export function* fetchUsersAsync() {
    try {
        const [status, response] = yield* call(api.getAllUsers);
        console.log(response);
        
        switch (status) {
            case 200:
                return yield* put(fetchUsersSuccess({pageCount: response.data.pageCount, users: response.data.users}));
        
            default:
                return yield* put(fetchUsersFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(fetchUsersFailed(error.response));
            }
            return yield* put(fetchUsersFailed(error.message));
        }
        return yield* put(fetchUsersFailed(error as Error));
    }
}

export function* onFetchUsers() {
    yield* takeLatest(
        USERS_ACTION_TYPES.FETCH_USERS_START,
        fetchUsersAsync
    );
}

export function* usersSaga() {
    yield* all([
        call(onFetchUsers),
    ]);
}