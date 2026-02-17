import HeroSection from '@/components/home/HeroSection';

import BentoGrid from '@/components/home/BentoGrid';
import AIAnalyst from '@/components/home/AIAnalyst';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-main selection:bg-emerald-500/30">
      <HeroSection />
      <Partners />
      <BentoGrid />
      <AIAnalyst />
      <Testimonials />
    </main>
  );
}
