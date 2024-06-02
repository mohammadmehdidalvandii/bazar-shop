"use client"
import React from "react";
import style from "./Latest.module.css";
import Link from "next/link";
import ProductCard from "@/components/modules/ProductCard/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

function Latest() {
  return (
    <section className={style.latest}>
      <div className="containers">
        <div className={style.latest_wrapper}>
          <div className={`${style.latest_right} ${'d-none d-md-block'}`}>
            <div className={style.latest_right_wrapper}>
              <img
                src="/images/box.png"
                alt="image box latest"
                className={style.latest_right_img}
              />
              <Link href="/" className={style.latest_showMore}>
                مشاهده بیشتر
              </Link>
            </div>
          </div>
          <div className={style.latest_left}>
            <div className={style.latest_left_wrapper}>
              <Swiper
              slidesPerView={4}
              spaceBetween={10}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                <div className={style.latest_right_wrapper}>
              <img
                src="/images/box.png"
                alt="image box latest"
                className={style.latest_right_img}
              />
              <Link href="/" className={style.latest_showMore}>
                مشاهده بیشتر
              </Link>
            </div>
                </SwiperSlide>
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
