'use client';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
// import { smoothScroll } from '@/utils';

import css from './ScrollToTopButton.module.css';

export const ScrollToTopButton = ({ sectionIdStart }) => {
  const isVisible = useScrollVisibility(sectionIdStart);

  return (
    <a
      href="#top"
      className={`${
        css.scrollBtn
      } btn-transition fixed bottom-10 right-10 h-14 w-14 cursor-pointer rounded-full bg-purple-light text-white
         shadow-button transition-opacity hover:bg-purple-hover ${
           isVisible ? 'opacity-100' : 'opacity-0'
         }`}
      // onClick={(e: React.MouseEvent) => smoothScroll(e)}
      aria-label="Повернутись догори"
      role="button"
    ></a>
  );
};
