import React from 'react';
import { Briefcase } from 'lucide-react';

const Internship = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">インターン経験</h2>
      </div>
      <div className="prose max-w-none text-gray-600 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">ワライフ寮管理アプリケーション開発</h3>
          
          <p className="mt-2 mb-4">グローバルチームでの開発経験</p>
          <ul className="list-none space-y-2 pl-4">
            <li>• 日本・インドの開発者との協働</li>
            <li>• プロジェクト進行管理（WBS、ガントチャートの管理）</li>
            <li>• コードレビューとコミュニケーション調整</li>
          </ul>

          <p className="mt-4 mb-4">主な成果と学び</p>
          <ul className="list-none space-y-2 pl-4">
            <li>• 国際的な開発環境での協働経験</li>
            <li>• プロジェクト管理スキルの向上</li>
            <li>• 予期せぬ状況への対応力の養成</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Internship;