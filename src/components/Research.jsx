import React from 'react';
import { TestTube } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Research = () => {
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
      </div>
    </ExperienceCard>
  );
};

export default Research;