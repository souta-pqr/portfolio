import React from 'react';
import { Monitor, Laptop, Cpu, HardDrive, Keyboard, Mouse } from 'lucide-react';

const FloatingGadget = ({ icon: Icon, delay = 0, className = '' }) => {
  return (
    <div 
      className={`fixed transform ${className}`}
      style={{
        animation: `float ${3}s ease-in-out infinite ${delay}s`,
      }}
    >
      <Icon 
        className="w-8 h-8 gadget-icon opacity-70 hover:opacity-100 transition-opacity"
        style={{
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
        }}
      />
    </div>
  );
};

const GadgetDecorations = () => {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes colorChange {
            0% { color: hsl(0, 70%, 60%); }
            25% { color: hsl(90, 70%, 60%); }
            50% { color: hsl(180, 70%, 60%); }
            75% { color: hsl(270, 70%, 60%); }
            100% { color: hsl(360, 70%, 60%); }
          }

          .gadget-icon {
            animation: colorChange 8s linear infinite;
          }
        `}
      </style>
      
      {/* Left side gadgets */}
      <div className="fixed left-4 inset-y-0">
        <FloatingGadget 
          icon={Monitor} 
          delay={0} 
          className="top-1/4 left-4"
        />
        <FloatingGadget 
          icon={Cpu} 
          delay={0.5} 
          className="top-1/2 left-4"
        />
        <FloatingGadget 
          icon={Keyboard} 
          delay={1} 
          className="top-3/4 left-4"
        />
      </div>

      {/* Right side gadgets */}
      <div className="fixed right-4 inset-y-0">
        <FloatingGadget 
          icon={Laptop} 
          delay={0.3} 
          className="top-1/4 right-4"
        />
        <FloatingGadget 
          icon={HardDrive} 
          delay={0.8} 
          className="top-1/2 right-4"
        />
        <FloatingGadget 
          icon={Mouse} 
          delay={1.3} 
          className="top-3/4 right-4"
        />
      </div>
    </>
  );
};

export default GadgetDecorations;