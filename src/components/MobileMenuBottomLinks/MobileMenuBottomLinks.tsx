import React from 'react';

import { CustomLink } from '../ui/CustomLink';

import outer from '@/data/footer.json';

export const MobileMenuBottomLinks: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-0 flex w-full justify-between px-4">
      <div>
        <span className="block font-inter text-xs text-grey">
          {outer.rights.title}
        </span>
        <CustomLink
          href={outer.rights.list[0].href}
          text={outer.rights.list[0].text}
          className="btn-transition mt-5 block font-inter text-xs 
          text-grey hover:text-lightGray active:text-white"
        />
      </div>

      <div>
        <CustomLink
          href={outer.terms.href}
          text={outer.terms.text}
          className="btn-transition block font-inter text-xs 
          text-grey hover:text-lightGray active:text-white"
        />

        <CustomLink
          href={outer.policy.href}
          text={outer.policy.text}
          className="btn-transition mt-5 block font-inter text-xs 
          text-grey hover:text-lightGray active:text-white"
        />
      </div>
    </div>
  );
};
