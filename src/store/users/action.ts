import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { USERS_ACTION_TYPES, UserType } from "./types";
import { ServerResponse } from "../../config/types";

type FetchUsers = {
    users: UserType[];
    pageCount: number;
}

type FetchOptions = {
    search?: string,
    page?: string
}

// Fetch Session
export type FetchUsersStart = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_START, FetchOptions>;
export type FetchUsersSuccess = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, FetchUsers>;
export type FetchUsersFailed = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_FAILED, Error | ServerResponse | string >;

export const fetchUsersStart = withMatcher(
    (options: FetchOptions): FetchUsersStart => createAction(USERS_ACTION_TYPES.FETCH_USERS_START, options)
);
export const fetchUsersSuccess = withMatcher(
    (result: FetchUsers): FetchUsersSuccess => createAction(USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, result)
);
export const fetchUsersFailed = withMatcher(
    (error: Error | ServerResponse | string ): FetchUsersFailed => createAction(USERS_ACTION_TYPES.FETCH_USERS_FAILED, error)
);

// End Fetch Session

// Create Section
export type CreateUsersStart = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USER_START, UserType>;
export type CreateUsersFailed = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USER_FAILED, Error | ServerResponse | string >;

export const createUserStart = withMatcher(
    (user: UserType): CreateUsersStart => createAction(USERS_ACTION_TYPES.CREATE_USER_START, user)
);
export const createUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): CreateUsersFailed => createAction(USERS_ACTION_TYPES.CREATE_USER_FAILED, error)
);
// End Create Section

// Delete Section
export type DeleteUserStart = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_START, string>;
export type DeleteUserFailed = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_FAILED, Error | ServerResponse | string >;

export const deleteUserStart = withMatcher(
    (id: string): DeleteUserStart => createAction(USERS_ACTION_TYPES.DELETE_USER_START, id)
);
export const deleteUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): DeleteUserFailed => createAction(USERS_ACTION_TYPES.DELETE_USER_FAILED, error)
);