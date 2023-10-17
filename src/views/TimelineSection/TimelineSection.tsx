import Image from 'next/image';
import { timeline } from '@/constants';
import { TimelineList } from '@/components/TimelineList';
import { Parallax } from '@/components/ui/Parallax';
import data from '@/data/timeline.json';

export const TimelineSection: React.FC = () => {
  return (
    <section className="section bg  xl:h-[1130px]" id={timeline}>
      <Parallax offset={250} damping={40} stiffness={500} div={true}>
        <div className=" timeline absolute h-full w-full"></div>
      </Parallax>
      <div className="container xl:relative xl:flex xl:h-full">
        <h2 className="hidden">{data.hiddenTitle}</h2>

        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          width={545}
          height={372}
          className="mb-10 object-contain md:mx-auto md:h-[372px] 
          md:w-[545px] md:object-right xl:mx-0 xl:mb-0 xl:-translate-y-[26px]"
        />

        <TimelineList />
      </div>
    </section>
  );
};
