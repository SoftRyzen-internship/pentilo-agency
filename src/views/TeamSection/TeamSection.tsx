'use client';
import classNames from 'classnames';

import React from 'react';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

import { cases } from '@/constants';
import useWindowSize from '@/utils/useWindowSize';
import common from '@/data/common.json';
import team from '@/data/team.json';
import css from './TeamSection.module.css';

export const TeamSection = () => {
  const { width } = useWindowSize();

  return (
    <section className="section">
      <div className="container">
        <h2
          className="mb-[56px] max-w-max whitespace-break-spaces text-center 
        font-dela_gothic text-xxl_middle uppercase text-shadow-text md:mb-[40px] xl:mb-[48px] xl:text-xxxl_small"
        >
          {width > 420 ? team.title.replace(/-\s/g, '') : team.title}
        </h2>

        <ul className="relative mx-auto flex max-w-[328px] flex-col md:max-w-[680px] md:flex-row md:flex-wrap">
          {team.team.map((person, idx) => {
            const itemStyles = classNames(
              {
                'smOnly:absolute smOnly:top-[180px] smOnly:left-0 md:ml-[128px]':
                  idx === 0,
                'smOnly:ml-auto smOnly:mt-8 md:mr-[128px] md:ml-auto':
                  idx === 1,
                'smOnly:absolute smOnly:top-[416px] smOnly:left-0': idx === 2,
                'smOnly:-order-2 smOnly:mx-auto md:mx-auto md:mt-5': idx === 3,
                'smOnly:ml-auto smOnly:mt-[92px] smOnly:-order-1 ': idx === 4,
              },
              [css.team],
            );
            return (
              <li key={idx} className={`team${idx} ${itemStyles}`}>
                {person.name}
              </li>
            );
          })}
        </ul>

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
