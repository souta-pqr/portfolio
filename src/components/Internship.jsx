import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Internship = () => {
  return (
    <ExperienceCard title="インターン経験" icon={Briefcase}>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-900 tracking-tight">寮管理アプリケーション開発</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <span className="font-medium tracking-wide">会社名：</span>
              <span className="ml-2 tracking-wide">株式会社ワライフ</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium tracking-wide">期間：</span>
              <span className="ml-2 tracking-wide font-numeric">2024年2月〜2024年12月</span>
            </div>
          </div>
          <p className="mt-4 mb-2 tracking-wide">グローバルチームでの開発経験</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">日本・インドの開発者との協働</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">プロジェクト進行管理（WBS、ガントチャートの管理）</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">コードレビューとコミュニケーション調整</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 tracking-tight">主な成果と学び</h3>
          <ul className="list-none space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">国際的な開発環境での協働経験</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">プロジェクト管理スキルの向上</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="tracking-wide">予期せぬ状況への対応力の養成</span>
            </li>
          </ul>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Internship;