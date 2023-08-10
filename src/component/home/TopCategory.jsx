import React from "react";
import { Col, Row } from "react-bootstrap";

const TopCategory = ({data}) => {
    return (
          <Row>
            {data.map((data) => (
                <Col key={data.category_uuid} xs={6} md={3} className='product mb-3'>
                    <img className='w-100 mg-mt-5' src={'http://localhost:1234' +data.link_image.media_path + data.link_image.media_file} alt={data.link_image.media_alt}/>
                    <h5 className="text-center">{data.category_name}</h5>
                </Col>
            ))}
          </Row>
    );
}

export default TopCategory;