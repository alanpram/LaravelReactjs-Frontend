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
import SkeletonCard from './component/plugin/SkeletonCardComponent';

function App() {

  const [banners, setBanners] = useState([]);
  const [loadBanners, setLoadBanners] = useState(true);

  const [contentPromo, setContentPromo] = useState([]);
  const [loadContentPromo, setLoadContentPromo] = useState(true);

  const [topProduct,setTopProduct] = useState([]);
  const [loadTopProduct, setLoadTopProduct] = useState(true);

  const [bannerPromo,setBannerPromo] = useState([]);
  const [loadBannerPromo,setLoadBannerpromo] = useState(true);

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
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/banner/content-promo');
        setContentPromo(response.data.data);
        setLoadContentPromo(false);
      }catch(error){
        console.log(error);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/banner/special-offer')
        setBannerPromo(response.data.data)
        setLoadBannerpromo(false);
      }catch(error){
        console.log(error);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/product/top');
        setTopProduct(response.data.data);
        setLoadTopProduct(false);
      }catch(error){
        console.log("error");
      }
    };

    fetchData();
  },[])


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

      <Container>
          <div className='p-md-5'>
            <h5 className="mb-4 mt-5">Best Category</h5>
          <Row>
            {[...Array(4)].map((_, index) => (
              <Col key={index} className='mb-3' md={3} xs={6}>
                <SkeletonCard />
              </Col>
            ))}
          </Row>
          </div>
        </Container>

        <Container>
          <h5 className="text-light mb-4 mt-5">New In Store</h5>
          <Row>
            {[...Array(4)].map((_, index) => (
              <Col key={index} xs={6} md={3} className='mb-3'>
                <SkeletonCard />
              </Col>
            ))}
          </Row>
        </Container>

      {loadContentPromo ? (
        <Container fluid className='mt-md-5 p-5'>
          <Row>
            {[...Array(3)].map((_,index) => (
              <Col key={index} className='mb-3'>
                    <div className='skeleton-card'>
                        <Skeleton className='skeleton-content'/>
                    </div>
                </Col>
            ))}
          </Row>
      </Container>
      ) : (
        <ContentPromo contentPromo={contentPromo}/>
      )}

      {loadTopProduct ? (
        <Container>
          <h5 className="text-light mb-4">Top Product</h5>
          <Row>
            {[...Array(8)].map((_, index) => (
              <Col key={index} md={3} className='mb-3'>
                <SkeletonCard />
              </Col>
            ))}
          </Row>
        </Container>
      ):(
        <ProductComponent data={topProduct}/>
      )}
      
      {loadBannerPromo ? (
        <Container>
          <Row className='mb-5 mt-5'>
            <Col>
              <SkeletonCard />
            </Col>
          </Row>
        </Container>
      ) : (
        <BannerPromoComponent data={bannerPromo}/>
      )}
      

      <BlogComponent/>

      <FooterComp/>
    </div>
  );
}

export default App;
