'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'ar';
type Theme = 'light' | 'dark';

interface MatrixContextType {
    lang: Lang;
    theme: Theme;
    toggleLang: () => void;
    toggleTheme: () => void;
    setLang: (lang: Lang) => void;
    setTheme: (theme: Theme) => void;
}

const MatrixContext = createContext<MatrixContextType | undefined>(undefined);

export const MatrixProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Lang>('en');
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load state from localStorage on mount
        const savedLang = localStorage.getItem('matrix-lang') as Lang;
        const savedTheme = localStorage.getItem('matrix-theme') as Theme;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (savedLang) setLang(savedLang);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (savedTheme) setTheme(savedTheme);

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Persist to localStorage
        localStorage.setItem('matrix-lang', lang);
        localStorage.setItem('matrix-theme', theme);

        // Apply to DOM
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [lang, theme, mounted]);

    const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    // Prevent flash of incorrect content by rendering nothing until mounted (or add a script in head)
    // For now, we render children but the useEffect will update attributes quickly.
    // To avoid hydration mismatch, we might need to suppress or handle initial render carefully.
    // But for simple implementation, this is fine.

    return (
        <MatrixContext.Provider value={{ lang, theme, toggleLang, toggleTheme, setLang, setTheme }}>
            {children}
        </MatrixContext.Provider>
    );
};

export const useMatrix = () => {
    const context = useContext(MatrixContext);
    if (context === undefined) {
        throw new Error('useMatrix must be used within a MatrixProvider');
    }
    return context;
};
