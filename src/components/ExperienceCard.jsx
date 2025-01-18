import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ExperienceCard = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="relative bg-white dark:bg-dark-secondary rounded-xl shadow-lg 
                 dark:shadow-none border border-gray-100 dark:border-gray-700 
                 transition-all duration-300 z-10" // z-indexを10に設定
      whileHover={{ translateY: -2 }}
    >
      <motion.button
        className="w-full p-6 text-left focus:outline-none focus:bg-gray-50 
                   dark:focus:bg-dark-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceCard;