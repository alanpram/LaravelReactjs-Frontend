import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../../assets/img/layout/img1.jpg';
import img2 from '../../assets/img/layout/img2.jpg';
import img3 from '../../assets/img/layout/img3.jpg';
import img4 from '../../assets/img/layout/img4.jpg';
import img5 from '../../assets/img/layout/img5.jpg';
import img6 from '../../assets/img/layout/img6.jpg';
import img7 from '../../assets/img/layout/img7.jpg';
import img8 from '../../assets/img/layout/img8.jpg';
import CardHeader from "react-bootstrap/esm/CardHeader";
import { BsFillStarFill } from "react-icons/bs";

const ProductComponent = () => {
    return(
        <div>
            <Container>
                <h5 className="text-light mb-4">Top Product</h5>
                <Row>
                    {Array.from({ length: 8 }).map((_, index) => (
                    <Col xs={6} md={3} className='product mb-3'>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Armchair Alghero</Card.Title>
                                <Card.Text>
                                    <div className=" justify-content-between">
                                        <p>From <span className="text-success">Rp.1.200.000</span></p>
                                        <p className=""><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></p>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

}

export default ProductComponent;