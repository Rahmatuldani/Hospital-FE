import { Col, Container, Row } from "react-bootstrap";
import { FaUserDoctor } from 'react-icons/fa6';
import TableComponent from "../../../components/table";

type Data = {
    uid: string;
    name: string,
    age: number,
    address: string
}

function Users() {
    const users: Data[] | null = null;
    const isLoading: boolean = false;
    const totalPage: number = 8;

    const columns = [
        { key: 'uid', label: 'UID' },
        { key: 'name', label: 'Name'}
    ];

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
            <TableComponent 
                columns={columns} 
                data={users} 
                loading={isLoading} 
                totalPage={totalPage} 
            />
        </main>
    );
}

export default Users;