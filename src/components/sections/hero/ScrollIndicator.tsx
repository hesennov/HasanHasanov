import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  label?: string;
}

export function ScrollIndicator({ label = 'Scroll' }: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] text-slate-600 tracking-[0.2em] uppercase">{label}</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
      >
        <div className="w-1 h-2 rounded-full bg-blue-400" />
      </motion.div>
    </motion.div>
  );
}
