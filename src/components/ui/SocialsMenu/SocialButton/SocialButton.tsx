import classNames from 'classnames';

import { SocialButtonProps } from '@/components/ui/SocialsMenu/types';

export const SocialButton: React.FC<SocialButtonProps> = ({
  link,
  aria_label,
  variant = 'default',
  children,
  className,
  onClick,
}) => {
  const socialButtonStyles = classNames(
    {
      'w-[20px] h-[20px] text-white-light rounded-l-normal':
        variant === 'default',
      'w-[24px] h-[24px] text-body  rounded-normal text-white':
        variant === 'mobile-menu',
    },
    'fill-current flex items-center cursor-pointer justify-center transition-colors duration-300',
    'hover:text-grey-light active:text-grey-light',
    'focus:text-grey-dark ',
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
