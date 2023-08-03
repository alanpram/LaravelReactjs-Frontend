import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import img3 from '../../assets/img/layout/img3.jpg';

const BlogComponent = () => {
    return(
        <div className="bg-light p-5">
            <Container className=''>
                <h3 className=" text-center">Subscribe Our Newsletter</h3>
                <Form className="w-100">
                    <div className="d-flex align-items-center justify-content-center mt-3 ">
                        <Form.Group controlId="exampleForm.ControlInput1 ">
                            <Form.Control className="form-subscribe" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Button className="btn btn-danger btn-form-subscribe">Subscribe</Button>
                    </div>
                </Form>
                <Row className="mt-5">
                    <Col md={4} className='mb-3'>
                        <div className='content-promo'>
                            <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Armchair Alghero</Card.Title>
                                    <Card.Text>
                                        <div className="d-md-flex justify-content-between">
                                            <p>From <span className="text-success">Rp.1.200.000</span></p>
                                            <p className=""></p>
                                        </div>
 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <div className='content-promo'>
                                <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Armchair Alghero</Card.Title>
                                    <Card.Text>
                                        <div className="d-md-flex justify-content-between">
                                            <p>From <span className="text-success">Rp.1.200.000</span></p>
                                            <p className=""></p>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <div className='content-promo'>
                            <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Armchair Alghero</Card.Title>
                                    <Card.Text>
                                        <div className="d-md-flex justify-content-between">
                                            <p>From <span className="text-success">Rp.1.200.000</span></p>
                                            <p className=""></p>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default BlogComponent;