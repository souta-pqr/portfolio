import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Internship = () => {
  return (
    <ExperienceCard title="インターン経験" icon={Briefcase}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">寮管理アプリケーション開発</h3>
          <p className="mt-2 mb-2">グローバルチームでの開発経験</p>
          <ul className="list-none space-y-2">
            <li>• 日本・インドの開発者との協働</li>
            <li>• プロジェクト進行管理（WBS、ガントチャートの管理）</li>
            <li>• コードレビューとコミュニケーション調整</li>
          </ul>
        </div>

        <div>
          <p className="mt-4 mb-2">主な成果と学び</p>
          <ul className="list-none space-y-2">
            <li>• 国際的な開発環境での協働経験</li>
            <li>• プロジェクト管理スキルの向上</li>
            <li>• 予期せぬ状況への対応力の養成</li>
          </ul>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Internship;