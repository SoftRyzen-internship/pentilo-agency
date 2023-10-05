import classNames from 'classnames';
import { motion } from 'framer-motion';

import { ReactionsCounter } from '../ReactionsCounter';
// import { TimeNow } from '../TimeNow';
import { Loader } from '../ui/Loader';

import { zoom } from '@/variants';
import { DialogueProps } from './types';
import data from '@/data/expertise.json';
import css from './Dialogue.module.css';

const { offer, response, typingText } = data.dialogue;

export const Dialogue: React.FC<DialogueProps> = ({ className }) => {
  const wraperClasses = classNames('max-w-[595px]', className);

  const offerClasses = classNames(
    css.buble_offer,
    'relative mx-auto mb-4 w-[328px] py-[16px] pl-[24px] pr-[36px] tracking-tight',
    'md:w-full md:mb-8 md:pb-[19px] md:pr-[42.5px] md:pt-[18px] md:text-l_big',
  );

  const responseClasses = classNames(
    css.buble_response,
    'w-[335px] px-6 py-3 md:ml-auto md:w-[394px] md:text-l_small smOnly:mx-auto smOnly:tracking-tight',
  );

  return (
    <motion.div
      variants={zoom.in}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.25, once: true }}
      className={wraperClasses}
    >
      <div className={offerClasses}>
        <p className="pb-3 md:text-l">{offer.text}</p>
        <ReactionsCounter />
        {/* <TimeNow className="absolute bottom-[6px] right-14 md:bottom-5" /> */}
      </div>
      <motion.div
        variants={zoom.out}
        transition={{ delay: 3 }}
        className="mb-4 flex items-baseline justify-center gap-6 font-medium"
      >
        {typingText}
        <Loader />
      </motion.div>
      <motion.div
        variants={zoom.in}
        transition={{ delay: 3 }}
        className={responseClasses}
      >
        <span className={css.decorArrow}>{response}</span>
      </motion.div>
    </motion.div>
  );
};
