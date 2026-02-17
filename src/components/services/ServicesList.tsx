'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Database, X, ArrowRight, Code, Cloud, LineChart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ServicesList = () => {
    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const services = [
        {
            id: 'it-consulting',
            title: t('serITTitle'),
            shortDescription: t('serITShort'),
            fullDescription: t('serITFull'),
            icon: <BrainCircuit size={40} className="text-emerald-400" />,
            features: [t('serITFeat1'), t('serITFeat2'), t('serITFeat3'), t('serITFeat4')]
        },
        {
            id: 'software-development',
            title: t('serSoftTitle'),
            shortDescription: t('serSoftShort'),
            fullDescription: t('serSoftFull'),
            icon: <Code size={40} className="text-yellow-400" />,
            features: [t('serSoftFeat1'), t('serSoftFeat2'), t('serSoftFeat3'), t('serSoftFeat4')]
        },
        {
            id: 'cloud-services',
            title: t('serCloudTitle'),
            shortDescription: t('serCloudShort'),
            fullDescription: t('serCloudFull'),
            icon: <Cloud size={40} className="text-cyan-400" />,
            features: [t('serCloudFeat1'), t('serCloudFeat2'), t('serCloudFeat3'), t('serCloudFeat4')]
        },
        {
            id: 'managed-it',
            title: t('serManagedTitle'),
            shortDescription: t('serManagedShort'),
            fullDescription: t('serManagedFull'),
            icon: <ShieldCheck size={40} className="text-rose-400" />,
            features: [t('serManagedFeat1'), t('serManagedFeat2'), t('serManagedFeat3'), t('serManagedFeat4')]
        },
        {
            id: 'data-warehouse',
            title: t('serDataTitle'),
            shortDescription: t('serDataShort'),
            fullDescription: t('serDataFull'),
            icon: <Database size={40} className="text-indigo-400" />,
            features: [t('serDataFeat1'), t('serDataFeat2'), t('serDataFeat3'), t('serDataFeat4')]
        },
        {
            id: 'cyber-security',
            title: t('serCyberTitle'),
            shortDescription: t('serCyberShort'),
            fullDescription: t('serCyberFull'),
            icon: <ShieldCheck size={40} className="text-red-500" />,
            features: [t('serCyberFeat1'), t('serCyberFeat2'), t('serCyberFeat3'), t('serCyberFeat4')]
        },
        {
            id: 'database-management',
            title: t('serDbTitle'),
            shortDescription: t('serDbShort'),
            fullDescription: t('serDbFull'),
            icon: <Database size={40} className="text-blue-400" />,
            features: [t('serDbFeat1'), t('serDbFeat2'), t('serDbFeat3'), t('serDbFeat4')]
        },
        {
            id: 'bi-analytics',
            title: t('serBiTitle'),
            shortDescription: t('serBiShort'),
            fullDescription: t('serBiFull'),
            icon: <LineChart size={40} className="text-purple-400" />,
            features: [t('serBiFeat1'), t('serBiFeat2'), t('serBiFeat3'), t('serBiFeat4')]
        }
    ];

    return (
        <section className="py-24 bg-page min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">{t('ourServices')}</h2>
                    <p className="text-muted">{t('servicesSub')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layoutId={service.id}
                            onClick={() => setSelectedId(service.id)}
                            className="bg-card border border-border rounded-2xl p-8 hover:bg-muted/5 transition-colors cursor-pointer group shadow-sm hover:shadow-md"
                        >
                            <motion.div className="mb-6 p-4 bg-muted/10 rounded-xl w-fit border border-border group-hover:scale-110 transition-transform">
                                {service.icon}
                            </motion.div>
                            <motion.h3 className="text-xl font-bold text-main mb-2 group-hover:text-emerald-400 transition-colors">
                                {service.title}
                            </motion.h3>
                            <motion.p className="text-muted text-sm">
                                {service.shortDescription}
                            </motion.p>
                            <div className="mt-6 flex items-center gap-2 text-emerald-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>{t('learnMore')}</span>
                                <ArrowRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                            {services.map((service) => (
                                service.id === selectedId && (
                                    <motion.div
                                        key={service.id}
                                        layoutId={service.id}
                                        className="bg-card border border-border w-full max-w-2xl rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="absolute top-6 right-6 p-2 bg-muted/10 rounded-full hover:bg-muted/20 text-main transition-colors"
                                            onClick={() => setSelectedId(null)}
                                        >
                                            <X size={20} />
                                        </button>

                                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                                            <div className="p-4 bg-muted/10 rounded-2xl w-fit border border-border h-fit">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <motion.h2 className="text-3xl font-bold text-main mb-3">
                                                    {service.title}
                                                </motion.h2>
                                                <motion.p className="text-xl text-muted">
                                                    {service.shortDescription}
                                                </motion.p>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-muted leading-relaxed mb-8">
                                                {service.fullDescription}
                                            </p>

                                            <h4 className="text-main font-semibold mb-4">{t('keyFeatures')}</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 bg-muted/5 px-4 py-3 rounded-lg">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                        <span className="text-main text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link href="/contact#form" className="block text-center w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all">
                                                {t('consultExpert')}
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ServicesList;
