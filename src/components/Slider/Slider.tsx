'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from './types';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './styles.css';
import useWindowSize from '@/utils/useWindowSize';
import { getSliderBreakpointsOptions } from '@/utils/getSliderBreakpointsOptions';
import { getSwiperModules } from '@/utils/getSwiperModules';

export const Slider: React.FC<SliderProps> = ({
  section,
  data,
  element: Element,
  navigation,
  className = '',
  slideClassName = '',
}) => {
  const swiperRef: any = useRef<typeof Swiper | null>(null);

  console.log(data)

  const { width } = useWindowSize();

  useEffect(() => {
    if (
      width !== null &&
      width >= 1440 &&
      swiperRef.current &&
      section != 'cases'
    ) {
      swiperRef.current.swiper.destroy(true, true);
    }
  }, [width, section]);

  return (
    <Swiper
      ref={swiperRef}
      updateOnWindowResize={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={getSliderBreakpointsOptions()}
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
        navigation
          ? {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          : false
      }
      modules={getSwiperModules(section, width)}
      className={`${className}`}
    >
      <div className="wrapper bg-slate-400">
        {data?.map((item: any, idx: number) => {
          console.log(item)
          return (
            <SwiperSlide
              key={idx}
              className={`flex justify-center ${slideClassName}`}
            >
              <Element {...item} className="elementSlider" />
            </SwiperSlide>
          );
        })}
      </div>
      <div className="slider-controller">
        {navigation && (
          <div className="hidden xl:block">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        )}

        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};
