import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Message } from '../ui/Message';
import { PhoneMessagesProps } from './types';

import { stagger, zoom } from '@/variants';
import data from '@/data/expertise.json';
import css from './PhoneMessages.module.css';

const { messages } = data;

export const PhoneMessages: React.FC<PhoneMessagesProps> = ({ className }) => {
  const listClasses = classNames(
    'flex flex-col items-center gap-4 md:gap-6 md:pb-[63px] md:pt-[207px]',
    css.mobile,
    className,
  );

  return (
    <motion.ul
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.25, once: true }}
      className={listClasses}
    >
      {messages.map(message => (
        <motion.li variants={zoom.in} key={message.username}>
          <Message {...message} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
