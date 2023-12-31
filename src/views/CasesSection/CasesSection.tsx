'use client';

import classNames from 'classnames';

import { CaseCard } from '@/components/CaseCard';
import { Slider } from '@/components/Slider';
import { Button } from '@/components/ui/Button';
import { Parallax } from '@/components/ui/Parallax';
import { apply, cases as casesSectionId } from '@/constants';

import cases from '@/data/cases.json';
import common from '@/data/common.json';

export const CasesSection: React.FC = () => {
  const titleClasses = classNames(
    'relative mx-auto mb-6 text-center font-dela_gothic text-xxl_middle uppercase',
    'text-shadow-text xl:mb-20 xl:w-[800px] xl:text-xxxl_small',
  );

  return (
    <section className="section bg " id={casesSectionId}>
      <Parallax offset={200} damping={40} stiffness={500} div={true}>
        <div className=" case absolute h-full w-full"></div>
      </Parallax>
      <h2 className={titleClasses}>{cases.title}</h2>
      <div className="container">
        <Slider
          section="cases"
          data={[...cases.cases, ...cases.cases]}
          element={CaseCard}
          navigation={true}
          className="cases mb-4 xl:mb-14"
          slideClassName="casesSlide"
          loop={true}
        />
        <Button
          tag="a"
          href={apply}
          accent={true}
          className="mx-auto xl:w-[279px]"
        >
          {common.buttonsText.v3}
        </Button>
      </div>
    </section>
  );
};
