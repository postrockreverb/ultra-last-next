import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadedBoxProps {
  children: ReactNode;
  delaySec?: number;
}

export const Fade = ({ children, delaySec = 0 }: FadedBoxProps) => (
  <motion.div initial={{ y: 3, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: delaySec }}>
    {children}
  </motion.div>
);
