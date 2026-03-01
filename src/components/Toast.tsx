import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[300] bg-brand-black text-brand-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[300px]"
        >
          <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
            <Info size={18} />
          </div>
          <p className="text-sm font-medium flex-1">{message}</p>
          <button onClick={onClose} className="text-brand-white/40 hover:text-brand-white transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
