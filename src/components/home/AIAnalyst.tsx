'use client';

import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const AIAnalyst = () => {
    const [step, setStep] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4); // Cycle through animation steps
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="ai-analyst" className="py-24 bg-page relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-semibold mb-6">
                            SITCO Insight v3.0
                        </div>
                        <h2 className="text-4xl font-bold text-main mb-6">
                            {t('aiAnalystHeader')}
                        </h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            {t('aiAnalystSub')}
                        </p>
                        <ul className="space-y-4">
                            {[t('aiFeature1'), t('aiFeature2'), t('aiFeature3')].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Interactive Mockup */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                            {/* Fake Window Header */}
                            <div className="bg-muted/5 p-4 border-b border-border flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs text-muted font-mono">SITCO_Smart_Nexus.exe</span>
                            </div>

                            {/* Chat Area */}
                            <div className="p-6 h-[400px] flex flex-col gap-4 font-mono text-sm relative">

                                {/* Dynamic User Message */}
                                <motion.div
                                    key={step < 2 ? "q1" : "server"}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center shrink-0">
                                        <User size={16} className="text-muted" />
                                    </div>
                                    <div className="bg-muted/10 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg text-main">
                                        {step < 2 ? t('aiScenario1User') : t('aiScenario2User')}
                                    </div>
                                </motion.div>

                                {/* Bot Typing Indicator */}
                                {step % 2 === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center shrink-0">
                                            <Bot size={16} className="text-electric-blue" />
                                        </div>
                                        <div className="flex gap-1 items-center pt-2 ps-2">
                                            <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce delay-75"></span>
                                            <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce delay-150"></span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Bot Response */}
                                {step % 2 !== 0 && (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center shrink-0">
                                            <Bot size={16} className="text-electric-blue" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="bg-electric-blue/10 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg text-main border border-electric-blue/20">
                                                {step === 1 ? (
                                                    <>{t('aiScenario1BotPre')}<span className="text-emerald-400 font-bold">15%</span>{t('aiScenario1BotPost')}</>
                                                ) : (
                                                    <>{t('aiScenario2BotPre')}<span className="text-emerald-400 font-bold">42%</span>{t('aiScenario2BotPost')}</>
                                                )}
                                            </div>

                                            {/* Dynamic Animated Chart */}
                                            <div className="bg-muted/5 p-4 rounded-lg border border-border mt-2">
                                                {step === 1 ? (
                                                    // Sales Chart
                                                    <div className="flex items-end gap-2 h-24 pb-4 border-b border-border">
                                                        <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ duration: 1 }} className="flex-1 bg-muted/30 rounded-t" />
                                                        <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ duration: 1, delay: 0.2 }} className="flex-1 bg-muted/30 rounded-t" />
                                                        <motion.div initial={{ height: 0 }} animate={{ height: '85%' }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 bg-emerald-500 rounded-t relative group">
                                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-emerald-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">+15%</div>
                                                        </motion.div>
                                                    </div>
                                                ) : (
                                                    // Server Health Chart (Line-like bars)
                                                    <div className="flex items-end gap-1 h-24 pb-4 border-b border-slate-600">
                                                        {[30, 45, 35, 50, 42, 38, 42].map((h, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ height: 0 }}
                                                                animate={{ height: `${h}%` }}
                                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                                className={`flex-1 rounded-t ${i === 6 ? 'bg-emerald-500' : 'bg-slate-600'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex justify-between text-xs text-muted mt-2">
                                                    {step === 1 ? (
                                                        <><span>Jan</span><span>Feb</span><span>Mar</span></>
                                                    ) : (
                                                        <><span>00:00</span><span>12:00</span><span>Now</span></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="bg-muted/5 p-4 border-t border-border flex gap-3">
                                <input
                                    disabled
                                    type="text"
                                    placeholder={t('aiInputPlaceholder')}
                                    className="flex-1 bg-card border border-border rounded-lg px-4 py-2 text-sm text-main focus:outline-none focus:border-electric-blue placeholder-muted"
                                />
                                <button className="bg-electric-blue hover:bg-blue-600 text-white p-2 rounded-lg transition-colors">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AIAnalyst;

