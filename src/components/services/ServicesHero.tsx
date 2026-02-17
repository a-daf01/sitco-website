'use client';

import { motion } from 'framer-motion';
import { Server, Shield, Brain, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ServicesHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-page">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 start-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex justify-center gap-4 mb-8">
                        {/* Floating Icons */}
                        {[Server, Shield, Brain, Zap].map((Icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3 + i,
                                    ease: "easeInOut",
                                    delay: i * 0.5
                                }}
                                className="p-3 rounded-2xl bg-card border border-border text-emerald-400 shadow-sm"
                            >
                                <Icon size={24} />
                            </motion.div>
                        ))}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 text-main tracking-tight leading-tighter">
                        {t('servicesHeroTitle')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            {t('servicesHeroSubtitle')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
                        {t('servicesHeroDesc')}
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 start-0 w-full h-32 bg-gradient-to-t from-page to-transparent z-10" />
        </section>
    );
};

export default ServicesHero;

