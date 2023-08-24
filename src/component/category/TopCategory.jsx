import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopCategory = ({data}) => {
    return (
          <Row>
            {data.map((data) => (
                <Col key={data.category_uuid} xs={6} md={3} className='mb-3'>
                    <img className='w-100 bg-light image-load mb-3' src={'http://localhost:1234' +data.link_image.media_path + data.link_image.media_file} alt={data.link_image.media_alt}/>
                    <Link to={'/product-list/'+data.category_slug} className="category-title">{data.category_name}</Link>
                </Col>
            ))}
          </Row>
    );
}

export default TopCategory;