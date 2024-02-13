import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import { FaUserInjured } from "react-icons/fa";
import { PatientType } from "../../../store/patients/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { EmptyToNull } from "../../../utils/convert";
import { useDispatch } from "react-redux";
import { createPatientStart } from "../../../store/patients/action";
import { useSelector } from "react-redux";
import { selectPatientsError } from "../../../store/patients/selector";
import React from "react";
import { ErrorHandler } from "../../../utils/errorHandler";

function PatientAdd() {
    const { register, handleSubmit, formState: { errors }, control } = useForm<PatientType>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<PatientType> = (data): void => {
        const formData = EmptyToNull(data);
        dispatch(createPatientStart(formData as PatientType));
    };

    const error = useSelector(selectPatientsError);
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
                                        <FaUserInjured />
                                    </div>
                                    Patient
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
                        <Card.Body className="p-4 d-flex flex-column gap-2">
                            <Controller
                                name="nik"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'NIK is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='nik'>
                                        <Form.Label column sm='4'>
                                            NIK
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input NIK" {...field} />
                                            {errors.nik && <span className="text-danger">{errors.nik.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Name is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='name'>
                                        <Form.Label column sm='4'>
                                            Name
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input Name" {...field} />
                                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="birthPlace"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Birth Place is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='birthPlace'>
                                        <Form.Label column sm='4'>
                                            Birth Place
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="input Birth Place" {...field} />
                                            {errors.birthPlace && <span className="text-danger">{errors.birthPlace.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="birthDate"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Birth Date is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='birthDate'>
                                        <Form.Label column sm='4'>
                                            Birth Date
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control type="date" {...field} />
                                            {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Form.Group as={Row} controlId='gender'>
                                <Form.Label column sm='4'>
                                    Gender
                                </Form.Label>
                                <Col sm='8'>
                                    <Form.Check inline label="Laki-laki" type="radio" value={'Laki-laki'} {...register('gender')} checked/>
                                    <Form.Check inline label="Perempuan" type="radio" value={'Perempuan'} {...register('gender')} />
                                    {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                                </Col>
                            </Form.Group>
                            <Controller
                                name="blood"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='blood'>
                                        <Form.Label column sm='4'>
                                            Blood Type
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Select aria-label="blood-type" {...field}>
                                                <option value={''}>-- Select Blood Type --</option>
                                                <option value={'A'}>A</option>
                                                <option value={'B'}>B</option>
                                                <option value={'AB'}>AB</option>
                                                <option value={'O'}>O</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Address is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='address'>
                                        <Form.Label column sm='4'>
                                            Address
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control as="textarea" rows={3} {...field} />
                                            {errors.address && <span className="text-danger">{errors.address.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="religion"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Religion is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='religion'>
                                        <Form.Label column sm='4'>
                                            Religion
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Select aria-label="religion" {...field}>
                                                <option value={''}>-- Select Religion --</option>
                                                <option value={'Islam'}>Islam</option>
                                                <option value={'Kristen'}>Kristen</option>
                                                <option value={'Hindu'}>Hindu</option>
                                                <option value={'Budha'}>Budha</option>
                                                <option value={'Konghuchu'}>Konghuchu</option>
                                                <option value={'Atheis'}>Atheis</option>
                                            </Form.Select>
                                            {errors.religion && <span className="text-danger">{errors.religion.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="married"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Married status is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='married'>
                                        <Form.Label column sm='4'>
                                            Married
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Select aria-label="married" {...field}>
                                                <option value={''}>-- Select Married Status --</option>
                                                <option value={'Belum Kawin'}>Belum Kawin</option>
                                                <option value={'Kawin'}>Kawin</option>
                                                <option value={'Janda'}>Janda</option>
                                                <option value={'Duda'}>Duda</option>
                                            </Form.Select>
                                            {errors.married && <span className="text-danger">{errors.married.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="job"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='job'>
                                        <Form.Label column sm='4'>
                                            Job
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input job" {...field} />
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="citizenship"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Citizenship is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='citizenship'>
                                        <Form.Label column sm='4'>
                                            Citizenship
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input citizenship" {...field} />
                                            {errors.citizenship && <span className="text-danger">{errors.citizenship.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Phone is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='phone'>
                                        <Form.Label column sm='4'>
                                            Phone
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input phone" {...field} />
                                            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                name="bpjs"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='bpjs'>
                                        <Form.Label column sm='4'>
                                            BPJS
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="Input BPJS" {...field} />
                                        </Col>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                control={control}
                                name="parent"
                                defaultValue=""
                                rules={{ required: 'Parent is required' }}
                                render={({ field }) => (
                                    <Form.Group as={Row} controlId='parent'>
                                        <Form.Label column sm='4'>
                                            Parent
                                        </Form.Label>
                                        <Col sm='8'>
                                            <Form.Control placeholder="input parent" {...field} />
                                            {errors.parent && <span className="text-danger">{errors.parent.message}</span>}
                                        </Col>
                                    </Form.Group>
                                )}
                            />
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

export default PatientAdd;