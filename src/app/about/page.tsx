'use client';

import Timeline from '@/components/about/Timeline';
import Values from '@/components/about/Values';
import TeamGrid from '@/components/about/TeamGrid';
import VisionMission from '@/components/about/VisionMission';
import MDStatement from '@/components/about/MDStatement';
import WhoWeAre from '@/components/about/WhoWeAre';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen pt-20 bg-page">
            <section className="py-20 text-center">
                <h1 className="text-5xl font-bold text-main mb-6">
                    <span className="text-emerald-500 font-medium">{t('aboutTitle')}</span> SITCO<span className="text-emerald-500">.</span>
                </h1>
                <p className="text-muted max-w-2xl mx-auto px-6">
                    {t('aboutSubtitle')}
                </p>
            </section>
            <WhoWeAre />
            <MDStatement />
            <VisionMission />
            <Values />
            <Timeline />
            <TeamGrid />
        </main>
    );
}
