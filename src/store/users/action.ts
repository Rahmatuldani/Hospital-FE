import { AxiosResponse } from "axios";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { USERS_ACTION_TYPES, UserType } from "./types";

type FetchUsers = {
    users: UserType[];
    pageCount: number;
}

type FetchOptions = {
    search?: string,
    page?: string
}

export type FetchUsersStart = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_START, FetchOptions>;
export type FetchUsersSuccess = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, FetchUsers>;
export type FetchUsersFailed = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS_FAILED, Error | AxiosResponse | string >;

export const fetchUsersStart = withMatcher(
    (options: FetchOptions): FetchUsersStart => createAction(USERS_ACTION_TYPES.FETCH_USERS_START, options)
);
export const fetchUsersSuccess = withMatcher(
    (result: FetchUsers): FetchUsersSuccess => createAction(USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, result)
);
export const fetchUsersFailed = withMatcher(
    (error: Error | AxiosResponse | string ): FetchUsersFailed => createAction(USERS_ACTION_TYPES.FETCH_USERS_FAILED, error)
);