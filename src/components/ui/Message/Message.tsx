import classNames from 'classnames';

import { MessageProps } from './types';
import css from './Message.module.css';

export const Message: React.FC<MessageProps> = ({
  decorAvatar,
  decorImage,
  username,
  message,
  time,
}) => {
  const bubleClasses = classNames(
    'mx-auto max-w-[330px] rounded-2xl px-5 pb-8 pt-5 md:max-w-[526px] md:rounded-[20px]',
    css.buble,
  );

  const userNameClasses = classNames(
    'mb-[18px] w-fit pl-12 pr-6 text-l_small font-medium text-black-light md:mb-4',
    decorAvatar,
    css.decorImage,
  );

  const decorIconClasses = classNames(decorImage, css.decorImage);

  return (
    <div className={bubleClasses}>
      <p className={userNameClasses}>
        {username} <span className={decorIconClasses} />
      </p>

      <p className="text-s_small tracking-tight text-black-middle md:text-xl_mobile md:tracking-tighter">
        {message.map((text, index) => (
          <span key={text} className={classNames({ 'font-bold': index === 0 })}>
            {text}
          </span>
        ))}
      </p>
      <p className="absolute right-4 top-4 tracking-tighter text-black-light smOnly:hidden">
        {time}
      </p>
    </div>
  );
};
