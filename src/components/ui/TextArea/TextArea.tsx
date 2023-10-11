import classNames from 'classnames';
import { FieldError } from '../FieldError';
import { TextAreaProps } from './types';
import data from '@/data/form.json';

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  placeholder,
  register,
  errors,
  count,
}) => {
  const isError = !!errors[name];

  const fieldClasses = classNames('field h-[111px]', {
    error: isError,
  });

  const countClasses = classNames(
    'absolute bottom-2 right-4 text-[10px] opacity-50 transition duration-300 ease-in-out',
    { 'text-error': isError },
  );

  return (
    <div className="relative">
      <div className={fieldClasses}>
        <textarea
          className="field-input resize-none px-[23px]"
          id={id}
          placeholder={placeholder}
          {...register(name)}
        />

        <label className="field-label" htmlFor={id}>
          {label}
        </label>

        <span className={countClasses}>
          {count}/{data.form.validation.question.maxLength.value}
        </span>
      </div>

      <FieldError
        name={name}
        errors={errors}
        isError={isError}
        className="absolute -bottom-7 left-0 z-[-1]"
      />
    </div>
  );
};
