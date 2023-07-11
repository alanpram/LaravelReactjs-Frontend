import React from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

function SwiperComponent({ banners }) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper"
      speed={1500}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.banner_uuid}>
          <img
            className="swiper-image"
            src={banner.link_image.media_path + banner.link_image.media_file}
            alt={banner.link_image.media_alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
