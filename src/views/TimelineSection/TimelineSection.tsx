import Image from 'next/image';
import { timeline } from '@/constants';
import { TimelineList } from '@/components/TimelineList';
import data from '@/data/timeline.json';

export const TimelineSection: React.FC = () => {
  return (
    <section className="section bg timeline xl:h-[1130px]" id={timeline}>
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
