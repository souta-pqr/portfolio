import React from 'react';
import { User, Mail, Github, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillItem = ({ name }) => (
  <div className="mb-4">
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="text-gray-800 font-medium">{name}</span>
    </div>
  </div>
);

const Profile = () => {
  return (
    <section id="profile" className="bg-white rounded-2xl shadow-xl p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <User className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">プロフィール</h2>
        </div>
        
        <div className="prose max-w-none text-gray-600 space-y-8">
          {/* 自己紹介 */}
          <motion.div
            className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              音声認識技術の研究とソフトウェア開発に励む学生です。
              ESPnetを用いた研究開発と、実践的なソフトウェアプロジェクトに取り組んでいます。
            </p>
          </motion.div>

          {/* 連絡先情報 */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:boriko0116@gmail.com"
              className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-gray-600">boriko0116@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://github.com/souta-pqr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-gray-900 mr-2" />
              <span className="text-gray-600">@souta-pqr</span>
            </motion.a>
          </div>

          {/* 開発スキル */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="p-6 bg-gray-50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3">プログラミング言語</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C/C++', 'JavaScript / TypeScript', 'Bash'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3">開発ツール</h4>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Linux', 'VSCode', 'Git', 'React', 'ESPnet'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3">関心分野</h4>
              <div className="flex flex-wrap gap-2">
                {['音声認識', '機械学習', 'アプリ開発', 'クラウドコンピューティング'].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;