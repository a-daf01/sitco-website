'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';


import { useTranslation } from '@/hooks/useTranslation';

const ErpHero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-page">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 end-0 w-[800px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm"
                >
                    <ShieldCheck size={16} />
                    <span>{t('erpHeroBadge')}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-main mb-6 tracking-tight leading-tight"
                >
                    {t('erpHeroTitle')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        {t('erpHeroSubtitle')}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t('erpHeroDesc')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/contact#form" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2 group">
                        {t('erpHeroBtnDemo')}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#modules"
                        className="px-8 py-4 bg-card hover:bg-muted/10 text-main border border-border rounded-lg font-semibold text-lg transition-all backdrop-blur-sm flex items-center gap-2 shadow-sm hover:shadow-md"
                    >
                        <Globe size={20} />
                        {t('erpHeroBtnExplore')}
                    </Link>
                </motion.div>

                {/* Grid Overlay for Tech Feel */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-main/20 to-transparent" />
            </div>
        </section>
    );
};

export default ErpHero;

