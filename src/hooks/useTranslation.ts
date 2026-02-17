import { useMatrix } from '@/context/MatrixContext';
import { translations } from '@/data/locales';

export const useTranslation = () => {
    const { lang } = useMatrix();

    // Fallback to english if lang is undefined
    const currentLang = lang || 'en';

    return {
        t: (key: keyof typeof translations.en) => {
            const translation = translations[currentLang][key];
            // If translation missing, fallback to English or the key itself
            return translation || translations['en'][key] || key;
        },
        lang: currentLang,
        dir: currentLang === 'ar' ? 'rtl' : 'ltr'
    };
};
