import React from 'react';
import { IconNames } from '@/components/ui/Icon/types';

// type SocialMenuVariants = 'mobile-menu' | 'default' | 'footer';

type SocialMenuVariants = 'mobile-menu' | 'default' | 'footer';

export type SocialContact = {
  name: string;
  link: string;
  icon: IconNames;
  ariaLabelText: string;
};

export interface SocialsMenuProps {
  variant?: SocialMenuVariants;
  className?: string;
  onClick?: () => void;
}

export interface SocialButtonProps {
  link: string;
  aria_label: string;
  variant?: SocialMenuVariants;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
