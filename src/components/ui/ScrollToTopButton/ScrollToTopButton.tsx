'use client';

import classNames from 'classnames';
import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { smoothScroll } from '@/utils';

import css from './ScrollToTopButton.module.css';

export const ScrollToTopButton = ({ sectionIdStart }) => {
  const isVisible = useScrollVisibility(sectionIdStart);

  const arrowClasses = classNames(
    css.scrollBtn,
    'btn-transition fixed bottom-10 right-10 h-14 w-14 cursor-pointer bg-purple-light text-white',
    'rounded-full shadow-button transition-opacity hover:bg-purple-hover',
    { 'opacity-0': !isVisible },
  );

  return (
    <a
      href="#top"
      className={arrowClasses}
      onClick={(e: React.MouseEvent) => smoothScroll(e)}
      aria-label="Повернутись догори"
      role="button"
    />
  );
};
