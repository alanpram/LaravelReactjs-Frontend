import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';


function ContentPromoComponent({ contentPromo  }) {
  return (
    <Container fluid className='mt-md-5 p-5'>
        <Row>
            {contentPromo.map((content) => (
                <Col md={4} className='mb-3' key={content.banner_uuid}>
                    <div className='content-promo'>
                    <img className='content-promo-img' src={'http://localhost:1234' +content.link_image.media_path + content.link_image.media_file} alt={content.link_image.media_alt}/>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
  );
}

export default ContentPromoComponent;
