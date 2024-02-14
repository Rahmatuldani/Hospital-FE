import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectAuth, selectAuthError } from "../store/auth/selector";
import { Navigate } from "react-router-dom";
import { authLoginStart } from "../store/auth/action";
import { AuthType } from "../store/auth/types";
import { useDispatch } from "react-redux";
import { ErrorHandler } from "../utils/errorHandler";

function LoginPage() {
    const currentUser = useSelector(selectAuth);
    const dispatch = useDispatch();
    const { handleSubmit, formState: { errors }, control } = useForm<AuthType>();

    const onSubmit: SubmitHandler<AuthType> = (data): void => {
        dispatch(authLoginStart(data));
    };

    React.useEffect(() => {
        document.body.className = 'bg-primary';
    }, []);

    const error = useSelector(selectAuthError);
    React.useEffect(() => {
        ErrorHandler(error);
    }, [error]);

    if (currentUser) {
        return <Navigate to={'/'} replace/>;
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={5}>
                                <Card className="shadow-lg border-0 rounded-lg mt-5">
                                    <Card.Header className="justify-content-center">
                                        <h3 className="font-weight-light my-4">Login</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={handleSubmit(onSubmit)}>
                                            <Controller
                                                name="email"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Email is required' }}
                                                render={({ field }) => (
                                                    <Form.Group className="form-group" controlId="inputEmail">
                                                        <Form.Label className="small mb-1">Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email address" {...field}/>
                                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            <Controller
                                                name="password"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Password is required' }}
                                                render={({ field }) => (
                                                    <Form.Group className="form-group" controlId="inputPasswordl">
                                                        <Form.Label className="small mb-1">Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Enter password" {...field}/>
                                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            <Form.Group className="form-group d-flex justify-content-end mt-4 mb-0">
                                                <Button type="submit">Login</Button>
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </div>
    );
}

export default LoginPage;