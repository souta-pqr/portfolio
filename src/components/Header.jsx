import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white dark:bg-dark-secondary shadow-sm transition-colors duration-300">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            小堀 聡太
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            千葉工業大学先進工学部未来ロボティクス学科 藤江研究室
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;