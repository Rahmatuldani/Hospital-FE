import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            Admin Layout
            <Outlet/>
        </div>
    );
}

export default AdminLayout;