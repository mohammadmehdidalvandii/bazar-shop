"use client"
import React, { useState } from 'react';
import style from './Gallery.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={style.gallery}>
        <div className={style.gallery_slider}>
        <Swiper
        style={{
          '--swiper-navigation-color': '#00C58D',
          '--swiper-pagination-color': '#00C58D',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
           <img src="/images/p2.jpg" className={style.gallery_img} />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/p2.jpg" className={style.gallery_img} />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/p2.jpg" className={style.gallery_img} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/p2.jpg" className={style.gallery_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/p2.jpg" className={style.gallery_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/p2.jpg" className={style.gallery_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/p2.jpg" className={style.gallery_image} />
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default Gallery