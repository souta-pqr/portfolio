import React from 'react';
import { TestTube } from 'lucide-react';  // Flaskから変更

const Research = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <TestTube className="w-6 h-6 text-blue-600 mr-2" />  {/* Flaskから変更 */}
        <h2 className="text-2xl font-semibold text-gray-900">研究活動</h2>
      </div>
      <div className="prose max-w-none text-gray-600">
        <h3 className="text-lg font-medium text-gray-900 mt-4">研究室を選んだきっかけ</h3>
        <p className="mt-2">
          学部1，2年次のプログラミングの授業でC言語を学んだことをきっかけに，プログラミングやソフトウェアに関心が生まれました。藤江研究室では，音声・画像・言語を主に研究しており，特に音声の分野に興味を持ち選択しました。
        </p>
        <h3 className="text-lg font-medium text-gray-900 mt-6">研究内容</h3>
        <p className="mt-2">
          音声認識の研究においてESPnetを活用し、以下の活動を行っています：
          • ESPnet内のコード（bash, Python）のカスタマイズ
          • データ処理用スクリプトの開発
          • 独自の評価システムの実装
        </p>
      </div>
    </section>
  );
};

export default Research;