import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductDetailComponent from '../component/product/ProductDetailComponent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImageSlider from '../component/product/product-detail/productImageSlider';
import ProductLabel from '../component/product/product-detail/ProductLabel';
import ProductInfo from '../component/product/product-detail/ProductInfo';
import ProductSameCollection from '../component/product/product-detail/ProductSameCollection';

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


  return (
    <Container fluid className='content-body'>
      {loadProductdetail ? (
        <div>load</div>
      ) : (
        <>
          <div className="position-relative">
            <span>Home / Product / detail</span>
            <div className="alert alert-danger animate-from-right position-absolute" style={{ right: -10,top:-5 }}>
              Ini adalah pesan alert!sdfsdf
            </div>
          </div>

          <Container fluid>
            <Row className="mt-5 mb-5">
              <Col md={7}>
                <ProductImageSlider data={productDetail}/>
              </Col>
              <Col md={5}>
                <ProductLabel data={productDetail} descriptionRef={description}/>
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