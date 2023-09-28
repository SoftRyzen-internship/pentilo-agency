export interface ButtonProps {
  tag: 'a' | 'button';
  accent: boolean;
  content: string;
  icon?: any;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  classNameText?: string;
  fontStyle?: string;
}
