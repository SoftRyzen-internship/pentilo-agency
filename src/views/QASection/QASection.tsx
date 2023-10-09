import { Accordion } from '@/components/Accordion';

import data from '@/data/qa.json';

export const QASection = () => {
  const { title } = data;
  return (
    <section className="section bg qa">
      <div className="container relative flex flex-col items-center">
        <h2 className="heading2  mb-8 xl:absolute xl:right-[50px]">{title}</h2>

        <Accordion />
      </div>
    </section>
  );
};
