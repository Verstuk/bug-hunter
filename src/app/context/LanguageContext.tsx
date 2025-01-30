'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'ru' | 'en';
type TranslationType = typeof translations.ru;
type NestedKeyOf<T> = T extends object ? {
  [K in keyof T]: K extends string
    ? T[K] extends object
      ? `${K}.${NestedKeyOf<T[K]>}`
      : K
    : never
}[keyof T] : never;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: NestedKeyOf<TranslationType>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'ru' ? 'en' : 'ru';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: NestedKeyOf<TranslationType>) => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k as keyof typeof value];
      }
      if (value === undefined) return key;
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 