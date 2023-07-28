import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Navbar from './component/home/NavbarComponent';
import Banner from './component/home/BannerComponent';
import ContentPromo from './component/home/ContentPromoComponent';
import ProductComponent from './component/home/ProductComponent';

import BlogComponent from './component/home/BlogComponent';
import BannerPromoComponent from './component/home/BannerPromoComponent';
import FooterComp from './component/home/FooterComp';

import { BsFillImageFill } from "react-icons/bs";
import { Card, Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function App() {

  const [banners, setBanners] = useState([]);
  const [loadBanners, setLoadBanners] = useState(true);

  const [contentPromo, setContentPromo] = useState([]);
  const [loadContentPromo, setLoadContentPromo] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:1234/api/banner');
        setBanners(response.data.data);
        setLoadBanners(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchContenPromo = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/banner/content-promo');
        setContentPromo(response.data.data);
        console.log(response);
        setLoadContentPromo(false);
      }catch(error){
        console.log(error);
      }
    };

    fetchContenPromo();
  },[]);

  return (
    <div>

      <Navbar/>
      {loadBanners ? (
        <div className='banner d-flex justify-content-center align-items-center'>
          <BsFillImageFill className='banner-icon pulse' />  
        </div>
      ) : (
        <div className="swiper-banner bg-light">
          <Banner banners={banners} />
        </div>
      )}

      {loadContentPromo ? (
        <Container fluid className='mt-md-5 p-5'>
          <Row>
              <Col md={4} className='mb-3'>
                  <div className='content-promo'>
                      <Skeleton className='skeleton-content-promo'/>
                  </div>
              </Col>
              <Col md={4} className='mb-3'>
                  <div className='content-promo'>
                      <Skeleton className='skeleton-content-promo'/>
                  </div>
              </Col>
              <Col md={4} className='mb-3'>
                  <div className='content-promo'>
                      <Skeleton className='skeleton-content-promo'/>
                  </div>
              </Col>
          </Row>
      </Container>
      ) : (
        <ContentPromo contentPromo={contentPromo}/>
      )}

      <ProductComponent/>

      <BannerPromoComponent/>

      <BlogComponent/>

      <FooterComp/>
    </div>
  );
}

export default App;
