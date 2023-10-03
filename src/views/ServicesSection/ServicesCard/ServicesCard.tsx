import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import css from '@/views/ServicesSection/ServicesCard/ServicesCard.module.css';

export interface ServiceProps {
  title: string;
  src: string;
  alt: string;
  icon: string;
  list: Array<{
    text: string;
    toolTip?: string;
  }>;
}

export const ServiceCard: React.FC<ServiceProps> = ({
  title,
  icon,
  list,
  src,
  alt,
}) => {
  const getIconForService = (imageName: string) => {
    switch (imageName) {
      case 'cursor':
        return src;
      case 'targetSmall':
        return src;
      case 'cursorTurget':
        return src;
      default:
        return '';
    }
  };

  return (
    <div
      className={`shadow-md ${css.border} mb-6 h-auto rounded-lg bg-white pb-8 pl-8 pr-[25px]`}
    >
      <div className="mb-6 flex items-start pt-6">
        <h3 className=" w-[207px] font-dela_gothic text-base font-normal uppercase text-white">
          {title}
        </h3>
        <Image src={getIconForService(icon)} alt={alt} width={48} height={48} />
      </div>

      <ul className="h-auto w-[263px]">
        {list.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <div>
              <span className="font-open_sans text-base font-normal">
                <p>
                  <span className="relative inline-block before:left-[-100%] before:top-[-50%] before:mr-2 before:block before:h-[24px] before:w-[24px] before:content-['']">
                    <Icon
                      icon="checkbox"
                      className="absolute -left-[100%] -top-[50%] h-[76px] w-[76px]"
                    />
                  </span>
                  {item.text}
                  <span className="relative ml-1 inline-block after:ml-2 after:block after:h-[16px] after:w-[16px] after:content-['']">
                    <Icon
                      icon="questionMark"
                      className="absolute right-0 top-0 h-[26px] w-[27px]"
                    />
                  </span>
                </p>
              </span>
              {item.toolTip && (
                <span className="relative ml-2 hidden cursor-pointer">
                  <span className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 transform rounded-md border bg-white p-2 text-xs">
                    <p>{item.toolTip}</p>
                  </span>
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
