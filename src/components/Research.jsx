import React from 'react';
import { TestTube } from 'lucide-react';

const Research = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <TestTube className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">研究活動</h2>
      </div>
      <div className="prose max-w-none text-gray-600 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">研究室を選んだきっかけ</h3>
          <p className="mt-2 leading-relaxed">
            学部1，2年次のプログラミングの授業でC言語を学んだことをきっかけに，プログラミングやソフトウェアに関心が生まれました。藤江研究室では，音声・画像・言語を主に研究しており，特に音声の分野に興味を持ち選択しました。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">研究内容</h3>
          <p className="mt-2 mb-4">音声認識の研究においてESPnetを活用し、以下の活動を行っています</p>
          <ul className="list-none space-y-2 pl-4">
            <li>• ESPnet内のコード（bash, Python）のカスタマイズ</li>
            <li>• データ処理用スクリプトの開発</li>
            <li>• 独自の評価システムの実装</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;