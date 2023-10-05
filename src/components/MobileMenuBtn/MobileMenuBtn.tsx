import React from 'react';

import { MobileMenuBtnProps } from './types';

export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  children,
  onClick,
  aria,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={aria}
      className={`absolute right-0 top-[-10px] inline-flex h-[56px] w-[56px] 
      items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};
