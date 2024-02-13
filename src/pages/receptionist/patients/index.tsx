/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Card, Col, Container, Form, OverlayTrigger, Row, Spinner, Tooltip } from "react-bootstrap";
import { FaSortDown, FaUserInjured } from "react-icons/fa";
import { PatientType } from "../../../store/patients/types";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deletePatientStart, fetchPatientsStart } from "../../../store/patients/action";
import { selectPatients, selectPatientsError, selectPatientsIsLoading } from "../../../store/patients/selector";
import DataTable, { TableColumn } from "react-data-table-component";
import { FiTrash2 } from "react-icons/fi";
import Alert from "../../../utils/alert";
import useState from "../../../hooks/useState";
import { dateToString } from "../../../utils/convert";
import PatientDetail from "./detail";
import { ErrorHandler } from "../../../utils/errorHandler";
import PatientEdit from "./edit";

function Patient() {
    const patients: PatientType[] = useSelector(selectPatients);
    const loading: boolean = useSelector(selectPatientsIsLoading);
    const [filter, setFilter] = useState<string>('');
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPatientsStart());
    }, [dispatch]);

    function handleDelete(patient: PatientType) {
        Alert({ title: 'Delete user', text: `Are you sure to delete ${patient.name}?`, icon: 'warning', cancelButton: true, confirmText: 'Delete' })
            .then(result => {
                if (result.isConfirmed) {
                    dispatch(deletePatientStart(patient._id));
                }
            });
    }

    const error = useSelector(selectPatientsError);
    React.useEffect(() => {
        ErrorHandler(error);
    }, [error]);

    const columns: TableColumn<PatientType>[] = [
        {
            name: 'NIK',
            selector: row => row.nik,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Birth',
            cell: row => (
                <>{row.birthPlace}, {dateToString(row.birthDate)}</>
            )
        },
        {
            name: 'BPJS',
            selector: row => row.bpjs ?? '-',
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="d-flex gap-1">
                    <PatientDetail patient={row} />
                    <PatientEdit patient={row} />
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="deleteTooltip">Delete</Tooltip>
                        }
                    >
                        <Button variant="icon" className="btn-transparent-dark btn-datatable" onClick={() => handleDelete(row)}>
                            <FiTrash2/>
                        </Button>
                    </OverlayTrigger>
                </div>
            )
        },
    ];

    const filterPatients: PatientType[] = patients.filter((patient) => patient.nik.includes(filter) ||
        patient.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <Container>
                    <div className="page-header-content pt-4">
                        <Row className="align-items-center justify-content-between">
                            <Col xs='auto' className=" mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        <FaUserInjured />
                                    </div>
                                    Patients
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className="mt-n10">
                <Card className="mb-4 card-header-actions">
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
                                data={filterPatients}
                                pagination
                                sortIcon={<FaSortDown />}
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

export default Patient;