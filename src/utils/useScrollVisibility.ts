import { useEffect, useState } from 'react';

export const useScrollVisibility = (sectionIdStart: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thirdSection = document.getElementById(sectionIdStart);
      if (!thirdSection) return;

      const thirdSectionPosition = thirdSection.getBoundingClientRect().top;

      setIsVisible(thirdSectionPosition <= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIdStart]);

  return isVisible;
};
