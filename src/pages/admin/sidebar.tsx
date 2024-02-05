import { Collapse, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaUserDoctor } from 'react-icons/fa6';
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
            <NavLink to={'/administrator'} className='nav-link' end>
                <div className="nav-link-icon">
                    <FiActivity />
                </div>
                Dashboard
            </NavLink>
            <Nav.Link href="" className={`${collapseEl === 'users' ? '' : 'collapsed'}`} onClick={() => collapseEl === 'users' ? setCollapseEl(undefined) : setCollapseEl('users')}>
                <div className="nav-link-icon">
                    <FaUserDoctor />
                </div>
                Users
                <div className="sidenav-collapse-arrow">
                    <FaAngleDown />
                </div>
            </Nav.Link>
            <Collapse in={collapseEl === 'users'}>
                <Nav as='nav' className="sidenav-menu-nested accordion">
                    <NavLink to={"/administrator/users"} role="button" className='nav-link' tabIndex={0} end>List</NavLink>
                    <NavLink to={"/administrator/users/add"} role="button" className='nav-link' tabIndex={0} end>Add</NavLink>
                </Nav>
            </Collapse>
        </Nav>
    );
}

export default SidebarItems;