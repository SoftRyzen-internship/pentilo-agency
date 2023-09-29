import Link from 'next/link';

import React from 'react';

import Instagram from '/public/icons/iconinstagram.svg';
import Up from '/public/icons/iconarrowup.svg';
import css from './CaseCard.module.css';

import { CasePriceList } from '../CasePriceList';
import { CaseCardProps } from './types';

// Just spread props on CaseCard component like <CaseCardProps {...props}/>
export const CaseCard: React.FC<CaseCardProps> = ({ title, link, list }) => {
  return (
    <div
      className=" w-full max-w-[328px] h-[311px] rounded-card shadow-input border border-purple-dark 
    pt-[29px] pb-[32px] px-[32px] bg-black-dark xl:max-w-[380px] xl:h-[384px] xl:pt-[32px] xl:pb-[39px]"
    >
      <Link
        href={link}
        className="flex justify-between mb-6 xl:mb-[26px]"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <h3 className="uppercase font-dela_gothic text-s_xs text-left max-w-[150px] xl:text-xxl_xs xl:max-w-[200px]">
          {title.map((row, idx) => (
            <span key={idx} className={`inline-block relative ${css.cardline}`}>
              {row}
            </span>
          ))}
          <Up className=" w-[10px] h-[10px] inline-block ml-[5px] xl:w-[15px] xl:h-[15px] xl:ml-[7px]" />
        </h3>
        <Instagram
          className=" w-5 h-5 mt-2 hover:text-lightGray focus:text-lightGray 
        active:text-grey btn-transition "
        />
      </Link>
      <CasePriceList list={list} />
    </div>
  );
};
