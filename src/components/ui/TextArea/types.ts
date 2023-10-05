import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  count: number;
}
