'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const WhoWeAre = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">
                            {t('whoWeAreTitle')} <span className="text-emerald-500">{t('whoWeAreTitleSpan')}</span>
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="h-1 w-24 bg-emerald-500 rounded-full mb-6"
                        />
                        <p className="text-muted leading-relaxed mb-6">
                            {t('whoWeAreDesc1')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border"
                    >
                        <h3 className="text-2xl font-bold text-main mb-4">{t('whoWeAreBoxTitle')}</h3>
                        <p className="text-muted leading-relaxed">
                            {t('whoWeAreBoxDesc')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
