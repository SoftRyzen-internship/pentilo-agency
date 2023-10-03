'use client';

import React from 'react';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { NavigationRowLinkProps } from '@/components/ui/NavigationRowLink/types';

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
  onClick,
}) => {
  const isVisible = useScrollVisibility(title);

  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <li
      onClick={handleClick}
      // className={` cursor-pointer font-inter font-normal transition hover:text-purple-light focus:text-purple-light ${
      //   isVisible ? 'text-purple-light' : 'text-grey'
      // }`}
      className={`btn-transition cursor-pointer font-inter font-normal transition hover:text-purple-light focus:text-purple-light 
      ${isVisible ? 'text-purple-light' : 'text-grey'}`}
    >
      <p>{title}</p>
    </li>
  );
};
