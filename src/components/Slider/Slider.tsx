'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from './types';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';

import useWindowSize from '@/utils/useWindowSize';
import { getSliderBreakpointsOptions } from '@/utils/getSliderBreakpointsOptions';
import { getSwiperModules } from '@/utils/getSwiperModules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './styles.css';

export const Slider: React.FC<SliderProps> = ({
  section,
  data,
  element: Element,
  navigation,
  autoplay,
  loop = false,
  className = '',
  slideClassName = '',
}) => {
  const swiperRef: any = useRef<typeof Swiper | null>(null);
  const { width } = useWindowSize();
  const slideClasses = classNames(slideClassName, 'z-10');

  useEffect(() => {
    // Slider in Cases section should move with loop. As there were 4 cards with 3 per screen, cards in data written twice and unnecessary bullets were hidden to get around the limitations in the slider documentation
    const bullets = document.querySelectorAll(
      '.swiper.cases .swiper-pagination-bullet',
    );
    if (swiperRef.current) {
      Array.from(bullets)
        .slice(4)
        .map(bullet => {
          bullet.classList.add('hide');
        });
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      updateOnWindowResize={true}
      effect={'coverflow'}
      grabCursor={className.includes('hero') ? false : true}
      centeredSlides={true}
      onTouchStart={swiper => {
        swiper.autoplay.pause();
      }}
      onTap={swiper => {
        swiper.autoplay.resume();
      }}
      allowTouchMove={className.includes('hero') ? false : true}
      autoplay={
        autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
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
      loop={loop}
      // Slider in Cases section should move with loop. As there were 4 cards with 3 per screen, cards in data written twice and unnecessary bullets were hidden to get around the limitations in the slider documentation
      onSlideChange={
        className.includes('cases')
          ? swiper => {
              const dots = Array.from(
                document.querySelectorAll(
                  '.swiper.cases .swiper-pagination-bullet',
                ),
              );
              if (swiper.realIndex >= 4) {
                dots[swiper.realIndex - 4].classList.add(
                  'swiper-pagination-bullet-active',
                );
              }
            }
          : undefined
      }
    >
      <div className="wrapper bg-slate-400">
        {data?.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={idx} className={slideClasses}>
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
