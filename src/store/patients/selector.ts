import { createSelector } from "reselect";
import { RootState } from "../store";
import { PatientsState } from "./reducer";

const selectPatientsReducer = (state: RootState): PatientsState => state.patients;

export const selectPatients = createSelector(
    [selectPatientsReducer],
    (usersSlice) => usersSlice.patients
);

export const selectPatientsIsLoading = createSelector(
    [selectPatientsReducer],
    (usersSlice) => usersSlice.isLoading
);

export const selectPatientsError = createSelector(
    [selectPatientsReducer],
    (usersSlice) => usersSlice.error
);