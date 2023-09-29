'use client';

import { useState, useEffect } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classNames from 'classnames';

import { FORM_DATA_KEY } from '@/constants/form';
import { Field } from '../ui/Field';
import { TextArea } from '../ui/TextArea/TextArea';
import { Countdown } from '../ui/Countdown';
import { Button } from '../ui/Button';

import { FormProps, PopUpType } from './types';
import data from '@/data/form.json';
import btndata from '@/data/common.json';

import './form.css';

const { form, notifications, timerText } = data;
const { inputs, textarea } = form;
const { onSuccess, onError } = notifications;

// TODO: check if reset works correctly after submit
// (removes data from local storage)
// if not add this
// sessionStorage.removeItem(FORM_DATA_KEY);

// disable btn when loading

export const Form: React.FC<FormProps> = ({ className = '' }) => {
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<PopUpType>('default');

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  useEffect(() => {
    switch (popUpType) {
      case 'default':
        return;
      case 'success':
        return alert(onSuccess);
      case 'error':
        return alert(onError);
    }
  }, [popUpType]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FormData) => {
    // try {
    //   setIsLoading(true);
    //   const status: PopUpType = await sendDataToTelegram(formData);
    //   setPopUpType(status);
    // } catch (error) {
    //   setPopUpType('error');
    // } finally {
    //   setIsLoading(false);
    // }
    setPopUpType('success');
    console.log(formData);
  };

  const formClassName = classNames('md:w-[380px]', className);

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
        buttonType="submit"
        content={btndata.buttonsText.v3}
        className="mx-auto md:w-[328px] xl:w-[279px]"
      />
    </form>
  );
};
