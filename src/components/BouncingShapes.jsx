import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const Shape = ({ id }) => {
  const controls = useAnimationControls();
  const [position, setPosition] = useState({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
  const [rotation, setRotation] = useState(0);
  const [shape, setShape] = useState(Math.floor(Math.random() * 3)); // 0: circle, 1: square, 2: triangle
  const [size, setSize] = useState(Math.random() * 30 + 20);
  
  const colors = ['bg-blue-400', 'bg-purple-400', 'bg-indigo-400', 'bg-pink-400'];
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const moveShape = useCallback(async () => {
    const newX = Math.random() * (window.innerWidth - size);
    const newY = Math.random() * (window.innerHeight - size);
    const duration = Math.random() * 3 + 2;
    const newRotation = Math.random() * 360;
    const newSize = Math.random() * 30 + 20;

    await controls.start({
      x: newX,
      y: newY,
      rotate: newRotation,
      width: newSize,
      height: newSize,
      transition: {
        duration,
        ease: "easeInOut"
      }
    });

    setPosition({ x: newX, y: newY });
    setRotation(newRotation);
    setSize(newSize);
    setShape(Math.floor(Math.random() * 3));
    moveShape();
  }, [controls, size]);

  useEffect(() => {
    moveShape();
  }, [moveShape]);

  const getShapeClassName = () => {
    const baseClass = `absolute ${color} opacity-20 backdrop-blur-sm`;
    switch (shape) {
      case 0:
        return `${baseClass} rounded-full`;
      case 1:
        return `${baseClass} rounded-lg`;
      case 2:
        return `${baseClass} clip-path-triangle`;
      default:
        return baseClass;
    }
  };

  return (
    <>
      {shape === 2 ? (
        <motion.div
          animate={controls}
          style={{
            width: size,
            height: size,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            x: position.x,
            y: position.y
          }}
          className={getShapeClassName()}
        />
      ) : (
        <motion.div
          animate={controls}
          style={{
            width: size,
            height: size,
            x: position.x,
            y: position.y
          }}
          className={getShapeClassName()}
        />
      )}
    </>
  );
};

const BouncingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>
        {`
          .clip-path-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `}
      </style>
      {Array.from({ length: 12 }).map((_, i) => (
        <Shape key={i} id={i} />
      ))}
    </div>
  );
};

export default BouncingShapes;