import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import { FaUserDoctor } from 'react-icons/fa6';
import { SubmitHandler, useForm } from "react-hook-form";
import { Polyclinic, UserRole, UserType } from "../../../store/users/types";
import { useDispatch } from "react-redux";
import { createUserStart } from "../../../store/users/action";
import { useSelector } from "react-redux";
import { selectUsersError } from "../../../store/users/selector";
import { ErrorHandler } from "../../../utils/errorHandler";

function UserAdd() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserType>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<UserType> = (data): void => {
        if (data.polyclinic === '') {
            delete data.polyclinic;
        }
        dispatch(createUserStart(data));
    };

    const error = useSelector(selectUsersError);
    React.useEffect(() => {
        ErrorHandler(error);
    }, [error]);

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
                    <Card.Header>Form</Card.Header>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Input Email" {...register('email', { required: 'Email is required' })} />
                                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Input Name" {...register('name', { required: 'Name is required' })} />
                                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select aria-label="role" {...register('role', { required: 'Role is required' })}>
                                        <option value={''}>Select Role</option>
                                        {UserRole.map((role) => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </Form.Select>
                                    {errors.role && <span className="text-danger">{errors.role.message}</span>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="formUid">
                                    <Form.Label>Polyclinic</Form.Label>
                                    <Form.Select aria-label="polyclinic" {...register('polyclinic')}>
                                        <option value={''}>Select Polyclinic</option>
                                        {Polyclinic.map((poly) => (
                                            <option key={poly} value={poly}>{poly}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control placeholder="Input Phone" {...register('phone', { required: 'Phone is required' })} />
                                    {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                                </Form.Group>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="d-flex gap-2 justify-content-end">
                            <Button type="reset" variant="warning">Reset</Button>
                            <Button type="submit" variant="success">Save</Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </main>
    );
}

export default UserAdd;