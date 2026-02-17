'use client';

import { motion } from 'framer-motion';
import { Globe, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ContactHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-40 pb-24 overflow-hidden bg-page">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 start-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/10 rounded-full opacity-30 animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 backdrop-blur-sm shadow-sm"
                    >
                        <Globe size={16} className="text-emerald-400" />
                        <span className="text-sm font-medium text-muted">{t('contactHeroTag')}</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-main mb-6 tracking-tight">
                        {t('contactHeroTitle')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            {t('contactHeroSubtitle')}
                        </span>
                    </h1>

                    <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('contactHeroDesc')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {[
                            { icon: MessageSquare, label: t('contactSupport'), text: "support@sitco.sa" },
                            { icon: Phone, label: t('contactLine'), text: "+966 11 000 0000" },
                            { icon: MapPin, label: t('contactHQ'), text: t('contactRiyadh') }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="p-4 rounded-2xl bg-card border border-border backdrop-blur-sm flex flex-col items-center gap-2 group hover:bg-muted/10 transition-colors relative z-20 shadow-sm"
                            >
                                <div className="p-3 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                    <item.icon size={20} className="text-emerald-400" />
                                </div>
                                <span className="text-sm font-medium text-muted">{item.label}</span>
                                <span className="text-xs text-muted">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade - Reduced height to prevent covering content */}
            <div className="absolute bottom-0 start-0 w-full h-12 bg-gradient-to-t from-page to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default ContactHero;

