'use client';

import { motion } from 'framer-motion';
import { Wrench, Play, Network, FileSearch, ClipboardList, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Instruments = () => {
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

  const tools = [
    {
      icon: Play,
      title: t('instruments.tools.automation.title'),
      tools: ["Playwright"],
      description: t('instruments.tools.automation.description'),
      iconColor: "text-green-500"
    },
    {
      icon: Network,
      title: t('instruments.tools.api.title'),
      tools: ["Postman", "Swagger", "ApiDog"],
      description: t('instruments.tools.api.description'),
      iconColor: "text-blue-500"
    },
    {
      icon: Database,
      title: t('instruments.tools.database.title'),
      tools: ["PostgreSQL", "MongoDB", "Redis"],
      description: t('instruments.tools.database.description'),
      iconColor: "text-indigo-500"
    },
    {
      icon: FileSearch,
      title: t('instruments.tools.logs.title'),
      tools: ["Kibana", "Dozzle"],
      description: t('instruments.tools.logs.description'),
      iconColor: "text-amber-500"
    },
    {
      icon: ClipboardList,
      title: t('instruments.tools.tracking.title'),
      tools: ["Youtrack", "Jira"],
      description: t('instruments.tools.tracking.description'),
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section 
      id="instruments"
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
            <Wrench className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-dark-text">
            {t('instruments.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('instruments.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-bg flex items-center justify-center ${tool.iconColor}`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-dark-text">{tool.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tool.tools.map((item, i) => (
                      <span 
                        key={i}
                        className={`text-sm px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-bg ${tool.iconColor}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 