import { useCallback } from 'react';
import { useMatrix } from '@/context/MatrixContext';
import { translations } from '@/data/locales';

export const useTranslation = () => {
    const { lang } = useMatrix();

    // Fallback to english if lang is undefined
    const currentLang = lang || 'en';

    const t = useCallback((key: keyof typeof translations.en) => {
        const langData = translations[currentLang as keyof typeof translations] as typeof translations.en;
        const translation = langData[key];
        // If translation missing, fallback to English or the key itself
        return translation || translations['en'][key] || key;
    }, [currentLang]);

    return {
        t,
        lang: currentLang,
        dir: currentLang === 'ar' ? 'rtl' : 'ltr'
    };
};
