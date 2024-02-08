import { AnyAction } from "redux";
import { UserType } from "./types";
import { createUserFailed, createUserStart, deleteUserFailed, deleteUserStart, fetchUsersFailed, fetchUsersStart, fetchUsersSuccess } from "./action";
import { ServerResponse } from "../../config/types";

export type UsersState = {
    readonly users: UserType[];
    readonly pageCount: number;
    readonly isLoading: boolean;
    readonly error: Error | ServerResponse | string | null;
}

export const USERS_INITIAL_STATE: UsersState = {
    users: [],
    pageCount: 1,
    isLoading: false,
    error: null
};

export function usersReducer(
    state = USERS_INITIAL_STATE,
    action: AnyAction
): UsersState {
    if (
        fetchUsersStart.match(action) ||
        createUserStart.match(action) ||
        deleteUserStart.match(action)
    ) {
        return {...state, isLoading: true};
    }
    if (
        fetchUsersSuccess.match(action)
    ) {
        return {...state, isLoading: false, users: action.payload.users, pageCount: action.payload.pageCount, error: null};
    }
    if (
        fetchUsersFailed.match(action) ||
        createUserFailed.match(action) ||
        deleteUserFailed.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}