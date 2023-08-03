
import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import BannerPromo from '../../assets/img/layout/banner-promo.png';
import Contenta from '../../assets/img/layout/contenta.jpg';
import Contentb from '../../assets/img/layout/contentb.jpg';
import Contentc from '../../assets/img/layout/contentc.jpg';

const BannerPromoComponent = () => {
    return(
        <div className="mb-5">
            <Container className=''>
                <div className='banner-promo mt-5'>
                    <img className='w-100 mg-mt-5' src={BannerPromo}/>
                </div>
                <Row>
                    <Col className='mb-3'>
                        <div className='content-promo'>
                            <img className='content-promo-img' src={Contenta} alt="content"/>
                        </div>
                    </Col>
                    <Col className='mb-3'>
                        <div className='content-promo'>
                            <img className='content-promo-img' src={Contentb} alt="content"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default BannerPromoComponent;