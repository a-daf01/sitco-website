'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Cloud, ArrowRight, CheckCircle, ChevronRight, X } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function AIReadinessQuiz() {
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        {
            question: "How is your enterprise data currently stored?",
            options: [
                { text: "Scattered across local spreadsheets", points: 1, icon: Cloud },
                { text: "Legacy On-Premise Servers", points: 2, icon: Shield },
                { text: "Centralized Cloud/ERP System", points: 5, icon: Brain }
            ]
        },
        {
            question: "Are you fully compliant with ZATCA Phase 2 E-Invoicing?",
            options: [
                { text: "No, currently researching", points: 1 },
                { text: "Partially manual/third-party", points: 2 },
                { text: "Yes, fully integrated in ERP", points: 5 }
            ]
        },
        {
            question: "How do you generate business insights?",
            options: [
                { text: "Manual Data Entry & Reports", points: 1 },
                { text: "Static BI Dashboards", points: 3 },
                { text: "Real-time AI/Predictive Analytics", points: 5 }
            ]
        }
    ];

    const handleOptionSelect = (points: number) => {
        setScore(score + points);
        setStep(step + 1);
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;

        // Simulating submission to CRM
        await sendEmail({
            name: "Enterprise Quiz Generator",
            email: email,
            service: "AI Readiness Quiz Lead",
            budget: "N/A",
            message: `Lead scored ${score} points on the Enterprise AI Readiness Quiz.`
        });
        setSubmitted(true);
    };

    // Calculate result tier based on score max 15
    const getResultTier = () => {
        if (score <= 5) return { title: "Foundational Stage", desc: "You have massive untapped potential. It's time to centralize your data and secure your infrastructure." };
        if (score <= 11) return { title: "Growth Stage", desc: "You have good systems in place. The next step is AI automation and sovereign cloud integration." };
        return { title: "Enterprise Leader", desc: "You are highly optimized! Let's explore advanced enterprise RAG systems to unleash your data's full power." };
    };

    if (!isOpen) {
        return (
            <div className="w-full max-w-4xl mx-auto my-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl overflow-hidden border border-brand-500/20 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-sm font-semibold mb-4 border border-brand-500/20">
                                <Brain size={16} />
                                <span>2026 Executive Framework</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Enterprise AI Readiness Quiz</h2>
                            <p className="text-muted text-lg mb-0">
                                Is your infrastructure ready for sovereign AI? Take our 60-second assessment to discover your digital maturity score and get a customized architecture roadmap.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="shrink-0 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
                        >
                            Start Assessment <ArrowRight size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto my-16 px-4 relative z-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-8 md:p-12 border border-brand-500/30 relative overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={() => { setIsOpen(false); setStep(0); setScore(0); setSubmitted(false); }}
                    className="absolute top-4 right-4 text-muted hover:text-main transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Progress Bar */}
                {step < questions.length && (
                    <div className="w-full bg-border h-2 rounded-full mb-8 overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / questions.length) * 100}%` }}
                        />
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {/* Questions */}
                    {step < questions.length && (
                        <motion.div
                            key={`step-${step}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <span className="text-brand-500 font-bold mb-2 block">Question {step + 1} of {questions.length}</span>
                            <h3 className="text-2xl font-bold mb-6">{questions[step].question}</h3>

                            <div className="space-y-4">
                                {questions[step].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOptionSelect(opt.points)}
                                        className="w-full text-left p-4 rounded-xl border border-border hover:border-brand-500 hover:bg-brand-500/5 transition-all group flex items-center justify-between"
                                    >
                                        <span className="font-medium text-lg">{opt.text}</span>
                                        <ChevronRight size={20} className="text-muted group-hover:text-brand-500 transition-colors" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Lead Capture */}
                    {step === questions.length && !submitted && (
                        <motion.div
                            key="lead-capture"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-3">Assessment Complete!</h3>
                                <p className="text-muted text-lg">
                                    Your architecture roadmap is ready. Enter your corporate email to view your score and receive your customized executive report.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-main focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-medium"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
                                >
                                    Unlock Results <ArrowRight size={20} />
                                </button>
                                <p className="text-xs text-muted text-center flex items-center justify-center gap-1 mt-4">
                                    <Shield size={12} /> We protect your data with enterprise-grade encryption.
                                </p>
                            </form>
                        </motion.div>
                    )}

                    {/* Final Result */}
                    {submitted && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring" }}
                                className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <CheckCircle size={40} />
                            </motion.div>

                            <h3 className="text-sm font-bold text-brand-500 tracking-wider uppercase mb-2">Your Maturity Tier</h3>
                            <h2 className="text-4xl font-bold mb-6">{getResultTier().title}</h2>

                            <div className="bg-card/50 p-6 rounded-2xl border border-border mb-8 max-w-lg mx-auto">
                                <p className="text-lg leading-relaxed text-main">
                                    {getResultTier().desc}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                                >
                                    Consult an Architect
                                </a>
                                <button
                                    onClick={() => { setIsOpen(false); setStep(0); setScore(0); setSubmitted(false); }}
                                    className="px-8 py-3 rounded-xl font-bold text-main bg-border hover:bg-border/80 transition-colors"
                                >
                                    Close Quiz
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
