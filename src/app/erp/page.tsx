import ErpHero from '@/components/erp/ErpHero';
import StickyCTA from '@/components/erp/StickyCTA';
import CoreModules from '@/components/erp/CoreModules';
import PlatformTech from '@/components/erp/PlatformTech';
import SpecializedModules from '@/components/erp/SpecializedModules';
import AIAssistantShowcase from '@/components/erp/AIAssistantShowcase';
import DashboardTilt from '@/components/erp/DashboardTilt';

export default function ERPPage() {
    return (
        <main className="min-h-screen bg-slate-950 overflow-x-hidden">
            <ErpHero />
            <DashboardTilt />
            <CoreModules />
            <PlatformTech />
            <SpecializedModules />
            <AIAssistantShowcase />
            <StickyCTA />
        </main>
    );
}
