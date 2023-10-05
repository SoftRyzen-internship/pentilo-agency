import { FieldErrors } from 'react-hook-form';

export interface FieldErrorProps {
  name: string;
  errors: FieldErrors;
  isError: boolean;
  className?: string;
}
