import classNames from 'classnames';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorProps } from './types';

export const FieldError: React.FC<FieldErrorProps> = ({
  name,
  errors,
  isError,
  className,
}) => {
  const errorClasses = classNames(
    'h-[24px] min-w-[150px] w-fit rounded-xl bg-error px-[10px] pb-[2px] text-center text-sm text-white',
    'opacity-0 transition duration-300 ease-in-out',
    { 'opacity-100': isError },
    className,
  );

  return (
    <div className={errorClasses}>
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
};
