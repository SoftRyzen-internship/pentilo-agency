'use client';

import React from 'react';
import classNames from 'classnames';
import { NavigationRowLinkProps } from '@/components/ui/NavigationRowLink/types';

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
  variant,
  onClick,
}) => {
  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };
  const navlinkClasses = classNames(
    'btn-transition cursor-pointer font-inter font-normal text-grey hover:text-hover focus:text-hover transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.1] focus:scale-[1.1]',
    {
      'hover:text-purple-light focus:text-purple-light':
        variant === 'mobile-menu',
    },
  );

  return (
    <li onClick={onClick} className={navlinkClasses}>
      <a
        className={navlinkClasses}
        href={href}
        onClick={handleClick}
        aria-label={title}
      >
        {title}
      </a>
    </li>
  );
};
