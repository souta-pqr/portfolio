import React from 'react';
import { User, Mail, Github, Code } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <ExperienceCard title="プロフィール" icon={User} defaultOpen={true}>
      <div className="space-y-8">
        <motion.div
          className="bg-cyber-gradient p-6 rounded-xl border border-cyber-primary border-opacity-30 relative overflow-hidden hologram-effect"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg leading-relaxed tracking-wide text-cyber-primary font-mono-cyber text-glow">
            音声認識技術の研究とソフトウェア開発に励む学生です
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="mailto:boriko0116@gmail.com"
            className="flex items-center px-4 py-2 bg-dark-secondary border border-cyber-cyan border-opacity-30 
                     rounded-lg hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300 cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 text-cyber-cyan mr-2" />
            <span className="text-cyber-secondary font-mono-cyber">boriko0116@gmail.com</span>
          </motion.a>
          <motion.a
            href="https://github.com/souta-pqr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-dark-secondary border border-cyber-primary border-opacity-30 
                     rounded-lg hover:border-cyber-primary hover:shadow-cyber transition-all duration-300 cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-cyber-primary mr-2" />
            <span className="text-cyber-secondary font-mono-cyber">@souta-pqr</span>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-dark-secondary bg-opacity-50 rounded-xl border border-cyber-primary border-opacity-20 hover:border-opacity-40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-cyber font-bold text-cyber-primary mb-4 tracking-tight text-glow">
              プログラミング言語
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C/C++', 'JavaScript / TypeScript', 'Bash'].map((lang) => (
                <span 
                  key={lang} 
                  className="px-3 py-1 bg-dark-accent border border-cyber-cyan border-opacity-30 rounded-full text-sm text-cyber-secondary 
                           font-mono-cyber hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-dark-secondary bg-opacity-50 rounded-xl border border-cyber-pink border-opacity-20 hover:border-opacity-40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-cyber font-bold text-cyber-pink mb-4 tracking-tight text-glow">
              開発ツール
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Linux', 'VSCode', 'Git', 'React', 'ESPnet'].map((tool) => (
                <span 
                  key={tool} 
                  className="px-3 py-1 bg-dark-accent border border-cyber-pink border-opacity-30 rounded-full text-sm text-cyber-secondary 
                           font-mono-cyber hover:border-cyber-pink hover:text-cyber-pink transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-dark-secondary bg-opacity-50 rounded-xl border border-cyber-orange border-opacity-20 hover:border-opacity-40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-cyber font-bold text-cyber-orange mb-4 tracking-tight text-glow">
              関心分野
            </h4>
            <div className="flex flex-wrap gap-2">
              {['音声認識', '機械学習', 'アプリ開発', 'クラウドコンピューティング'].map((interest) => (
                <span 
                  key={interest} 
                  className="px-3 py-1 bg-dark-accent border border-cyber-orange border-opacity-30 rounded-full text-sm text-cyber-secondary 
                           font-mono-cyber hover:border-cyber-orange hover:text-cyber-orange transition-all duration-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* データ可視化風の装飾 */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-cyber-primary rounded-full animate-cyber-pulse"></div>
            <span className="text-xs font-mono-cyber text-cyber-muted tracking-wide">PROFILE.DATA.LOADED</span>
            <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </ExperienceCard>
  );
};

export default Profile;
