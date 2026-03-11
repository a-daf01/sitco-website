'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Don't show on contact page or ERP page to avoid conflicting CTAs
        if (pathname === '/contact' || pathname === '/erp' || isDismissed) {
            setIsVisible(false);
            return;
        }

        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, isDismissed]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
                >
                    <div className="bg-card/90 backdrop-blur-md border border-brand-500/30 p-1.5 rounded-2xl shadow-2xl flex items-center pr-4">
                        <Link href="/contact" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all">
                                <Bot size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-brand-500 font-bold uppercase tracking-wider">ENTERPRISE CONSULTANT</span>
                                <span className="text-main font-bold flex items-center gap-1 group-hover:text-brand-400 transition-colors">
                                    Book a free Consultant <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        <div className="w-px h-8 bg-border mx-3"></div>

                        <button
                            onClick={() => {
                                setIsVisible(false);
                                setIsDismissed(true);
                            }}
                            className="text-muted hover:text-main transition-colors p-1"
                            aria-label="Dismiss"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
