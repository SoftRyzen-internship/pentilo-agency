import css from './HeroCard.module.css';
import { Icon } from '../ui/Icon';

export const HeroCard: React.FC<{text: string}> = ({ text }) => {
  return (
    <div
      className={`border-gradient relative flex h-[108px] w-full max-w-[328px]
     gap-[14px] rounded-card pb-[14px] pl-[21px]  pr-[13px]
 pt-4 ${css.star}
    `}
    >
      <div
        className={`border-gradient  relative mt-[8px] h-[24px] w-[24px] rounded-md shadow-input 
    `}
      >
        <div
          className={`${css.innerCheckbox} rounded-md px-[4px] pb-[4px] pt-[4px] `}
        >
          <Icon icon="check" width={14} height={14} />
        </div>
      </div>
      <h3 className="text-s_big"> {text} </h3>
    </div>
  );
};
