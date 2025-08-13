import React, { useState, useEffect } from 'react';

const CyberpunkCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // トレイル効果
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }];
        return newTrail.slice(-5); // 最新5つのポイントを保持
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') ||
                           target.style.cursor === 'pointer';
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // カーソルを非表示にする
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* カーソルトレイル */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: 4,
            height: 4,
            backgroundColor: '#00ff41',
            borderRadius: '50%',
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.2s ease, transform 0.2s ease'
          }}
        />
      ))}

      {/* メインカーソル */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'transform 0.1s ease'
        }}
      >
        {/* 外側のリング */}
        <div
          className={`w-5 h-5 border-2 rounded-full transition-all duration-200 ${
            isHovering 
              ? 'border-cyan-400 scale-150' 
              : isClicking 
                ? 'border-red-400 scale-75' 
                : 'border-green-400'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(0, 255, 255, 0.6)' 
              : isClicking 
                ? '0 0 15px rgba(255, 0, 65, 0.8)' 
                : '0 0 10px rgba(0, 255, 65, 0.4)'
          }}
        />
        
        {/* 中央のドット */}
        <div
          className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHovering 
              ? 'bg-cyan-400 scale-150' 
              : isClicking 
                ? 'bg-red-400 scale-200' 
                : 'bg-green-400'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 10px rgba(0, 255, 255, 0.8)' 
              : isClicking 
                ? '0 0 8px rgba(255, 0, 65, 1)' 
                : '0 0 6px rgba(0, 255, 65, 0.6)'
          }}
        />

        {/* ホバー時の追加エフェクト */}
        {isHovering && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '30px',
              height: '30px',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '50%',
              animation: 'pulse-ring 1s ease-out infinite'
            }}
          />
        )}

        {/* クリック時のエフェクト */}
        {isClicking && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'rgba(255, 0, 65, 0.2)',
              borderRadius: '50%',
              animation: 'click-ripple 0.3s ease-out'
            }}
          />
        )}
      </div>

      {/* アニメーション定義 */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes click-ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CyberpunkCursor;
