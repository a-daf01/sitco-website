'use client';

import { motion } from 'framer-motion';
import {
    Briefcase, Activity, Landmark, MessageSquare, FileText,
    GraduationCap, Building, Wrench, Ticket, UserCheck, Scale, Shield
} from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const SpecializedModules = () => {
    const { t } = useTranslation();

    const specializedModules = [
        { icon: <Briefcase />, title: t('specModProject') },
        { icon: <Activity />, title: t('specModHealthcare') },
        { icon: <Landmark />, title: t('specModGRC') },
        { icon: <MessageSquare />, title: t('specModCRM') },
        { icon: <FileText />, title: t('specModLC') },
        { icon: <GraduationCap />, title: t('specModEdu') },
        { icon: <Building />, title: t('specModFacility') },
        { icon: <Wrench />, title: t('specModAsset') },
        { icon: <Ticket />, title: t('specModTicket') },
        { icon: <UserCheck />, title: t('specModVisitor') },
        { icon: <Scale />, title: t('specModLegal') },
        { icon: <Shield />, title: t('specModSecurity') }
    ];

    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium text-sm mb-6"
                    >
                        {t('level3Badge')}
                    </motion.div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"
                    />
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-6">{t('specModSectionTitle')}</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        {t('specModSectionDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {specializedModules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-xl border border-border hover:bg-muted/10 hover:border-emerald-500/30 transition-all flex flex-col items-center text-center gap-4 group cursor-default shadow-sm hover:shadow-md"
                        >
                            <div className="text-muted group-hover:text-emerald-400 transition-colors transform group-hover:scale-110 duration-300">
                                {module.icon}
                            </div>
                            <span className="text-sm font-medium text-main group-hover:text-emerald-600 transition-colors">
                                {module.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecializedModules;
