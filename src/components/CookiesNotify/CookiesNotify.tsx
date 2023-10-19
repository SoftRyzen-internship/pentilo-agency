import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { fadeInAndOutCookies } from '@/variants';
import data from '@/data/common.json';

const { text, buttonText } = data.cookie;

export const CookiesNotify = ({ onClose, isHidden }) => (
  <AnimatePresence initial={false}>
    <motion.div
      variants={fadeInAndOutCookies}
      animate={isHidden ? 'hidden' : 'visible'}
      className="fixed left-0 top-0 z-40 h-[100%] w-[100%] overflow-auto bg-black-dark/75"
    >
      <div
        className="fixed bottom-[100px] left-1/2 z-50 w-[80%] max-w-[1280px] -translate-x-1/2 rounded-2xl
         border border-purple-dark bg-body px-8 py-5 xl:flex xl:items-center xl:gap-9"
      >
        <p className="mb-5 xl:mb-0">{text}</p>
        <Button
          tag="button"
          accent={false}
          buttonType="button"
          onClick={onClose}
          className="mx-auto h-[31px] w-[129px] rounded-button px-[10px] py-[8px] text-xs uppercase before:content-['']"
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  </AnimatePresence>
);
