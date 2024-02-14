import React from "react";

interface SidebarProps {
    items: React.ReactNode;
    role?: string;
}

function Sidebar({items, role}: SidebarProps) {
    return (
        <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
                {items}
            </div>
            <div className="sidenav-footer">
                <div className="sidenav-footer-content">
                    <div className="sidenav-footer-subtitle">Logged in as:</div>
                    <div className="sidenav-footer-title">{role ?? "Testing"}</div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;