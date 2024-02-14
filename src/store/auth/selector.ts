import { createSelector } from "reselect";
import { RootState } from "../store";
import { AuthState } from "./reducer";

const selectAuthReducer = (state: RootState): AuthState => state.auth;

export const selectAuth = createSelector(
    [selectAuthReducer],
    (usersSlice) => usersSlice.currentUsers
);

export const selectAuthIsLoading = createSelector(
    [selectAuthReducer],
    (usersSlice) => usersSlice.isLoading
);

export const selectAuthError = createSelector(
    [selectAuthReducer],
    (usersSlice) => usersSlice.error
);