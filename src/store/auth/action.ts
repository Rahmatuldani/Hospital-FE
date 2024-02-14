import { ServerResponse } from "../../config/types";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { UserType } from "../users/types";
import { AUTH_ACTION_TYPES, AuthType } from "./types";

// Fetch Session
export type AuthLoginStart = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN_START, AuthType>;
export type AuthLoginSuccess = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN_SUCCESS, UserType>;
export type AuthLoginFailed = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN_FAILED, Error | ServerResponse | string >;

export const authLoginStart = withMatcher(
    (user: AuthType): AuthLoginStart => createAction(AUTH_ACTION_TYPES.LOGIN_START, user)
);
export const authLoginSuccess = withMatcher(
    (currentUser: UserType): AuthLoginSuccess => createAction(AUTH_ACTION_TYPES.LOGIN_SUCCESS, currentUser)
);
export const authLoginFailed = withMatcher(
    (error: Error | ServerResponse | string ): AuthLoginFailed => createAction(AUTH_ACTION_TYPES.LOGIN_FAILED, error)
);
// End Fetch Session

export type Logout = Action<AUTH_ACTION_TYPES.LOGOUT>;
export const logout = withMatcher(
    (): Logout => createAction(AUTH_ACTION_TYPES.LOGOUT)
);