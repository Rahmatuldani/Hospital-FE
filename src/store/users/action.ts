import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { USERS_ACTION_TYPES, UserType } from "./types";
import { ServerResponse } from "../../config/types";

type FetchUsers = {
    users: UserType[];
    pageCount: number;
}

export type FetchOptions = {
    search?: string,
    page?: number,
    limit?: string,
}

export type UpdateOptions = {
    id: string,
    user: UserType,
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

// Update Section
export type UpdateUserStart = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USER_START, UpdateOptions>;
export type UpdateUserFailed = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USER_FAILED, Error | ServerResponse | string >;

export const updateUserStart = withMatcher(
    (data: UpdateOptions): UpdateUserStart => createAction(USERS_ACTION_TYPES.UPDATE_USER_START, data)
);
export const updateUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): UpdateUserFailed => createAction(USERS_ACTION_TYPES.UPDATE_USER_FAILED, error)
);
// End Update Section

// Delete Section
export type DeleteUserStart = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_START, string>;
export type DeleteUserFailed = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_FAILED, Error | ServerResponse | string >;

export const deleteUserStart = withMatcher(
    (id: string): DeleteUserStart => createAction(USERS_ACTION_TYPES.DELETE_USER_START, id)
);
export const deleteUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): DeleteUserFailed => createAction(USERS_ACTION_TYPES.DELETE_USER_FAILED, error)
);