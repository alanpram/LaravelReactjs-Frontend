import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Contenta from '../../assets/img/layout/contenta.jpg';
import Contentb from '../../assets/img/layout/contentb.jpg';
import Contentc from '../../assets/img/layout/contentc.jpg';


function ContentPromoComponent({ banners }) {
  return (
    <Container fluid className='mt-md-5 p-5'>
        <Row>
            <Col md={4} className='mb-3'>
                <div className='content-promo'>
                    <img className='content-promo-img' src={Contenta} alt="content"/>
                </div>
            </Col>
            <Col md={4} className='mb-3'>
                <div className='content-promo'>
                    <img className='content-promo-img' src={Contentb} alt="content"/>
                </div>
            </Col>
            <Col md={4} className='mb-3'>
                <div className='content-promo'>
                    <img className='content-promo-img' src={Contentc} alt="content"/>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default ContentPromoComponent;
