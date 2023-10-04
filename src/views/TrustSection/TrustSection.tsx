'use client';

import Image from 'next/image';
// import classNames from 'classnames';

import data from '@/data/partners.json';
import { useWindowWidth } from '@/hooks';

// import css from './TrustSection.module.css';

const { title, partners } = data;

export const TrustSection = () => {
  const {
    // isScreenMobile,
    // isLargeScreenMobile,
    isScreenTablet,
    isScreenDesktop,
  } = useWindowWidth();
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading2 text-center">{title}</h2>
        {(isScreenTablet || isScreenDesktop) && (
          <ul className="flex items-center">
            {partners.map((el, ind) => (
              <li key={ind}>
                <Image
                  src={el.src}
                  alt={el.alt}
                  width={el.width}
                  height={el.height}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
