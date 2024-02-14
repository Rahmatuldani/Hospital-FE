import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import SidebarItems from "./sidebar";

function AdminLayout() {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar items={<SidebarItems/>} role="Administrator"/>
            </div>
            <div id="layoutSidenav_content">
                <Outlet />
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">
                                Copyright &#xA9; Hospital App 2024
                            </div>
                            <div className="col-md-6 text-md-right small">
                                <a href="">Privacy Policy</a>
                                &#xB7;
                                <a href="">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AdminLayout;