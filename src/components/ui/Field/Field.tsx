import classNames from 'classnames';
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
  const isError = errors[name];

  const fieldClasses = classNames('field h-[40px]', {
    error: isError,
  });

  return (
    <>
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

      {isError && <FieldError name={name} errors={errors} />}
    </>
  );
};
