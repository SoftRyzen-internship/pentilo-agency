import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import { home } from '@/constants/links';
import data from '@/data/common.json';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <Link href={home} className={className} aria-label={data.logoAriaLabelText}>
      <LogoIcon width={101} height={38} onClick={onClick} />
    </Link>
  );
};
