'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { apply } from '@/constants';

import data from '@/data/about.json';
import common from '@/data/common.json';

import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/views/AboutSection/variants';
import { highlightWords } from '@/utils/highlightWords';
import { StarIconAfter, StarIconBefore } from '@/components/StarIcon';

export const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.25, once: true }}
      className="container mx-auto my-[50px] flex flex-col  items-center xl:my-[75px] xl:max-w-screen-xl xl:flex-row xl:justify-between"
    >
      <motion.div
        variants={fadeInUp}
        className=" mb-8 w-full xl:w-1/2 xl:max-w-[480px]"
      >
        <Image
          src={data.src}
          alt={data.alt}
          className="relative mx-auto h-[284px] w-[328px] md:h-[284px] md:w-[328px] xl:mx-0 xl:xl:h-auto xl:min-h-[463px] xl:w-[480px]"
          width={480}
          height={463}
        />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="grid w-full place-items-center xl:mt-0 xl:h-[100%] xl:w-1/2  xl:place-items-start"
      >
        <h2 className="hidden h-0">{data.hiddenTitle}</h2>
        <h3 className="mb-8 min-h-[72px] max-w-[324px] font-dela_gothic text-base font-normal uppercase text-white md:max-w-[495px] md:text-xxl_small xl:mb-10  xl:min-h-[108px] xl:max-w-[480px] xl:text-xxl_small">
          {data.title}
        </h3>
        <motion.ul
          variants={fadeInUp}
          className="mb-10 grid gap-6 md:gap-8 xl:mb-14"
        >
          {data.description.map((paragraph, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              className="flex min-h-[72px] max-w-[299px] items-center md:min-h-full md:max-w-[479px] xl:max-w-[380px] "
            >
              {index % 2 === 0 ? <StarIconBefore /> : null}
              <p className="font-open_sans text-s_xs font-normal xl:text-l_middle">
                {highlightWords(paragraph[0])}
              </p>
              {index % 2 !== 0 ? <StarIconAfter /> : null}
            </motion.li>
          ))}
        </motion.ul>

        <Button
          tag="a"
          accent={true}
          href={apply}
          className="mb-[10px] xl:w-[180px]"
        >
          {common.buttonsText.v3}
        </Button>
      </motion.div>
    </motion.section>
  );
};
