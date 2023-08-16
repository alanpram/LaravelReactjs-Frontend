import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SkeletonCard from '../component/plugin/SkeletonCardComponent';
import SkeletonPageTitle from '../component/plugin/SkeletonPageTitleComponent';
import SkeletonPageDescComponent from '../component/plugin/SkeletonPageDescComponent';
import axios from 'axios';
import ProductListComponent from '../component/product/ProductListComponent';

function ProductList() {

  const { category } = useParams();

  const[productList,setProductList] = useState([]);
  const[loadProductList,setLoadProductList] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:1234/api/product/'+category);
        setProductList(response.data.data);
        setLoadProductList(false);
      }catch(error){
        console.log(error);
      }
    };
    
    fetchData();
  },[category]);
  

  return (
    <Container fluid className='content-body'>
      {loadProductList || productList.length === 0 ? (
        <div className='py-5'>
           <div className='text-center mb-5'>
              <SkeletonPageTitle/>
              <SkeletonPageDescComponent/>
            </div>

          <div className='product-list px-5 mb-5'>
              <Row>
                {[...Array(8)].map((_, index) => (
                    <Col key={index} className='mb-3' md={3} xs={6}>
                      <SkeletonCard />
                    </Col>
                  ))}
                
              </Row>
          </div>
        </div>
        
      ) : (
        <ProductListComponent data={productList} />
      )}
  </Container>
  );
}

export default ProductList;