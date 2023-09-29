'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { SliderProps } from './types';
// import { register } from 'swiper/element/bundle';
// import { useRef } from 'react';

export const Slider: React.FC<SliderProps> = ({ section, autoplay }) => {
  // const swiperElRef = useRef(null);

  return (
    <Swiper
      //   ref={swiperElRef}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        // scale: 2
        // modifier: 2,
      }}
      // grabCursor={true}
      centeredSlides={true}
      initialSlide={1}
      // spaceBetween={20}
      slidesPerView={3}
      modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      loop={true}
      speed={500}
      autoplay={
        autoplay
          ? {
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }
          : false
      }
      className="swiper-container"
    >
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[384px] bg-slate-300">Slide 4</div>
      </SwiperSlide>
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow">→</div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};
