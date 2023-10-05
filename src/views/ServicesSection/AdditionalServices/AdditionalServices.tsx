'use client';
import React from 'react';

import css from '@/views/ServicesSection/AdditionalServices/AdditionalServices.module.css';
import { Icon } from '@/components/ui/Icon';

import { AdditionalServicesProps } from '@/views/ServicesSection/AdditionalServices/types';

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  subtitle2,
  extras,
}) => {
  return (
    <>
      <div className="mx-auto my-0 mb-[32px] md:max-w-[330px] xl:w-full xl:max-w-fit-content">
        <div className="mb-10 flex w-[328px] items-center justify-center gap-[12px] xl:w-full">
          <Icon icon="starGroup" className="mr-0" width={34} height={48} />
          <h3 className="relative  w-[235px] font-dela_gothic text-base font-normal uppercase text-white">
            {subtitle2}
          </h3>
        </div>

        <ul className="min-w-full gap-[70px] xl:flex xl:items-center xl:justify-between">
          {extras.map((group, groupIndex) => (
            <li key={groupIndex} className="xl:max-w-[368px]">
              {group.map((item, index) => (
                <p
                  key={index}
                  className={`relative mb-[14px] flex items-baseline font-open_sans text-base font-normal`}
                >
                  <span
                    className={`relative pl-[25px] ${css.pseudoCheckbox}`}
                  ></span>
                  {item}
                  {index === group.length - 1 &&
                  groupIndex === extras.length - 1 ? (
                    <a
                      href="#"
                      className={`${css.decorArrow} hover:fill-lightGray focus:fill-grey active:fill-lightGray`}
                    ></a>
                  ) : null}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
