'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      toast.success('Сообщение отправлено!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Ошибка при отправке.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact"
      className="bg-gray-200 dark:bg-dark-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 sm:p-10"
        >
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl font-bold mb-4 dark:text-dark-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-dark-text">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  <span>{t('contact.form.name')}</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-dark-bg dark:text-dark-text"
                  placeholder={t('contact.form.placeholders.name')}
                />
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-dark-text">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>{t('contact.form.email')}</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-dark-bg dark:text-dark-text"
                  placeholder={t('contact.form.placeholders.email')}
                />
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-dark-text">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('contact.form.message')}</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none dark:bg-dark-bg dark:text-dark-text"
                  placeholder={t('contact.form.placeholders.message')}
                />
              </label>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('contact.form.button')}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}; 