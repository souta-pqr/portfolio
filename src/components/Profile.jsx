import React from 'react';
import { User, Mail, Github, Code, Award } from 'lucide-react';

const Profile = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">プロフィール</h2>
      </div>
      
      <div className="prose max-w-none text-gray-600 space-y-6">
        {/* 自己紹介 */}
        <div>
          <p className="leading-relaxed">
            音声認識技術の研究とソフトウェア開発に励む学生です。
            ESPnetを用いた音声認識の研究と、実践的なソフトウェア開発プロジェクトに取り組んでいます。
          </p>
        </div>

        {/* 連絡先情報 */}
        <div className="space-y-2">
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <a href="mailto:boriko0116@gmail.com" className="text-blue-600 hover:text-blue-800">
              boriko0116@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Github className="w-5 h-5 text-gray-500 mr-2" />
            <a href="https://github.com/souta-pqr" className="text-blue-600 hover:text-blue-800">
              @souta-pqr
            </a>
          </div>
        </div>

        {/* キャリアの方向性 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Code className="w-5 h-5 mr-2" />
            キャリアの方向性
          </h3>
          <p className="mt-2">
          私は、エンジニアとして技術力を活かしながら、
          ユーザーに価値をもたらすソフトウェア開発に携わっていきたいと考えています。
          </p>
        </div>

        {/* スキルと資格 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            スキルと資格
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700">プログラミング言語</h4>
              <ul className="list-none mt-1 space-y-1">
                <li>• Python</li>
                <li>• C/C++</li>
                <li>• JavaScript / TypeScript</li>
                <li>• React</li>
                <li>• Bash</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">ツール・フレームワーク</h4>
              <ul className="list-none mt-1 space-y-1">
                <li>• ESPnet</li>
                <li>• Git/GitHub</li>
                <li>• Docker</li>
                <li>• Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;