'use client';

import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const VCISOBadge = () => {
    return (
        <motion.div
            className="fixed bottom-4 start-4 z-40 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-lg cursor-help group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <ShieldCheck size={16} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-emerald-500 tracking-wider">vCISO SECURE</span>

            {/* Tooltip */}
            <div className="absolute bottom-full start-0 mb-2 w-48 bg-slate-900 border border-emerald-500/30 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                <p className="text-xs text-slate-300 leading-relaxed">
                    This platform is secured by SITCO's sovereign vCISO protocols.
                    <br />
                    <span className="text-emerald-500 font-mono mt-1 block">&gt; Encryption: AES-256</span>
                </p>
            </div>
        </motion.div>
    );
};

export default VCISOBadge;
