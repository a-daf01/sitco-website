'use client';

import { motion } from 'framer-motion';
import { Database, Cloud, Smartphone, Layers, Lock, Zap } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const PlatformTech = () => {
    const { t } = useTranslation();

    const techs = [
        {
            icon: <Database className="text-orange-400" size={32} />,
            title: t('techApexTitle'),
            description: t('techApexDesc')
        },
        {
            icon: <Cloud className="text-cyan-400" size={32} />,
            title: t('techCloudTitle'),
            description: t('techCloudDesc')
        },
        {
            icon: <Smartphone className="text-purple-400" size={32} />,
            title: t('techMobileTitle'),
            description: t('techMobileDesc')
        }
    ];

    return (
        <section className="py-24 bg-page overflow-hidden relative">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#888888 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6"
                    >
                        {t('level2Badge')}
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">{t('techTitle')}</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        {t('techDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-2xl border border-border hover:border-blue-500/30 transition-all text-center group shadow-sm hover:shadow-md"
                        >
                            <div className="bg-muted/10 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-main mb-3">{tech.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Specs Horizontal Stripe */}
                <div className="border-t border-b border-border bg-card/50 backdrop-blur-sm py-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            { label: t('specUptime'), value: '99.99%', icon: <Zap size={16} /> },
                            { label: t('specSecurity'), value: 'AES-256', icon: <Lock size={16} /> },
                            { label: t('specArch'), value: 'Modular', icon: <Layers size={16} /> },
                        ].map((spec, i) => (
                            <div key={i} className="flex items-center gap-3 text-muted">
                                <div className="text-emerald-500">{spec.icon}</div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted uppercase font-bold tracking-wider">{spec.label}</span>
                                    <span className="text-lg font-bold font-mono text-main">{spec.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformTech;
