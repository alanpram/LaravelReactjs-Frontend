import React, { useRef, useState } from "react";

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
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function ProductDetailComponent({data}) {
  
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
  

  return (
    <>
      <span>Home / Product / detail</span>
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
                          <img src={BaseImage} alt="Selected Fabric Image" className="rounded-circle"/>
                          <img src={BaseImage} alt="Selected Fabric Image" className="rounded-circle"/>
                          <img src={BaseImage} alt="Selected Fabric Image" className="rounded-circle"/>
                          <img src={BaseImage} alt="Selected Fabric Image" className="rounded-circle"/>
                        </div>
                        <button className="btn btn-sm btn-dark mt-3">See More Fabric</button>
                      </div>
                  </div>
                  <hr></hr>
                  </>
                )}
                
                <h5>Get it on 17 October 2023</h5>
                <Button className="bg-dark w-100 mt-3 mb-3">Add To Cart</Button>
              <h5 className="mt-5">Same Collection</h5>
              <div className="product-same-collection mt-5">
                <div className="d-flex mt-3">
                  <img src={BaseImage}/>
                  <div className="">
                    <span>sdfdsfdsfdsf</span>
                    <h5>Rp.24.000.000</h5>
                  </div>
                </div>
                  
                <div className="d-flex mt-3">
                  <img src={BaseImage}/>
                  <div className="">
                    <span>sdfdsfdsfdsf</span>
                    <h5>Rp.24.000.000</h5>
                  </div>
                </div>

                <div className="d-flex mt-3">
                  <img src={BaseImage}/>
                  <div className="">
                    <span>sdfdsfdsfdsf</span>
                    <h5>Rp.24.000.000</h5>
                  </div>
                </div>
              </div>
            </div>
        </Col>
     </Row>
     </Container>
     <div ref={description} className="bg-light py-5">
          <Container>
            <Row>
              <Col md={6}>
                <h1>{item.item_name}</h1>
                <p className="mt-5">{item.link_frame.frame_spec}</p>
                <h5 className="mt-5">Specification</h5>
                <ul>
                   {spec.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                </ul>
              </Col>

              <Col md={6}>
               {variant && (
                  <div>
                    <h5>Fabric</h5>
                    <p>{item.link_fabric.item_compose}</p>
                  </div>
                )}

                <h5>Dimension</h5>
                <p>{dimensionValue}</p>

                <h5>Finishing</h5>
                <p>cushion:</p>
                <p>1 seat cushion</p>
                <p>2 cushion 40cm x 40cm</p>
                <p>feet:</p>
                <p>painting black and brass caps</p>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}