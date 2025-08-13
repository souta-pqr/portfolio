import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-4 bg-dark-secondary bg-opacity-90 backdrop-blur-md
                 border border-cyber-primary border-opacity-30 rounded-xl shadow-cyber
                 hover:border-opacity-60 hover:shadow-cyber-lg transition-all duration-300 z-50
                 group"
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {/* 背景グロー効果 */}
      <div className="absolute inset-0 bg-cyber-primary opacity-5 rounded-xl blur-md group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* アイコンコンテナ */}
      <div className="relative">
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-6 h-6 text-cyber-orange text-glow" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-6 h-6 text-cyber-cyan text-glow" />
          </motion.div>
        )}
        
        {/* パルス効果 */}
        <div className="absolute inset-0 rounded-full border border-cyber-primary opacity-30 animate-cyber-pulse"></div>
      </div>
      
      {/* ホバー時の追加エフェクト */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-cyber-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, transparent 40%, ${isDarkMode ? '#ff4400' : '#00ffff'}20 100%)`
        }}
      />
      
      {/* ステータス表示 */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-dark-secondary bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded border border-cyber-primary border-opacity-30">
          <span className="text-xs font-mono-cyber text-cyber-primary">
            {isDarkMode ? 'LIGHT' : 'DARK'}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
