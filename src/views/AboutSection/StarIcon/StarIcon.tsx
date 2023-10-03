import { Icon } from '@/components/ui/Icon';
export const StarIconBefore: React.FC = () => (
  <span className="relative inline-block before:mr-2 before:block before:h-[20px] before:w-[17px] before:content-['']">
    <Icon icon="star" className="absolute left-0 top-0 h-[20px] w-[17px]" />
  </span>
);

export const StarIconAfter: React.FC = () => (
  <span className="relative inline-block after:ml-2 after:block after:h-[20px] after:w-[17px] after:content-['']">
    <Icon icon="star" className="absolute right-0 top-0 h-[20px] w-[17px]" />
  </span>
);

export const CheckBoxIconBefore: React.FC = () => (
  <span className="relative inline-block before:mr-2 before:block before:h-[24px] before:w-[24px] before:content-['']">
    <Icon icon="checkbox" className="absolute left-0 top-0 h-[76px] w-[76px]" />
  </span>
);

export const QuestionMarkIconAfter: React.FC = () => (
  <span className="relative ml-1 inline-block after:ml-2 after:block after:h-[16px] after:w-[16px] after:content-['']">
    <Icon
      icon="questionMark"
      className="absolute right-0 top-0 h-[26px] w-[27px]"
    />
  </span>
);
