import toast from 'react-hot-toast';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { StatusVariants } from '@/components/Form/types';
import { fadeInDown } from '@/variants';

export const notify = (messages: string[], status: StatusVariants) => {
  toast.custom(
    t => {
      const toastClasses = classNames(
        'rounded-xl px-6 py-[33px] text-center md:min-w-[397px]',
        {
          'bg-purple-light': status === 'success',
          'bg-white text-error ': status === 'error',
        },
      );

      return (
        <motion.div
          variants={fadeInDown}
          initial={t.visible ? 'initial' : 'animate'}
          animate={t.visible ? 'animate' : 'initial'}
          className={toastClasses}
        >
          {messages.map(text => (
            <p key={text}>{text}</p>
          ))}
        </motion.div>
      );
    },
    {
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    },
  );
};
