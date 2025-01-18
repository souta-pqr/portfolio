import React from 'react';
import { User, Mail, Github, Code } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <ExperienceCard title="プロフィール" icon={User} defaultOpen={true}>
      <div className="prose max-w-none text-gray-600 space-y-8">
        <motion.div
          className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg leading-relaxed tracking-wide">
            音声認識技術の研究とソフトウェア開発に励む学生です。
            ESPnetを用いた研究開発と、ソフトウェアプロジェクトに取り組んでいます。
          </p>
        </motion.div>

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

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-gray-50 rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 mb-3 tracking-tight">プログラミング言語</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C/C++', 'JavaScript / TypeScript', 'Bash'].map((lang) => (
                <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200 font-code">
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
            <h4 className="font-semibold text-gray-900 mb-3 tracking-tight">開発ツール</h4>
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
            <h4 className="font-semibold text-gray-900 mb-3 tracking-tight">関心分野</h4>
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
    </ExperienceCard>
  );
};

export default Profile;