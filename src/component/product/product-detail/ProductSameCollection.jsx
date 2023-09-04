import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductSameCollection(data){

    const collection = data.data.data.collection;

    return(
        <>
            {collection.length !== 0 && (
                <Container className="text-center mt-5 mb-3">
                    <h3 className="mb-5">Product Recommended</h3>
                    <Row className="mb-5 align-item-center justify-content-center">
                        {Object.keys(collection).map((item) => (
                        <Col xs={6} md={3} className='mb-3 text-center' key={collection[item].flagship.item_uuid}>
                            <Link key={collection[item].flagship.item_uuid} to={'/product-detail/' + collection[item].flagship.item_slug} className="product-title">
                            <div className="top-product p-3">
                                <img className='w-100 image-load bg-light' src={'http://localhost:1234' + collection[item].flagship.link_image[0].media_path + '/' + collection[item].flagship.link_image[0].media_file}/>
                                {collection[item].flagship.item_name}
                                <br></br>
                                <div className="price-container mt-1">
                                    <span><sup className="from">From </sup>Rp.{parseInt(collection[item].price.link_price.product_price).toLocaleString().replace(/,/g,'.')}</span>
                                </div>
                                <p className="mt-1"></p>
                            </div>
                            </Link>
                        </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </>
    )
}

export default ProductSameCollection;