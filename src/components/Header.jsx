import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState('小堀 聡太');
  
  const glitchTexts = [
    '小堀 聡太',
    'K0b0r1 50ut4',
    '████ ████',
    'S.KOBORI',
    '小堀 聡太'
  ];
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.15) { // 15%の確率でグリッチ
        setIsGlitching(true);
        let glitchIndex = 0;
        
        const glitchAnimation = setInterval(() => {
          setDisplayText(glitchTexts[glitchIndex % glitchTexts.length]);
          glitchIndex++;
          
          if (glitchIndex >= glitchTexts.length) {
            clearInterval(glitchAnimation);
            setDisplayText('小堀 聡太');
            setIsGlitching(false);
          }
        }, 100);
      }
    }, 8000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <header className="bg-dark-secondary bg-opacity-90 backdrop-blur-md border-b border-cyber-primary border-opacity-30 shadow-cyber transition-all duration-300 relative overflow-hidden">
      <div className="max-w-4xl mx-auto py-8 px-4 relative">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-neon-grid opacity-5 animate-pulse"></div>
        
        <div className="flex items-start justify-between relative z-10">
          {/* 左側：メイン情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            {/* メイン名前 */}
            <motion.h1 
              className={`text-4xl md:text-5xl font-cyber font-black tracking-cyber text-cyber-primary transition-all duration-300 ${
                isGlitching ? 'animate-glitch text-cyber-pink' : 'text-glow'
              }`}
              style={{
                textShadow: isGlitching 
                  ? '0 0 20px #ff0088, 0 0 40px #ff0088' 
                  : '0 0 20px #00ff41, 0 0 40px #00ff41',
              }}
            >
              {displayText}
            </motion.h1>
            
            {/* サブタイトル */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4"
            >
              <p className="text-lg md:text-xl text-cyber-secondary font-mono-cyber tracking-wide leading-relaxed">
                <span className="text-cyber-cyan text-glow">千葉工業大学大学院</span>
                <span className="mx-2 text-cyber-muted">|</span>
                <span className="text-cyber-primary">先進工学研究科</span>
                <span className="mx-2 text-cyber-muted">|</span>
                <span className="text-cyber-cyan">未来ロボティクス専攻</span>
              </p>
              <p className="text-base md:text-lg text-cyber-muted font-mono-cyber mt-2 tracking-wide">
                <span className="text-cyber-orange text-glow">藤江研究室</span>
                <span className="mx-2">•</span>
                <span className="text-cyber-secondary">音声認識研究</span>
              </p>
            </motion.div>
            
            {/* ステータスインジケーター */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center mt-6 space-x-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyber-primary rounded-full animate-cyber-pulse"></div>
                <span className="text-sm font-mono-cyber text-cyber-secondary tracking-wide">
                  STATUS: ACTIVE
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
                <span className="text-sm font-mono-cyber text-cyber-secondary tracking-wide">
                  RESEARCH: ONGOING
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyber-orange rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-mono-cyber text-cyber-secondary tracking-wide">
                  BUILD: v2025.8
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* 右側：プロフィール写真 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="ml-8 relative"
          >
            {/* 写真コンテナ */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* 写真本体 */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyber-primary shadow-cyber-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 255, 65, 0.6)'
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/portfolio/profile-photo.jpg" // GitHub Pages用のパス
                  alt="小堀 聡太 - プロフィール写真"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* 装飾ライン */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-60"
        ></motion.div>
        
        {/* コーナー装飾 */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-primary opacity-60"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-primary opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-primary opacity-60"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-primary opacity-60"></div>
        
        {/* エネルギーライン */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyber-cyan via-transparent to-cyber-cyan opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cyber-pink via-transparent to-cyber-pink opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </header>
  );
};

export default Header;
