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
import { useEffect, useRef } from 'react';


export const Slider: React.FC<SliderProps> = ({ section, data, element: Element, navigation}) => {


  const swiperRef: any = useRef<typeof Swiper | null>(null);

//   useEffect(() => {
//     if (width !== null && width >= 1440 && swiperRef.current) {
//       swiperRef.current.swiper.params.coverflowEffect.modifier = 0.8;
//       swiperRef.current.swiper.update();
//     }
//     if (width !== null && width < 1440 && swiperRef.current) {
//       swiperRef.current.swiper.params.coverflowEffect.modifier = 1.32;
//       swiperRef.current.swiper.update();
//     }
//   }, [width]);
  return (
    // <div className="w-[1000px]">
    <Swiper
    ref={swiperRef}
    // updateOnWindowResize={true}
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={20}
    // loop={true}
    initialSlide={1}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      scale: 0.9,
      modifier: 1.6,
    }}
    pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      


      navigation={
        navigation ? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }: false}

    //   autoplay={
    //     autoplay
    //       ? {
    //           delay: 2000,
    //           disableOnInteraction: false,
    //         }
    //       : false
    //   }


    modules={[EffectCoverflow, Navigation]}
    className=" swiperStyles"
  >
{data?.map((item: any, idx: number) => { 
    return (
      <SwiperSlide key={idx} className="gallerySlide z-10">
          <div className="w-[380px]">

          <Element {...item} />

            </div>
      </SwiperSlide>
    );
})}
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
        <div className="swiper-pagination"></div>
       </div>
  </Swiper>
//   </div>
  );
};
