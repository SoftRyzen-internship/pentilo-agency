export interface ButtonProps {
  tag: 'a' | 'button';
  accent: boolean;
  children: React.ReactNode;
  // content: string;
  // icon?: any;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  // classNameText?: string;
  // fontStyle?: string;
}
