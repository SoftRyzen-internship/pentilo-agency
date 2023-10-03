"use client"

import { CaseCard } from '@/components/CaseCard';
import { Slider } from '@/components/Slider';
import cases from '@/data/cases.json';
import classNames from 'classnames';

export const CasesSection: React.FC = () => {

    const titleClasses = classNames(
        'relative w-[328px] mx-auto mb-10 text-center font-dela_gothic text-xxl_middle uppercase',
        'text-shadow-text md:w-[500px] xl:mb-20 xl:w-[800px] xl:text-xxxl_small',
      );
  return (
    <section>
        <h2 className={titleClasses}>{cases.title}</h2>
      <div className="container">
        <Slider
          section="cases"
          data={cases.cases}
          element={CaseCard}
          navigation={true}
          className="cases"
          slideClassName="casesSlide"
        />
      </div>
    </section>
  );
};
