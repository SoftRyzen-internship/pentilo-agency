import React from 'react';

import { Icon } from '../ui/Icon';

export const MobileMenu: React.FC = () => {
  return (
    <div className="ml-auto">
      <button type="button" onClick={() => {}} className="xl:hidden">
        <Icon icon="burger" width={16} height={13} />
      </button>
    </div>
  );
};
