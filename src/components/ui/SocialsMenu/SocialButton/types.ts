// type SocialMenuVariants = 'mobile-menu' | 'default' | 'footer';
type SocialMenuVariants = 'mobile-menu' | 'default' | 'footer';

export interface SocialButtonProps {
  link: string;
  aria_label: string;
  variant?: SocialMenuVariants;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
