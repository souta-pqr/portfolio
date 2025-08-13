import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// マトリックス風文字の背景
const MatrixRain = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // キャンバスサイズを設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // マトリックス文字
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const alphabet = katakana + latin;
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

// 量子パーティクル
const QuantumParticle = ({ id, delay = 0 }) => {
  const controls = useAnimationControls();
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  });
  
  const colors = ['#00ff41', '#0088ff', '#ff0041', '#ffff00', '#ff4100', '#8800ff'];
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [size] = useState(Math.random() * 4 + 1);
  
  const animate = async () => {
    while (true) {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      const duration = Math.random() * 8 + 4;
      
      await controls.start({
        x: newX,
        y: newY,
        transition: {
          duration,
          ease: "linear"
        }
      });
      
      setPosition({ x: newX, y: newY });
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, delay * 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      animate={controls}
      className="fixed rounded-full pointer-events-none"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        boxShadow: `0 0 ${size * 4}px ${color}`,
        zIndex: 2
      }}
      initial={{ x: position.x, y: position.y, opacity: 0.6 }}
    />
  );
};

// グリッチ効果
const GlitchOverlay = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10%の確率でグリッチ
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  if (!isGlitching) return null;
  
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `
          linear-gradient(90deg, transparent 0%, rgba(255, 0, 65, 0.03) 50%, transparent 100%),
          linear-gradient(0deg, transparent 0%, rgba(0, 255, 65, 0.03) 50%, transparent 100%)
        `,
        animation: 'glitch-effect 0.2s infinite',
        zIndex: 4
      }}
    >
      <style jsx>{`
        @keyframes glitch-effect {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

// スキャンライン
const Scanlines = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff41, transparent)',
          animation: 'scan 3s linear infinite',
          zIndex: 5
        }}
      />
      <div
        className="fixed top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #ff0041, transparent)',
          animation: 'scan 4s linear infinite',
          animationDelay: '1s',
          zIndex: 5
        }}
      />
      <style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }
      `}</style>
    </>
  );
};

// ホログラムグリッド
const HologramGrid = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
        zIndex: 1
      }}
    >
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

// エネルギーウェーブ
const EnergyWaves = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-cyan-400 opacity-20"
          style={{
            width: '200px',
            height: '200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `energy-pulse ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes energy-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0.1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// データストリーム
const DataStream = () => {
  const [streams, setStreams] = useState([]);
  
  useEffect(() => {
    const generateStreams = () => {
      return Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
    };
    
    setStreams(generateStreams());
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"
          style={{
            left: `${stream.left}%`,
            height: '100%',
            animation: `data-flow ${stream.animationDuration}s linear infinite`,
            animationDelay: `${stream.delay}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes data-flow {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// メインのサイバーパンク背景コンポーネント
const CyberpunkBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      {/* ベース背景 */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        style={{
          background: `
            radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)
          `
        }}
      />
      
      {/* マトリックス雨 */}
      <MatrixRain />
      
      {/* ホログラムグリッド */}
      <HologramGrid />
      
      {/* 量子パーティクル */}
      {Array.from({ length: 50 }).map((_, i) => (
        <QuantumParticle key={i} id={i} delay={i} />
      ))}
      
      {/* エネルギーウェーブ */}
      <EnergyWaves />
      
      {/* データストリーム */}
      <DataStream />
      
      {/* スキャンライン */}
      <Scanlines />
      
      {/* グリッチ効果 */}
      <GlitchOverlay />
      
      {/* マウス追従効果 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          zIndex: 3
        }}
      />
    </div>
  );
};

export default CyberpunkBackground;
