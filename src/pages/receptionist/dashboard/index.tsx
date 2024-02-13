import { Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowTrendUp, FaDollarSign } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";

function Dashboard() {
    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <Container>
                    <div className="page-header-content pt-4">
                        <Row className="align-items-center justify-content-between">
                            <Col xs='auto' className=" mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        <FiActivity />
                                    </div>
                                    Dashboard
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className="mt-n5">
                <Row className="justify-content-center">
                    <Col xl="3" md="6" className="mb-4">
                        <Card className="border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100 lift">
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <div className="small font-weight-bold text-primary mb-1">Earnings (montly)</div>
                                        <div className="h5">$4,390</div>
                                        <div className="text-xs font-weight-bold text-success d-inline-flex align-items-center">
                                            <FaArrowTrendUp/>
                                            12%
                                        </div>
                                    </div>
                                    <div className="ml-2"><FaDollarSign size={32} className="text-gray-200"/></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl="3" md="6" className="mb-4">
                        <Card className="border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100 lift">
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <div className="small font-weight-bold text-primary mb-1">Earnings (montly)</div>
                                        <div className="h5">$4,390</div>
                                        <div className="text-xs font-weight-bold text-success d-inline-flex align-items-center">
                                            <FaArrowTrendUp/>
                                            12%
                                        </div>
                                    </div>
                                    <div className="ml-2"><FaDollarSign size={32} className="text-gray-200"/></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Dashboard;