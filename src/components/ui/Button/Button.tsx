import Link from 'next/link';

import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ href = '/', onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`block text-center rounded-[32px] shadow-[0_0_35px_0_#AB40FF] py-[12px] px-[10px] w-full max-w-[448px] bg-[#B454FF]`}
    >
      <span className=" text-white text-[18px] leading-[1.2]">some text</span>
    </Link>
  );
};

// color: #FFF;
// font-family: Google Sans;
// font-size: 18px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
