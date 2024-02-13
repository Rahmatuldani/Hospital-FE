import { Collapse, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { FaAngleDown, FaUserInjured } from "react-icons/fa";
import useState from "../../hooks/useState";
import React from "react";

function SidebarItems() {
    const location = useLocation().pathname.split('/')[2];
    const [collapseEl, setCollapseEl] = useState<string | undefined>(location);

    React.useEffect(() => {
        setCollapseEl(location);
    }, [location]);

    return (
        <Nav className="accordion">
            <div className="sidenav-menu-heading">Menu</div>
            <NavLink to={'/receptionist'} className='nav-link' end>
                <div className="nav-link-icon">
                    <FiActivity />
                </div>
                Dashboard
            </NavLink>
            <Nav.Link href="" className={`${collapseEl === 'patients' ? '' : 'collapsed'}`} onClick={() => collapseEl === 'patients' ? setCollapseEl(undefined) : setCollapseEl('patients')}>
                <div className="nav-link-icon">
                    <FaUserInjured/>
                </div>
                Patients
                <div className="sidenav-collapse-arrow">
                    <FaAngleDown />
                </div>
            </Nav.Link>
            <Collapse in={collapseEl === 'patients'}>
                <Nav as='nav' className="sidenav-menu-nested accordion">
                    <NavLink to={"/receptionist/patients"} role="button" className='nav-link' tabIndex={0} end>List</NavLink>
                    <NavLink to={"/receptionist/patients/add"} role="button" className='nav-link' tabIndex={0} end>Add</NavLink>
                </Nav>
            </Collapse>
        </Nav>
    );
}

export default SidebarItems;