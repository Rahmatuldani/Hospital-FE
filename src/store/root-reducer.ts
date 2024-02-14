import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";
import { patientReducer } from "./patients/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    patients: patientReducer,
});

export default rootReducer;