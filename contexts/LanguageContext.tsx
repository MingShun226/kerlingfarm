import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, AppData } from '../types';
import { enData, zhData } from '../data';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  data: AppData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const data = language === 'en' ? enData : zhData;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};