import React, { useState } from "react";

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
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const item = data.data.data;

  let image = '';

  if(data.alternative_image == 'null'){
    image = item;
  }else{
    image = data.data.alternative_image;
  }

  console.log(image);

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
                  <SwiperSlide>
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
                  <SwiperSlide>
                      <img src={'http://localhost:1234' + image.media_path +'/thumb/thumb_'+ image.media_file} />
                    </SwiperSlide>
                ))}
              </Swiper>
          </Container>
        </Col>
        <Col md={5}>
              <Card className="bg-transparent shadow h-auto product-label">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-3 pb-2">
                      <h5 className="fst-italic product-label-item">{item.item_name.replace(data.data.category,'')}</h5>
                      <h1 className="">{data.data.category}</h1>
                    </div>
                     <div className="ms-auto">
                        <BsHeart className="wishlist-icon"/>
                     </div>
                  </div>
                  <hr></hr>
                  <div className="mt-3 pb-2">
                    <h5>Price</h5>
                    <h3 className="product-label-price">Rp.{parseInt(item.link_price.product_price).toLocaleString().replace(/,/g, '.')}</h3>
                  </div>
                  <hr></hr>
                  <div class="d-flex mt-4 pb-2">
                    <div class="selected-fabric">
                      <h5>Selected Fabric</h5>
                      <div class="image-container mt-4 d-flex align-items-center justify-content-center">
                        <img src={BaseImage} alt="Selected Fabric Image" class="rounded-circle"/>
                      </div>
                      <p className="text-center mt-3">Sapin</p>
                    </div>
                    <div class="option-fabric">
                      <h5>Fabric Option</h5>
                      <div class="image-container mt-4 d-flex align-items-center justify-content-center gap-3">
                        <img src={BaseImage} alt="Selected Fabric Image" class="rounded-circle"/>
                        <img src={BaseImage} alt="Selected Fabric Image" class="rounded-circle"/>
                        <img src={BaseImage} alt="Selected Fabric Image" class="rounded-circle"/>
                        <img src={BaseImage} alt="Selected Fabric Image" class="rounded-circle"/>
                      </div>
                      <button className="btn btn-sm btn-dark mt-3">See More Fabric</button>
                    </div>
                  </div>
                  <hr></hr>
                  <h5>Get it on 17 October 2023</h5>
                  <Button className="bg-dark w-100 mt-3 mb-3">Add To Cart</Button>
                </Card.Body>
              </Card>
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
              
        </Col>
     </Row>
     </Container>
     <div className="bg-light py-5">
          <Container>
            <Row>
              <Col md={6}>
                <h1>Sofa 3 Seater Sapin Ailes</h1>
                <p>AILES represents the perfection of the mid-century design. Our sofa evokes with his curves lines and upholstery tufting the luxurious and the refinement. We invite you on a real journey through time.</p>
                <h5>Specification</h5>
                <p>Made in Indonesia
                  Frame handcrafted of engineered wood with interlocking joinery
                  Tight seat cushion crafted of variable-density polyurethane foam topped with polyfiber
                  back cushions polyfiber fill
                  Feet in mahogany wood with gold metal
                </p>
              </Col>

              <Col md={6}>
                <h5>Fabric</h5>
                <p>Sapin (Compsiton : 100% Polyester)</p>

                <h5>Dimension</h5>
                <p>Length: 230cm</p>
                <p>Depth: 102cm</p>
                <p>Height: 85cm</p>
                <p>Seat Height: 44cm</p>

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