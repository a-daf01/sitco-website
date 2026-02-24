'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const MDStatement = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-card border-y border-border">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/20">
                            <Quote size={32} className="text-emerald-400" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-main mb-4">{t('mdTitle')}</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-8"
                        />
                        <blockquote className="text-xl md:text-2xl text-muted leading-relaxed font-light italic mb-8">
                            &quot;{t('mdQuote')}
                            <br /><br />
                            {t('mdQuote2')}
                            <br /><br />
                            <span className="text-emerald-500 not-italic font-medium">{t('mdAiSprinkle')}</span>&quot;
                        </blockquote>
                        <div className="flex flex-col items-center">
                            <cite className="text-emerald-400 font-bold text-lg not-italic">{t('mdName')}</cite>
                            <span className="text-muted text-sm">{t('mdRole')}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MDStatement;
