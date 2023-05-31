import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, x: -30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 },
};

interface ContentLayoutProps {
  children: ReactNode;
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <motion.main variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: 'linear', duration: 0.4 }}>
      {children}
    </motion.main>
  );
};
