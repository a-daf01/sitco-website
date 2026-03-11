'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Shield, FileText } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function ExitIntentModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Prevent triggering on mobile (mouse leave doesn't work well)
        if (window.innerWidth < 768) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsOpen(true);
                setHasTriggered(true);
                // Also save to sessionStorage so it doesn't trigger again across reloads in same session
                sessionStorage.setItem('exitIntentTriggered', 'true');
            }
        };

        if (!sessionStorage.getItem('exitIntentTriggered')) {
            document.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasTriggered]);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;

        await sendEmail({
            name: "Whitepaper Download",
            email: email,
            service: "Whitepaper Lead",
            budget: "N/A",
            message: `Lead has requested the whitepaper: The 10 reasons why you MUST incorporate AI into your Business.`
        });

        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-brand-500/20 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
                    >
                        {/* Left Side (Visual) */}
                        <div className="bg-brand-900/40 p-8 md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                            <FileText size={64} className="text-brand-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                            <div className="text-center z-10">
                                <span className="text-brand-300 font-bold text-sm tracking-widest uppercase mb-1 block">Whitepaper</span>
                                <h3 className="text-xl font-bold text-white">The 10 reasons why you MUST incorporate AI into your Business</h3>
                            </div>
                        </div>

                        {/* Right Side (Form) */}
                        <div className="p-8 md:w-3/5 bg-page flex flex-col justify-center relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-muted hover:text-main transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {!submitted ? (
                                <>
                                    <h2 className="text-2xl font-bold mb-2">Wait, before you go...</h2>
                                    <p className="text-muted mb-6">
                                        Don't leave your enterprise infrastructure vulnerable. Download our exclusive executive guide to securing your data while deploying LLMs.
                                    </p>

                                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter corporate email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-main focus:outline-none focus:border-brand-500 transition-all font-medium"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
                                        >
                                            <Download size={18} /> Send Me The Guide
                                        </button>
                                        <div className="flex items-center justify-center gap-1.5 text-xs text-muted mt-4">
                                            <Shield size={12} /> We will never share your email.
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-6"
                                >
                                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Download size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Whitepaper Unlocked!</h3>
                                    <p className="text-muted">
                                        Thank you for your interest. You can now download your exclusive executive guide below.
                                    </p>
                                    <a
                                        href="/whitepaper.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 font-bold bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-brand-500/25"
                                    >
                                        <Download size={18} /> Download Now
                                    </a>
                                    <div className="mt-4">
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="mt-6 font-bold text-brand-500 hover:text-brand-400 transition-colors"
                                        >
                                            Return to Site
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
