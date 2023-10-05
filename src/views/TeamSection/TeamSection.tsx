'use client';

import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { TeamList } from '@/components/TeamList';

import { cases } from '@/constants';
import useWindowSize from '@/utils/useWindowSize';
import common from '@/data/common.json';
import team from '@/data/team.json';

export const TeamSection: React.FC = () => {
  const { width } = useWindowSize();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(width > 420 ? team.title.replace(/-\s/g, '') : team.title);
  }, [width]);

  return (
    <section className="section">
      <div className="container">
        <h2
          className="mb-[56px] max-w-max whitespace-break-spaces text-center font-dela_gothic
         text-xxl_middle uppercase text-shadow-text md:mb-[40px] xl:mb-[48px] xl:text-xxxl_small"
        >
          {text}
        </h2>

        <TeamList />
        <Button
          tag="a"
          href={cases}
          accent={false}
          className="mx-auto mt-[48px] md:mt-8 xl:mt-[43px]"
        >
          {common.buttonsText.v5}
          <Icon
            icon="arrow"
            width={8}
            height={8}
            className="ml-[5px] inline-block -rotate-[135deg]"
          />
        </Button>
      </div>
    </section>
  );
};