import { ReactionsCounter } from '../ReactionsCounter';
import data from '@/data/expertise.json';
import { TimeNow } from '../TimeNow';

export const Offer = () => {
  return (
    <div
      className="relative mx-auto mb-[15px] max-w-[595px] 
        rounded-2xl border border-white py-[16px] pl-[24px] pr-[37px] 
        md:mb-[32px] md:pb-[19px] md:pr-[42.5px] md:pt-[18px]"
    >
      <p className="pb-3">{data.dialogue.offer.text}</p>
      <ReactionsCounter />
      <TimeNow className="absolute bottom-2 right-2" />
    </div>
  );
};
