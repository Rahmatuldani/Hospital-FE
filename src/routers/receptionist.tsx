import { Route } from "react-router-dom";
import { Dashboard, Patient, Receptionist } from "../pages/receptionist";

function ReceptionistRouters() {
    return <Route path="/receptionist" element={<Receptionist/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="patients" element={<Patient/>}/>
    </Route>;
}

export default ReceptionistRouters;