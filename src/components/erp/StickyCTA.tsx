'use client';

import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import Link from 'next/link';

import { useTranslation } from '@/hooks/useTranslation';

const StickyCTA = () => {
    // ... hooks ...
    const { t } = useTranslation();

    return (
        <motion.div
            // ... animation props ...
            className="fixed bottom-8 right-8 z-[100]"
        >
            <Link href="/contact#form" className="relative group block">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="relative flex items-center gap-3 bg-slate-900 border border-emerald-500/50 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-slate-800 transition-colors">
                    <span className="font-bold text-lg">{t('stickyRequestDemo')}</span>
                    <div className="p-2 bg-emerald-500 rounded-full">
                        <MessageSquareText size={20} fill="currentColor" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default StickyCTA;
