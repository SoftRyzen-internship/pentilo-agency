import { SwiperModule } from 'swiper/types';

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/modules';

export function getSwiperModules(section: any, width: any): SwiperModule[] {
  let modules = [Pagination, Navigation];

  if (section === 'cases') {
    modules.push(EffectCoverflow);
  }
  if (section != 'cases' && width !== null && width < 1440) {
    modules.push(Autoplay);
  }
  return modules;
}
