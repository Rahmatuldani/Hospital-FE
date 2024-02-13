import {
    Button,
    Col,
    Form,
    Modal,
    OverlayTrigger,
    Row,
    Tooltip
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { PatientType } from "../../../store/patients/types";
import useState from "../../../hooks/useState";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { EmptyToNull } from "../../../utils/convert";
import { editPatientStart } from "../../../store/patients/action";
import { useDispatch } from "react-redux";

interface EditProps {
    patient: PatientType;
}

function PatientEdit({ patient }: EditProps) {
    const [show, setShow] = useState(false);
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm<PatientType>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<PatientType> = (data): void => {
        const formData = EmptyToNull(data);
        dispatch(editPatientStart(formData as PatientType));
        setShow(false);
    };

    function handleRadioChange(value: string) {
        setValue('gender', value);
    }

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
                <Modal.Header closeButton>Patient Edit</Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className="d-flex flex-column gap-2">
                        <Controller
                            name="_id"
                            control={control}
                            defaultValue={patient._id}
                            render={({ field }) => (
                                <Form.Control {...field} readOnly hidden />
                            )}
                        />
                        <Controller
                            name="nik"
                            control={control}
                            defaultValue={patient.nik}
                            render={({ field }) => (
                                <Form.Group as={Row} controlId='nik'>
                                    <Form.Label column sm='4'>
                                        NIK
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Control {...field} readOnly />
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={patient.name}
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
                            defaultValue={patient.birthPlace}
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
                            defaultValue={patient.birthDate}
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
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue={patient.gender}
                            rules={{ required: 'Gender is required' }}
                            render={() => (
                                <Form.Group as={Row} controlId='gender'>
                                    <Form.Label column sm='4'>
                                        Gender
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Check inline label="Laki-laki" type="radio" id="laki-laki" value={'Laki-laki'} checked={getValues('gender').toLowerCase() === 'laki-laki'} onChange={() => handleRadioChange('Laki-laki')} />
                                        <Form.Check inline label="Perempuan" type="radio" id="perempuan" value={'Perempuan'} checked={getValues('gender').toLowerCase() === 'perempuan'} onChange={() => handleRadioChange('Perempuan')} />
                                    </Col>
                                </Form.Group>
                            )}
                        />
                        <Controller
                            name="blood"
                            control={control}
                            defaultValue={patient.blood ?? ''}
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
                            defaultValue={patient.address}
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
                            defaultValue={patient.religion}
                            rules={{ required: 'Religion is required' }}
                            render={({ field }) => (
                                <Form.Group as={Row} controlId='religion'>
                                    <Form.Label column sm='4'>
                                        Religion
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Select aria-label="religion" {...field}>
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
                            defaultValue={patient.married}
                            rules={{ required: 'Married status is required' }}
                            render={({ field }) => (
                                <Form.Group as={Row} controlId='married'>
                                    <Form.Label column sm='4'>
                                        Married
                                    </Form.Label>
                                    <Col sm='8'>
                                        <Form.Select aria-label="married" {...field}>
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
                            defaultValue={patient.job ?? ''}
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
                            defaultValue={patient.citizenship}
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
                            defaultValue={patient.phone}
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
                            defaultValue={patient.bpjs ?? '-'}
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
                            defaultValue={patient.parent}
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

export default PatientEdit;