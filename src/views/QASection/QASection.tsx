import { Accordion } from '@/components/Accordion';
import { Parallax } from '@/components/ui/Parallax';
import data from '@/data/qa.json';

const { title } = data;

export const QASection = () => (
  <section className="section bg ">
    <Parallax offset={200} damping={40} stiffness={500} div={true}>
      <div className=" qa absolute h-full w-full"></div>
    </Parallax>
    <div className="container relative flex flex-col items-center">
      <h2 className="heading2 mb-8 xl:absolute xl:right-[50px]">{title}</h2>
      <Accordion />
    </div>
  </section>
);
