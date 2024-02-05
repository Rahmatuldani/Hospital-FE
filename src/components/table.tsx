/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from "react/jsx-runtime";
import useState from "../hooks/useState";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Pagination,
    Row,
    Spinner,
    Table
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface TableColumn<T> {
    key: keyof T;
    label: string;
}

interface TableProps<T> {
    columns: TableColumn<T>[];
    data: T[] | null;
    loading: boolean;
    totalPage: number;
}

function TableComponent<T>({ columns, data, loading, totalPage }: TableProps<T>) {
    const [show, setShow] = useState('10');
    const [page, setPage] = useState<number>(1);
    const pageCount = totalPage;
    const pagination: JSX.Element[] = [];

    for (let i = 1; i < pageCount + 1; i++) {
        pagination.push(
            <Pagination.Item key={i} active={page === i} onClick={() => setPage(i)}>{i}</Pagination.Item>
        );
    }

    return (
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
                                    <th key={String(column.key)}>{column.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                {columns.map((column) => (
                                    <th key={String(column.key)}>{column.label}</th>
                                ))}
                            </tr>
                        </tfoot>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center">
                                        <Spinner animation="border" variant="primary"/>
                                    </td>
                                </tr>
                            ) : !data ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center">
                                        Data Not Found
                                    </td>
                                </tr>
                            ) : data.map((row, i) => (
                                    <tr key={i}>
                                        {columns.map((column) => (
                                            <td key={String(column.key)}>{String(row[column.key])}</td>
                                        ))}
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
    );
}

export default TableComponent;