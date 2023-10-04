import React from 'react';

import { TimelineListItemProps } from './types';

export const TimelineListItem: React.FC<TimelineListItemProps> = ({
  number,
  title,
  text,
}) => {
  return (
    <div>
      <h2
        className="mb-4 text-center font-dela_gothic text-s_middle uppercase 
                md:mb-3 md:text-left md:text-xxl_small"
      >
        <span className="mr-1 text-purple-light">{number}</span>
        {title}
      </h2>
      <p className="text-center text-s_middle md:text-left md:text-l_middle">
        {text}
      </p>
    </div>
  );
};
