import Link from 'next/link';
import { motion } from 'framer-motion';

import LogoIcon from 'public/icons/logo.svg';
import { home } from '@/constants/links';
import data from '@/data/common.json';

import { LogoProps } from './types';
import { fadeInDown } from './variants';

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => (
  <motion.div variants={fadeInDown}>
    <Link href={home} className={className} aria-label={data.logoAriaLabelText}>
      <LogoIcon width={101} height={38} onClick={onClick} />
    </Link>
  </motion.div>
);
