import classNames from 'classnames';

import React from 'react';

interface ButtonProps {
  tag: 'a' | 'button';
  accent: boolean;
  content: string;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  classNameText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = 'a',
  accent = true,
  content,
  href,
  buttonType,
  onClick,
  className,
  classNameText,
}) => {
  const btnStyles = classNames('cursor-pointer block text-center w-full', {
    'rounded-button shadow-button py-[12px] px-[10px] max-w-[328px] bg-purple-middle md:py-[16px] xl:max-w-[279px] hover:bg-purple-hover focus:bg-purple-hover active:bg-purple-clicked transition-colors duration-300':
      accent === true,
    'rounded-buttonSec shadow-input py-[7.5px] px-[26px] max-w-[280px] bg-black-light border border-purple-base hover:bg-purple-hoverSec focus:bg-purple-hoverSec active:bg-purple-clickedSec transition-colors duration-300':
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
      <span className={`${textStyles} ${classNameText}`}>{content}</span>
    </Tag>
  );
};
