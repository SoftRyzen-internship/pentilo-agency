import Link from 'next/link';

import React from 'react';

import Instagram from '/public/icons/iconinstagram.svg';
import Up from '/public/icons/iconarrowup.svg';
import css from './CaseCard.module.css';

interface CaseCardProps {
  cardProps: {
    title: string[];
    link: string;
    list: {
      text: string;
      number: string;
    }[];
  };
}

export const CaseCard: React.FC<CaseCardProps> = ({ cardProps }) => {
  const { title, link, list } = cardProps;
  return (
    //TODO: remove sizes in bottom div
    <div className=" w-[328px] h-[311px] rounded-card shadow-input border border-purple-dark pt-[29px] pb-[32px] px-[32px]">
      <Link
        href={link}
        className="flex justify-between mb-6"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <h3 className="uppercase font-dela_gothic text-s_xs text-left max-w-[150px]">
          {title.map((row, idx) => (
            <span key={idx} className={`inline-block relative ${css.cardline}`}>
              {row}
            </span>
          ))}
          <Up width={10} height={10} className="inline-block ml-[5px]" />
        </h3>
        <Instagram height={20} width={20} className=" mt-2" />
      </Link>

      <ul className="grid gap-2">
        {list.map(({ text, number }, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span className="text-s_middle">{text}</span>
            <span className=" font-dela_gothic text-base leading-none text-purple-light">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// color: #FFF;
// font-family: Dela Gothic One;
// font-size: 16px;
// font-style: normal;
// font-weight: 400;
// line-height: 130%; /* 20.8px */
// text-transform: uppercase;
