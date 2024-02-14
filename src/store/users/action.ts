import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { USERS_ACTION_TYPES, UserType } from "./types";
import { ServerResponse } from "../../config/types";


export type UpdateOptions = {
    id: string,
    user: UserType,
}

// Fetch Session
export type FetchUsersStart = Action<USERS_ACTION_TYPES.FETCH_USERS_START>;
export type FetchUsersSuccess = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, UserType[]>;
export type FetchUsersFailed = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_FAILED, Error | ServerResponse | string >;

export const fetchUsersStart = withMatcher(
    (): FetchUsersStart => createAction(USERS_ACTION_TYPES.FETCH_USERS_START)
);
export const fetchUsersSuccess = withMatcher(
    (users: UserType[]): FetchUsersSuccess => createAction(USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, users)
);
export const fetchUsersFailed = withMatcher(
    (error: Error | ServerResponse | string ): FetchUsersFailed => createAction(USERS_ACTION_TYPES.FETCH_USERS_FAILED, error)
);
// End Fetch Session

// Create Section
export type CreateUsersStart = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USER_START, UserType>;
export type CreateUsersSuccess = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USER_SUCCESS, UserType>;
export type CreateUsersFailed = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USER_FAILED, Error | ServerResponse | string >;

export const createUserStart = withMatcher(
    (user: UserType): CreateUsersStart => createAction(USERS_ACTION_TYPES.CREATE_USER_START, user)
);
export const createUserSuccess = withMatcher(
    (user: UserType): CreateUsersSuccess => createAction(USERS_ACTION_TYPES.CREATE_USER_SUCCESS, user)
);
export const createUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): CreateUsersFailed => createAction(USERS_ACTION_TYPES.CREATE_USER_FAILED, error)
);
// End Create Section

// Update Section
export type UpdateUserStart = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USER_START, UserType>;
export type UpdateUserSuccess = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USER_SUCCESS, UserType>;
export type UpdateUserFailed = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USER_FAILED, Error | ServerResponse | string >;

export const updateUserStart = withMatcher(
    (user: UserType): UpdateUserStart => createAction(USERS_ACTION_TYPES.UPDATE_USER_START, user)
);
export const updateUserSuccess = withMatcher(
    (user: UserType): UpdateUserSuccess => createAction(USERS_ACTION_TYPES.UPDATE_USER_SUCCESS, user)
);
export const updateUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): UpdateUserFailed => createAction(USERS_ACTION_TYPES.UPDATE_USER_FAILED, error)
);
// End Update Section

// Delete Section
export type DeleteUserStart = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_START, string>;
export type DeleteUserSuccess = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_SUCCESS, string>;
export type DeleteUserFailed = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USER_FAILED, Error | ServerResponse | string >;

export const deleteUserStart = withMatcher(
    (id: string): DeleteUserStart => createAction(USERS_ACTION_TYPES.DELETE_USER_START, id)
);
export const deleteUserSuccess = withMatcher(
    (id: string): DeleteUserSuccess => createAction(USERS_ACTION_TYPES.DELETE_USER_SUCCESS, id)
);
export const deleteUserFailed = withMatcher(
    (error: Error | ServerResponse | string ): DeleteUserFailed => createAction(USERS_ACTION_TYPES.DELETE_USER_FAILED, error)
);