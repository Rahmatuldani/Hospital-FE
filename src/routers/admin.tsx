import { Route } from "react-router-dom";
import { 
    AdminLayout, 
    Dashboard, 
    UserAdd, 
    Users 
} from "../pages/admin";

function AdminRouters() {
    return (
        <Route path="/administrator" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="users/add" element={<UserAdd/>}/>
        </Route>
    );
}

export default AdminRouters;