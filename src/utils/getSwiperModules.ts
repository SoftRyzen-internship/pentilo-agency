import { SwiperModule } from 'swiper/types';

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/modules';
import { SCREEN_DESKTOP } from '@/constants';

export function getSwiperModules(section: any, width: any): SwiperModule[] {
  let modules = [Pagination, Navigation];

  if (section === 'cases' && width >= SCREEN_DESKTOP) {
    modules.push(EffectCoverflow);
  }
  if (section === 'hero' && width !== null && width < 1440) {
    modules.push(Autoplay);
  }

  return modules;
}
