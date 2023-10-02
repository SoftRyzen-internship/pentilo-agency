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
import { useEffect, useRef, useState } from 'react';
import { SwiperNavButtons } from './SwiperNavButton';


export const Slider: React.FC<SliderProps> = ({ section, data, element: Element, navigation}) => {


  const swiperRef: any = useRef<typeof Swiper | null>(null);

// //   const [shouldShowNavigation, setShouldShowNavigation] = useState(false);
//   const breakpoint = window.matchMedia( '(min-width:798px)' );
//   useEffect(() => {
// if ( breakpoint.matches === true ) {
//       if ( swiperRef !== undefined || null ) swiperRef.destroy( true, true );
//       // or/and do nothing
//       return;
//    // else if a small viewport and single column layout needed
//    } else if ( breakpoint.matches === false ) {
//         console.log("small screen")
//    }
//   }, []);

function getModules(section) {
    let modules = [Pagination];
    if (section === "cases"){
        modules.push(EffectCoverflow, Navigation);
    }
    console.log(modules)
    // return [EffectCoverflow, Navigation, Pagination, Autoplay]
    return modules;
}


  return (
    // <div className="w-[1000px]">
    <Swiper
    ref={swiperRef}
    updateOnWindowResize={true}


    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slideToClickedSlide={true}
    // spaceBetween={20}
    // speed={500}

    // autoplay={true}
    // loop={true}
    // initialSlide={1}
    // slidesPerView={3}
    // centeredSlidesBounds={true}

    breakpoints={{
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            // slideToClickedSlide: true,
            // effect: 'slide',
            initialSlide: 0,
            // autoplay: true,
            // loop: true,
            // navigation: false
        },
        1440: {
            slidesPerView: 3,
            // effect: 'coverflow',
            spaceBetween: 20,
            initialSlide: 1,
            // autoplay: false,
            // loop: false,
            
        }
    }}
  
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      scale: 0.9,
      modifier: 1.6,
      slideShadows: false,
    }}
    pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      


      navigation={
        section === "cases" ? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }: false}

    //   autoplay={
    //     autoplay
    //       ? {
    //           delay: 2000,
    //           disableOnInteraction: false,
    //         }
    //       : false
    //   }


    modules={getModules(section)}
    className="swiperStyles"
  >

    <div className="wrapper bg-slate-400">
{data?.map((item: any, idx: number) => { 
    return (
      <SwiperSlide key={idx} className=" z-10">
          {/* <div className=" slideWrapper"> */}
          <Element {...item} className="elementSlider"/>

            {/* </div> */}
      </SwiperSlide>
    );
})}
</div>
      <div className="slider-controller">
        <div className="wrap">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
        </div>
        <div className="swiper-pagination"></div>
       </div>
  </Swiper>
  );
};

