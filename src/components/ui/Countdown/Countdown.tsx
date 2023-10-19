'use client';

import classNames from 'classnames';

import React, { useState, useEffect } from 'react';

import data from '@/data/common.json';
import css from './Countdown.module.css';
import { getFormattedTime } from '@/utils';
import { CountdownProps } from './types';

export const Countdown: React.FC<CountdownProps> = ({
  into = 'form',
  className,
}) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (!localStorage.getItem('timer')) {
      const offerTime = Date.now() + data.countdown * 60 * 60 * 1000 - 1;
      localStorage.setItem('timer', JSON.stringify(offerTime));
    }

    let offerTime = Number(localStorage.getItem('timer'));

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      setTime(offerTime - Date.now());

      if (offerTime <= Date.now()) {
        offerTime = Date.now() + data.countdown * 60 * 60 * 1000 - 1;
        localStorage.setItem('timer', JSON.stringify(offerTime));
        setTime(offerTime - Date.now());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyle = classNames('text-purple-middle', {
    'font-dela_gothic text-xxl_middle w-[185px] mx-auto text-left md:w-[200px] md:text-timer_small':
      into === 'hero',
    'xl:text-timer xl:pl-[2px] xl:w-[240px] xl:text-black-dark xl:text-shadow-timer':
      into === 'hero',
    'text-l_middle font-bold': into === 'form',
  });

  return (
    <div
      className={`${timerStyle} ${into === 'hero' && css.stroke} ${className}`}
    >
      {into === 'hero'
        ? getFormattedTime(time)
        : getFormattedTime(time).slice(0, 5)}
    </div>
  );
};
