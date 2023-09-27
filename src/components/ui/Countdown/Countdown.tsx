'use client';

import React, { useState, useEffect } from 'react';
import data from '@/data/common.json';
import { getFormattedTime } from '@/utils';
import { CountdownProps } from './types';

export const Countdown: React.FC<CountdownProps> = ({ className }) => {
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

  return (
    <div className={`text-5xl text-slate-300 ${className}`}>
      {getFormattedTime(time)}
    </div>
  );
};
