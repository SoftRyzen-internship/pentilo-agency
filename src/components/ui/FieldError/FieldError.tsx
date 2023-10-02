import { ErrorMessage } from '@hookform/error-message';

import { FieldErrorProps } from './types';

export const FieldError: React.FC<FieldErrorProps> = ({ name, errors }) => {
  return (
    <div className="mt-[4px] h-[24px] w-fit rounded-xl bg-error px-[10px] pb-[2px] text-center text-sm text-white">
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
};
