import React from 'react';
import { Monitor, Laptop, Cpu, HardDrive, Keyboard, Mouse, Wifi, Database, Server, Terminal } from 'lucide-react';

const CyberGadget = ({ icon: Icon, delay = 0, className = '', color = 'cyber-primary' }) => {
  const colors = {
    'cyber-primary': '#00ff41',
    'cyber-cyan': '#00ffff',
    'cyber-pink': '#ff0088',
    'cyber-orange': '#ff4400',
    'cyber-purple': '#8800ff',
    'cyber-blue': '#0088ff'
  };

  return (
    <div 
      className={`fixed transform transition-all duration-300 hover:scale-110 ${className} z-5`}
      style={{
        animation: `cyber-float ${4 + Math.random() * 2}s ease-in-out infinite ${delay}s`,
      }}
    >
      <div className="relative">
        {/* グロー効果 */}
        <div 
          className="absolute inset-0 rounded-full blur-lg opacity-60"
          style={{
            background: `radial-gradient(circle, ${colors[color]}40, transparent)`,
            transform: 'scale(2)',
          }}
        />
        
        {/* アイコン */}
        <Icon 
          className="w-8 h-8 relative z-10 transition-all duration-300 hover:rotate-12"
          style={{
            color: colors[color],
            filter: `drop-shadow(0 0 10px ${colors[color]})`,
            animation: `color-shift-${color} ${8 + Math.random() * 4}s linear infinite`
          }}
        />
        
        {/* エネルギーリング */}
        <div 
          className="absolute inset-0 rounded-full border opacity-30"
          style={{
            borderColor: colors[color],
            animation: `ring-pulse ${3 + Math.random()}s ease-in-out infinite ${delay}s`
          }}
        />
      </div>
    </div>
  );
};

const DataNode = ({ x, y, size = 4, color = 'cyber-primary', delay = 0 }) => {
  const colors = {
    'cyber-primary': '#00ff41',
    'cyber-cyan': '#00ffff',
    'cyber-pink': '#ff0088',
    'cyber-orange': '#ff4400',
  };

  return (
    <div
      className="fixed rounded-full opacity-70"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        backgroundColor: colors[color],
        boxShadow: `0 0 ${size * 2}px ${colors[color]}`,
        animation: `data-pulse ${2 + Math.random()}s ease-in-out infinite ${delay}s`,
        zIndex: 1
      }}
    />
  );
};

const EnergyLine = ({ from, to, color = 'cyber-cyan', duration = 3 }) => {
  const colors = {
    'cyber-primary': '#00ff41',
    'cyber-cyan': '#00ffff',
    'cyber-pink': '#ff0088',
    'cyber-orange': '#ff4400',
  };

  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;

  return (
    <div
      className="fixed h-px opacity-40"
      style={{
        left: `${from.x}%`,
        top: `${from.y}%`,
        width: `${length}%`,
        background: `linear-gradient(90deg, transparent, ${colors[color]}, transparent)`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 50%',
        animation: `energy-flow ${duration}s linear infinite`,
        zIndex: 1
      }}
    />
  );
};

const GadgetDecorations = () => {
  // データノード配置
  const dataNodes = [
    { x: 10, y: 20, color: 'cyber-primary', delay: 0 },
    { x: 90, y: 25, color: 'cyber-cyan', delay: 0.5 },
    { x: 15, y: 80, color: 'cyber-pink', delay: 1 },
    { x: 85, y: 75, color: 'cyber-orange', delay: 1.5 },
    { x: 5, y: 50, color: 'cyber-primary', delay: 2 },
    { x: 95, y: 55, color: 'cyber-cyan', delay: 2.5 },
  ];

  // エネルギーライン接続
  const energyLines = [
    { from: { x: 10, y: 20 }, to: { x: 90, y: 25 }, color: 'cyber-cyan' },
    { from: { x: 15, y: 80 }, to: { x: 85, y: 75 }, color: 'cyber-pink' },
    { from: { x: 5, y: 50 }, to: { x: 95, y: 55 }, color: 'cyber-primary' },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes cyber-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-20px) rotate(-5deg); }
        }

        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.1; }
        }

        @keyframes data-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes energy-flow {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }

        @keyframes color-shift-cyber-primary {
          0% { filter: drop-shadow(0 0 10px #00ff41) hue-rotate(0deg); }
          25% { filter: drop-shadow(0 0 15px #00ff41) hue-rotate(90deg); }
          50% { filter: drop-shadow(0 0 10px #00ff41) hue-rotate(180deg); }
          75% { filter: drop-shadow(0 0 15px #00ff41) hue-rotate(270deg); }
          100% { filter: drop-shadow(0 0 10px #00ff41) hue-rotate(360deg); }
        }

        @keyframes color-shift-cyber-cyan {
          0% { filter: drop-shadow(0 0 10px #00ffff) hue-rotate(0deg); }
          33% { filter: drop-shadow(0 0 15px #00ffff) hue-rotate(120deg); }
          66% { filter: drop-shadow(0 0 10px #00ffff) hue-rotate(240deg); }
          100% { filter: drop-shadow(0 0 15px #00ffff) hue-rotate(360deg); }
        }

        @keyframes color-shift-cyber-pink {
          0% { filter: drop-shadow(0 0 10px #ff0088) hue-rotate(0deg); }
          50% { filter: drop-shadow(0 0 15px #ff0088) hue-rotate(180deg); }
          100% { filter: drop-shadow(0 0 10px #ff0088) hue-rotate(360deg); }
        }

        @keyframes color-shift-cyber-orange {
          0% { filter: drop-shadow(0 0 10px #ff4400) hue-rotate(0deg); }
          25% { filter: drop-shadow(0 0 15px #ff4400) hue-rotate(90deg); }
          50% { filter: drop-shadow(0 0 12px #ff4400) hue-rotate(180deg); }
          75% { filter: drop-shadow(0 0 15px #ff4400) hue-rotate(270deg); }
          100% { filter: drop-shadow(0 0 10px #ff4400) hue-rotate(360deg); }
        }

        @keyframes color-shift-cyber-purple {
          0% { filter: drop-shadow(0 0 10px #8800ff) hue-rotate(0deg); }
          33% { filter: drop-shadow(0 0 15px #8800ff) hue-rotate(120deg); }
          66% { filter: drop-shadow(0 0 12px #8800ff) hue-rotate(240deg); }
          100% { filter: drop-shadow(0 0 15px #8800ff) hue-rotate(360deg); }
        }

        @keyframes color-shift-cyber-blue {
          0% { filter: drop-shadow(0 0 10px #0088ff) hue-rotate(0deg); }
          50% { filter: drop-shadow(0 0 15px #0088ff) hue-rotate(180deg); }
          100% { filter: drop-shadow(0 0 10px #0088ff) hue-rotate(360deg); }
        }
      `}</style>
      
      {/* 左側ガジェット */}
      <div className="fixed left-2 md:left-4 inset-y-0 pointer-events-none">
        <CyberGadget 
          icon={Monitor} 
          delay={0} 
          className="top-1/6"
          color="cyber-primary"
        />
        <CyberGadget 
          icon={Cpu} 
          delay={0.8} 
          className="top-2/6"
          color="cyber-cyan"
        />
        <CyberGadget 
          icon={Terminal} 
          delay={1.6} 
          className="top-3/6"
          color="cyber-pink"
        />
        <CyberGadget 
          icon={Database} 
          delay={2.4} 
          className="top-4/6"
          color="cyber-orange"
        />
        <CyberGadget 
          icon={Keyboard} 
          delay={3.2} 
          className="top-5/6"
          color="cyber-purple"
        />
      </div>

      {/* 右側ガジェット */}
      <div className="fixed right-2 md:right-4 inset-y-0 pointer-events-none">
        <CyberGadget 
          icon={Laptop} 
          delay={0.4} 
          className="top-1/6"
          color="cyber-cyan"
        />
        <CyberGadget 
          icon={Server} 
          delay={1.2} 
          className="top-2/6"
          color="cyber-pink"
        />
        <CyberGadget 
          icon={Wifi} 
          delay={2.0} 
          className="top-3/6"
          color="cyber-primary"
        />
        <CyberGadget 
          icon={HardDrive} 
          delay={2.8} 
          className="top-4/6"
          color="cyber-blue"
        />
        <CyberGadget 
          icon={Mouse} 
          delay={3.6} 
          className="top-5/6"
          color="cyber-orange"
        />
      </div>

      {/* データノード */}
      {dataNodes.map((node, index) => (
        <DataNode
          key={index}
          x={node.x}
          y={node.y}
          color={node.color}
          delay={node.delay}
          size={4 + Math.random() * 3}
        />
      ))}

      {/* エネルギーライン */}
      {energyLines.map((line, index) => (
        <EnergyLine
          key={index}
          from={line.from}
          to={line.to}
          color={line.color}
          duration={3 + Math.random() * 2}
        />
      ))}

      {/* コーナー UI エレメント */}
      <div className="fixed top-4 left-4 pointer-events-none z-10">
        <div className="flex items-center space-x-2 bg-dark-secondary bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded border border-cyber-primary border-opacity-30">
          <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>
          <span className="text-xs font-mono-cyber text-cyber-secondary">SYS.ONLINE</span>
        </div>
      </div>

      <div className="fixed top-4 right-4 pointer-events-none z-10">
        <div className="flex items-center space-x-2 bg-dark-secondary bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded border border-cyber-cyan border-opacity-30">
          <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"></div>
          <span className="text-xs font-mono-cyber text-cyber-secondary">NET.ACTIVE</span>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 pointer-events-none z-10">
        <div className="flex items-center space-x-2 bg-dark-secondary bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded border border-cyber-orange border-opacity-30">
          <div className="w-2 h-2 bg-cyber-orange rounded-full animate-pulse"></div>
          <span className="text-xs font-mono-cyber text-cyber-secondary">PWR.OPTIMAL</span>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 pointer-events-none z-10">
        <div className="flex items-center space-x-2 bg-dark-secondary bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded border border-cyber-pink border-opacity-30">
          <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse"></div>
          <span className="text-xs font-mono-cyber text-cyber-secondary">SEC.ENABLED</span>
        </div>
      </div>
    </>
  );
};

export default GadgetDecorations;
