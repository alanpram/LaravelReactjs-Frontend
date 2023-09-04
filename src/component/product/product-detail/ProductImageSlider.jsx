// ImageSlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import styles from "../../../assets/custom-swiper.module.css";
import { Container } from "react-bootstrap";

function ProductImageSlider({ data }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let image = '';

    if (data.data.alternative_image === 'null') {
        image = data.data.data;
    } else {
        image = data.data.alternative_image;
    }

  return (
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
  );
}

export default ProductImageSlider;