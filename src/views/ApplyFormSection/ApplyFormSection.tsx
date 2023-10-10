import { apply } from '@/constants';
import { Form } from '@/components/Form';
import data from '@/data/form.json';

const { title } = data;

export const ApplyFormSection = () => {
  return (
    <section
      id={apply}
      className="section pb-[100px] md:pb-[125px] xl:pb-[165px]"
    >
      <div className="container xl:flex xl:gap-[90px]">
        <h2 className="heading2 mb-10 text-center md:w-[328px] xl:text-right mdOnly:mx-auto">
          {title}
        </h2>
        <Form className="mdOnly:mx-auto" />
      </div>
    </section>
  );
};
