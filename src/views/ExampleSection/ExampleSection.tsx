'use client';

import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { CaseCard } from '@/components/CaseCard';
import { Accordion } from '@/components/Accordion';
import { Advantages } from '@/components/Advantages';
import data from '@/data/cases.json';
import common from '@/data/common.json';

import s from '@/views/ExampleSection/ExampleSection.module.css';
import { SocialsMenu } from '@/components/ui/SocialsMenu';
import { Icon } from '@/components/ui/Icon';

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
      className="mb-[10px] hidden uppercase xl:block xl:w-[129px] xl:px-[10px] xl:py-[8px] xl:text-xs"
    >
      {common.buttonsText.v1}
    </Button>

    {/* Кнопка детальніше */}
    <Button
      tag="a"
      accent={false}
      href="customId"
      className="mb-[10px] hidden xl:block xl:w-[150px] xl:py-[16.5px] xl:text-l_small"
    >
      {common.buttonsText.v2}
    </Button>

    {/* Кнопка Залишити заявку */}
    <Button tag="a" accent={true} href="/" className="mb-[10px] xl:w-[180px]">
      {common.buttonsText.v3}
    </Button>

    {/* Кнопка Обговорити запит */}
    <Button tag="a" href="/" accent={true} className="mb-[10px] xl:w-[279px]">
      {common.buttonsText.v4}
    </Button>

    {/* Кнопка для форми, як баттон */}
    <Button
      tag="button"
      accent={true}
      buttonType="submit"
      className="mb-[10px] xl:w-[279px]"
    >
      {common.buttonsText.v3}
    </Button>

    {/* Кнопка із свг */}
    <Button tag="a" accent={false} className="mb-[10px]">
      {common.buttonsText.v5}
      <Icon
        icon="arrowDown"
        width={8}
        height={8}
        className="ml-[5px] inline-block"
      />
    </Button>

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
    <Advantages />
    {/* Елемент для тестування скролу */}
    <div className="mt-[800px] h-[1000px] bg-black-light" id="customId"></div>
  </section>
);
