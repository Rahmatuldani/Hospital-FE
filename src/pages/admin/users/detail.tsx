import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useState from "../../../hooks/useState";
import { FaClipboardList } from "react-icons/fa";
import { UserType } from "../../../store/users/types";

interface DetailProps {
    user: UserType;
}

function UserDetail({ user }: DetailProps) {
    const [show, setShow] = useState(false);
    

    return (
        <>
            <button className="dropdown-item" onClick={() => setShow(true)}>
                <div className='dropdown-item-icon'>
                    <FaClipboardList/>
                </div>
                Detail
            </button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>User Detail</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId='medicalRecord'>
                            <Form.Label column sm='4'>
                                UID
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user._id} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='name'>
                            <Form.Label column sm='4'>
                                Name
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.name} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='role'>
                            <Form.Label column sm='4'>
                                Role
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.role} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='polyclinic'>
                            <Form.Label column sm='4'>
                                Polyclinic
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.polyclinic ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='email'>
                            <Form.Label column sm='4'>
                                Email
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.email ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='phone'>
                            <Form.Label column sm='4'>
                                Phone
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.phone} />
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

export default UserDetail;