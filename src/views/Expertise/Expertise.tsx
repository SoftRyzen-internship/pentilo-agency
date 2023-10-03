'use client';

import classNames from 'classnames';

import { apply } from '@/constants';

import { Button } from '@/components/ui/Button';

import data from '@/data/expertise.json';
import common from '@/data/common.json';
import css from './Expertise.module.css';
import { Offer } from '@/components/Offer';

const { title } = data;

export const Expertise = () => {
  const titleClasses = classNames(
    'relative w-[328px] mx-auto mb-10 text-center font-dela_gothic text-xxl_middle uppercase',
    'text-shadow-text md:w-[500px] xl:mb-20 xl:w-[800px] xl:text-xxxl_small',
    css.decorArrow,
  );

  return (
    <section>
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
