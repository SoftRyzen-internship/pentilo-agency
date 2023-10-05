'use client';

import { CaseCard } from '@/components/CaseCard';
import { Slider } from '@/components/Slider';
import { Button } from '@/components/ui/Button';
import { apply, cases as casesId } from '@/constants';
import cases from '@/data/cases.json';
import common from '@/data/common.json';
import classNames from 'classnames';

export const CasesSection: React.FC = () => {
  const titleClasses = classNames(
    'relative mx-auto mb-6 text-center font-dela_gothic text-xxl_middle uppercase',
    'text-shadow-text xl:mb-20 xl:w-[800px] xl:text-xxxl_small',
  );
  return (
    <section className="py-[50px] xl:py-[75px]">
      <h2 className={titleClasses}>{cases.title}</h2>
      <div className="container">
        <Slider
          section="cases"
          data={cases.cases}
          element={CaseCard}
          navigation={true}
          className="cases mb-4 xl:mb-14"
          slideClassName="casesSlide"
        />
        <Button
          tag="a"
          href={apply}
          accent={true}
          className="mx-auto xl:w-[279px]"
        >
          {common.buttonsText.v3}
        </Button>{' '}
      </div>
    </section>
  );
};
