import Link from 'next/link';

import React from 'react';

import css from './CaseCard.module.css';

import { Icon } from '../ui/Icon';
import { CasePriceList } from '../CasePriceList';
import { CaseCardProps } from './types';

// Just spread props on CaseCard component like <CaseCardProps {...props}/>
export const CaseCard: React.FC<CaseCardProps> = ({ title, link, list }) => {
  return (
    <div
      className={`h-[311px] w-full max-w-[328px] rounded-card px-[32px] 
    pb-[32px] pt-[29px] shadow-input  xl:h-[384px] xl:max-w-[380px] xl:pb-[39px] xl:pt-[32px] ${css.border}`}
    >
      <div className="mb-6 flex justify-between xl:mb-[26px]">
        <Link href={link} rel="noopener noreferrer nofollow" target="_blank">
          <h3 className="max-w-[150px] text-left font-dela_gothic text-s_xs uppercase xl:max-w-[200px] xl:text-xxl_xs">
            {title.map((row, idx) => (
              <span key={idx} className={css.cardline}>
                {row}
              </span>
            ))}
            <Icon
              height={10}
              width={10}
              icon="caseArr"
              className=" ml-[5px] inline-block h-[12px] w-[12px] xl:mb-[3px] xl:ml-[7px] xl:h-[17px] xl:w-[17px]"
            />
          </h3>
        </Link>
        <Link
          href={link}
          rel="noopener noreferrer nofollow"
          target="_blank"
          aria-label={title.join(' ')}
        >
          <Icon
            height={20}
            width={20}
            icon="instagram"
            className=" btn-transition mt-2 h-5 w-5 hover:text-lightGray focus:text-lightGray active:text-grey "
          />
        </Link>
      </div>
      <CasePriceList list={list} />
    </div>
  );
};
