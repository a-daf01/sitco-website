'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ConnectivityTerminal from '@/components/contact/ConnectivityTerminal';
import ContactHero from '@/components/contact/ContactHero';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <main className="min-h-screen bg-page">
            <ContactHero />

            <section className="py-12 md:py-20 relative overflow-hidden">
                {/* Cross Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="cross-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M30 20 V40 M20 30 H40" stroke="currentColor" strokeWidth="1" className="text-main" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cross-grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-main mb-6">{t('initiateProtocol')}</h2>

                        {/* SITCO HQ Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                            <div className="relative w-6 h-6">
                                <Image src="/sitco_logo_lm.png" alt="SITCO" fill className="object-contain" />
                            </div>
                            <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase">{t('sitcoHq')}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                        <motion.div
                            id="form"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 scroll-mt-32"
                        >
                            <ContactForm />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:col-span-1 h-full"
                        >
                            <ConnectivityTerminal />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
