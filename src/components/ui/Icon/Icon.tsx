import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { IconProps } from '@/components/ui/Icon/types';
import iconMap from '@/data/iconmap.json';

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
  width,
  height,
  onClick,
}) => {
  const iconPath = iconMap[icon];

  if (!iconPath) {
    console.error(`Path for icon "${icon}" not found.`);
    return null;
  }

  const iconStyles = classNames(className);

  return (
    <Image
      src={iconPath}
      className={iconStyles}
      width={width}
      height={height}
      onClick={onClick}
      alt={icon}
      priority
    />
  );
};
