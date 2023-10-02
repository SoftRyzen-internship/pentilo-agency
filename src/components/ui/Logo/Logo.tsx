// import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import { home } from '@/constants/links';
import data from '@/data/common.json';

import { MLogoSvg } from '../MLogoSvg';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <a
      href={home}
      onClick={onClick}
      className={className}
      aria-label={data.logoAriaLabelText}
    >
      <LogoIcon width={101} height={38} onClick={onClick} />
      <MLogoSvg />
    </a>
  );
};
