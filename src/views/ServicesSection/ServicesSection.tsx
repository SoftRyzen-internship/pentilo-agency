'use client';
import React from 'react';
import data from '@/data/services.json';
import common from '@/data/common.json';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from './ServicesCard';
import styles from '@/views/ServicesSection/ServicesSection.module.css';
import { AdditionalServices } from './AdditionalServices';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="px-4 py-8">
      <h2
        className={`${styles.textShadowTitle} mb-6 max-w-[328px] text-center font-dela_gothic text-3xl font-normal uppercase text-white`}
      >
        {data.title}
      </h2>
      <p className="mb-6 max-w-[328px]  text-center font-dela_gothic text-base font-normal uppercase text-white">
        {data.subtitle1}
      </p>
      <p className="mb-10 max-w-[328px] text-center font-open_sans text-base font-normal text-white">
        {data.description}
        <span className={styles.gradientborder}>{data.descspanmobile}</span>
      </p>

      <ul className="mb-[60px]">
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
      <AdditionalServices subtitle2={data.subtitle2} extras={data.extras} />

      <Button tag="a" accent={true} href="/" className="mb-[10px] xl:w-[180px]">
        {common.buttonsText.v3}
      </Button>
    </section>
  );
};
