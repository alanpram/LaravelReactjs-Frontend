import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BaseImage from "../../assets/img/base_image2.jpg";
import { BsTrash } from "react-icons/bs";

const CartComponent = () => {
    return (
        <>
        <span>Home / Product / </span>
        <Container>
        <h3 className="text-center mt-3 mb-5">Shopping Cart</h3>
        {[...Array(2)].map((item)=>(
            <Row>
                <Col className="border2" md={8}>
                    <Row>
                        <Col xs={4}>
                            <img className="w-100" src="https://staging-panel.grandome.id/media/product/CWHP139-30_HS1478-E27.jpg"/>
                        </Col>
                        <Col xs={8}>
                            <span>Product :</span>
                            <h5>Sofa 3 Seater Velvet White</h5>

                            <span>Size :</span>
                            <h5>Length: 200cm, Width: 100cm, Height: 76cm</h5>

                            <span>Variant :</span>
                            <h5>Velvet White</h5>
                            <button className="btn btn-dark">
                                +
                            </button>
                            <button className="btn btn-dark">
                                1
                            </button>
                            <button className="btn btn-dark">
                                +
                            </button>
                        </Col>
                    </Row>
                </Col>
                <Col className="border2 mt-5" md={4}>
                    <Row>
                        <Col md={12} xs={4}></Col>
                        <Col md={12} xs={8} className="d-flex justify-content-between">
                            <h5>Rp 2.000.000</h5>
                            <BsTrash />
                        </Col>
                    </Row>
                </Col>
            <  hr className="mt-4"></hr>
            </Row>
        ))
        }
        </Container>
        </>
    )
}

export default CartComponent;