import { CustomLink } from '@/components/ui/CustomLink';
import { Logo } from '@/components/ui/Logo';
import { NavigationRow } from '@/components/ui/NavigationRow/NavigationRow';
import { SocialsMenu } from '@/components/ui/SocialsMenu';

import data from '@/data/footer.json';

export const Footer = () => {
  const { title, terms, email, policy, rights } = data;
  return (
    <footer className="container py-8 md:relative">
      <Logo className="mx-auto mb-8 block w-[101px] md:absolute md:left-[32px]  xl:left-[50px]" />
      <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[262px_1fr] xl:grid-cols-[388px_1fr]">
        <div className="text-xs md:order-2 md:pl-[91px] xl:pl-[111px] ">
          <h2 className="mb-4 font-bold text-grey ">{title}</h2>
          <CustomLink
            className="mb-5 block text-grey"
            href={email.href}
            text={email.text}
          />
          <SocialsMenu variant="footer" className="mb-10" />
          <div className=" md:absolute md:right-[32px] md:top-[32px] xl:right-[50px]">
            <p className="mb-4 text-grey md:text-right">{rights.title}</p>
            <CustomLink
              className="text-grey"
              href={rights.list[0].href}
              text={rights.list[0].text}
            />
          </div>
        </div>
        <div className="text-xs text-grey md:order-1 md:pl-[175px] xl:pl-[300px]">
          <NavigationRow variant="footer" />
          <div className=" md:absolute md:left-[32px] md:top-[100px] xl:left-[50px]">
            <CustomLink
              className="mt-6 block text-right md:mt-0"
              href={terms.href}
              text={terms.text}
            />
            <CustomLink
              className="mt-6  block text-right md:mt-4"
              href={policy.href}
              text={policy.text}
            />
          </div>
          <CustomLink
            className="right-[32px] top-[96px]  mt-6 block text-right md:absolute md:mt-0 xl:right-[50px] "
            href={rights.list[1].href}
            text={rights.list[1].text}
          />
        </div>
      </div>
    </footer>
  );
};
