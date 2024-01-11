import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles




// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import { HeroSlide1, HeroSlide2, HeroSlide3, HeroSlide4 } from '../../assets/images/Index';

export default function HeroCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={HeroSlide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide4} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
