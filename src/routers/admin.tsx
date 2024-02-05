import { Route } from "react-router-dom";
import { AdminLayout, Dashboard } from "../pages/admin";
import Users from "../pages/admin/users";

function AdminRouters() {
    return (
        <Route path="/administrator" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="users" element={<Users/>}/>
        </Route>
    );
}

export default AdminRouters;