'use client';

import { motion } from 'framer-motion';
import { Terminal, Check, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const TechTerminal = () => {
    const [lines, setLines] = useState<string[]>([]);

    const commands = [
        { text: "> Initializing SITCO Secure Protocol...", type: "cmd", delay: 500 },
        { text: "> Handshake issued to Riyadh-Core-01", type: "info", delay: 1500 },
        { text: "> Verifying Identity... [OK]", type: "success", delay: 2500 },
        { text: "> Establishing Encrypted Uplink...", type: "info", delay: 3500 },
        { text: "> Connection Secure. Latency: 12ms", type: "success", delay: 4500 },
        { text: "> Deploying Microservices...", type: "cmd", delay: 5500 },
        { text: "  - Neural Engine: Active", type: "sub", delay: 6000 },
        { text: "  - Data Vault: Locked", type: "sub", delay: 6500 },
        { text: "> System Ready.", type: "success", delay: 7500 },
    ];

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

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
        const loopInterval = setInterval(runAnimation, 9000); // Restart every 9s

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(loopInterval);
        };
    }, []);

    const getLineColor = (type: string) => {
        if (type.startsWith("cmd")) return "text-white";
        if (type.startsWith("info")) return "text-blue-400";
        if (type.startsWith("success")) return "text-emerald-400";
        if (type.startsWith("sub")) return "text-slate-400 ps-4";
        return "text-slate-300";
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-80 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden shadow-2xl font-mono text-xs"
        >
            {/* Header */}
            <div className="bg-slate-800 p-2 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-slate-400" />
                    <span className="text-slate-400">deploy_agent.sh</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-48 flex flex-col justify-end bg-slate-950/80 backdrop-blur-sm">
                <div className="space-y-1">
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
                        className="w-2 h-4 bg-emerald-500 inline-block align-middle ms-1"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default TechTerminal;

