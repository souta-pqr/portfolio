import React from 'react';
import { Code } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Projects = () => {
  return (
    <ExperienceCard title="プロジェクト" icon={Code}>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-cyber font-bold text-cyber-primary text-glow tracking-tight mb-4">
            対話ライブコンペティション7
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-cyber-gradient rounded-lg border border-cyber-primary border-opacity-30">
              <span className="font-mono-cyber text-cyber-secondary text-lg tracking-wide">
                タスクトラック
              </span>
              <span className="font-cyber font-bold text-2xl text-cyber-cyan text-glow">
                4位
              </span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-cyber-gradient rounded-lg border border-cyber-cyan border-opacity-30">
              <span className="font-mono-cyber text-cyber-secondary text-lg tracking-wide">
                シチュエーショントラック
              </span>
              <span className="font-cyber font-bold text-2xl text-cyber-pink text-glow">
                3位
              </span>
            </div>
          </div>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Projects;
