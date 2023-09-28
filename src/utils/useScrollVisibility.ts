import { useEffect, useState } from 'react';

export const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thirdSection = document.getElementById('expertise');
      if (!thirdSection) return;

      const thirdSectionPosition = thirdSection.getBoundingClientRect().top;

      setIsVisible(thirdSectionPosition <= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
};
