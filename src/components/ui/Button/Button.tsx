import classNames from 'classnames';

import React from 'react';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = 'a',
  accent = true,
  content,
  icon: Icon,
  href,
  buttonType,
  onClick,
  className,
  fontStyle,
}) => {
  const btnStyles = classNames('cursor-pointer block text-center w-full', {
    'rounded-button shadow-button py-[12px] px-[10px] max-w-[328px] bg-purple-middle md:py-[16px] xl:max-w-[279px]':
      accent === true,
    ' hover:bg-purple-hover focus:bg-purple-hover active:bg-purple-clicked transition-colors duration-300':
      accent === true,
    'rounded-buttonSec shadow-input py-[7.5px] px-[26px] max-w-[280px] bg-black-dark border border-purple-dark':
      accent === false,
    'hover:bg-purple-hoverSec focus:bg-purple-hoverSec active:bg-purple-clickedSec transition-colors duration-300':
      accent === false,
  });

  const textStyles = classNames('text-white', {
    'text-l_small': accent === true,
    'text-s_middle': accent === false,
  });

  return (
    <Tag
      onClick={onClick}
      href={href}
      type={buttonType}
      className={`${btnStyles} ${className}`}
    >
      <span className={`${textStyles} ${fontStyle}`}>
        {content}
        {Icon ? (
          <Icon width={8} height={8} className="inline-block ml-1" />
        ) : null}
      </span>
    </Tag>
  );
};
