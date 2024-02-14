import { createSelector } from "reselect";
import { RootState } from "../store";
import { UsersState } from "./reducer";

const selectUsersReducer = (state: RootState): UsersState => state.users;

export const selectUsers = createSelector(
    [selectUsersReducer],
    (usersSlice) => usersSlice.users
);

export const selectUsersIsLoading = createSelector(
    [selectUsersReducer],
    (usersSlice) => usersSlice.isLoading
);

export const selectUsersError = createSelector(
    [selectUsersReducer],
    (usersSlice) => usersSlice.error
);