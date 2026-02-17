'use client';

import Link from 'next/link';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMatrix } from '@/context/MatrixContext';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, theme, toggleLang, toggleTheme } = useMatrix();
    const { t } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 start-0 w-full z-50 glass transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center relative group">
                    <motion.div
                        className="relative"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 0px rgba(16,185,129,0))",
                                "drop-shadow(0 0 15px rgba(16,185,129,0.6))",
                                "drop-shadow(0 0 0px rgba(16,185,129,0))"
                            ]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src="/sitco_logo.png" alt="SITCO Logo" className="h-20 w-auto relative z-10" />
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-muted hover:text-brand-500 transition-colors">
                        {t('home')}
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-muted hover:text-brand-500 transition-colors">
                        {t('services')}
                    </Link>
                    <Link href="/erp" className="text-sm font-medium text-muted hover:text-brand-500 transition-colors">
                        {t('erpSystem')}
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-muted hover:text-brand-500 transition-colors">
                        {t('about')}
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted hover:text-brand-500 transition-colors">
                        {t('contact')}
                    </Link>

                    {/* Matrix Toggles */}
                    <div className="flex items-center gap-4 px-4 border-s border-border">
                        <button
                            onClick={toggleLang}
                            className="text-muted hover:text-brand-500 transition-colors flex items-center gap-1 text-xs font-bold uppercase"
                            aria-label="Toggle Language"
                        >
                            <Globe size={18} />
                            <span>{t('toggleLang')}</span>
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="text-muted hover:text-brand-500 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    <Link href="/contact#form" className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                        {t('requestDemo')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-main" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full start-0 w-full bg-card border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        <Link href="/" onClick={toggleMenu} className="text-lg font-medium text-main hover:text-brand-500 block">
                            {t('home')}
                        </Link>
                        <Link href="/services" onClick={toggleMenu} className="text-lg font-medium text-main hover:text-brand-500 block">
                            {t('services')}
                        </Link>
                        <Link href="/erp" onClick={toggleMenu} className="text-lg font-medium text-main hover:text-brand-500 block">
                            {t('erpSystem')}
                        </Link>
                        <Link href="/about" onClick={toggleMenu} className="text-lg font-medium text-main hover:text-brand-500 block">
                            {t('about')}
                        </Link>
                        <Link href="/contact" onClick={toggleMenu} className="text-lg font-medium text-main hover:text-brand-500 block">
                            {t('contact')}
                        </Link>

                        <div className="flex items-center justify-between py-4 border-t border-border mt-2">
                            <button
                                onClick={toggleLang}
                                className="text-main hover:text-brand-500 transition-colors flex items-center gap-2 font-bold"
                            >
                                <Globe size={20} />
                                <span>{lang === 'en' ? t('switchToArabic') : t('switchToEnglish')}</span>
                            </button>
                            <button
                                onClick={toggleTheme}
                                className="text-main hover:text-brand-500 transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        </div>

                        <Link href="/contact#form" onClick={toggleMenu} className="block text-center w-full bg-brand-600 text-white py-3 rounded-lg font-semibold mt-2">
                            {t('requestDemo')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

