import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductTopComponent = ({ data }) => {
    return (
        <Row className="mb-5">
            {Object.keys(data).map((itemKey) => (
                <Col xs={6} md={3} className='mb-3 text-center' key={data[itemKey].flagship.item_uuid}>
                    <div className="top-product p-3">
                        <img className='w-100 image-load bg-light' src={'http://localhost:1234' + data[itemKey].flagship.link_image[0].media_path +'/'+ data[itemKey].flagship.link_image[0].media_file}/>
                        <Link to={'/product-detail/' + data[itemKey].flagship.item_slug} className="product-title">
                                {data[itemKey].flagship.item_name}
                                <br></br>
                                <div class="price-container mt-1">
                                    <span><sup className="from">From </sup>{parseInt(data[itemKey].flagship.link_price.product_price).toLocaleString().replace(/,/g, '.')}</span>
                                </div>
                        </Link>
                        <p className="mt-1"></p>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default ProductTopComponent;
