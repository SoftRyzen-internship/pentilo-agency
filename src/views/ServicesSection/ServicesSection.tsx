'use client';
import React from 'react';
import data from '@/data/services.json';
import common from '@/data/common.json';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from './ServicesCard';
import styles from '@/views/ServicesSection/ServicesSection.module.css';
import { AdditionalServices } from './AdditionalServices';
import { Slider } from '@/components/Slider';
import useWindowSize from '@/utils/useWindowSize';
import '@/components/Slider/styles.css';
export const ServicesSection: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <section id="services">
      <div className="container ">
        <div className="flex flex-col xl:flex-row ">
          <h2
            className={`${styles.textShadowTitle} mb-6 max-w-[328px] text-center font-dela_gothic text-3xl font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[464px] xl:text-left`}
          >
            {data.title}
          </h2>
          <p className="mb-6 max-w-[328px] text-center font-dela_gothic text-base font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[418px] xl:text-left">
            {data.subtitle1}
          </p>
          <p className="mb-10 max-w-[328px] text-center font-open_sans text-base font-normal text-white md:mx-auto md:my-0 md:mb-10 md:max-w-[400px] xl:max-w-[379px] xl:text-left">
            {data.description}
            <span className={`xl:hidden ${styles.gradientborder}`}>
              {data.descspanmobile}
            </span>
            <span
              className={`hidden whitespace-nowrap xl:inline-block ${styles.gradientborder}`}
            >
              {data.decsspandesctop}
            </span>
          </p>
        </div>

        {width && width < 1440 ? (
          <Slider
            data={data.services}
            element={ServiceCard}
            className="mb-[60px] md:mx-auto md:my-0 md:max-w-[330px]"
            navigation={true}
            autoplay={false}
            section="services"
          ></Slider>
        ) : (
          <ul className="mb-[60px] grid grid-cols-1 items-start gap-x-[20px] gap-y-[20px] xl:grid-cols-3">
            {data.services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                src={service.src}
                alt={service.alt}
                icon={service.icon}
                list={service.list}
              />
            ))}
          </ul>
        )}
        <AdditionalServices subtitle2={data.subtitle2} extras={data.extras} />

        <Button
          tag="a"
          accent={true}
          href="/"
          className="mb-[10px] md:mx-auto md:my-0 xl:w-[180px] "
        >
          {common.buttonsText.v3}
        </Button>
      </div>
    </section>
  );
};
