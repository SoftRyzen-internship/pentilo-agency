import { motion } from 'framer-motion';
import { ErrorMessage } from '@hookform/error-message';

import { FieldErrorProps } from './types';
import { fadeInDown } from '@/variants';
import classNames from 'classnames';

export const FieldError: React.FC<FieldErrorProps> = ({
  name,
  errors,
  isError,
  className,
}) => {
  const errorClasses = classNames(
    'h-[24px] min-w-[150px] w-fit rounded-xl bg-error px-[10px] pb-[2px] text-center text-sm text-white',
    className,
  );

  return (
    <motion.div
      variants={fadeInDown}
      animate={isError ? 'animate' : 'initial'}
      className={errorClasses}
    >
      <ErrorMessage errors={errors} name={name} />
    </motion.div>
  );
};
