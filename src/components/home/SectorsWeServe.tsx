'use client';

import { motion } from 'framer-motion';
import { Building2, Stethoscope, Droplets, Landmark, Factory, Truck, Briefcase, GraduationCap, Scale } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';



const SectorsWeServe = () => {
    const { t } = useTranslation();

    const sectors = [
        { icon: <Building2 className="text-emerald-400" size={32} />, name: t('secGov') },
        { icon: <Stethoscope className="text-cyan-400" size={32} />, name: t('secHealth') },
        { icon: <Droplets className="text-blue-400" size={32} />, name: t('secOil') },
        { icon: <Landmark className="text-yellow-400" size={32} />, name: t('secFinance') },
        { icon: <Factory className="text-orange-400" size={32} />, name: t('secManuf') },
        { icon: <Truck className="text-purple-400" size={32} />, name: t('secLogistics') },
        { icon: <Briefcase className="text-indigo-400" size={32} />, name: t('secProject') },
        { icon: <GraduationCap className="text-red-400" size={32} />, name: t('secEdu') },
        { icon: <Scale className="text-teal-400" size={32} />, name: t('secLaw') },
    ];

    return (
        <section className="py-12 md:py-20 bg-page border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-main mb-4"
                    >
                        {t('secTitle')}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card border border-border p-6 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors group shadow-sm hover:shadow-emerald-500/10"
                        >
                            <div className="p-3 bg-muted/10 rounded-lg group-hover:scale-110 transition-transform">
                                {sector.icon}
                            </div>
                            <span className="text-lg font-medium text-main group-hover:text-emerald-400 transition-colors">
                                {sector.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectorsWeServe;
