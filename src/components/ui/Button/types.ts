export interface ButtonProps {
  tag: 'a' | 'button';
  accent: boolean;
  children: React.ReactNode;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}
