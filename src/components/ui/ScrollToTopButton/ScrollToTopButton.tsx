'use client';

import { scrollToTop } from '@/utils/scrollToTop';
import { useScrollVisibility } from '@/utils/useScrollVisibility';
import Link from 'next/link';

export const ScrollToTopButton = ({ sectionIdStart }) => {
  const isVisible = useScrollVisibility(sectionIdStart);

  return (
    <Link
      href="#top"
      className={`btn-transition scroll-to-top-button fixed bottom-10 right-10 h-14 w-14 cursor-pointer rounded-full bg-purple-light
         text-white shadow-button transition-opacity hover:bg-purple-hover ${
           isVisible ? 'opacity-100' : 'opacity-0'
         }`}
      onClick={scrollToTop}
      aria-label="Повернутись догори"
      role="button"
    ></Link>
  );
};
