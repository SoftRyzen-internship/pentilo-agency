'use client';

import React from 'react';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { NavigationRowLinkProps } from '@/components/ui/NavigationRowLink/types';
import styles from './NavigationRowLink.module.css';

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
  variant,
}) => {
  const isVisible = useScrollVisibility(title);

  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const className =
    variant === 'mobile-menu'
      ? styles.mobileMenuHover
      : variant === 'header' || variant === 'footer'
      ? styles.defaultHover
      : '';

  return (
    <li
      onClick={handleClick}
      className={`btn-transition cursor-pointer font-inter font-normal text-grey transition ${className} ${
        isVisible ? 'text-grey' : ''
      }`}
    >
      <p>{title}</p>
    </li>
  );
};
