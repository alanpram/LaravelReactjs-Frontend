import React, { useEffect, useRef, useState } from "react";

import BaseImage from "../../assets/img/base_image2.jpg";

import { BsHeart } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "../../assets/custom-swiper.module.css";
import { Button, Card, Col, Container, Modal, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { array } from "prop-types";

export default function ProductDetailComponent({data}) {
  
  const [showOffcanvasEnd, setShowOffcanvasEnd] = useState(false);
  //set sidebar to open and close
  const toggleOffcanvasEnd = () => {
      setShowOffcanvasEnd(!showOffcanvasEnd);
  }

  // State for Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Ref for scrolling
  const description = useRef(null);

  // Function to scroll to description
  const toggleShowMore = () => {
    description.current.scrollIntoView({ behavior: 'smooth' });
  };

  // State for variant
  const [variant, setVariant] = useState(data.data.data.link_fabric);

  // Extract item data
  const item = data.data.data;

  const option = data.data.variant;

  const collection = data.data.collection;

  // Determine the image to use
  let image = '';
  if (data.data.alternative_image === 'null') {
    image = item;
  } else {
    image = data.data.alternative_image;
  }

  // Split frame spec into an array
  const spec = item.link_frame.frame_spec.split('|');

  //value and dimension
  const dimensions = item.link_frame.link_dimension.dimension_name;
  const values = item.link_frame.frame_dimension_value;

  // Split dimensions and values into arrays
  const dimensionArray = dimensions.split("/");
  const valueArray = values.split("/");

  // Create an array of dimension-value pairs
  let dimensionValue = '';

  for(let i = 0; i < dimensionArray.length; i++){
    dimensionValue += `${dimensionArray[i]}:${valueArray[i]}`;
    
    if(i == dimensionArray.length - 1){
      dimensionValue += ' cm'
    }else{
      dimensionValue += ' cm, '
    }

  }

  // split finishing
  const finishing = item.link_frame.frame_finishing.split('/');

  const [variantData, setVariantData] = useState([]);
  const [loadVariantData, LoadSetVariantData] = useState(false);
  const [effectExecuted, setEffectExecuted] = useState(false);

  useEffect(() => {
    if (showOffcanvasEnd && !effectExecuted) {
      const fetchData = async () => {
        try {
          // Gantilah URL API dengan URL yang sesuai
          const response = await axios.get(`http://127.0.0.1:1234/api/product-detail/${item.item_slug}/variant`);
          setVariantData(response.data);
          setEffectExecuted(true);
          LoadSetVariantData(true);
        } catch (error) {
          console.log(variantData);
          console.error('Error fetching variant data:', error);
        }
      };

      fetchData();
    }
  }, [showOffcanvasEnd, effectExecuted]);

  const [cartItem, setCartItem] = useState([]);

const addToCart = (item) => {
  const cart = {
    item_uuid: item.item_uuid,
    image: image.link_image[0].media_path + '/' + image.link_image[0].media_file,
    item_name: item.item_name,
    size: dimensionValue,
    variant: item.link_fabric.item_name,
    qty: '1',
    price: item.link_price.product_price
  };

  const existingItemIndex = cartItem.findIndex((cartItem) => cartItem.item_uuid === item.item_uuid);

  if (existingItemIndex !== -1) {

    cartItem[existingItemIndex].qty = cartItem[existingItemIndex].qty + 1;

    setCartItem([...cartItem]); 
    
  } else {

    setCartItem([...cartItem, cart]);
  }

  localStorage.setItem('cart', JSON.stringify([...cartItem]));
};

  return (
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
          <Container>
              <Swiper
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                loop={true}
                spaceBetween={10}
                centeredSlides={true}
                freeMode={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                className={styles.mySwiper}
              >
                {image.link_image.map((image) => (
                  <SwiperSlide key={image.media_uuid}>
                    <img src={'http://localhost:1234' + image.media_path +'/'+ image.media_file} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff"
                }}
                onSwiper={setThumbsSwiper}
                slidesPerView={10}
                spaceBetween={10}
                className={styles.mySwiper2}
              >
                {image.link_image.map((image) => (
                  <SwiperSlide key={image.media_uuid}>
                      <img src={'http://localhost:1234' + image.media_path +'/thumb/thumb_'+ image.media_file} />
                    </SwiperSlide>
                ))}
              </Swiper>
          </Container>
        </Col>
        <Col md={5}>
            <div className="product-label">
                <div className="d-flex">
                  <div className="mt-3 pb-2">
                    <p className="fst-italic product-label-item">{item.item_name.replace(data.data.category,'')}</p>
                    <h1 className="">{data.data.category}</h1>
                  </div>
                    <div className="ms-auto">
                      <BsHeart className="wishlist-icon"/>
                    </div>
                </div>
                <p>{item.link_frame.frame_detail.slice(0,200)} ... <span className="see-more" onClick={toggleShowMore}>See more</span></p>
                <hr></hr>
                <div className="mt-3 pb-2">
                  <h5>Price</h5>
                  <h3 className="product-label-price">Rp.{parseInt(item.link_price.product_price).toLocaleString().replace(/,/g, '.')}</h3>
                </div>
                <hr></hr>
                {variant && (
                  <>
                    <div className="d-flex mt-4 pb-2">
                      <div className="selected-fabric">
                        <h5>Selected Fabric</h5>
                        <div className="image-container mt-4 d-flex align-items-center justify-content-center">
                          <img src={'http://localhost:1234' + item.link_fabric.link_image.media_path+'/thumb/'+item.link_fabric.link_image.media_file} alt="Selected Fabric Image" className="rounded-circle"/>
                        </div>
                        <p className="text-center mt-3">{item.link_fabric.item_name}</p>
                      </div>
                      <div className="option-fabric">
                        <h5>Fabric Option</h5>
                        <div className="image-container mt-4 d-flex align-items-center justify-content-center gap-3">
                          {Object.keys(option).map((opt) => (
                            <Link to={'/product-detail/' + option[opt].item_slug}>
                              <img key={option[opt].item_uuid} src={'http://localhost:1234' + option[opt].link_fabric.link_image.media_path + '/thumb/' + option[opt].link_fabric.link_image.media_file} alt="Selected Fabric Image" className="rounded-circle"/>
                            </Link>
                          ))}
                        </div>
                        <button onClick={toggleOffcanvasEnd} className="btn btn-sm btn-dark mt-3">See More Fabric</button>
                      </div>
                  </div>
                  <hr></hr>
                  </>
                )}
                
                <h5>Get it on 17 October 2023</h5>
                <Button className="bg-dark w-100 mt-3 mb-3" onClick={() => addToCart(item)}>Add To Cart</Button>
            </div>
        </Col>
     </Row>
     </Container>
     <div ref={description} className="bg-light py-5">
          <Container>
            <Row>
              <Col md={12}>
                  <h1>{item.item_name}</h1>
              </Col>
              <Col md={6}>
                 {data.data.frame_image && (
                    <img className="w-100 mt-3" src={'http://localhost:1234' + data.data.frame_image} alt="Frame Image" />
                  )}
                <p className="mt-3">{item.link_frame.frame_spec}</p>
                <h5 className="mt-5">Specification</h5>
                <ul>
                   {spec.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                </ul>
              </Col>

              <Col md={6}>
               {variant && (
                  <div className="mt-3">
                    <h5>Fabric</h5>
                    <p>{item.link_fabric.item_compose}</p>
                  </div>
                )}

                <h5 className="mt-3">Dimension</h5>
                <p>{dimensionValue}</p>

                <h5>Finishing</h5>
                {finishing.map((finishing, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: `<span className="bold-500">${finishing.split(':')[0]}</span> :<br />${finishing.split(':')[1]}` }}></p>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
        
        <Offcanvas show={showOffcanvasEnd} onHide={toggleOffcanvasEnd} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Variant Product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {loadVariantData ? (
              <>
                {Object.keys(variantData.data).map((category) => {
                  const categoryData = variantData.data[category]; 
                  return (
                    <div key={category}>
                      <h5>{category}</h5>
                      <p className="mb-5" style={{fontSize:"14px"}}>Rp.{parseInt(categoryData[0].link_price.product_price).toLocaleString().replace(/,/g,'.')} for all item with <span className="text-lowercase">{category}</span> collection</p>
                      <Row>
                        {Object.keys(categoryData).map((item) => {
                          const itemData = categoryData[item];
                          return (
                            <Col md={4} xs={6} className="mb-5" key={itemData.item_uuid}>
                               <Link to={'/product-detail/' + itemData.item_slug} className="product-title" onClick={toggleOffcanvasEnd}>
                                <img className="w-100 mb-1" src={'http://localhost:1234' + itemData.link_fabric.link_image.media_path + '/thumb/' + itemData.link_fabric.link_image.media_file} alt="Product Image" />
                                <p>{itemData.link_fabric.item_name}
                                <br/>
                                <span style={{ fontSize: "11px",marginTop:"-20px" }}>{itemData.link_fabric.item_compose}</span>
                                </p>
                              </Link>
                            </Col>
                          );
                        })}
                      </Row>
                      <hr className="mb-5"/>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>No variants available</p>
            )}
          </Offcanvas.Body>
        </Offcanvas>

      
      {collection != 0 && (
        <Container className="text-center mt-5 mb-3">
        <h3 className="mb-5">Product Recomended</h3>
        <Row className="mb-5 align-item-center justify-content-center">
           {Object.keys(collection).map((item) => (
              <Col xs={6} md={3} className='mb-3 text-center' key={collection[item].flagship.item_uuid}>
                <Link key={collection[item].flagship.item_uuid} to={'/product-detail/' + collection[item].flagship.item_slug} className="product-title">
                  <div className="top-product p-3">
                      <img className='w-100 image-load bg-light' src={'http://localhost:1234' + collection[item].flagship.link_image[0].media_path + '/' + collection[item].flagship.link_image[0].media_file}/>
                      {collection[item].flagship.item_name}
                      <br></br>
                      <div className="price-container mt-1">
                          <span><sup className="from">From </sup>Rp.{parseInt(collection[item].price.link_price.product_price).toLocaleString().replace(/,/g,'.')}</span>
                      </div>
                      <p className="mt-1"></p>
                  </div>
                   </Link>
              </Col>
          ))}
        </Row>
      </Container>
      )}
    </>
  );
}