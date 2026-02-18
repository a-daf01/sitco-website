'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMatrix } from '@/context/MatrixContext';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

const DashboardTilt = () => {
    const ref = useRef(null);
    const { theme } = useMatrix();
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const imageSrc = theme === 'dark' ? '/images/ERP_System_DM.png' : '/images/ERP_System.png';

    return (
        <section ref={ref} className="py-20 bg-slate-950 perspective-1000 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('commandCenter')}</h2>
                    <p className="text-slate-400">{t('realTimeInsights')}</p>
                </div>

                <motion.div
                    style={{ rotateX, scale, opacity }}
                    className="relative mx-auto max-w-6xl"
                >
                    {/* Dashboard Mockup Container */}
                    <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm group">
                        <div className="relative w-full bg-navy-950/50">
                            <Image
                                src={imageSrc}
                                alt={t('erpInterfaceAlt')}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                                priority
                            />

                            {/* Overlay Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                            {/* Interactive Hover Glow (Kept glow, removed zoom) */}
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Reflection/Glow below */}
                    <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardTilt;
