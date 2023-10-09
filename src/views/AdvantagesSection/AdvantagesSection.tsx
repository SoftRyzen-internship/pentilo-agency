import { advantages } from '@/constants';
import data from '@/data/advantages.json';
import css from './Advantages.module.css';

import { Parallax } from '@/components/ui/Parallax';
import { AdvantagesList } from '@/components/AdvantagesList';

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="section bg advantages" id={advantages}>
      <div className="container">
        <h2
          className=" mx-auto mb-4 max-w-[287px] text-center font-dela_gothic uppercase 
      text-shadow-text md:mb-6 md:max-w-[486px] xl:mb-[15px] xl:w-full  xl:max-w-none xl:text-left"
        >
          <Parallax offset={35}>
            <span className="block text-[34px] leading-[1.2] blur-[2.5px] xl:text-[52px] xl:blur-[3.43px]">
              {data.title.blur}
            </span>
          </Parallax>
          <span
            className={`ml-1 block -translate-x-1 -translate-y-[16px] text-xxl_middle md:mx-auto md:max-w-[391px] 
        xl:max-w-none xl:-translate-x-0 xl:-translate-y-[25px] xl:text-xxxl_small ${css.focusTitle}`}
          >
            {data.title.focus}
          </span>
        </h2>
        <AdvantagesList />
      </div>
    </section>
  );
};
