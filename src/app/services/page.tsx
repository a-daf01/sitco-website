import ServicesList from '@/components/services/ServicesList';
import ServicesHero from '@/components/services/ServicesHero';
import ProcessSection from '@/components/services/ProcessSection';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-page">
            <ServicesHero />
            <ServicesList />
            <ProcessSection />
        </main>
    );
}
