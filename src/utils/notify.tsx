import toast from 'react-hot-toast';
import classNames from 'classnames';

import { StatusVariants } from '@/components/Form/types';

export const notify = (messages: string[], status: StatusVariants) => {
  toast.custom(
    t => {
      const toastClasses = classNames(
        'rounded-xl px-6 py-[33px] text-center md:min-w-[397px] transition duration-300 ease-in-out',
        {
          'bg-purple-light': status === 'success',
          'bg-white text-error ': status === 'error',
          'opacity-0': !t.visible,
          appear: t.visible,
        },
      );

      return (
        <div className={toastClasses}>
          {messages.map(text => (
            <p key={text}>{text}</p>
          ))}
        </div>
      );
    },
    {
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    },
  );
};
