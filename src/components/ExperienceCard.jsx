import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ExperienceCard = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="relative bg-dark-secondary bg-opacity-90 backdrop-blur-md rounded-xl 
                 border border-cyber-primary border-opacity-30 shadow-cyber
                 hover:border-opacity-60 hover:shadow-cyber-lg transition-all duration-300 z-20"
      whileHover={{ translateY: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 装飾的なコーナーエレメント */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyber-primary opacity-40"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyber-primary opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyber-primary opacity-40"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyber-primary opacity-40"></div>

      {/* ヘッダー部分 */}
      <motion.button
        className="w-full p-6 text-left focus:outline-none relative z-10
                   hover:bg-cyber-primary hover:bg-opacity-5 transition-all duration-300
                   focus:bg-cyber-primary focus:bg-opacity-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* アイコン */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-primary opacity-20 rounded-full blur-md"></div>
              <Icon className="w-7 h-7 text-cyber-primary relative z-10 text-glow" />
            </div>
            
            {/* タイトル */}
            <h2 className="text-xl md:text-2xl font-cyber font-bold text-cyber-primary text-glow tracking-wide">
              {title}
            </h2>
          </div>
          
          {/* 展開アイコン */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyber-cyan opacity-20 rounded-full blur-sm"></div>
            <ChevronDown className="w-6 h-6 text-cyber-cyan relative z-10" />
          </motion.div>
        </div>

        {/* ステータスライン */}
        <div className="mt-3 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyber-primary rounded-full animate-cyber-pulse"></div>
            <span className="text-xs font-mono-cyber text-cyber-muted tracking-wide">
              {isOpen ? 'EXPANDED' : 'COLLAPSED'}
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-primary via-transparent to-cyber-primary opacity-30"></div>
        </div>
      </motion.button>

      {/* コンテンツ部分 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              opacity: { delay: isOpen ? 0.1 : 0 }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-cyber-secondary relative">
              {/* 装飾的なデータライン */}
              <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-30"></div>
              
              {/* メインコンテンツ */}
              <div className="pt-4 relative z-10">
                {children}
              </div>
              
              {/* 底部装飾 */}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyber-muted rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyber-muted rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-cyber-muted rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* グロー効果 */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber-primary via-transparent to-cyber-cyan opacity-5 pointer-events-none"></div>
    </motion.div>
  );
};

export default ExperienceCard;
