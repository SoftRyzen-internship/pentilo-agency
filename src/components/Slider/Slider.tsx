'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/modules';
import { SliderProps } from './types';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './styles.css';
import useWindowSize from '@/utils/useWindowSize';
import { SwiperModule } from 'swiper/types';

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

  function getModules(section: any): SwiperModule[] {
    let modules = [Pagination, Navigation];

    if (section === 'cases') {
      modules.push(EffectCoverflow);
    }
    if (section != 'cases' && width !== null && width < 1440) {
      modules.push(Autoplay);
    }
    return modules;
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
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          initialSlide: 0,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
          initialSlide: 1,
        },
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
        navigation
          ? {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          : false
      }
      modules={getModules(section)}
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