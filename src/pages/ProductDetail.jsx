import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ProductDetailComponent from '../component/product/ProductDetailComponent';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImageSlider from '../component/product/product-detail/productImageSlider';
import ProductLabel from '../component/product/product-detail/ProductLabel';
import ProductInfo from '../component/product/product-detail/ProductInfo';
import ProductSameCollection from '../component/product/product-detail/ProductSameCollection';
import { BsXLg, BsExclamationCircle, BsCheck2All } from "react-icons/bs";

function ProductDetail() {

  const {item_slug} = useParams();

  const description = useRef(null);

  const [productDetail,setProductDetail] = useState([]);
  const [loadProductdetail,setLoadProductDetail] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/product-detail/'+item_slug);
        setProductDetail(response.data);
        setLoadProductDetail(false);
      }catch(error){
        console.log(error)
      }
    }

    fetchData();
  },[item_slug]);

  const [showAlert, setShowAlert] = useState(false);


  return (
    <Container fluid className='content-body'>
      {loadProductdetail ? (
        <div>load</div>
      ) : (
        <>
          <div className="position-relative">
            <span>Home / Product / detail</span>
            {showAlert && (
            <div className="alert alert-notif animate-from-right fixed-top ms-auto">
              <div className='d-flex'>
                <p>
                  <span className='fw-bold'>Success <BsCheck2All /></span>
                  <br></br>
                  Product has been added to the cart
                </p>
                <BsXLg className='ms-auto' onClick={() => setShowAlert(false)} />
              </div>
              <div className='mt-3'>
                <Link to={'/cart'} className='btn btn-sm btn-dark'>Checkout Now</Link>
              </div>
            </div>
            )}
          </div>

          <Container fluid>
            <Row className="mt-5 mb-5">
              <Col md={7}>
                <ProductImageSlider data={productDetail}/>
              </Col>
              <Col md={5}>
                <ProductLabel data={productDetail} descriptionRef={description} setShowAlert={setShowAlert}/>
              </Col>
            </Row>
          </Container>

          <div ref={description} className="bg-light py-5">
            <ProductInfo data={productDetail}/>
          </div>

          <ProductSameCollection data={productDetail}/>
        </>
      )}
      
    </Container>
  );
}

export default ProductDetail;