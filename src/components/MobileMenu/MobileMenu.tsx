'use client';
import { motion, AnimatePresence } from 'framer-motion';

import React, { useState, useEffect } from 'react';

import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';
import { MobileMenuBtn } from '../MobileMenuBtn';
import { NavigationRow } from '../ui/NavigationRow';
import { Button } from '../ui/Button';
import { SocialsMenu } from '../ui/SocialsMenu';
import { MobileMenuBottomLinks } from '../MobileMenuBottomLinks';

import { mobileVariants } from './variants';
import common from '@/data/common.json';
import { apply } from '@/constants';

export const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {};
  }, [openMenu]);

  return (
    <>
      <MobileMenuBtn
        onClick={() => setOpenMenu(true)}
        aria={common.mobileMenu.menuBtnAriaText}
        className="xl:hidden"
      >
        <Icon icon="burger" width={16} height={13} />
      </MobileMenuBtn>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 h-screen w-full overflow-auto bg-body pt-[10px] xl:hidden"
          >
            <div className="container relative grid h-full grid-rows-[1fr_auto] ">
              <div>
                <Logo />
                <MobileMenuBtn
                  onClick={() => setOpenMenu(false)}
                  aria={common.mobileMenu.closeBtnAriaText}
                >
                  <Icon icon="cross" width={12} height={12} />
                </MobileMenuBtn>
                <NavigationRow
                  variant="mobile-menu"
                  onClick={() => setOpenMenu(false)}
                  className="mx-auto mt-[153px] max-w-max"
                />
                <Button
                  tag="a"
                  accent={true}
                  href={apply}
                  onClick={() => setOpenMenu(false)}
                  className="mx-auto mt-8 text-xs uppercase smOnly:max-w-[153px] mdOnly:max-w-[153px] mdOnly:py-[12.5px]"
                >
                  {common.buttonsText.v1}
                </Button>

                <SocialsMenu
                  variant="mobile-menu"
                  className=" mt-8 justify-center"
                />
              </div>

              <MobileMenuBottomLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
