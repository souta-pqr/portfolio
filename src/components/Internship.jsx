import React from 'react';
import { Briefcase } from 'lucide-react';

const Internship = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">インターン経験</h2>
      </div>
      <div className="prose max-w-none text-gray-600">
        <h3 className="text-lg font-medium text-gray-900">ワライフ寮管理アプリケーション開発</h3>
        <p className="mt-2">
          グローバルチームでの開発経験：
          • 日本・インドの開発者との協働
          • プロジェクト進行管理（WBS、ガントチャートの管理）
          • コードレビューとコミュニケーション調整
        </p>
        <p className="mt-4">
          主な成果と学び：
          • 国際的な開発環境での協働経験
          • プロジェクト管理スキルの向上
          • 予期せぬ状況への対応力の養成
        </p>
      </div>
    </section>
  );
};

export default Internship;