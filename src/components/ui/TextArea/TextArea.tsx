import { FieldError } from '../FieldError';
import { TextAreaProps } from './types';

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  placeholder,
  register,
  errors,
}) => {
  const isError = errors[name];

  return (
    <>
      <div className="field h-[111px]">
        <textarea
          className="field-input resize-none px-[23px]"
          id={id}
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
