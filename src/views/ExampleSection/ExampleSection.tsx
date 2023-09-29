'use client';

import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import Arrow from '@/../public/icons/iconarrowdown.svg';
import { CaseCard } from '@/components/CaseCard';
import { Accordion } from '@/components/Accordion';
import data from '@/data/cases.json';

import s from '@/views/ExampleSection/ExampleSection.module.css';

export const ExampleSection = () => (
  <section
    id="expertise"
    className={`${s.section}  h-[150vh] text-shadow-xxs container relative`}
  >
    <h2 className="mt-[100px]">This is example of section</h2>

    <Countdown into="hero" />

    {/* Кнопка консультації */}
    <Button
      tag="a"
      accent={false}
      href="/"
      content="КОНСУЛЬТАЦІЯ"
      className="mb-[10px] hidden xl:block xl:py-[2.5px] xl:px-[10px] xl:w-[129px]"
      fontStyle="xl:text-xs"
    />

    {/* Кнопка детальніше */}
    <Button
      tag="a"
      accent={false}
      href="customId"
      content="TEST SCROLL"
      className="mb-[10px] hidden xl:block xl:w-[150px] xl:py-[15px] "
    />

    {/* Кнопка Залишити заявку */}
    <Button
      tag="a"
      accent={true}
      href="/"
      content="Залишити заявку"
      className="xl:w-[180px] mb-[10px]"
    />

    {/* Кнопка для форми, як баттон */}
    <Button
      tag="button"
      accent={true}
      buttonType="submit"
      content="Залишити заявку"
      className="xl:w-[279px] mb-[10px]"
    />

    {/* Кнопка із свг */}
    <Button
      tag="a"
      accent={false}
      content="І разом з ними ми досягли ось таких результатів в проектах"
      icon={Arrow}
      className="mb-[10px]"
    />

    {/* Приклад списку кейсів, пропси на картку без назви, просто розпилити */}
    <ul className="flex flex-wrap gap-5">
      {data.cases.slice(-3).map((cardProps, idx) => (
        <CaseCard key={idx} {...cardProps} />
      ))}
    </ul>

    {/* аккoрдeon */}
    <Accordion />

    {/* Елемент для тестування скролу */}
    <div className="h-[1000px] bg-black-light mt-[800px]" id="customId"></div>
  </section>
);
