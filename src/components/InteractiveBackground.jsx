import React, { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              transform: `translate(${(mousePosition.x - particle.x) * 0.01}px, ${(mousePosition.y - particle.y) * 0.01}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveBackground;