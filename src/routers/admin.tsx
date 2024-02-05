import { Route } from "react-router-dom";
import { AdminLayout, Dashboard } from "../pages/admin";

function AdminRouters() {
    return (
        <Route path="/administrator" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default AdminRouters;