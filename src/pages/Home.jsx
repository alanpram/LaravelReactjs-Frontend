import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from '../component/banner/BannerComponent';
import TopCategory from '../component/category/TopCategory';

import ArticleComponent from '../component/article/ArticleComponent';
import BannerPromoComponent from '../component/banner/BannerPromoComponent';
import FooterComp from '../layout/FooterComp';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../component/plugin/SkeletonCardComponent';

import { BsFillImageFill,BsFillRocketFill,BsGlobeAsiaAustralia,BsFillAwardFill,BsLayersHalf,BsFillBrushFill,BsGrid1X2 } from "react-icons/bs";
import ProductNewComponent from '../component/product/ProductNewComponent';
import ProductTopComponent from '../component/product/ProductTopComponent';

function Home() {

  const [banners, setBanners] = useState([]);
  const [loadBanners, setLoadBanners] = useState(true);

  const [topCategory,setTopCategory] = useState([]);
  const [loadTopCategory,setLoadTopCategory] = useState(true);

  const [newProduct,setNewProduct] = useState([]);
  const [loadNewProduct,setLoadNewProduct] = useState(true);

  const [topProduct,setTopProduct] = useState([]);
  const [loadTopProduct, setLoadTopProduct] = useState(true);

  const [bannerPromo,setBannerPromo] = useState([]);
  const [loadBannerPromo,setLoadBannerpromo] = useState(true);

  const [article,setArticle] = useState([]);
  const [loadArticle,setLoadArticle] = useState(true);

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
        const response = await axios.get('http://127.0.0.1:1234/api/article');
        setArticle(response.data.data)
        setLoadArticle(false);
      }catch(error){
        console.log(error);
      }
    };

    fetchData();
  },[]);
  
  return (
    <div>
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
          <div className='p-md-5 text-center'>
            <h4 className="mb-4 mt-5">BEST CATEGORY</h4>
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
                <h5 className="text-light mb-4">New In Store</h5>
                <p className='text-light'>We present our latest furniture collection that combines beauty and functionality. These products represent a new exploration in interior design that will bring a fresh ambiance to your home.</p>
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
        <h4 className="mb-5 mt-5 text-center">TOP PRODUCT</h4>
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
            <h4 className="text-light mb-4 mt-5">WHY CHOOSE US</h4>
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

      <div className="p-5 mb-5">
            <Container className=''>
                <h3 className=" text-center">Subscribe Our Newsletter</h3>
                <Row className="justify-content-center">
                    <Col md={6} xs={12}>
                        <Form>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <Form.Group controlId="exampleForm.ControlInput1" className="w-100">
                                    <Form.Control className="form-subscribe" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Button className="btn btn-danger btn-form-subscribe">Subscribe</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                {loadArticle ? (
                  <Row className="mt-5">
                    {[...Array(4)].map((_, index) => (
                      <Col key={index} xs={6} md={3} className='mb-3'>
                        <SkeletonCard />
                      </Col>
                    ))}
                </Row>
                ):(
                  <ArticleComponent data={article}/>
                )}
            </Container>
        </div>
    </div>
  );
}

export default Home;
