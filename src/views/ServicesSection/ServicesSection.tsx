'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/variants';
import { apply, services as servicesLisk } from '@/constants';

import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServicesCard';
import { AdditionalServices } from '@/components/AdditionalServices';
import { Slider } from '@/components/Slider';
import { ServicesHeaderTexts } from '@/components/ServicesHeaderTexts';
import { Parallax } from '@/components/ui/Parallax';

import data from '@/data/services.json';
import common from '@/data/common.json';

import '@/components/Slider/styles.css';

const { title, subtitle1, description, services, subtitle2, extras } = data;

export const ServicesSection: React.FC = () => {
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
    <section className="section bg " id={servicesLisk}>
      <Parallax offset={150} damping={40} stiffness={500} div={true}>
        <div className=" services absolute h-full w-full"></div>
      </Parallax>
      <div className="container">
        <ServicesHeaderTexts
          {...{
            title,
            subtitle1,
            description,
          }}
        />
        {windowWidth && windowWidth < 1280 && (
          <Slider
            data={services}
            element={ServiceCard}
            className="mb-[60px] md:mx-auto md:my-0 md:max-w-[345px]"
            navigation={true}
            autoplay={false}
            section="services"
          />
        )}
        {windowWidth && windowWidth > 1280 && (
          <motion.div
            variants={fadeInUp}
            initial="hide"
            whileInView="show"
            viewport={{ amount: 0.25, once: true }}
            className="mb-[15px] grid-cols-1 items-start gap-x-[20px] gap-y-[20px] xl:grid xl:grid-cols-3"
          >
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </motion.div>
        )}
        <AdditionalServices subtitle2={subtitle2} extras={extras} />
        <Button
          tag="a"
          accent={true}
          href={apply}
          className="mx-auto my-0 mb-[10px] xl:w-[280px]"
        >
          {common.buttonsText.v3}
        </Button>
      </div>
    </section>
  );
};
