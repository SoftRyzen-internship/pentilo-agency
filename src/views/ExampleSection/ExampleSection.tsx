'use client';

import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import Arrow from '@/../public/icons/icon_arrowdown.svg';
import { CaseCard } from '@/components/CaseCard';
import { Accordion } from '@/components/Accordion';
import data from '@/data/cases.json';

import s from '@/views/ExampleSection/ExampleSection.module.css';
import { SocialsMenu } from '@/components/ui/SocialsMenu';
// import { Icon } from '@/components/ui/Icon';

export const ExampleSection = () => (
  <section
    id="expertise"
    className={`${s.section}  text-shadow-xxs container relative h-[150vh]`}
  >
    <h2 className="mt-[100px]">This is example of section</h2>
    <Countdown into="hero" />
    {/* Кнопка консультації */}
    <Button
      tag="a"
      accent={false}
      href="/"
      content="КОНСУЛЬТАЦІЯ"
      className="mb-[10px] hidden xl:block xl:w-[129px] xl:px-[10px] xl:py-[3.5px]"
      fontStyle="xl:text-xs"
    />
    {/* Кнопка детальніше */}
    <Button
      tag="a"
      accent={false}
      href="customId"
      content="TEST SCROLL"
      className="mb-[10px] hidden xl:block xl:w-[150px] xl:py-[16px] "
    />
    {/* Кнопка Залишити заявку */}
    <Button
      tag="a"
      accent={true}
      href="/"
      content="Залишити заявку"
      className="mb-[10px] xl:w-[180px]"
    />
    {/* Кнопка Залишити заявку */}
    <Button
      tag="button"
      accent={true}
      buttonType="submit"
      content="Обговорити запит"
      className="mb-[10px] xl:w-[279px]"
    />
    {/* Кнопка для форми, як баттон */}
    <Button
      tag="button"
      accent={true}
      buttonType="submit"
      content="Залишити заявку"
      className="mb-[10px] xl:w-[279px]"
    />
    {/* Кнопка із свг */}
    <Button
      tag="a"
      accent={false}
      content="І разом з ними ми досягли ось таких результатів в проектах"
      icon={Arrow}
      className="mb-[10px]"
    />
    {/* Кнопки соціальні із свг */}
    <SocialsMenu />
    {/* Кнопки усі із свг icon="назва"*/}
    {/* <Icon icon="star" width={24} height={24} />; */}

    {/* Приклад списку кейсів, пропси на картку без назви, просто розпилити */}
    <ul className="flex flex-wrap gap-5">
      {data.cases.slice(-3).map((cardProps, idx) => (
        <CaseCard key={idx} {...cardProps} />
      ))}
    </ul>

    {/* аккoрдeon */}
    <Accordion />

    {/* Елемент для тестування скролу */}
    <div className="mt-[800px] h-[1000px] bg-black-light" id="customId"></div>
  </section>
);
