import React from 'react';

import { CaseCardProps } from '../CaseCard/types';

export const CasePriceList: React.FC<Pick<CaseCardProps, 'list'>> = ({
  list,
}) => (
  <ul className="grid gap-2 xl:gap-[12px]">
    {list.map(({ text, number }, idx) => (
      <li key={idx} className="flex items-center justify-between">
        <span className="text-s_middle xl:text-l_middle">{text}</span>
        <span
          className="font-dela_gothic text-s_xs uppercase leading-none 
          text-purple-light xl:text-xxl_xs xl:leading-none"
        >
          {number}
        </span>
      </li>
    ))}
  </ul>
);
