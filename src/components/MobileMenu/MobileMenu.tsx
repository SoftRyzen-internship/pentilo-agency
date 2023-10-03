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
            className="container fixed left-0  top-0 h-[100vh] w-[100vw] bg-body px-4 pb-[32px] pt-[9px] xl:hidden"
          >
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
              className="mx-auto mt-8  w-[153px] text-xs uppercase md:w-[153px]"
            >
              {common.buttonsText.v1}
            </Button>

            <SocialsMenu
              variant="mobile-menu"
              className=" mt-8 justify-center"
            />

            <MobileMenuBottomLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
