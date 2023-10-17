'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

import { useState, useRef, useLayoutEffect } from 'react';

import { ParallaxProps } from './types';

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  offset = 50,
  damping = 90,
  stiffness = 400,
  div = false,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  // const ref = useRef<HTMLSpanElement | HTMLDivElement>(null);

  const refDiv = useRef<HTMLDivElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness, damping });

  useLayoutEffect(() => {
    const element: HTMLElement | null = refSpan.current || refDiv.current;
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
  }, [refDiv, refSpan]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return div ? (
    <motion.div ref={refDiv} style={{ y }}>
      {children}
    </motion.div>
  ) : (
    <motion.span ref={refSpan} style={{ y }} className="block">
      {children}
    </motion.span>
  );
};
