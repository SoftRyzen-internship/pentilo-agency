'use client';

import classNames from 'classnames';

import { apply, expertise } from '@/constants';

import { PhoneMessages } from '@/components/PhoneMessages';
import { Dialogue } from '@/components/Dialogue';
import { Button } from '@/components/ui/Button';
import { Parallax } from '@/components/ui/Parallax';

import data from '@/data/expertise.json';
import common from '@/data/common.json';
import css from './ExpertiseSection.module.css';

export const ExpertiseSection = () => {
  const titleClasses = classNames(
    'heading2 relative w-[328px] mx-auto mb-10 text-center md:w-[500px] xl:mb-20 xl:w-[800px]',
    css.decorArrow,
  );

  return (
    <section className="section bg " id={expertise}>
      <Parallax offset={150} damping={40} stiffness={500} div={true}>
        <div className=" expertise absolute h-full w-full"></div>
      </Parallax>
      <div className="container">
        <h2 className={titleClasses}>{data.title}</h2>
        <PhoneMessages className="mx-auto mb-6 md:mb-10" />

        <Dialogue className="mx-auto mb-[40px] md:mb-[56px]" />

        <Button
          tag="a"
          href={apply}
          accent={true}
          className="mx-auto xl:w-[279px]"
        >
          {common.buttonsText.v4}
        </Button>
      </div>
    </section>
  );
};
