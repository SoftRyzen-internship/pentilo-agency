

import React from 'react';

import css from './ExpertiseCard.module.css';

export const ExpertiseCard: React.FC<any> = ({expertise}) => {

  return (
    <div
      className={`h-[108px] w-full max-w-[328px] rounded-card px-[32px] 
    pb-[14px] pt-[16px] shadow-input  xl:h-[384px] xl:max-w-[380px] xl:pb-[39px] xl:pt-[32px] 
    ${css.border} 
    `}
    >
        <h3 className="text-s_big"> {expertise}
      </h3>     
          
          {/* <Icon
            height={10}
            width={10}
            icon="arrow"
            className=" ml-[5px] inline-block h-[10px] w-[10px] -rotate-[135deg] xl:ml-[7px] xl:h-[15px] xl:w-[15px]"
          /> */}
       
        {/* <Icon
          height={20}
          width={20}
          icon="instagram"
          className=" btn-transition mt-2 h-5 w-5 hover:text-lightGray focus:text-lightGray active:text-grey "
        /> */}

    </div>
  );
};
