'use client';

import { scrollToTop } from '@/utils/scrollToTop';

export const ScrollToTopButton = () => {
  return (
      <button
        className="fixed bottom-10 right-10 bg-blue-500 text-white rounded-full w-14 h-14 cursor-pointer hover:bg-blue-700"
        onClick={scrollToTop}
      >
        arr
      </button>
  );
};
