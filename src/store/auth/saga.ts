import { all, call, put, takeLatest } from "typed-redux-saga";
import { AUTH_ACTION_TYPES, AuthType } from "./types";
import authApi from "../../api/auth";
import { authLoginFailed, authLoginSuccess } from "./action";
import { isAxiosError } from "../../utils/typeCheck";
import { ServerResponse } from "../../config/types";

export function* loginAsync(action: {type: string, payload: AuthType}) {
    try {
        const [status, response] = yield* call(authApi.login, action.payload);
        switch (status) {
            case 200:
                return yield* put(authLoginSuccess(response.data.user));
        
            default:
                return yield* put(authLoginFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(authLoginFailed(error.response.data as ServerResponse));
            }
            return yield* put(authLoginFailed(error.message));
        }
        return yield* put(authLoginFailed(error as Error));
    }
}

export function* onLogin() {
    yield* takeLatest(
        AUTH_ACTION_TYPES.LOGIN_START,
        loginAsync
    );
}

export function* authSaga() {
    yield* all([
        call(onLogin),
    ]);
}