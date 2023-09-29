'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import data from '@/data/qa.json';

import Passive from 'public/icons/iconarrowdown.svg';
import Active from 'public/icons/iconarrowup.svg';

import { ElementAccordion } from '@/components/ElementAccordion';
import { AccordionButtonIcon } from '../AccordionButtonIcon';

export const Accordion = () => {
  const [firstShown, setFirstShown] = useState(true);
  const [secondShown, setSecondShown] = useState(false);
  const [thirdShown, setThirdShown] = useState(false);

  const { accordeon } = data;

  const onClickShow = (ind: number) => {
    switch (ind) {
      case 0:
        setFirstShown(prevState => !prevState);
        break;
      case 1:
        setSecondShown(prevState => !prevState);
        break;
      case 2:
        setThirdShown(prevState => !prevState);
        break;
    }
  };

  return (
    <ul className="md:w-[508px] xl:w-[580px] text-s_middle flex flex-col gap-10">
      {accordeon.map(({ title, description }, ind) => (
        <li key={ind}>
          <button
            className="w-[100%] mb-[18px] xl:mb-6 flex justify-between items-center"
            type="button"
            onClick={() => {
              onClickShow(ind);
            }}
          >
            <h2 className="uppercase font-dela_gothic ">{title}</h2>
            <AnimatePresence mode="wait" initial={false}>
              {ind === 0 && (
                <>
                  {firstShown ? (
                    <AccordionButtonIcon ind={ind}>
                      <Active className="w-3 h-3 stroke-purple-light" />
                    </AccordionButtonIcon>
                  ) : (
                    <AccordionButtonIcon ind={ind}>
                      <Passive className="w-3 h-3 " />
                    </AccordionButtonIcon>
                  )}
                </>
              )}
              {ind === 1 && (
                <>
                  {secondShown ? (
                    <AccordionButtonIcon ind={ind}>
                      <Active className="w-3 h-3 stroke-purple-light" />
                    </AccordionButtonIcon>
                  ) : (
                    <AccordionButtonIcon ind={ind}>
                      <Passive className="w-3 h-3 " />
                    </AccordionButtonIcon>
                  )}
                </>
              )}
              {ind === 2 && (
                <>
                  {thirdShown ? (
                    <AccordionButtonIcon ind={ind}>
                      <Active className="w-3 h-3 stroke-purple-light" />
                    </AccordionButtonIcon>
                  ) : (
                    <AccordionButtonIcon ind={ind}>
                      <Passive className="w-3 h-3 " />
                    </AccordionButtonIcon>
                  )}
                </>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence initial={false}>
            {ind === 0 && firstShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
            {ind === 1 && secondShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
            {ind === 2 && thirdShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};
