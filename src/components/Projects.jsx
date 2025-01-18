import React from 'react';
import { Code } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Projects = () => {
  return (
    <ExperienceCard title="プロジェクト" icon={Code}>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
            対話ライブコンペティション
          </h3>
          <p className="mt-2 mb-2 tracking-wide text-gray-800 dark:text-gray-100">
            研究室チームでの参加において、以下の役割を担当：
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                システム発話権の管理システムの変更
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                対話履歴管理システムの変更
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                システムの状態管理機能の変更
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
            チーム開発における学び
          </h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                明確なコミュニケーションの重要性
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                モジュール間の連携における綿密な設計の必要性
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-100">•</span>
              <span className="tracking-wide text-gray-800 dark:text-gray-100">
                ユーザーテストの重要性と本番環境を想定した開発の必要性
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Projects;