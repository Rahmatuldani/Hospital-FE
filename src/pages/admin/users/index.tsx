import { Button, Card, Col, Container, Form, OverlayTrigger, Row, Spinner, Tooltip } from "react-bootstrap";
import { FaUserDoctor } from 'react-icons/fa6';
import { UserType } from "../../../store/users/types";
import React from "react";
import { FaSortDown } from "react-icons/fa";
import useState from "../../../hooks/useState";
import { FiTrash2 } from "react-icons/fi";
import UserDetail from "./detail";
import { useSelector } from "react-redux";
import { selectUsers, selectUsersError, selectUsersIsLoading } from "../../../store/users/selector";
import { ErrorHandler } from "../../../utils/errorHandler";
import { useDispatch } from "react-redux";
import { deleteUserStart, fetchUsersStart } from "../../../store/users/action";
import Alert from "../../../utils/alert";
import UserEdit from "./edit";
import DataTable, { TableColumn } from "react-data-table-component";

function Users() {
    const users: UserType[] = useSelector(selectUsers);
    const loading: boolean = useSelector(selectUsersIsLoading);
    const [filter, setFilter] = useState<string>('');
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUsersStart());
    }, [dispatch]);

    function handleDelete(id: string, name: string) {
        Alert({ title: 'Delete user', text: `Are you sure to delete ${name}?`, icon: 'warning', cancelButton: true, confirmText: 'Delete' })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteUserStart(id));
                }
            });
    }

    const error = useSelector(selectUsersError);
    React.useEffect(() => {
        ErrorHandler(error);
    }, [error]);

    const columns: TableColumn<UserType>[] = [
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true
        },
        {
            name: 'Polyclinic',
            selector: row => row.polyclinic ?? '-',
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="d-flex gap-1">
                    <UserDetail user={row} />
                    <UserEdit user={row} />
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="deleteTooltip">Delete</Tooltip>
                        }
                    >
                        <Button variant="icon" className="btn-transparent-dark btn-datatable" onClick={() => handleDelete(row._id, row.name)}>
                            <FiTrash2 />
                        </Button>
                    </OverlayTrigger>
                </div>
            )
        },
    ];

    const filterUsers: UserType[] = users.filter((user) => user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <Container>
                    <div className="page-header-content pt-4">
                        <Row className="align-items-center justify-content-between">
                            <Col xs='auto' className=" mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        <FaUserDoctor />
                                    </div>
                                    Users
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className="mt-n10">
                <Card className='mb-4 card-header-actions'>
                    <Card.Header>
                        List
                        <Form.Control style={{ maxWidth: '400px' }} placeholder="Search" onChange={(e) => setFilter(e.target.value)} />
                    </Card.Header>
                    <Card.Body>
                        {loading ? (
                            <div className="d-flex justify-content-center p-4">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                            <DataTable
                                columns={columns}
                                data={filterUsers}
                                pagination
                                sortIcon={<FaSortDown/>}
                                responsive
                                striped
                                highlightOnHover
                            />
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;