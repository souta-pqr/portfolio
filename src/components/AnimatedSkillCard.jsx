import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSkillCard = ({ title, skills, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600 mr-2" />
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: delay + index * 0.1 }}
            className="relative h-8 bg-gray-100 rounded-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 flex items-center px-3">
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
            <motion.div
              className="absolute inset-y-0 right-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: delay + index * 0.1 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedSkillCard;