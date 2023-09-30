import { useState, useRef, useLayoutEffect, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  offset = 50,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element: HTMLElement | null = ref.current;
    if (!element) return;

    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.span ref={ref} style={{ y }} className="block">
      {children}
    </motion.span>
  );
};
