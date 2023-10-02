// export interface SectionProps {
//   section: 'cases' | 'services' | 'expertise';
// }

export interface SliderProps {
  section: 'cases' | 'services' | 'expertise';
  pagination?: boolean;
  navigation?: boolean;
  autoplay?: boolean;
  data: any;
  element: any;
  allowTouchMove?: boolean;
  className?: string;
  slideClassName?: string;
}
