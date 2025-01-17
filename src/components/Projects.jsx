import React from 'react';
import { Code } from 'lucide-react'; 

const Projects = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Code className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">プロジェクト経験</h2>
      </div>
      <div className="prose max-w-none text-gray-600 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">対話ライブコンペティション</h3>
          <p className="mt-2 mb-4">研究室チームでの参加において、以下の役割を担当</p>
          <ul className="list-none space-y-2 pl-4">
            <li>• システム発話権の管理システムの変更</li>
            <li>• 対話履歴管理システムの変更</li>
            <li>• システムの状態管理機能の変更</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">チーム開発における学び</h3>
          <ul className="list-none space-y-2 mt-2 pl-4">
            <li>• 明確なコミュニケーションの重要性</li>
            <li>• モジュール間の連携における綿密な設計の必要性</li>
            <li>• ユーザーテストの重要性と本番環境を想定した開発の必要性</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;