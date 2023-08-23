import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductDetailComponent from '../component/product/ProductDetailComponent';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {

  const {item_slug} = useParams();

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
  },[]);


  return (
    <Container fluid className='content-body'>
      {loadProductdetail ? (
        <div>load</div>
      ) : (
        <ProductDetailComponent  data={productDetail}/>
      )}
      
    </Container>
  );
}

export default ProductDetail;