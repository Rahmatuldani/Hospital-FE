import { AnyAction } from "redux";
import { UserType } from "./types";
import { 
    createUserFailed, 
    createUserStart, 
    createUserSuccess, 
    deleteUserFailed, 
    deleteUserStart, 
    deleteUserSuccess, 
    fetchUsersFailed, 
    fetchUsersStart, 
    fetchUsersSuccess, 
    updateUserFailed, 
    updateUserStart,
    updateUserSuccess
} from "./action";
import { ServerResponse } from "../../config/types";

export type UsersState = {
    readonly users: UserType[];
    readonly isLoading: boolean;
    readonly error: Error | ServerResponse | string | null;
}

export const USERS_INITIAL_STATE: UsersState = {
    users: [],
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
        updateUserStart.match(action) ||
        deleteUserStart.match(action)
    ) {
        return {...state, isLoading: true};
    }

    if (fetchUsersSuccess.match(action)) {
        return {...state, isLoading: false, users: action.payload, error: null};
    }
    if(createUserSuccess.match(action)) {
        return {...state, isLoading: false, users: [...state.users, action.payload], error: null};
    }
    if (updateUserSuccess.match(action)) {
        const updateUsers = state.users.map((user) => {
            if (user._id === action.payload._id) {
                return action.payload;
            }
            return user;
        });
        return {...state, isLoading: false, users: updateUsers, error: null};
    }
    if (deleteUserSuccess.match(action)) {
        const newUsers = state.users.filter(user => user._id !== action.payload);
        return {...state, isLoading: false, users: newUsers, error: null};
    }

    if (
        fetchUsersFailed.match(action) ||
        createUserFailed.match(action) ||
        updateUserFailed.match(action) ||
        deleteUserFailed.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}