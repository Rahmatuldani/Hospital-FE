import {
    Button,
    Dropdown,
    Nav,
    Navbar
} from "react-bootstrap";
import {
    FiMenu,
    FiBell,
    FiActivity,
    FiMail,
    FiSettings,
    FiLogOut
} from "react-icons/fi";
import Profile from '../assets/assets/img/illustrations/profiles/profile-1.png';

function NavbarComponent() {
    const currentUser: null = null;

    function toggleSidebar() {
        document.body.classList.toggle('sidenav-toggled');
    }

    return (
        <Navbar className="topnav shadow justify-content-between justify-content-sm-start bg-white">
        <Navbar.Brand>Hospital App</Navbar.Brand>
        <Button
            variant="icon"
            className="btn-transparent-dark"
            onClick={toggleSidebar}
        >
            <FiMenu />
        </Button>
        <Nav className="align-items-center ml-auto">
            <Dropdown className="nav-item no-caret mr-3 dropdown-notifications">
                <Dropdown.Toggle
                    variant="icon"
                    className="btn-transparent-dark"
                    id="notification-dropdown"
                    aria-haspopup="true"
                >
                    <FiBell />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                    <Dropdown.Header
                        as={"h6"}
                        className="dropdown-notifications-header"
                    >
                        <FiBell className="mr-2" />
                        Alerts Center
                    </Dropdown.Header>
                    <Dropdown.Item className="dropdown-notifications-item" href="#!">
                        <div className="dropdown-notifications-item-icon bg-warning">
                            <FiActivity />
                        </div>
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-details">
                                December 29, 2020
                            </div>
                            <div className="dropdown-notifications-item-content-text">
                                This is an alert message. It&apos;s nothing serious, but it
                                requires your attention.
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-notifications-footer" href="#!">
                        View All Alerts
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item no-caret mr-3 dropdown-notifications">
                <Dropdown.Toggle
                    variant="icon"
                    className="btn-transparent-dark"
                    id="message-dropdown"
                    aria-haspopup="true"
                >
                    <FiMail />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                    <Dropdown.Header
                        as={"h6"}
                        className="dropdown-notifications-header"
                    >
                        <FiMail className="mr-2" />
                        Message Center
                    </Dropdown.Header>
                    <Dropdown.Item className="dropdown-notifications-item" href="#!">
                        <img className="dropdown-notifications-item-img" src={Profile} />
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </div>
                            <div className="dropdown-notifications-item-content-details">
                                Emily Fowler &#xB7; 2d
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-notifications-footer" href="#!">
                        View All Message
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item no-caret mr-3 dropdown-user">
                <Dropdown.Toggle
                    variant="icon"
                    className="btn-transparent-dark"
                    id="user-dropdown"
                    aria-haspopup="true"
                >
                    <img className="img-fluid" src={Profile} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                    <Dropdown.Header as={"h6"} className="d-flex align-items-center">
                        <img className="dropdown-user-img" src={Profile} />
                        <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name">
                                {currentUser ? 'Current User' : "Testing"}
                            </div>
                            <div className="dropdown-user-details-email">
                                {currentUser ? 'Current User': "Testing"}
                            </div>
                        </div>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#!">
                        <div className="dropdown-item-icon">
                            <FiSettings />
                        </div>
                        Account
                    </Dropdown.Item>
                    <Dropdown.Item href="#!" onClick={() => { }}>
                        <div className="dropdown-item-icon">
                            <FiLogOut />
                        </div>
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Navbar>
    );
}

export default NavbarComponent;