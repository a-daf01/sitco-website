'use client';

import Timeline from '@/components/about/Timeline';
import { motion } from 'framer-motion';
import Values from '@/components/about/Values';
// import TeamGrid from '@/components/about/TeamGrid';
import VisionMission from '@/components/about/VisionMission';
import MDStatement from '@/components/about/MDStatement';
import WhoWeAre from '@/components/about/WhoWeAre';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen pt-20 bg-page">
            <section className="py-20 text-center">
                <h1 className="text-5xl font-bold text-main mb-4">
                    <span className="text-emerald-500 font-medium">{t('aboutTitle')}</span> SITCO<span className="text-emerald-500">.</span>
                </h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"
                />
                <p className="text-muted max-w-2xl mx-auto px-6">
                    {t('aboutSubtitle')}
                </p>
            </section>
            <WhoWeAre />
            <MDStatement />
            <VisionMission />
            <Values />
            <Timeline />
            {/* <TeamGrid /> Remove as per request */}
        </main>
    );
}
