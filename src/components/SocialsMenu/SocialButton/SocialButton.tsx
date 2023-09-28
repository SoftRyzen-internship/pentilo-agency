import classNames from 'classnames';

import { SocialButtonProps } from '@/components/SocialsMenu/types';

export const SocialButton: React.FC<SocialButtonProps> = ({
  link,
  aria_label,
  variant = 'header',
  children,
  className,
  onClick,
}) => {
  const socialButtonStyles = classNames(
    {
      'w-[20px] h-[20px] text-white-light  rounded-l-normal':
        variant === 'header',
      'w-[20px] h-[20px]  rounded-normal': variant === 'footer',
      'w-[24px] h-[24px] text-body  rounded-normal': variant === 'mobile-menu',
    },
    'flex items-center justify-center transition-colors duration-300',
    'hover:fill-grey-light hover:cursor-pointer active:text-grey-light',
    'focus:text-grey-dark focus:cursor-pointer focus:outline-none',
    className,
  );

  return (
    <a
      href={link}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className={socialButtonStyles}
      aria-label={aria_label}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
