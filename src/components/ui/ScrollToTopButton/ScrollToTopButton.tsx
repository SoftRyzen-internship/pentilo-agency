'use client';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { smoothScroll } from '@/utils';

import css from './ScrollToTopButton.module.css';

export const ScrollToTopButton = ({ sectionIdStart }) => {
  const isVisible = useScrollVisibility(sectionIdStart);

  return (
    <a
      href="#top"
      className={`${css.scrollBtn} fixed bottom-10 right-10 bg-purple-light text-white rounded-full w-14 h-14 cursor-pointer hover:bg-purple-hover
         shadow-button transition-opacity btn-transition ${
           isVisible ? 'opacity-100' : 'opacity-0'
         }`}
      onClick={(e: React.MouseEvent) => smoothScroll(e)}
      aria-label="Повернутись догори"
      role="button"
    ></a>
  );
};
