'use client';

import classNames from 'classnames';

import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { SocialsMenu } from '@/components/ui/SocialsMenu';
import { Icon } from '@/components/ui/Icon';
import { CaseCard } from '@/components/CaseCard';
import { Accordion } from '@/components/Accordion';
import { Form } from '@/components/Form';
import { Advantages } from '@/components/Advantages';

import cases from '@/data/cases.json';
import common from '@/data/common.json';
import expertiseData from '@/data/expertise.json';

import s from '@/views/ExampleSection/ExampleSection.module.css';

const { messages } = expertiseData;

const mnemocode = ['🥐', '👔', '⚖️', '💅', '🏠'];

export const ExampleSection = () => (
  <section
    id="expertise"
    className={`${s.section}  text-shadow-xxs container relative h-[150vh]`}
  >
    <h2 className="mt-[100px]">This is example of section</h2>
    <Countdown into="hero" />

    {/* Кнопка детальніше */}
    <Button
      tag="a"
      accent={false}
      href="about"
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

    {/* Кнопка із свг */}
    <Button tag="a" accent={false} className="mb-[10px]">
      {common.buttonsText.v5}
      <Icon
        icon="arrow"
        width={8}
        height={8}
        className="ml-[5px] inline-block -rotate-[135deg]"
      />
    </Button>

    {/* Кнопки соціальні із свг */}
    <SocialsMenu />
    {/* Кнопки усі із свг icon="назва"*/}
    <Icon icon="arrow" width={24} height={24} />
    {/* Приклад списку кейсів, пропси на картку без назви, просто розпилити */}
    <ul className="flex flex-wrap gap-5">
      {cases.cases.slice(-3).map((cardProps, idx) => (
        <CaseCard key={idx} {...cardProps} />
      ))}
    </ul>
    {/* аккoрдeon */}
    <Accordion />

    {/* Form */}

    <Form className="mx-auto mt-10" />

    {/* мнемокод vs png */}

    <p className="mt-10 text-center">PNG</p>

    <ul className="mx-auto mt-10 flex justify-center gap-4">
      {messages.map(({ decorImage, username }) => {
        const styles = { backgroundImage: `url(${decorImage})` };

        const className = classNames('h-6 w-6 bg-cover bg-center bg-no-repeat');

        return (
          <li key={username}>
            <div className={className} style={styles}></div>
          </li>
        );
      })}
    </ul>

    <p className="mt-10 text-center">Мнемокод</p>

    <ul className="mx-auto mt-10 flex justify-center gap-4">
      {mnemocode.map(decorImageCode => (
        <li key={decorImageCode}>
          <p className="text-xl">{decorImageCode}</p>
        </li>
      ))}
    </ul>

    <Advantages />
    {/* Елемент для тестування скролу */}
    <div
      id="about"
      className={`${s.div} text-shadow-xxs container relative  h-[350vh] w-[100%] bg-[url('/images/bg/bgdesk.webp')]`}
    >
      Тестовий сектор id=about для перевірки роботи навігації
    </div>
  </section>
);
