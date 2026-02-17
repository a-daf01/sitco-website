'use client';

import { motion } from 'framer-motion';
import { Bot, User, Sparkles } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const AIAssistantShowcase = () => {
    const { t } = useTranslation();

    const messages = [
        { type: 'user', text: t('aiMsg1User') },
        { type: 'ai', text: t('aiMsg1Bot') },
        { type: 'user', text: t('aiMsg2User') },
        { type: 'ai', text: t('aiMsg2Bot') }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Side */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                                <Sparkles size={14} />
                                <span>{t('aiShowcaseBadge')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {t('aiShowcaseTitle')}
                            </h2>
                            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                {t('aiShowcaseDesc')}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[t('aiShowcaseList1'), t('aiShowcaseList2'), t('aiShowcaseList3')].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Chat Interface Side */}
                    <div className="flex-1 w-full max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Chat Header */}
                            <div className="p-4 bg-slate-800/50 border-b border-white/5 flex items-center gap-3">
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <Bot className="text-indigo-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{t('aiChatHeader')}</h3>
                                    <p className="text-xs text-emerald-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        {t('aiChatOnline')}
                                    </p>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-6 space-y-6 h-[400px] overflow-y-auto bg-slate-900/50">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.5 }}
                                        viewport={{ once: true }}
                                        className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-slate-700' : 'bg-indigo-600'}`}>
                                            {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                                        </div>
                                        <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-slate-800 text-slate-200 rounded-tr-none'
                                            : 'bg-indigo-600/10 border border-indigo-500/20 text-indigo-100 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-white/5 bg-slate-800/30">
                                <div className="h-12 bg-slate-900 rounded-lg border border-white/10 flex items-center px-4 text-slate-500 text-sm">
                                    {t('aiChatPlaceholder')}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAssistantShowcase;
