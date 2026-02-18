'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-page">
            {/* Abstract Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.1),_transparent_50%)]"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                    <ShieldCheck size={16} />
                    <span>{t('visionCompliant')}</span>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-main via-main/80 to-muted"
                >
                    {t('futureOf')} <br />
                    <span className="text-emerald-500">{t('businessIntelligence')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10"
                >
                    {t('heroSubtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-10"
                >
                    {['Local Sovereignty', 'Enterprise AI', 'Cyber Defense', '99.9% Reliability'].map((point, index) => (
                        <div key={index} className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-600/80 text-xs md:text-sm font-semibold flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {point}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/contact#form" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
                        {t('requestRiyadhDemo')}
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link href="/services" className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg text-main border border-border hover:bg-border transition-all backdrop-blur-sm flex items-center justify-center">
                        {t('exploreSolutions')}
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none opacity-20"></div>
        </section>
    );
};

export default HeroSection;
