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
// import { register } from 'swiper/element/bundle';
// import { useRef } from 'react';

export const Slider: React.FC<SliderProps> = ({ section, autoplay }) => {
  // const swiperElRef = useRef(null);


//   const { width } = useWindowSize();
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
    // <Swiper
    //   //   ref={swiperElRef}
    //   effect={'coverflow'}
    //   coverflowEffect={{
     
    //       rotate: 0,
    //       stretch: 0,
    //       depth: 350,
    //     //   scale: 0.55,
    //       modifier: 1.32,
  
    //   }}
    //   updateOnWindowResize={true}
    // //   slidesPerView={'auto'}
    //   // grabCursor={true}
    //   centeredSlides={true}
    // //   initialSlide={3}
    //   spaceBetween={20}
    //   slidesPerView={3}
    //   modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
    //   pagination={{
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   }}
    //   navigation={{
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //     clickable: true,
    //   }}
    //   loop={true}
    //   speed={500}
    //   autoplay={
    //     autoplay
    //       ? {
    //           delay: 2000,
    //           pauseOnMouseEnter: true,
    //           disableOnInteraction: false,
    //         }
    //       : false
    //   }
    //   className="swiper-container"
    // >
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 1</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 2</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 3</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 4</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 1</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 2</div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="h-[384px] w-[380px] bg-slate-300">Slide 3</div>
    //   </SwiperSlide>
    //   <div className="slider-controller">
    //     <div className="swiper-button-prev slider-arrow"></div>
    //     <div className="swiper-button-next slider-arrow">→</div>
    //     <div className="swiper-pagination"></div>
    //   </div>
    // </Swiper>

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
    navigation={{
      nextEl: '.nextSlide',
      prevEl: '.prevSlide',
    }}
    modules={[EffectCoverflow, Navigation]}
    className=" swiperStyles"
  >

    <div className="wrap bg-gray-500">

      <SwiperSlide className=" gallerySlide z-10">
        <div className=" relative ">
        <div className="w-[380px] h-[400px] bg-slate-300">Slide 1</div>
          {/* <Image
            src={src}
            alt={`gallery image with nature number ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, (min-width: 1440px) 70vw, 100vw"
            priority={idx <= 2 ? true : false}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9j5yBAADowHw7R0T9QAAAABJRU5ErkJggg=="
          /> */}
        </div>
      </SwiperSlide>
      <SwiperSlide className=" gallerySlide z-10">
        <div className=" relative ">
        <div className="w-[380px] h-[400px] bg-slate-300">Slide 2</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" gallerySlide z-10">
        <div className=" relative ">
        <div className="w-[380px] h-[400px] bg-slate-300">Slide 3</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" gallerySlide z-10">
        <div className=" relative ">
        <div className="w-[380px] h-[400px] bg-slate-300">Slide 4</div>
        </div>
      </SwiperSlide>
      
      </div>
    {/* <GallerySliderButtons /> */}
  </Swiper>
  );
};
