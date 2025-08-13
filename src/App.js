import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Research from './components/Research';
import Projects from './components/Projects';
import Internship from './components/Internship';
import GadgetDecorations from './components/GadgetDecorations';
import CyberpunkBackground from './components/CyberpunkBackground';
import CyberpunkCursor from './components/CyberpunkCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-primary overflow-x-hidden">
      {/* サイバーパンク背景 */}
      <CyberpunkBackground />
      
      {/* カスタムカーソル */}
      <CyberpunkCursor />
      
      {/* ガジェット装飾 */}
      <div className="relative z-10">
        <GadgetDecorations />
      </div>
      
      {/* メインコンテンツ */}
      <div className="relative z-20">
        <Header />
        <div className="relative max-w-4xl mx-auto">
          <main className="py-12 px-4 mt-8">
            <div className="space-y-12">
              <Profile />
              <Research />
              <Projects />
              <Internship />
            </div>
          </main>
        </div>
      </div>
      
      {/* グローバルスタイル */}
      <style jsx global>{`
        /* カスタムスクロールバー */
        body::-webkit-scrollbar {
          width: 8px;
        }
        
        body::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ff41, #00ffff);
          border-radius: 4px;
        }
        
        body::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00ffff, #00ff41);
        }
        
        /* セレクション効果 */
        ::selection {
          background: rgba(0, 255, 65, 0.3);
          color: #ffffff;
        }
        
        /* フォーカス効果 */
        *:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.5);
        }
        
        /* スムーズスクロール */
        html {
          scroll-behavior: smooth;
        }
        
        /* ダークモードを強制適用 */
        html {
          color-scheme: dark;
        }
        
        body {
          background: #000000;
          color: #00ff41;
        }
        
        /* レスポンシブ調整 */
        @media (max-width: 768px) {
          .cyber-card {
            margin: 8px;
            padding: 12px;
          }
          
          .text-glow {
            text-shadow: 0 0 8px currentColor;
          }
        }
        
        /* パフォーマンス最適化 */
        * {
          will-change: auto;
        }
        
        .animate-matrix-rain,
        .animate-cyber-pulse,
        .animate-float {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default App;
