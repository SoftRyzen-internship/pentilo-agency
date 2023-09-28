'use client';

import { scrollToTop } from '@/utils/scrollToTop';
import { useScrollVisibility } from '@/utils/useScrollVisibility';
import Link from 'next/link';

export const ScrollToTopButton = () => {
    const isVisible = useScrollVisibility();

  return (
    <Link href="#top"
      className={`fixed bottom-10 right-10 bg-purple-light text-white rounded-full w-14 h-14 cursor-pointer hover:bg-purple-hover
         shadow-button transition-opacity btn-transition ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      aria-label="Повернутись догори"
      role="button"
    >
      ↑
    </Link>
  );
};