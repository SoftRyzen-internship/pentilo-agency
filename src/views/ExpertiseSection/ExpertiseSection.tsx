'use client';

import classNames from 'classnames';

import { apply } from '@/constants';

import { Offer } from '@/components/Offer';
import { Button } from '@/components/ui/Button';

import data from '@/data/expertise.json';
import common from '@/data/common.json';

import css from './ExpertiseSection.module.css';

const { title } = data;

export const ExpertiseSection = () => {
  const titleClasses = classNames(
    'heading2 relative w-[328px] mx-auto mb-10 text-center md:w-[500px] xl:mb-20 xl:w-[800px]',
    css.decorArrow,
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className={titleClasses}>{title}</h2>

        <Offer />

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
