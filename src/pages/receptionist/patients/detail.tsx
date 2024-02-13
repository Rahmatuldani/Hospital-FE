import { FaClipboardList } from "react-icons/fa";
import useState from "../../../hooks/useState";
import { PatientType } from "../../../store/patients/types";
import { Button, Col, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { dateToString } from "../../../utils/convert";

interface DetailProps {
    patient: PatientType;
}

function PatientDetail({ patient }: DetailProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id="detailTooltip">Detail</Tooltip>
                }
            >
                <Button variant="icon" className="btn-transparent-dark btn-datatable" onClick={() => setShow(true)}>
                    <FaClipboardList />
                </Button>
            </OverlayTrigger>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>User Detail</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId='medicalRecord'>
                            <Form.Label column sm='4'>
                                Medical Record
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient._id} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='nik'>
                            <Form.Label column sm='4'>
                                NIK
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.nik} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='name'>
                            <Form.Label column sm='4'>
                                Name
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.name} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='birth'>
                            <Form.Label column sm='4'>
                                Birth
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={`${patient.birthPlace}, ${dateToString(patient.birthDate)}`} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='gender'>
                            <Form.Label column sm='4'>
                                Gender
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.gender} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='blood'>
                            <Form.Label column sm='4'>
                                Blood
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.blood  ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='address'>
                            <Form.Label column sm='4'>
                                Address
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.address} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='religion'>
                            <Form.Label column sm='4'>
                                Religion
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.religion} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='married'>
                            <Form.Label column sm='4'>
                                Married
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.married} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='job'>
                            <Form.Label column sm='4'>
                                Job
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.job ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='citizenship'>
                            <Form.Label column sm='4'>
                                Citizenship
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.citizenship} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='phone'>
                            <Form.Label column sm='4'>
                                Phone
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.phone} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='bpjs'>
                            <Form.Label column sm='4'>
                                BPJS
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.bpjs ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='parent'>
                            <Form.Label column sm='4'>
                                Parent
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.parent} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PatientDetail;