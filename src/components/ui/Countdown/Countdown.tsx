'use client';

import classNames from 'classnames';

import React, { useState, useEffect } from 'react';
import data from '@/data/common.json';
import { getFormattedTime } from '@/utils';
import { CountdownProps } from './types';

export const Countdown: React.FC<CountdownProps> = ({
  into = 'hero',
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

  const timerStyle = classNames('', {
    '': into === 'hero',
    'text-[#B454FF] text-lg leading-normal font-bold': into === 'form',
  });

  return (
    <div className={`${timerStyle} ${className}`}>
      {into === 'hero'
        ? getFormattedTime(time)
        : getFormattedTime(time).slice(0, 5)}
      <p className="text-[#B454FF] text-lg leading-normal font-bold"></p>
    </div>
  );
};

// color: var(--Dasha-main, #B454FF);
// font-family: Google Sans;
// font-size: 18px;
// font-style: normal;
// font-weight: 700;
// line-height: 150%;
