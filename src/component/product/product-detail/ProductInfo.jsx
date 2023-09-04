import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


function ProductInfo(data){

    //initialization data---------------------------------------------------------------------
    const dataProduct = data.data.data;
    const [variant, setVariant] = useState(dataProduct.data.link_fabric);
    const item = dataProduct.data;
    const finishing = item.link_frame.frame_finishing.split('/');

    // split data value-----------------------------------------------------------------------
    const spec = item.link_frame.frame_spec.split('|');
    const dimensions = item.link_frame.link_dimension ? item.link_frame.link_dimension.dimension_name : 'Width';
    const values = item.link_frame.frame_dimension_value;
    const dimensionArray = dimensions.split("/");
    const valueArray = values.split("/");

    let dimensionValue = '';

    for(let i = 0; i < dimensionArray.length; i++){
        dimensionValue += `${dimensionArray[i]}:${valueArray[i]}`;
        
        if(i === dimensionArray.length - 1){
        dimensionValue += ' cm'
        }else{
        dimensionValue += ' cm, '
        }
  }


    return(
        <Container>
                <Row>
                    <Col md={12}>
                        <h1>{item.item_name}</h1>
                    </Col>
                    <Col md={6}>
                        {data.data.frame_image && (
                            <img className="w-100 mt-3" src={'http://localhost:1234' + data.data.frame_image} alt="Frame Image" />
                        )}
                        <p className="mt-3">{item.link_frame.frame_spec}</p>
                        <h5 className="mt-5">Specification</h5>
                        <ul>
                            {spec.map((spec, index) => (
                            <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={6}>
                        {variant && (
                            <div className="mt-3">
                            <h5>Fabric</h5>
                            <p>{item.link_fabric.item_compose}</p>
                            </div>
                        )}
                        <h5 className="mt-3">Dimension</h5>
                        <p>{dimensionValue}</p>
                        <h5>Finishing</h5>
                        {finishing.map((finishing, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: `<span className="bold-500">${finishing.split(':')[0]}</span> :<br />${finishing.split(':')[1]}` }}></p>
                        ))}
                    </Col>
                </Row>
        </Container>
    );
}

export default ProductInfo;