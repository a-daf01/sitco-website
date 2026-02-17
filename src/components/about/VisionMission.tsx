'use client';

import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const VisionMission = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border hover:border-emerald-500/30 transition-colors shadow-sm hover:shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-500/10 rounded-lg">
                                <Compass size={32} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-main">{t('visionTitle')}</h3>
                        </div>
                        <p className="text-muted leading-relaxed">
                            {t('visionDesc')}
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-lg">
                                <Target size={32} className="text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-main">{t('missionTitle')}</h3>
                        </div>
                        <p className="text-muted leading-relaxed">
                            {t('missionDesc')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
