import classNames from 'classnames';

import React from 'react';

import team from '@/data/team.json';
import css from './TeamList.module.css';

export const TeamList = () => {
  return (
    <ul className="relative mx-auto flex max-w-[328px] flex-col md:max-w-[680px] md:flex-row md:flex-wrap">
      {team.team.map((person, idx) => {
        const itemStyles = classNames(
          {
            'smOnly:absolute smOnly:top-[180px] smOnly:left-0 md:ml-[128px]':
              idx === 0,
            'smOnly:ml-auto smOnly:mt-8 md:mr-[128px] md:ml-auto': idx === 1,
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
  );
};
