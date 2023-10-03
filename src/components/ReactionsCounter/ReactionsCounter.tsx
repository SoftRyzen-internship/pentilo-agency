import classNames from 'classnames';
import { Reaction } from '../ui/Reaction';
import { ReactionsCounterProps } from './types';
import data from '@/data/expertise.json';

const { reactions } = data.dialogue.offer;

export const ReactionsCounter: React.FC<ReactionsCounterProps> = ({
  className,
}) => {
  const counterClasses = classNames('flex gap-4 w-fit', className);
  return (
    <ul className={counterClasses}>
      {reactions.map(({ number, decorImage }) => (
        <li key={number}>
          <Reaction number={number} decorImage={decorImage} />
        </li>
      ))}
    </ul>
  );
};
