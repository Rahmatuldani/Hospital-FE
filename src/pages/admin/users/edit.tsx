import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useState from "../../../hooks/useState";
import { FaEdit } from "react-icons/fa";
import { Polyclinic, UserRole, UserType } from "../../../store/users/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/action";

interface EditProps {
    user: UserType
}

function UserEdit({ user }: EditProps) {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<UserType>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<UserType> = (data): void => {
        dispatch(updateUserStart({id: user._id, user: data}));
        setShow(false);
    };

    return (
        <>
            <button className="dropdown-item" onClick={() => setShow(true)}>
                <div className='dropdown-item-icon'>
                    <FaEdit />
                </div>
                Edit
            </button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>User Edit</Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group as={Row} className="mb-1" controlId='email'>
                            <Form.Label column sm='4'>
                                Email
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.email ?? '-'}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" controlId='name'>
                            <Form.Label column sm='4'>
                                Name
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control defaultValue={user.name} {...register('name', { required: 'Name is required' })} />
                                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" controlId='role'>
                            <Form.Label column sm='4'>
                                Role
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Select aria-label="role" defaultValue={user.role} {...register('role', { required: 'Role is required' })}>
                                    {UserRole.map((role) => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </Form.Select>
                                {errors.role && <span className="text-danger">{errors.role.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" controlId='polyclinic'>
                            <Form.Label column sm='4'>
                                Polyclinic
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Select aria-label="polyclinic" defaultValue={user.polyclinic} {...register('polyclinic')}>
                                    <option value={''}>Select Polyclinic</option>
                                    {Polyclinic.map((poly) => (
                                        <option key={poly} value={poly}>{poly}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" controlId='phone'>
                            <Form.Label column sm='4'>
                                Phone
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control defaultValue={user.phone} {...register('phone', { required: 'Phone is required' })} />
                                {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                            </Col>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Submit</Button>
                        <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default UserEdit;