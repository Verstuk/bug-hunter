'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bug, Fish, Target, Github, Send, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
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
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/verstuk', label: 'GitHub' },
    { icon: Send, href: 'https://t.me/Pan_Mur', label: 'Telegram' },
    { icon: Mail, href: 'mailto:muravin@bk.ru', label: 'Email' }
  ];

  return (
    <motion.section 
      id="hero"
      className="flex pt-20 pb-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid md:grid-cols-2 gap-8 md:gap-20 mt-12">
        {/* Левая колонка */}
        <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
          <motion.div 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative"
            variants={itemVariants}
          >
            <Image
              src="/avatar.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight"
            variants={itemVariants}
          >
            {t('hero.greeting')}
            <br />
            <span className="text-blue-500">{t('hero.subtitle')}</span>
          </motion.h1>

          <div className="flex gap-4 md:gap-6">
            <motion.div variants={iconVariants}>
              <Bug className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
            </motion.div>
            <motion.div variants={iconVariants}>
              <Fish className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
            </motion.div>
            <motion.div variants={iconVariants}>
              <Target className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Правая колонка */}
        <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.buttons.contact')}
            </Link>
            <Link 
              href="/portfolio" 
              className="px-6 py-3 border rounded-full hover:bg-gray-50 transition-colors text-center"
            >
              {t('hero.buttons.portfolio')}
            </Link>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center sm:justify-start"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};