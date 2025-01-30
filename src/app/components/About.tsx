'use client';

import { motion } from 'framer-motion';
import { Target, Search, Clock, Code, Bug, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
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

  const cards = [
    {
      icon: Target,
      title: t('about.cards.hunter.title'),
      description: t('about.cards.hunter.description'),
      iconColor: "text-blue-500"
    },
    {
      icon: Search,
      title: t('about.cards.manual.title'),
      description: t('about.cards.manual.description'),
      iconColor: "text-green-500"
    },
    {
      icon: Clock,
      title: t('about.cards.qa.title'),
      description: t('about.cards.qa.description'),
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section 
      id="about"
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
            <Bug className="w-8 h-8 text-blue-500" />
            <Code className="w-8 h-8 text-green-500" />
            <Sparkles className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-dark-text">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow pb-20"
            >
              <div className={`w-10 h-10 rounded-lg bg-gray-50 dark:bg-dark-bg flex items-center justify-center mb-4 ${card.iconColor}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold mb-2 dark:text-dark-text">{card.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-md max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-bold dark:text-dark-text">
              {t('about.about.title')}
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('about.about.description')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}; 