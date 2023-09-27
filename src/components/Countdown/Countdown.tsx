'use client';

import React from 'react';
import { useState, useEffect } from 'react';

export const Countdown = () => {
  const [time, setTime] = useState<number>(0);
  const [finalDate, setFinalDate] = useState<number>(0);

  useEffect(() => {
    if (!localStorage.getItem('timer')) {
      localStorage.setItem(
        'timer',
        // JSON.stringify(Date.now() + 24 * 60 * 60 * 1000 - 1),
        JSON.stringify(Date.now() + 10000 - 1),
      );
    }

    setFinalDate(Number(localStorage.getItem('timer')));

    let interval: ReturnType<typeof setTimeout> = setInterval(() => {
      setTime(finalDate - Date.now());
      if (finalDate <= Date.now()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [finalDate]);

  const calculateTime = (time: number) => {
    if (time <= 0) return `00:00:00`;

    const hours = Math.floor(time / (60 * 60 * 1000));
    const mins = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor(
      ((time % (60 * 60 * 1000)) % (60 * 1000)) / 1000,
    );

    return `${hours.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <p className=" text-5xl">{calculateTime(time)}</p>;
};
