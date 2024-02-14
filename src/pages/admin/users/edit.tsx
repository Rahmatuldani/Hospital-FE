import { Button, Col, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import useState from "../../../hooks/useState";
import { FaEdit } from "react-icons/fa";
import { Polyclinic, UserRole, UserType } from "../../../store/users/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/action";
import { EmptyToNull } from "../../../utils/convert";

interface EditProps {
    user: UserType
}

function UserEdit({ user }: EditProps) {
    const [show, setShow] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<UserType>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<UserType> = (data): void => {
        const formData = EmptyToNull(data);
        dispatch(updateUserStart(formData as UserType));
        setShow(false);
    };

    return (
        <>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id="editTooltip">Edit</Tooltip>
                }
            >
                <Button variant="icon" className="btn-transparent-dark btn-datatable" onClick={() => setShow(true)}>
                    <FaEdit />
                </Button>
            </OverlayTrigger>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>User Edit</Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Controller
                            name="_id"
                            control={control}
                            defaultValue={user._id}
                            render={({ field }) => (
                                <Form.Control {...field} readOnly hidden />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={user.email}
                            render={() => (
                                <Form.Group as={Row} className="mb-1" controlId='email'>
                                    <Form.Label column sm='4'>
                                        Email
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Control plaintext readOnly defaultValue={user.email}/>
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={user.name}
                            rules={{ required: 'Name is required' }}
                            render={({field}) => (
                                <Form.Group as={Row} className="mb-1" controlId='name'>
                                    <Form.Label column sm='4'>
                                        Name
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Control {...field} />
                                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="role"
                            control={control}
                            defaultValue={user.role}
                            rules={{ required: 'Role is required' }}
                            render={({field}) => (
                                <Form.Group as={Row} className="mb-1" controlId='role'>
                                    <Form.Label column sm='4'>
                                        Role
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Select aria-label="role" {...field}>
                                            {UserRole.map((role) => (
                                                <option key={role} value={role}>{role}</option>
                                            ))}
                                        </Form.Select>
                                        {errors.role && <span className="text-danger">{errors.role.message}</span>}
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="polyclinic"
                            control={control}
                            defaultValue={user.polyclinic ?? ''}
                            render={({field}) => (
                                <Form.Group as={Row} className="mb-1" controlId='polyclinic'>
                                    <Form.Label column sm='4'>
                                        Polyclinic
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Select aria-label="polyclinic" {...field}>
                                            <option value={''}>Select Polyclinic</option>
                                            {Polyclinic.map((poly) => (
                                                <option key={poly} value={poly}>{poly}</option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue={user.phone}
                            rules={{ required: 'Phone is required' }}
                            render={({field}) => (
                                <Form.Group as={Row} className="mb-1" controlId='phone'>
                                    <Form.Label column sm='4'>
                                        Phone
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Control {...field} />
                                        {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                                    </Col>
                                </Form.Group>
                            )}
                        />
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