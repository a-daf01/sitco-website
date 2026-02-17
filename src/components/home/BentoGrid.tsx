'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, BrainCircuit, FileCheck, Users, Lock, Server } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const BentoGrid = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-24 bg-page relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main to-muted mb-4">
                        {t('whatWeDo')}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        {t('servicesSub')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Card 1: Smart ERP (Large - Spans 2 cols) */}
                    <Link href="/erp" className="md:col-span-2 text-start block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-8 hover:bg-card transition-colors group relative overflow-hidden h-full cursor-pointer border border-border hover:border-emerald-500/30"
                        >
                            <div className="absolute top-0 end-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Database size={120} />
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-main">{t('smartErpTitle')}</h3>
                            </div>

                            <p className="text-muted mb-8 max-w-md">
                                {t('smartErpDesc')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-card/50 p-3 rounded-lg border border-border">
                                    <FileCheck className="text-gold-400" size={20} />
                                    <span className="text-sm font-medium text-main">{t('zatcaInvoicing')}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-card/50 p-3 rounded-lg border border-border">
                                    <Users className="text-emerald-400" size={20} />
                                    <span className="text-sm font-medium text-main">{t('hrGosi')}</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 2: AI & Automation */}
                    <Link href="/services" className="block text-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card rounded-2xl p-8 hover:bg-slate-800/50 transition-colors group relative h-full cursor-pointer border border-white/5 hover:border-emerald-500/30"
                        >
                            <div className="absolute top-0 end-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BrainCircuit size={100} />
                            </div>

                            <div className="p-3 bg-electric-blue/10 rounded-lg text-electric-blue w-fit mb-6">
                                <BrainCircuit size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-main mb-3">{t('aiAutomationTitle')}</h3>
                            <p className="text-muted text-sm mb-4">
                                {t('chatWithData')}
                            </p>
                            <div className="mt-auto">
                                <div className="bg-slate-900/50 p-3 rounded border border-white/5 text-xs font-mono text-emerald-400">
                                    &gt; Show Q1 Profit...
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 3: Cybersecurity */}
                    <Link href="/services" className="block text-start md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card rounded-2xl p-8 hover:bg-slate-800/50 transition-colors group relative h-full cursor-pointer border border-white/5 hover:border-emerald-500/30"
                        >
                            <div className="absolute top-0 end-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={100} />
                            </div>

                            <div className="p-3 bg-gold-500/10 rounded-lg text-gold-400 w-fit mb-6">
                                <ShieldCheck size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-main mb-3">{t('ncaSecurityTitle')}</h3>
                            <p className="text-muted text-sm mb-4">
                                {t('eccCompliant')}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/5 px-3 py-2 rounded-full w-fit border border-emerald-500/10">
                                <Server size={14} />
                                {t('hostedRiyadh')}
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 4: Sovereign Cloud (Replaces Secure Data Vault) */}
                    <Link href="/services" className="md:col-span-2 block text-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card rounded-2xl p-8 hover:bg-slate-800/50 transition-colors group relative h-full cursor-pointer border border-white/5 hover:border-emerald-500/30 overflow-hidden"
                        >
                            <div className="absolute top-0 end-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Lock size={120} />
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4 max-w-[80%]">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                            <Server size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-main">{t('sovereignCloudTitle')}</h3>
                                    </div>

                                    <p className="text-muted text-sm mb-8 leading-relaxed max-w-[80%]">
                                        {t('sovereignCloudDesc')}
                                    </p>

                                    <div className="flex gap-3">
                                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/5 px-3 py-1.5 rounded border border-emerald-500/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            {t('regionRiyadh')}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                                            <ShieldCheck size={12} />
                                            {t('aesEncryption')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;

