import { all, call, put, takeLatest } from "typed-redux-saga";
import { USERS_ACTION_TYPES, UserType } from "./types";
import { FetchOptions, UpdateOptions, createUserFailed, deleteUserFailed, fetchUsersFailed, fetchUsersSuccess, updateUserFailed } from "./action";
import { isAxiosError } from "../../utils/typeCheck";
import userApi from "../../api/user";
import Alert from "../../utils/alert";
import { ServerResponse } from "../../config/types";

export function* fetchUsersAsync(action?: {type: string, payload: FetchOptions}) {
    try {
        const [status, response] = yield* call(userApi.getAllUsers, action?.payload);
        switch (status) {
            case 200:
                return yield* put(fetchUsersSuccess({pageCount: response.data.pageCount, users: response.data.users}));
        
            default:
                return yield* put(fetchUsersFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(fetchUsersFailed(error.response.data as ServerResponse));
            }
            return yield* put(fetchUsersFailed(error.message));
        }
        return yield* put(fetchUsersFailed(error as Error));
    }
}

export function* createUserAsync(action: { type: string, payload: UserType}) {
    try {
        const [status, response] = yield* call(userApi.createUser, action.payload);
        switch (status) {
            case 201:
                Alert({ title: 'Succes', text: 'Create user success', icon: 'success'});
                return yield* call(fetchUsersAsync);
        
            default:
                return yield* put(createUserFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(createUserFailed(error.response.data as ServerResponse));
            }
            return yield* put(createUserFailed(error.message));
        }
        return yield* put(createUserFailed(error as Error));
    }
}

export function* updateUserAsync(action: { type: string, payload: UpdateOptions }) {
    try {
        const [status, response] = yield* call(userApi.updateUser, action.payload);
        switch (status) {
            case 200:
                Alert({ title: 'Succes', text: 'Update user success', icon: 'success'});
                return yield* call(fetchUsersAsync);
        
            default:
                return yield* put(updateUserFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(updateUserFailed(error.response.data as ServerResponse));
            }
            return yield* put(updateUserFailed(error.message));
        }
        return yield* put(updateUserFailed(error as Error));
    }
}

export function* deleteUserAsync(action: {type: string, payload: string}) {
    try {
        const [status, response] = yield* call(userApi.deleteUser, action.payload);
        switch (status) {
            case 200:
                Alert({ title: 'Succes', text: 'Delete user success', icon: 'success'});
                return yield* call(fetchUsersAsync);
        
            default:
                return yield* put(deleteUserFailed(response.data.errors));
                
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if(error.response !== undefined) {
                return yield* put(deleteUserFailed(error.response.data as ServerResponse));
            }
            return yield* put(deleteUserFailed(error.message));
        }
        return yield* put(deleteUserFailed(error as Error));
    }
}

export function* onFetchUsers() {
    yield* takeLatest(
        USERS_ACTION_TYPES.FETCH_USERS_START,
        fetchUsersAsync
    );
}

export function* onCreateUser() {
    yield* takeLatest(
        USERS_ACTION_TYPES.CREATE_USER_START,
        createUserAsync
    );
}

export function* onUpdateUser() {
    yield* takeLatest(
        USERS_ACTION_TYPES.UPDATE_USER_START,
        updateUserAsync
    );
}

export function* onDeleteUser() {
    yield* takeLatest(
        USERS_ACTION_TYPES.DELETE_USER_START,
        deleteUserAsync
    );
}

export function* usersSaga() {
    yield* all([
        call(onFetchUsers),
        call(onCreateUser),
        call(onUpdateUser),
        call(onDeleteUser),
    ]);
}