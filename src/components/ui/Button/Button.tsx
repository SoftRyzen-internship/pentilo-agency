'use client';
import classNames from 'classnames';

import React from 'react';

import css from './Button.module.css';

import { smoothScroll } from '@/utils';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = 'a',
  accent = true,
  children,
  href,
  buttonType,
  onClick,
  disabled = false,
  className,
}) => {
  const btnStyles = classNames(
    'cursor-pointer block text-center w-full text-white',
    {
      'rounded-button shadow-button py-[12.5px] px-[10px] max-w-[328px] bg-purple-light md:py-[16.5px] xl:max-w-[279px]':
        accent === true,
      ' hover:bg-purple-hover focus:bg-purple-hover active:bg-purple-active btn-transition text-l_small':
        accent === true,
      'rounded-buttonSec py-[8.5px] px-[20px] max-w-[280px] text-s_middle':
        accent === false,
      'hover:bg-purple-hoverSec focus:bg-purple-hoverSec active:bg-purple-activeSec btn-transition':
        accent === false,
      [css.border]: accent === false,
    },
    className,
  );

  return (
    <Tag
      onClick={(e: React.MouseEvent) => {
        if (href) {
          smoothScroll(e, href);
          if (onClick) onClick();
        }
        if (buttonType && onClick) onClick();
      }}
      href={href}
      type={buttonType}
      className={btnStyles}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
