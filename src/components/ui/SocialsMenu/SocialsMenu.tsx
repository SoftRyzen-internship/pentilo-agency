import classNames from 'classnames';

import { SocialButton } from '@/components/ui/SocialsMenu/SocialButton';
import { Icon } from '@/components/ui/Icon';

import {
  SocialsMenuProps,
  SocialContact,
} from '@/components/ui/SocialsMenu/types';
import data from '@/data/common.json';

export const SocialsMenu: React.FC<SocialsMenuProps> = ({
  variant = 'default',
  className,
  onClick,
}) => {
  const socialData = data.socials;

  const iconSizes = {
    default: { width: 20, height: 20 },
    'mobile-menu': { width: 24, height: 24 },
    footer: { width: 20, height: 20 },
  };

  const { width: iconWidth, height: iconHeight } = iconSizes[variant];

  const menuStyles = classNames(
    {
      'fixed bottom-[80px] right-0 z-10 xl:hidden flex flex-row gap-4':
        variant === 'default',
      'flex gap-5': variant === 'mobile-menu',
      'flex gap-4': variant === 'footer',
    },
    className,
  );

  return (
    <ul className={menuStyles}>
      {socialData.map(({ icon, link, name, ariaLabelText }: SocialContact) => (
        <li key={name}>
          <SocialButton
            link={link}
            variant={variant}
            aria_label={ariaLabelText}
            onClick={onClick}
          >
            <Icon
              icon={icon}
              // variant={variant}
              width={iconWidth}
              height={iconHeight}
            />
          </SocialButton>
        </li>
      ))}
    </ul>
  );
};
