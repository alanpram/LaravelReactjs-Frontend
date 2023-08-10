import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Navbar from './component/home/NavbarComponent';
import Banner from './component/home/BannerComponent';
import TopCategory from './component/home/TopCategory';
import ContentPromo from './component/home/ContentPromoComponent';

import BlogComponent from './component/home/BlogComponent';
import BannerPromoComponent from './component/home/BannerPromoComponent';
import FooterComp from './component/home/FooterComp';

import { Card, Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from './component/plugin/SkeletonCardComponent';

import { BsFillImageFill,BsFillRocketFill,BsGlobeAsiaAustralia,BsFillAwardFill,BsLayersHalf,BsFillBrushFill,BsGrid1X2 } from "react-icons/bs";
import ProductNewComponent from './component/home/ProductNewComponent';
import ProductTopComponent from './component/home/ProductTopComponent';

function App() {

  const [banners, setBanners] = useState([]);
  const [loadBanners, setLoadBanners] = useState(true);

  const [topCategory,setTopCategory] = useState([]);
  const [loadTopCategory,setLoadTopCategory] = useState(true);

  const [newProduct,setNewProduct] = useState([]);
  const [loadNewProduct,setLoadNewProduct] = useState(true);

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
    const fetchData = async() => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/product/best-category');
        setTopCategory(response.data.data);
        setLoadTopCategory(false);
      }catch(error){
        console.log(error);
      }
    }

    fetchData();
  },[])

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/product/new');
        setNewProduct(response.data.data);
        setLoadNewProduct(false);
      }catch(error){
        console.log(error);
      }
    }

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
            {loadTopCategory ? (
                <Row>
                  {[...Array(4)].map((_, index) => (
                    <Col key={index} className='mb-3' md={3} xs={6}>
                      <SkeletonCard />
                    </Col>
                  ))}
                </Row>
                ) : (
              <TopCategory data={topCategory}/>
            )}
          </div>
      </Container>
     
        <div className='bg-dark p-5'>
          <Container fluid>
            
            <Row>
              <Col md={3}>
                <h5 className="text-light mb-4 mt-5">New In Store</h5>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim harum nam vero cupiditate recusandae amet ex tenetur, maxime repellat ad, velit expedita! Reprehenderit, ratione eius ex voluptatem doloremque consectetur?</p>
              </Col>
              <Col md={9}>
                {loadNewProduct ? (
                  <Row>
                      {[...Array(4)].map((_, index) => (
                        <Col key={index} xs={6} md={3} className='mb-3'>
                          <SkeletonCard />
                        </Col>
                      ))}
                  </Row>
                ) : (
                  <ProductNewComponent data={newProduct} />
                )}
                
              </Col>
          </Row>
          </Container>
        </div>

      
      <Container>
        <h5 className="mb-4 mt-5">Top Product</h5>
        {loadTopProduct ? (
          <Row>
            {[...Array(8)].map((_, index) => (
              <Col key={index} md={3} className='mb-3'>
                <SkeletonCard />
              </Col>
            ))}
          </Row>
        ):(
          <ProductTopComponent data={topProduct}/>
        )}
      </Container>
      

      <div className='bg-dark p-5 text-center'>
          <Container>
            <h5 className="text-light mb-4 mt-5">Why Choose Use</h5>
            <Row className='text-light justify-content-center'>
              
              <Col className='mb-5 mt-5' md={3}>
                  <BsLayersHalf style={{ fontSize: '60px',color:'c9a735' }} />
                  <h5 className='mt-4'>NATURAL MATERIALS</h5>
                  <p className='mt-4'>From certified wood to traceable leather and certified upholstery fabrics, we use a wide variety to make the best for your comfort and to reduce the burden on our environment.</p>
              </Col>

              <Col className='mb-5 mt-5' md={3}>
                  <BsFillAwardFill style={{ fontSize: '60px',color:'c9a735' }} />
                  <h5 className='mt-4'>2 YEARS WARRANTY</h5>
                  <p className='mt-4'>Our finest task is to create something that lasts. That's why we always give you a 2-years guarantee on everything in our collection. Even though it will of course last longer</p>
              </Col>

              <Col className='mb-5 mt-5' md={3}>
                  <BsFillBrushFill style={{ fontSize: '60px',color:'c9a735' }} />
                  <h5 className='mt-4'>CUSTOM PRODUCT</h5>
                  <p className='mt-4'>You can customize the product of your choice in terms of material size or fabric with what you want.</p>
              </Col>

              <Col className='mb-5 mt-5' md={3}>
                  <BsGlobeAsiaAustralia style={{ fontSize: '60px',color:'c9a735' }} />
                  <h5 className='mt-4'>GLOBAL DELIVERY</h5>
                  <p className='mt-4'>Experience hassle-free shipping and seamless global connectivity wit our trustworthy and effecient delivery service</p>
              </Col>
            
            </Row>
          </Container>
      </div>
      
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
