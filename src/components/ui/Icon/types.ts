type SocialMenuVariants = 'mobile-menu' | 'default';
export type IconNames =
  | 'arrow'
  | 'arrowDown'
  | 'arrowUp'
  | 'burger'
  | 'checkbox'
  | 'cross'
  | 'instagram'
  | 'star'
  | 'telegram'
  | 'tick'
  | 'tickWhite'
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
