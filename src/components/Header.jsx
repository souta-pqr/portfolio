import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">小堀 聡太</h1>
          <p className="mt-2 text-gray-600 leading-relaxed">
            千葉工業大学先進工学部未来ロボティクス学科 藤江研究室
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;