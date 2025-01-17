import React from 'react';
import { Code } from 'lucide-react';

const Projects = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Code className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">プロジェクト経験</h2>
      </div>
      <div className="prose max-w-none text-gray-600">
        <h3 className="text-lg font-medium text-gray-900">対話ライブコンペティション</h3>
        <p className="mt-2">
          研究室チームでの参加において、以下の役割を担当：
          • システム発話権の管理システムの開発
          • 対話履歴管理システムの実装
          • システムの状態管理機能の開発
        </p>
        <p className="mt-4">
          チーム開発における学び：
          • 明確なコミュニケーションの重要性
          • モジュール間の連携における綿密な設計の必要性
          • ユーザーテストの重要性と本番環境を想定した開発の必要性
        </p>
      </div>
    </section>
  );
};

export default Projects;