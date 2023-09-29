import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface FieldProps {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
