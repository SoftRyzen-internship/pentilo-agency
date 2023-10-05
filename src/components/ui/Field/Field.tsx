import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

import { FieldError } from '../FieldError';
import { FieldProps } from './types';

export const Field: React.FC<FieldProps> = ({
  id,
  type,
  name,
  label,
  placeholder,
  register,
  errors,
}) => {
  const isError = !!errors[name];

  const fieldClasses = classNames('field h-[40px]', {
    error: isError,
  });

  return (
    <div className="relative">
      <div className={fieldClasses}>
        <input
          className="field-input"
          id={id}
          type={type ? type : 'text'}
          placeholder={placeholder}
          {...register(name)}
        />
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <FieldError
          name={name}
          errors={errors}
          isError={isError}
          className="absolute -bottom-7 left-0 z-[-1]"
        />
      </AnimatePresence>
    </div>
  );
};
