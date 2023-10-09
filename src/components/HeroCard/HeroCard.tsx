import classNames from 'classnames';
import css from './HeroCard.module.css';
import { Icon } from '../ui/Icon';

import { motion } from 'framer-motion';
import { fadeInUpHero } from '@/variants';

export const HeroCard: React.FC<{ text: string }> = ({ text }) => {
  const cardClasses = classNames(
    'border-gradient relative flex h-[108px] w-full max-w-[328px]  gap-[14px]',
    'rounded-card pb-[14px] pl-[21px] pr-[13px] pt-4',
    css.star,
  );

  const checkBoxClasses = classNames(
    css.innerCheckbox,
    'rounded-md px-[4px] pb-[4px] pt-[4px]',
  );

  return (
    <motion.div variants={fadeInUpHero} className={cardClasses}>
      <div className="border-gradient relative mt-[8px] h-[24px] w-[24px] rounded-md shadow-input">
        <div className={checkBoxClasses}>
          <Icon icon="check" width={14} height={14} />
        </div>
      </div>
      <h3 className="text-s_big">{text}</h3>
    </motion.div>
  );
};
