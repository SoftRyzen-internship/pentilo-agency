'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';

import data from '@/data/partners.json';
import { useWindowWidth } from '@/hooks';

import { fadeInUp } from '@/variantsCommon/fadeInUp';

const { title, partners } = data;

export const TrustSection = () => {
  const { isScreenDesktop } = useWindowWidth();
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading2 mb-10 text-center">{title}</h2>
        {isScreenDesktop && (
          <motion.ul
            variants={fadeInUp}
            initial="hide"
            whileInView="show"
            viewport={{ amount: 0.25, once: true }}
            className="flex items-center justify-between"
          >
            {partners.map((el, ind) => (
              <motion.li
                key={ind}
                variants={fadeInUp}
                className={`advant${ind}`}
              >
                <Image
                  src={el.src}
                  alt={el.alt}
                  width={el.width}
                  height={el.height}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
      {!isScreenDesktop && (
        <Ticker duration={20}>
          {partners.map((el, index) => (
            <div key={index} className="ml-[59px] flex items-center">
              <Image
                src={el.src}
                alt={el.alt}
                width={el.width}
                height={el.height}
              />
            </div>
          ))}
        </Ticker>
      )}
    </section>
  );
};
