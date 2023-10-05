'use client';
import React, { useState, useEffect } from 'react';

import data from '@/data/services.json';
import common from '@/data/common.json';

import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServicesCard';
import { AdditionalServices } from '@/components/AdditionalServices';
import { Slider } from '@/components/Slider';
import { ServicesHeaderTexts } from '@/components/ServicesHeaderTexts';

import '@/components/Slider/styles.css';

export const ServicesSection: React.FC = () => {
  const {
    title,
    subtitle1,
    description,
    descspanmobile,
    decsspandesctop,
    services,
    subtitle2,
    extras,
  } = data;

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="services">
      <div className="container ">
        <ServicesHeaderTexts
          {...{
            title,
            subtitle1,
            description,
            descspanmobile,
            decsspandesctop,
          }}
        />
        {windowWidth && windowWidth < 1440 && (
          <Slider
            data={services}
            element={ServiceCard}
            className="mb-[60px] md:mx-auto md:my-0 md:max-w-[345px]"
            navigation={true}
            autoplay={false}
            section="services"
          />
        )}
        <ul className="mb-[60px] hidden grid-cols-1 items-start gap-x-[20px] gap-y-[20px] xl:grid xl:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </ul>
        <AdditionalServices subtitle2={subtitle2} extras={extras} />
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
