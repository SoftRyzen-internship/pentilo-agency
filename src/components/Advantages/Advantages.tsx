// import React from 'react';

// import data from '@/data/advantages.json';
// import css from './Advantages.module.css';

// import { Parallax } from '@/components/ui/Parallax';
// import { AdvantagesList } from '@/components/AdvantagesList';
// import { AdvantagesProps } from './types';

// export const Advantages: React.FC<AdvantagesProps> = ({ className }) => {
//   return (
//     <div className={`${className}`} id="advantages">
//       <h2
//         className=" xl:max-w-none mx-auto mb-4 max-w-[287px] text-center font-dela_gothic
//       uppercase text-shadow-text md:mb-6 md:max-w-[486px] xl:mb-[15px]  xl:w-full xl:text-left"
//       >
//         <Parallax offset={20}>
//           <span className="block text-[34px] leading-[1.2] blur-[2.5px] xl:text-[52px] xl:blur-[3.43px]">
//             {data.title.blur}
//           </span>
//         </Parallax>
//         <span
//           className={`xl:max-w-none ml-1 block -translate-x-1 -translate-y-[16px] text-xxl_middle md:mx-auto
//         md:max-w-[391px] xl:-translate-x-0 xl:-translate-y-[25px] xl:text-xxxl_small ${css.focusTitle}`}
//         >
//           {data.title.focus}
//         </span>
//       </h2>
//       <AdvantagesList />
//     </div>
//   );
// };
