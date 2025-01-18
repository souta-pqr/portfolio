import React from 'react';
import { TestTube } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Research = () => {
  const getPdfUrl = () => {
    if (window.location.hostname === 'souta-pqr.github.io') {
      return '/portfolio/paper.pdf';
    }
    return '/paper.pdf';
  };

  return (
    <ExperienceCard title="研究活動" icon={TestTube}>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
            研究室を選んだきっかけ
          </h3>
          <p className="mt-2 leading-relaxed tracking-wide text-gray-800 dark:text-gray-100">
            学部1，2年次のプログラミングの授業でC言語を学んだことをきっかけに，プログラミングやソフトウェアに関心が生まれました。
            藤江研究室では，音声・画像・言語を主に研究しており，特に音声の分野に興味を持ち選択しました。
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
            研究内容
          </h3>
          <p className="mb-2 tracking-wide text-gray-800 dark:text-gray-100">
            音声認識の研究においてESPnetを活用し、以下の活動を行っています
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                ESPnet内のコード（bash, Python）のカスタマイズ
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                データ処理用スクリプトの開発
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                詳細な評価スクリプトの実装
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
            研究成果
          </h3>
          <div className="flex items-center space-x-2">
            <p className="tracking-wide text-gray-800 dark:text-gray-100">
              日本音響学会第153回にて「補助情報を同時に認識する日本語音声認識における出力表現形式の比較」のタイトルで発表しました。
            </p>
            <button 
              onClick={() => window.open(getPdfUrl(), '_blank')}
              className="inline-flex items-center px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline whitespace-nowrap"
            >
              [発表論文PDF]
            </button>
          </div>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Research;