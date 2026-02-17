'use client';

import { motion } from 'framer-motion';
import { Wallet, Users, Truck, CheckCircle, FileCheck } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const CoreModules = () => {
    const { t } = useTranslation();

    const coreModules = [
        {
            id: 'finance',
            title: t('modFinanceTitle'),
            description: t('modFinanceDesc'),
            icon: <Wallet size={48} className="text-emerald-400" />,
            features: [t('modFinanceFeat1'), t('modFinanceFeat2'), t('modFinanceFeat3'), t('modFinanceFeat4')],
            highlight: t('modFinanceHighlight')
        },
        {
            id: 'hr',
            title: t('modHrTitle'),
            description: t('modHrDesc'),
            icon: <Users size={48} className="text-blue-400" />,
            features: [t('modHrFeat1'), t('modHrFeat2'), t('modHrFeat3'), t('modHrFeat4')],
            highlight: t('modHrHighlight')
        },
        {
            id: 'supply-chain',
            title: t('modSupplyTitle'),
            description: t('modSupplyDesc'),
            icon: <Truck size={48} className="text-indigo-400" />,
            features: [t('modSupplyFeat1'), t('modSupplyFeat2'), t('modSupplyFeat3'), t('modSupplyFeat4')],
            highlight: t('modSupplyHighlight')
        }
    ];

    return (
        <section id="modules" className="py-24 bg-page relative">
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-6"
                    >
                        {t('level1Badge')}
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-main mb-6">
                        {t('coreModTitle')}
                    </h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        {t('coreModDesc')}
                    </p>
                </div>

                <div className="space-y-12">
                    {coreModules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-emerald-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors" />

                            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                                {/* Icon & Title Side */}
                                <div className="lg:w-1/3 flex flex-col items-start">
                                    <div className="p-6 bg-muted/10 rounded-2xl border border-border mb-6 group-hover:scale-105 transition-transform shadow-sm">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-main mb-4">{module.title}</h3>
                                    <div className="px-3 py-1 bg-muted/5 border border-border rounded-full text-xs font-semibold text-emerald-400 flex items-center gap-2">
                                        <CheckCircle size={12} />
                                        {module.highlight}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-2/3">
                                    <p className="text-xl text-muted leading-relaxed mb-8">
                                        {module.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {module.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-muted/5 rounded-xl border border-border">
                                                <FileCheck className="text-emerald-500 flex-shrink-0" size={20} />
                                                <span className="text-main font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreModules;

