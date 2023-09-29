import { ErrorMessage } from '@hookform/error-message';

import { FieldErrorProps } from './types';

export const FieldError: React.FC<FieldErrorProps> = ({ name, errors }) => {
  return (
    <div className="mt-[4px] h-[24px] rounded-xl bg-error px-[10px] py-[2px] text-center text-white">
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
};
