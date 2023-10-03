import { apply } from '@/constants';
import { Form } from '@/components/Form';
import data from '@/data/form.json';

const { title } = data;

export const ApplyForm = () => {
  return (
    <section
      id={apply}
      className="pb-[100px] pt-[100px] md:pb-[125px] xl:pb-[165px] xl:pt-[150px]"
    >
      <div className="container xl:flex xl:gap-[90px]">
        <h2
          className="mb-10 text-center font-dela_gothic text-xxl_middle uppercase text-shadow-text
                     md:w-[328px] xl:text-right xl:text-xxxl_small mdOnly:mx-auto"
        >
          {title}
        </h2>
        <Form className="mdOnly:mx-auto" />
      </div>
    </section>
  );
};
