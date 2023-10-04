'use client';

import Image from 'next/image';

import React from 'react';

import data from '@/data/timeline.json';
import { TimelineList } from '@/components/ui/TimelineList';

export const TimelineSection: React.FC = () => {
  return (
    <section className="section xl:h-[1072px] xl:pb-[39px] xl:pt-[58px]">
      <div className="container xl:relative xl:flex xl:h-full xl:flex-wrap">
        <h2 className="hidden">{data.hiddenTitle}</h2>

        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          width={545}
          height={372}
          className="mb-10 object-contain md:mx-auto md:h-[372px] 
          md:w-[545px] md:object-right xl:mx-0 xl:mb-0 xl:-translate-y-[26px]"
        />
        <TimelineList
          timelines={data.timeline[0]}
          className="md:md-11 mb-10 xl:-order-1 xl:mb-0 xl:ml-[80px] xl:mr-[50px]"
        />

        <TimelineList
          timelines={data.timeline[1]}
          counter={4}
          className="xl:absolute xl:bottom-[-15px] xl:right-0 xl:mx-0"
        />
      </div>
    </section>
  );
};
