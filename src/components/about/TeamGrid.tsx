'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TeamGrid = () => {
    const { t } = useTranslation();

    const team = [
        { name: 'Sarah Al-Saud', role: t('roleCEO'), image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2688&auto=format&fit=crop' },
        { name: 'Faisal Al-Harbi', role: t('roleCTO'), image: 'https://images.unsplash.com/photo-1556157382-97eda2d622ca?q=80&w=2688&auto=format&fit=crop' },
        { name: 'Noura Al-Amri', role: t('roleHeadAI'), image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop' },
        { name: 'Omar Khalid', role: t('roleArchitect'), image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
    ];

    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">{t('teamTitle')}</h2>
                    <p className="text-muted">{t('teamSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                        >
                            {/* Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-emerald-400 text-sm font-medium mb-4">{member.role}</p>

                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <button className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 text-white transition-colors">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 text-white transition-colors">
                                        <Twitter size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
