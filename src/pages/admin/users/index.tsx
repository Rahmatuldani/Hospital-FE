import { Button, Card, Col, Container, Dropdown, Form, InputGroup, Pagination, Row, Spinner, Table } from "react-bootstrap";
import { FaUserDoctor } from 'react-icons/fa6';
import { UserType } from "../../../store/users/types";
import React from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import useState from "../../../hooks/useState";
import { FiMoreVertical, FiTrash2 } from "react-icons/fi";
import UserDetail from "./detail";
import { useSelector } from "react-redux";
import { selectUsers, selectUsersError, selectUsersIsLoading, selectUsersPageCount } from "../../../store/users/selector";
import { ErrorHandler } from "../../../utils/errorHandler";
import { useDispatch } from "react-redux";
import { fetchUsersStart } from "../../../store/users/action";

function Users() {
    const users: UserType[] = useSelector(selectUsers);
    const isLoading: boolean = useSelector(selectUsersIsLoading);
    const pageCount: number = useSelector(selectUsersPageCount);

    const [show, setShow] = useState('10');
    const [page, setPage] = useState<number>(1);
    const pagination: JSX.Element[] = [];
    for (let i = 1; i < pageCount + 1; i++) {
        pagination.push(
            <Pagination.Item key={i} active={page === i} onClick={() => setPage(i)}>{i}</Pagination.Item>
        );
    }

    const columns: { key: keyof UserType, label: string}[] = [
        { key: 'uid', label: 'UID'},
        { key: 'name', label: 'Name'},
        { key: 'role', label: 'Role'},
        { key: 'polyclinic', label: 'Polyclinic'},
        { key: 'phone', label: 'Phone'},
    ];

    function handleDelete(id: string) {
        console.log(id);
    }

    const error = useSelector(selectUsersError);
    React.useEffect(() => {
        ErrorHandler(error);
    }, [error]);
    
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchUsersStart({}));
    }, [dispatch]);

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
                <Card className='mb-4'>
                    <Card.Header>List</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center">
                        <Row className="mb-4" style={{ width: '100%' }}>
                            <Col>
                                <Form.Group as={Row} controlId="showData">
                                    <Form.Label column sm='2'>Show</Form.Label>
                                    <Col sm='3'>
                                        <Form.Select aria-label="showData" value={show} onChange={(e) => setShow(e.target.value)}>
                                            <option value='10'>10</option>
                                            <option value='25'>25</option>
                                            <option value='50'>50</option>
                                            <option value='100'>100</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search"
                                    />
                                    <Button variant="outline-success"><FaSearch /></Button>
                                </InputGroup></Col>
                        </Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column.key}>{column.label}
                                            <Button variant="icon" className="btn-transparent btn-datatable ms-1" type="button"><FaSort/></Button>
                                        </th>
                                    ))}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column.key}>{column.label}</th>
                                    ))}
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={columns.length + 1} className="text-center">
                                            <Spinner animation="border" variant="primary" />
                                        </td>
                                    </tr>
                                ) : users.length <= 0 ? (
                                    <tr>
                                        <td colSpan={columns.length + 1} className="text-center">
                                            Data Not Found
                                        </td>
                                    </tr>
                                ) : users.map((row, i) => (
                                    <tr key={i}>
                                        {columns.map((column) => (
                                            <td key={column.key}>{row[column.key] ?? '-'}</td>
                                        ))}
                                        <td>
                                            <Dropdown className="no-caret dropdown-notifications">
                                                <Dropdown.Toggle
                                                    variant="icon"
                                                    className="btn-transparent-dark btn-datatable"
                                                    id="notification-dropdown"
                                                    aria-haspopup="true"
                                                >
                                                    <FiMoreVertical />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='py-2' style={{ minWidth: '150px' }}>
                                                    <UserDetail user={row}/>
                                                    <Dropdown.Item href="#!" onClick={() => handleDelete(row._id)}>
                                                        <div className="dropdown-item-icon">
                                                            <FiTrash2 />
                                                        </div>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                        <Pagination className="m-2">
                            <Pagination.First disabled={page === 1} onClick={() => setPage(1)} />
                            <Pagination.Prev disabled={page === 1} onClick={() => setPage(page - 1)} />
                            {pagination}
                            <Pagination.Next disabled={page === pageCount} onClick={() => setPage(page + 1)} />
                            <Pagination.Last disabled={page === pageCount} onClick={() => setPage(pageCount)} />
                        </Pagination>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;