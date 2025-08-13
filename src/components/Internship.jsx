import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Internship = () => {
  const internships = [
    {
      company: '株式会社ワライフ',
      period: '2024年2月 ~ 2024年12月',
      color: 'cyber-primary'
    },
    {
      company: '株式会社エキュメノポリス',
      period: '2025年3月 ~ 2025年9月',
      color: 'cyber-cyan'
    }
  ];

  return (
    <ExperienceCard title="インターン経験" icon={Briefcase}>
      <div className="space-y-4">
        {internships.map((internship, index) => (
          <div 
            key={index}
            className="bg-cyber-gradient p-6 rounded-xl border border-cyber-primary border-opacity-30 relative overflow-hidden"
          >
            {/* 装飾的なコーナー */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-primary opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-primary opacity-60"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className={`text-xl font-cyber font-bold text-${internship.color} text-glow tracking-tight mb-2`}>
                    {internship.company}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${internship.color} rounded-full animate-pulse`}></div>
                    <span className="text-cyber-secondary font-mono-cyber tracking-wide">
                      {internship.period}
                    </span>
                  </div>
                </div>
                
                {/* ステータス表示 */}
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono-cyber text-cyber-muted">STATUS:</span>
                    <span className={`text-xs font-mono-cyber text-${internship.color} text-glow`}>
                      {index === 0 ? 'COMPLETED' : 'ONGOING'}
                    </span>
                  </div>
                  
                  {/* プログレスバー */}
                  <div className="w-20 h-1 bg-dark-accent rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${internship.color} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: index === 0 ? '100%' : '60%',
                        animation: `progress-load-${index} 2s ease-out`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* 装飾的なデータライン */}
              <div className="mt-4 flex items-center space-x-2">
                <div className={`w-1 h-1 bg-${internship.color} rounded-full animate-cyber-pulse`}></div>
                <div className="flex-1 h-px bg-gradient-to-r from-cyber-primary via-transparent to-cyber-primary opacity-30"></div>
                <span className="text-xs font-mono-cyber text-cyber-muted">
                  INTERN.{String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        {/* 総合ステータス */}
        <div className="mt-6 bg-dark-secondary bg-opacity-30 p-4 rounded-lg border border-cyber-pink border-opacity-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-cyber-pink rounded-full animate-cyber-pulse"></div>
              <span className="font-mono-cyber text-cyber-secondary">TOTAL EXPERIENCE</span>
            </div>
            <div className="text-right">
              <div className="text-cyber-pink font-cyber font-bold text-lg text-glow">2 COMPANIES</div>
              <div className="text-xs font-mono-cyber text-cyber-muted">MULTI-SECTOR</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress-load-0 {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes progress-load-1 {
          from { width: 0%; }
          to { width: 60%; }
        }
      `}</style>
    </ExperienceCard>
  );
};

export default Internship;
