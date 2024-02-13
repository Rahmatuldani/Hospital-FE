import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";
import { patientReducer } from "./patients/reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    patients: patientReducer,
});

export default rootReducer;