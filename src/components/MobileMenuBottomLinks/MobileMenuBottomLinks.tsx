import React from 'react';

import { CustomLink } from '../ui/CustomLink';

import outer from '@/data/footer.json';

export const MobileMenuBottomLinks: React.FC = () => {
  return (
    <div className=" mx-auto mt-[121px] flex w-full max-w-[328px] justify-between pb-[32px]">
      <div>
        <span className="block text-xs text-grey">{outer.rights.title}</span>
        <CustomLink
          href={outer.rights.list[0].href}
          text={outer.rights.list[0].text}
          className="btn-transition mt-5 block text-xs 
          text-grey hover:text-lightGray active:text-white"
        />
      </div>

      <div>
        <CustomLink
          href={outer.terms.href}
          text={outer.terms.text}
          className="btn-transition block text-xs 
          text-grey hover:text-lightGray active:text-white"
        />

        <CustomLink
          href={outer.policy.href}
          text={outer.policy.text}
          className="btn-transition mt-5 block text-xs 
          text-grey hover:text-lightGray active:text-white"
        />
      </div>
    </div>
  );
};
