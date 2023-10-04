import React from 'react';

import css from '@/views/ServicesSection/AdditionalServices/AdditionalServices.module.css'; // Припустимо, що у вас є такий файл
import { Icon } from '@/components/ui/Icon';

import { AdditionalServicesProps } from '@/views/ServicesSection/AdditionalServices/types';

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  subtitle2,
  extras,
}) => {
  return (
    <div className="mb-[32px]">
      <div className="mb-10 flex w-[328px] items-center justify-center gap-[12px]">
        <Icon icon="starGroup" className="mr-0" width={34} height={48} />
        <h3 className="relative  w-[235px] font-dela_gothic text-base font-normal uppercase text-white">
          {subtitle2}
        </h3>
      </div>

      <ul>
        {extras.map((group, groupIndex) => (
          <li key={groupIndex}>
            {group.map((item, index) => (
              <p
                key={index}
                className="relative mb-[14px] flex items-baseline font-open_sans text-base font-normal"
              >
                <span
                  className={`relative pl-[25px] ${css.pseudoCheckbox}`}
                ></span>
                {item}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
