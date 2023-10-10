'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { ReactionProps } from './types';
import css from './Reaction.module.css';

export const Reaction: React.FC<ReactionProps> = ({ decorImage, number }) => {
  const [count, setCount] = useState<number>(number);

  const handleToggleCount = () =>
    setCount(prev => (prev === number ? prev + 1 : prev - 1));

  const reactionClass = classNames(
    css.decorImage,
    decorImage,
    'h-[24px] w-[53px] rounded-[29px] bg-purple-light bg-opacity-[0.23] px-2',
    'text-sm text-right text-purple-light hover:bg-opacity-30 btn-transition',
    { 'bg-opacity-40': count !== number },
  );

  return (
    <button onClick={handleToggleCount} className={reactionClass}>
      {count}
    </button>
  );
};
