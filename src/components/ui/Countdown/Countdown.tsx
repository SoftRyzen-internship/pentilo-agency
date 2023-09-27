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

    const offerTime = Number(localStorage.getItem('timer'));
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      setTime(offerTime - Date.now());
      if (offerTime <= Date.now()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyle = classNames('text-purple-middle', {
    'font-dela_gothic text-xxl_middle md:text-timer_small xl:text-timer xl:text-black-dark xl:text-shadow-timer':
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
