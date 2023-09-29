import { Accordion } from '@/components/Accordion';
import s from '@/views/ExampleSection/ExampleSection.module.css';

export const ExampleSection = () => (
  <section className={`${s.section} mt-[100px]  h-[150vh] text-shadow-xxs `}>
    <Accordion />
  </section>
);
