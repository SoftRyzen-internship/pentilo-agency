export interface SectionProps {
  section: 'cases' | 'services' | 'hero';
}

export interface SliderProps extends SectionProps {
  section: 'cases' | 'services' | 'hero';
  pagination?: boolean;
  navigation?: boolean;
  autoplay?: boolean;
  data: any;
  element: any;
  className?: string;
  slideClassName?: string;
  loop?: boolean;
}
