'use client';

import { useState, useEffect } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import classNames from 'classnames';

import { notify, sendDataToTelegram } from '@/utils';
import { FORM_DATA_KEY } from '@/constants/form';

import { Field } from '../ui/Field';
import { TextArea } from '../ui/TextArea/TextArea';
import { Countdown } from '../ui/Countdown';
import { Button } from '../ui/Button';
import { Loader } from '../ui/Loader';

import { FormProps, PopUpType, StatusVariants } from './types';
import { schema } from './schema';
import data from '@/data/form.json';
import common from '@/data/common.json';

const { form, timerText, notifications, onLoadingMessage } = data;
const { inputs, textarea } = form;
const { onSuccess, onError } = notifications;

export const Form: React.FC<FormProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<PopUpType>('default');

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    // @ts-expect-error RHF V7 limitation #7895
    resolver: yupResolver(schema),
  });

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  useEffect(() => {
    switch (popUpType) {
      case 'default':
        return;
      case 'success':
        notify(onSuccess, popUpType);
        setPopUpType('default');
        return;
      case 'error':
        notify(onError, popUpType);
        setPopUpType('default');
        return;
    }
  }, [popUpType]);

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const status: StatusVariants = await sendDataToTelegram(formData);
      setPopUpType(status);
      reset();
    } catch (error) {
      setPopUpType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const formClassName = classNames('md:w-[380px]', className);
  const btnClasses = classNames(
    'mx-auto flex items-baseline justify-center gap-[24px] md:w-[328px] xl:w-[279px] duration-300 ease-in-out',
    { 'bg-opacity-50': isLoading },
  );

  return (
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <ul className="flex flex-col gap-3">
        {inputs.map(input => (
          <li key={input.id}>
            <Field {...input} register={register} errors={errors} />
          </li>
        ))}
        <li>
          <TextArea {...textarea} register={register} errors={errors} />
        </li>
      </ul>

      <div className="mb-[40px] mt-6 flex justify-center gap-1 ">
        <p>{timerText}</p>
        <Countdown into="form" />
      </div>

      <Button
        tag="button"
        accent={true}
        disabled={isLoading}
        buttonType="submit"
        className={btnClasses}
      >
        {isLoading ? onLoadingMessage : common.buttonsText.v3}
        {isLoading ? <Loader /> : null}
      </Button>
    </form>
  );
};
