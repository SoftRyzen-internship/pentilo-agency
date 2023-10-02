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

export const Slider: React.FC<SliderProps> = ({
  section,
  data,
  element: Element,
  navigation,
  className = '',
}) => {
  const swiperRef: any = useRef<typeof Swiper | null>(null);

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


    function getSwiperModules(section: string, width: number): import("swiper/types").SwiperModule[] | undefined {
        throw new Error('Function not implemented.');
    }

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
      className={className}
    >
      <div className="wrapper bg-slate-400">
        {data?.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={idx} className="flex justify-center z-10">
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