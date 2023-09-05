import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductNewComponent = ({ data }) => {
    return (
        <Row>
            {Object.keys(data).map((itemKey) => (
                <Col xs={6} md={3} className='mb-3 text-center' key={data[itemKey].flagship.item_uuid}>
                <Link to={'/product-detail/' + data[itemKey].flagship.item_slug} className="product-title">
                    <Card className="h-100 bg-transparent">
                        <img className='w-100 image-load bg-light' src={'http://localhost:1234' + data[itemKey].flagship.link_image[0].media_path + '/' + data[itemKey].flagship.link_image[0].media_file}/>
                        <p className="text-light mt-3">
                            {data[itemKey].flagship.item_name}
                        </p>
                        <div className="mt-auto">
                            <span className="new-in-store-price">From {parseInt(data[itemKey].flagship.link_price.product_price).toLocaleString().replace(/,/g, '.')}</span>
                        </div>
                    </Card>
                </Link>
                </Col>
            ))}
        </Row>

    );
}

export default ProductNewComponent;
