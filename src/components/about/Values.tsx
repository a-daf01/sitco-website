'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Shield, Flag } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Values = () => {
    const { t } = useTranslation();

    const values = [
        {
            icon: <Lightbulb size={40} className="text-yellow-400" />,
            title: t('valInnovation'),
            description: t('valInnovationDesc')
        },
        {
            icon: <Shield size={40} className="text-emerald-400" />,
            title: t('valIntegrity'),
            description: t('valIntegrityDesc')
        },
        {
            icon: <Flag size={40} className="text-indigo-400" />,
            title: t('valSovereignty'),
            description: t('valSovereigntyDesc')
        }
    ];

    return (
        <section className="py-24 bg-page relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#888888 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">{t('valuesTitle')}</h2>
                    <p className="text-muted">{t('valuesSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-2xl border border-border text-center hover:border-emerald-500/30 transition-all group shadow-sm hover:shadow-md"
                        >
                            <div className="bg-muted/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-main mb-3">{value.title}</h3>
                            <p className="text-muted">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
