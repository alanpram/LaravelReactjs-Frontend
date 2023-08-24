import React from "react";
import { Row, Col } from "react-bootstrap";
import BaseImage from "../../assets/img/base_image2.jpg";
import { Link } from "react-router-dom";

const ProductListComponent = ({ data }) => {

    const dataList = data.data;
    const message = data.message;

    return (
        <>
            <span>Home / Product / {message.category}</span>
            <div className='text-center'>
            <h1 className='text-dark'>{message.category}</h1>
            <p className='mx-auto product-list-text'>
                {message.category_description}
            </p>
            </div>

            <div className='product-list px-5 mb-5'>
                <Row>
                    {Object.keys(dataList).map((itemKey) => (
                        <Col xs={12} md={4} className='mb-3 text-center' key={dataList[itemKey].flagship.item_uuid}>
                            <img className='w-100 mg-mt-5 image-load bg-light' 
                            src={'http://localhost:1234' + dataList[itemKey].flagship.link_image[0].media_path +'/'+ dataList[itemKey].flagship.link_image[0].media_file} 
                            onError={(e) => {
                                e.target.src = BaseImage;
                            }}
                            alt={dataList[itemKey].flagship.link_image[0].media_file}
                            />
                            <Link to={'/product-detail/' + dataList[itemKey].price.item_slug} className="product-title">
                                {dataList[itemKey].flagship.item_name}
                                <br></br>
                                <div class="price-container mt-1">
                                    <span><sup className="from">From </sup>{parseInt(dataList[itemKey].flagship.link_price.product_price).toLocaleString().replace(/,/g, '.')}</span>
                                </div>
                            </Link>
                            <p className="text-light mt-1"></p>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
        
    );
}

export default ProductListComponent;
