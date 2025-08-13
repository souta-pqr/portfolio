import React from 'react';
import { TestTube } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Research = () => {
  const presentations = [
    {
      title: '日本音響学会第153回研究発表会',
      paper: '「補助情報を同時に認識する日本語音声認識における出力表現形式の比較」',
      color: 'cyber-primary'
    },
    {
      title: '日本音響学会第154回研究発表会',
      paper: '「日本語音声認識における補助情報の認識方式の比較」',
      color: 'cyber-cyan'
    }
  ];

  return (
    <ExperienceCard title="研究活動" icon={TestTube}>
      <div className="space-y-6">
        <div className="bg-cyber-gradient p-6 rounded-xl border border-cyber-cyan border-opacity-30 relative">
          {/* 装飾的なコーナー */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan opacity-60"></div>
          
          <h3 className="text-xl font-cyber font-bold text-cyber-cyan text-glow tracking-tight mb-6">
            学会発表
          </h3>
          
          <div className="space-y-4">
            {presentations.map((presentation, index) => (
              <div 
                key={index}
                className="bg-dark-secondary bg-opacity-50 p-4 rounded-lg border border-cyber-primary border-opacity-20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className={`font-mono-cyber text-${presentation.color} text-glow mb-2 text-sm`}>
                      {presentation.title}
                    </h4>
                    <p className="text-cyber-secondary font-mono-cyber text-sm mb-3 leading-relaxed">
                      {presentation.paper}
                    </p>
                    
                    {/* ステータス表示 */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-${presentation.color} rounded-full animate-pulse`}></div>
                        <span className="text-xs font-mono-cyber text-cyber-muted">PUBLISHED</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 発表番号的な装飾 */}
                  <div className="ml-4 flex flex-col items-end">
                    <div className={`text-xs font-mono-cyber text-${presentation.color} text-glow`}>
                      PAPER.{String(index + 1).padStart(2, '0')}
                    </div>
                    <div className={`w-8 h-1 bg-${presentation.color} rounded-full mt-1 animate-cyber-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 総合ステータス */}
          <div className="mt-6 flex items-center space-x-2">
            <span className="text-xs font-mono-cyber text-cyber-muted">RESEARCH.STATUS:</span>
            <div className="flex-1 h-1 bg-dark-accent rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyber-primary to-cyber-cyan animate-pulse"></div>
            </div>
            <span className="text-xs font-mono-cyber text-cyber-primary">ACTIVE</span>
          </div>
          
          {/* 発表数サマリー */}
          <div className="mt-4 bg-dark-secondary bg-opacity-30 p-3 rounded-lg border border-cyber-pink border-opacity-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyber-pink rounded-full animate-cyber-pulse"></div>
                <span className="font-mono-cyber text-cyber-secondary text-sm">TOTAL PRESENTATIONS</span>
              </div>
              <div className="text-right">
                <div className="text-cyber-pink font-cyber font-bold text-lg text-glow">2</div>
                <div className="text-xs font-mono-cyber text-cyber-muted">ACOUSTICAL SOCIETY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Research;
