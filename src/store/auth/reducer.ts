import { AnyAction } from "redux";
import { ServerResponse } from "../../config/types";
import { UserType } from "../users/types";
import { authLoginFailed, authLoginStart, authLoginSuccess, logout } from "./action";

export type AuthState = {
    readonly currentUsers: UserType | null;
    readonly isLoading: boolean;
    readonly error: Error | ServerResponse | string | null;
}

export const AUTH_INITIAL_STATE: AuthState = {
    currentUsers: null,
    isLoading: false,
    error: null
};

export function authReducer(
    state = AUTH_INITIAL_STATE,
    action: AnyAction
): AuthState {
    if (authLoginStart.match(action)) {
        return {...state, isLoading: true};
    }

    if (authLoginSuccess.match(action)) {
        return {...state, isLoading: false, currentUsers: action.payload, error: null};
    }
    
    if (logout.match(action)) {
        return {...state, currentUsers: null};
    }

    if (authLoginFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}