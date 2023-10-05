import arrowDown from 'public/icons/icon_arrowdown.svg';
import arrow from 'public/icons/icon_arrow.svg';
import arrowUp from 'public/icons/icon_arrowup.svg';
import burger from 'public/icons/icon_burger.svg';
import checkbox from 'public/icons/icon_checked.svg';
import cross from 'public/icons/icon_cross.svg';
import instagram from 'public/icons/icon_instagram.svg';
import star from 'public/icons/icon_star.svg';
import telegram from 'public/icons/icon_telegram.svg';
import tickWhite from 'public/icons/icon_tickwhite.svg';
import tick from 'public/icons/icon_tick.svg';
import caseArrowLeft from 'public/icons/icon_arrowleft.svg';
import caseArrowRight from 'public/icons/icon_arrowright.svg';
import tickGroup from 'public/icons/icon_dublemark.svg';
import lock from 'public/icons/icon_lock.svg';
import questionMark from 'public/icons/icon_questionmark.svg';
import starGroup from 'public/icons/icon_threestar.svg';
import caseArr from 'public/icons/case_arrow.svg';

import { SocialIconProps } from '@/components/ui/Icon/types';

const icons = {
  arrow,
  arrowDown,
  arrowUp,
  burger,
  checkbox,
  cross,
  instagram,
  star,
  telegram,
  tick,
  tickWhite,
  caseArrowLeft,
  caseArrowRight,
  tickGroup,
  lock,
  questionMark,
  starGroup,
  caseArr,
};

export const Icon: React.FC<SocialIconProps> = ({
  icon,
  className = '',
  width = 20,
  height = 20,
}) => {
  const Icon = icons[icon];

  return <Icon className={className} width={width} height={height} />;
};
