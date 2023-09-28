// import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

type SocialMenuVariants = 'fixed' | 'footer' | 'mobile-menu';

export interface SocialButtonProps {
  link: string;
  aria_label: string;
  variant?: SocialMenuVariants;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
