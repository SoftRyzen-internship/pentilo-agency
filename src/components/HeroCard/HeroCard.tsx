import React from 'react';

import css from './HeroCard.module.css';
import { Icon } from '../ui/Icon';
export const HeroCard: React.FC<{ expertise: string }> = ({ expertise }) => {
  return (
    <div
      className={`border-gradient flex h-[108px] w-full max-w-[328px] gap-[14px]
     rounded-card pb-[14px] pl-[21px] pr-[13px]  relative
 pt-4 ${css.star}
    `}
    >
      <div
        className={`border-gradient  relative mt-[8px] h-[24px] w-[24px] rounded-md shadow-input 
    `}
      >
        <div className={`${css.innerCheckbox} px-[4px] pb-[4px] pt-[4px] rounded-md `}>
          <Icon icon="check" width={14} height={14} />
        </div>
      </div>
      <h3 className="text-s_big"> {expertise} </h3>

      {/* <Icon
          height={20}
          width={20}
          icon="instagram"
          className=" btn-transition mt-2 h-5 w-5 hover:text-lightGray focus:text-lightGray active:text-grey "
        /> */}
    </div>
  );
};
