'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Bug, Send } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/verstuk',
      label: 'GitHub'
    },
    {
      icon: Send,
      href: 'https://t.me/Pan_Mur',
      label: 'Telegram'
    },
    {
      icon: Mail,
      href: 'mailto:muravin@bk.ru',
      label: 'Email'
    }
  ];

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300 dark:bg-dark-bg dark:text-dark-text">
      {/* Анимированный фоновый градиент */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a, #1a1a1a)',
          backgroundSize: '400% 400%'
        }}
        variants={backgroundVariants}
        animate="animate"
      />

      {/* Анимированные светящиеся точки */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-blue-500/10 dark:bg-blue-400/5"
            style={{
              left: `${30 + i * 30}%`,
              top: `${20 + i * 25}%`,
              filter: 'blur(50px)'
            }}
            variants={glowVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50 md:gap-8">
          {/* Логотип и описание */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white dark:text-dark-text hover:text-blue-400 transition-colors group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Bug className="w-5 h-5" />
              </motion.div>
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                BugHunter
              </span>
            </Link>
            <p className="text-sm text-gray-400 dark:text-gray-500 max-w-md leading-relaxed">
              P.S. Если вы думаете, что тестирование — это скучно, то вы просто никогда не охотились за багами вместе со мной. 😉
              <br /><br />
              © 2024 BugHunter. All rights reserved.
            </p>
          </motion.div>

          {/* Навигация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-dark-text">
              {t('nav.about')}
            </h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: t('nav.about') },
                { href: '#trophies', label: t('nav.trophies') },
                { href: '#instruments', label: t('nav.instruments') },
                { href: '#next', label: t('nav.next') }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Социальные сети */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-dark-text">
              {t('contact.title')}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}; 