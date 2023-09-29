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
  | 'caseArrowLeft'
  | 'caseArrowRight'
  | 'tickGroup'
  | 'lock'
  | 'questionMark'
  | 'starGroup';

export interface SocialIconProps {
  icon: IconNames;
  variant?: SocialMenuVariants;
  className?: string;
  width?: number;
  height?: number;
}
