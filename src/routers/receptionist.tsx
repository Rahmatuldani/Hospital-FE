import { Route } from "react-router-dom";
import { Dashboard, Patient, PatientAdd, Receptionist } from "../pages/receptionist";

function ReceptionistRouters() {
    return <Route path="/receptionist" element={<Receptionist/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="patients" element={<Patient/>}/>
        <Route path="patients/add" element={<PatientAdd/>}/>
    </Route>;
}

export default ReceptionistRouters;