
import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import BannerPromo from '../../assets/img/layout/banner-promo.png';
import Contenta from '../../assets/img/layout/contenta.jpg';
import Contentb from '../../assets/img/layout/contentb.jpg';
import Contentc from '../../assets/img/layout/contentc.jpg';

const BannerPromoComponent = ({data}) => {
    return(
        <div className="mb-5">
            <Container className=''>
                <div className='banner-promo mt-5'>
                    <img className='w-100' src={'http://localhost:1234' +data.link_image.media_path + data.link_image.media_file} alt={data.link_image.media_alt}/>
                </div>
            </Container>
        </div>
    );

}

export default BannerPromoComponent;