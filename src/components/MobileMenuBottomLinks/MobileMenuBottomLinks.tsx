import React from 'react';

import { OuterLink } from '../ui/OuterLink';

import outer from '@/data/footer.json';

export const MobileMenuBottomLinks: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-0 flex w-full justify-between px-4">
      <div>
        <OuterLink
          href={outer.rights.list[0].href}
          title={outer.rights.title}
          className="mt-5"
        >
          {outer.rights.list[0].text}
        </OuterLink>
      </div>

      <div>
        <OuterLink href={outer.terms.href}>{outer.terms.text}</OuterLink>
        <OuterLink href={outer.policy.href} className="mt-5">
          {outer.policy.text}
        </OuterLink>
      </div>
    </div>
  );
};
