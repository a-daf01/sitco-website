'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const ConnectivityTerminal = () => {
    const [lines, setLines] = useState<string[]>([]);
    const { t } = useTranslation();



    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        const commands = [
            { text: t('termInit'), type: "cmd", delay: 500 },
            { text: t('termSignal'), type: "info", delay: 1500 },
            { text: t('termHandshake'), type: "success", delay: 2500 },
            { text: t('termSecure'), type: "success", delay: 3500 },
            { text: t('termSync'), type: "info", delay: 4500 },
            { text: t('termReady'), type: "cmd", delay: 5500 },
            { text: t('termEncrypt'), type: "sub", delay: 6000 },
            { text: t('termPriority'), type: "sub", delay: 6500 },
            { text: t('termAwait'), type: "success", delay: 7500 },
        ];

        // Reset and start animation loop
        const runAnimation = () => {
            setLines([]);
            timeouts.forEach(clearTimeout);
            timeouts = [];

            commands.forEach((cmd) => {
                const timeout = setTimeout(() => {
                    setLines(prev => [...prev, cmd.type + "::" + cmd.text]);
                }, cmd.delay);
                timeouts.push(timeout);
            });
        };

        runAnimation();
        const loopInterval = setInterval(runAnimation, 13000); // Restart every 13s

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(loopInterval);
        };
    }, [t]);
    // Actually, if language changes, we WANT to update text.
    // But `commands` is re-created on render.
    // The timeouts capture the `text` from the render where they were scheduled.
    // If I add `t` to dependency, the effect re-runs, clearing timeouts and restarting animation with new language. This is DESIRED.
    // So I should add `t` to dependency array OR just let it act as component re-mount (keys change? no).
    // I'll add `t` to dependencies or `commands` (which depends on t).
    // Better: `useEffect(() => ..., [t]);`

    const getLineColor = (type: string) => {
        if (type.startsWith("cmd")) return "text-white";
        if (type.startsWith("info")) return "text-blue-400";
        if (type.startsWith("success")) return "text-emerald-400";
        if (type.startsWith("sub")) return "text-slate-400 ps-4";
        return "text-slate-300";
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full min-h-[500px] bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl font-mono text-sm z-30 relative flex flex-col"
        >
            {/* Header */}
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <Terminal size={18} className="text-slate-400" />
                    <span className="text-slate-400 font-medium">{t('establishPartnership')}</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 flex-1 flex flex-col justify-end bg-slate-950/80 backdrop-blur-sm overflow-y-auto custom-scrollbar">
                <div className="space-y-2">
                    {lines.map((lineRaw, i) => {
                        const [type, text] = lineRaw.split("::");
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={getLineColor(type)}
                            >
                                {text}
                            </motion.div>
                        );
                    })}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2.5 h-5 bg-emerald-500 inline-block align-middle ms-1"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ConnectivityTerminal;

