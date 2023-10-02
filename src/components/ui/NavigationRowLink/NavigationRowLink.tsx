import React from 'react';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { NavigationRowLinkProps } from '@/components/ui/NavigationRowLink/types';

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
}) => {
  const isVisible = useScrollVisibility(title);

  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`font-normal font-inter cursor-pointer hover:text-purple-light focus:text-purple-light transition ${
        isVisible ? 'text-purple-light' : 'text-grey'
      }`}
    >
      {title}
    </li>
  );
};
