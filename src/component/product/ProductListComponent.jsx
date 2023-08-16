import React from "react";
import { Row, Col } from "react-bootstrap";

const ProductListComponent = ({ data }) => {
    return (
        <>
            <span>Product / Product / Sofa</span>
            <div className='text-center'>
            <h1 className='text-dark'>SOFA</h1>
            <p className='mx-auto product-list-text'>
                Home is where you can truly relax and be yourself. We have sofas and loveseats 
                that you can sink into, lounge and not worry about a thing. Create a living room 
                that expresses your style by choosing a Grandome sofa that fits your personality.
            </p>
            </div>

            <div className='product-list px-5 mb-5'>
                <Row>
                    {Object.keys(data).map((itemKey) => (
                        <Col xs={6} md={3} className='mb-3 text-center' key={data[itemKey].flagship.item_uuid}>
                            <img className='w-100 mg-mt-5 product-image' src={'http://localhost:1234' + data[itemKey].flagship.link_image[0].media_path +'/'+ data[itemKey].flagship.link_image[0].media_file}/>
                            <p className="mt-3">
                                {data[itemKey].flagship.item_name}
                                <br></br>
                                <span className="mt-1">From {parseInt(data[itemKey].flagship.link_price.product_price).toLocaleString().replace(/,/g, '.')}</span>
                            </p>
                            <p className="text-light mt-1"></p>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
        
    );
}

export default ProductListComponent;
