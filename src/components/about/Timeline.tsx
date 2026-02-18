'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Timeline = () => {
    const { t } = useTranslation();

    const milestones = [
        { year: '1996', title: t('milestone1996Title'), description: t('milestone1996Desc') },
        { year: '2004', title: t('milestone2004Title'), description: t('milestone2004Desc') },
        { year: '2007', title: t('milestone2007Title'), description: t('milestone2007Desc') },
        { year: '2011', title: t('milestone2011Title'), description: t('milestone2011Desc') },
        { year: '2015', title: t('milestone2015Title'), description: t('milestone2015Desc') },
        { year: '2018', title: t('milestone2018Title'), description: t('milestone2018Desc') },
        { year: '2021', title: t('milestone2021Title'), description: t('milestone2021Desc') },
        { year: '2024', title: t('milestone2024Title'), description: t('milestone2024Desc') }
    ];

    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">{t('journeyTitle')}</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"
                    />
                    <p className="text-muted">{t('journeySubtitle')}</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 font-sans ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="ms-12 md:ms-0 md:w-1/2 md:px-12">
                                    <div className={`bg-card p-6 rounded-2xl border border-border hover:border-emerald-500/30 transition-colors shadow-sm ${index % 2 === 0 ? 'md:text-start' : 'md:text-end'
                                        }`}>
                                        <span className="text-emerald-400 font-bold text-xl block mb-2">{item.year}</span>
                                        <h3 className="text-main font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-muted text-sm">{item.description}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-page border-2 border-emerald-500 z-10">
                                    <div className="w-full h-full rounded-full bg-emerald-500/20 animate-ping" />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

