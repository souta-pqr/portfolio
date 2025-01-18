import React from 'react';
import { TestTube } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Research = () => {
  const getPdfUrl = () => {
    // GitHub Pagesの場合は/portfolio/を追加
    if (window.location.hostname === 'souta-pqr.github.io') {
      return '/portfolio/paper.pdf';
    }
    // ローカル開発環境の場合
    return '/paper.pdf';
  };

  return (
    <ExperienceCard title="研究活動" icon={TestTube}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">研究室を選んだきっかけ</h3>
          <p className="mt-2 leading-relaxed">
            学部1，2年次のプログラミングの授業でC言語を学んだことをきっかけに，プログラミングやソフトウェアに関心が生まれました。
            藤江研究室では，音声・画像・言語を主に研究しており，特に音声の分野に興味を持ち選択しました。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">研究内容</h3>
          <p className="mb-2">音声認識の研究においてESPnetを活用し、以下の活動を行っています</p>
          <ul className="list-none space-y-2">
            <li>• ESPnet内のコード（bash, Python）のカスタマイズ</li>
            <li>• データ処理用スクリプトの開発</li>
            <li>• 詳細な評価スクリプトの実装</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">研究成果</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <p className="flex-1">
                日本音響学会第153回にて「補助情報を同時に認識する日本語音声認識における出力表現形式の比較」のタイトルで発表しました。
                <button 
                  onClick={() => window.open(getPdfUrl(), '_blank')}
                  className="ml-2 inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  [発表論文PDF]
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Research;