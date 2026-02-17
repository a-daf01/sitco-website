'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ProcessSection = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: Search,
            title: t('procDiscoveryTitle'),
            description: t('procDiscoveryDesc')
        },
        {
            icon: PenTool,
            title: t('procStrategyTitle'),
            description: t('procStrategyDesc')
        },
        {
            icon: Code2,
            title: t('procDevTitle'),
            description: t('procDevDesc')
        },
        {
            icon: Rocket,
            title: t('procDeployTitle'),
            description: t('procDeployDesc')
        }
    ];

    return (
        <section className="py-24 bg-page relative overflow-hidden">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 start-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-main mb-4">{t('processTitle')}</h2>
                    <p className="text-muted">{t('processSub')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="bg-card border border-border p-8 rounded-2xl relative z-10 h-full hover:border-emerald-500/50 transition-colors shadow-sm hover:shadow-md">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-main mb-3">{step.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;

