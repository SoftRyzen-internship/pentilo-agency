import React from 'react';

type SocialMenuVariants = 'header' | 'footer' | 'mobile-menu';

export type IconNames =
  | 'arrowDown'
  | 'arrowUp'
  | 'burger'
  | 'checkbox'
  | 'cross'
  | 'instagram'
  | 'star'
  | 'telegram'
  | 'tick'
  | 'medal'
  | 'calendar'
  | 'calculatorSmal'
  | 'caseArrowLeft'
  | 'caseArrowRight'
  | 'caseArrowUp'
  | 'anhelinaAvatar'
  | 'cruasan'
  | 'tickGroup'
  | 'fire'
  | 'thumbup'
  | 'heart'
  | 'house'
  | 'hrystynaAvatar'
  | 'lock'
  | 'message'
  | 'nails'
  | 'oksanaAvatar'
  | 'romanAvatar'
  | 'scales'
  | 'shirt'
  | 'stasAvatar'
  | 'softryzen'
  | 'pipitto'
  | 'prime'
  | 'kvyatkovskyy'
  | 'nizhno'
  | 'tandyr'
  | 'downArrow'
  | 'upArrow'
  | 'servicesArrowDown'
  | 'folder'
  | 'questionMark'
  | 'target'
  | 'targetandfolder'
  | 'starGroup'
  | 'user'
  | 'microphone'
  | 'pencil'
  | 'ped'
  | 'targetLarge'
  | 'megaphone'
  | 'calculatorLarge'
  | 'ceoAvatar'
  | 'projectAvatar'
  | 'content1Avatar'
  | 'content2Avatar'
  | 'targetologAvatar';

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

export interface IconProps {
  icon: IconNames;
  variant?: SocialMenuVariants;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
