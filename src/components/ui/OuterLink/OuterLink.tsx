import React from 'react';

import { OuterLinkProps } from './types';

export const OuterLink: React.FC<OuterLinkProps> = ({
  children,
  href,
  title,
  className,
}) => {
  return (
    <>
      {title && (
        <span className="block font-inter text-xs text-grey">{title}</span>
      )}
      <a
        href={href}
        className={`btn-transition block font-inter text-xs text-grey hover:text-lightGray active:text-white ${className}`}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        {children}
      </a>
    </>
  );
};
