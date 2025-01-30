'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Shield, Zap, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Next = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const directions = [
    {
      icon: Target,
      title: t('next.directions.automation'),
      iconColor: "text-blue-500"
    },
    {
      icon: Zap,
      title: t('next.directions.load'),
      iconColor: "text-yellow-500"
    },
    {
      icon: Shield,
      title: t('next.directions.security'),
      iconColor: "text-green-500"
    }
  ];

  return (
    <section 
      id="next"
      className="py-12 bg-gray-200 dark:bg-dark-bg"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-10"
          variants={itemVariants}
        >
          <div className="flex justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-dark-text">
            {t('next.title')}
          </h2>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-md mb-8"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {t('next.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {directions.map((direction, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-bg flex items-center justify-center ${direction.iconColor}`}>
                  <direction.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold dark:text-dark-text">
                {direction.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-md"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-purple-500" />
            <h3 className="text-2xl font-bold dark:text-dark-text">
              {t('next.human.title')}
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {t('next.human.description')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {t('next.human.conclusion')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}; 