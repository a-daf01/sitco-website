'use client';

import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

// Helper to wrap the position
// Replaces @motionone/utils wrap(min, max, v)
function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}



const partners = [
    { name: 'Abudawood', url: 'https://abudawood.com', logo: '/partners/abudawood.png' },
    { name: 'Ecolab', url: 'https://www.ecolab.com', logo: '/partners/ecolab.png' },
    { name: 'Shopmate', url: 'https://shopmate.co.uk', logo: '/partners/shopmate.png' },
    { name: 'Planet', url: 'https://www.weareplanet.com', logo: '/partners/planet.png' },
    { name: 'Just Group', url: 'https://www.justgroupplc.co.uk', logo: '/partners/just_group.png' },
    { name: 'Clorox', url: 'https://www.thecloroxcompany.com', logo: '/partners/clorox.png' },
    { name: 'CMA CGM', url: 'https://www.cma-cgm.com', logo: '/partners/cma_cgm.png' },
    { name: 'NCH', url: 'https://www.nch.com', logo: '/partners/nch.png' },
    { name: 'Wenz International', url: 'https://wenzinternational.com', logo: '/partners/wenz.png' },
    { name: 'IKK Group', url: 'https://ikkgroup.com/main/', logo: '/partners/ikk_group.png' },
    { name: 'UDG', url: 'https://udg.com.sa', logo: '/partners/udg.png' }
];

const InteractableMarquee = () => {
    const baseX = useMotionValue(0);

    // We need to know the width of the content to wrap correctly.
    // For now, let's estimate or just use a very large scrollable area and a reset.
    // A robust way without measuring is to use a percentage based wrap if items are even,
    // or a pixel based wrap if we know the width.
    // Let's assume the strip is long enough. 

    // Speed of auto-scroll
    const baseVelocity = -0.05; // px per ms

    useAnimationFrame((time, delta) => {
        const moveBy = baseVelocity * delta;
        // Apply the movement to the motion value
        baseX.set(baseX.get() + moveBy);
    });

    // Wrap logic: assuming the triple-duplicated list is wider than viewport.
    // We want to wrap every 33.33% if we have 3 copies. 
    // Let's simpler: Use a large number of copies and a percentage wrap.
    const x = useTransform(baseX, (v) => `${wrap(0, -33.33, v / 100)}%`);

    return (
        <div className="overflow-hidden relative flex">
            <motion.div
                className="flex gap-16 items-center min-w-max px-8 py-10 cursor-grab active:cursor-grabbing"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} // We don't want constraints, we want free flow? 
                // Actually, for infinite loop with dragging, we need to add the drag delta to baseX.
                // Framer motion's drag tries to control the element's transform directly.
                // We can disable the automatic generic drag and just listen to onDrag.
                onDrag={(e, info) => {
                    baseX.set(baseX.get() + info.delta.x);
                }}
            >
                {/* 
                Render enough copies to ensure no gaps during wrap. 
                3 sets should be enough for most screens if the specific list is long.
                Our list is 11 items. 11 items * (150px approx width + 64px gap) = ~2300px per set.
                3 sets = ~7000px. Should be plenty.
             */}
                {[...partners, ...partners, ...partners].map((partner, index) => (
                    <Link
                        key={index}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/logo transition-all duration-300 pointer-events-auto block select-none"
                        draggable="false"
                    >
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            draggable="false"
                            width={180}
                            height={80}
                            className="h-20 w-auto max-w-[180px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 select-none"
                            onError={(e) => {
                                // e.currentTarget.style.display = 'none'; // logic limited in Next/Image, handling errors is harder but for static assets usually fine.
                                // We can't easily access parentElement in React SyntheticEvent for Image component the same way or it's similar.
                                // Simplification: remove error handler for now or keep generic.
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}

import { useTranslation } from '@/hooks/useTranslation';

const Partners = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-page border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-medium text-muted uppercase tracking-widest">{t('trustedBy')}</p>
            </div>

            <InteractableMarquee />

            {/* Gradient Masks */}
            <div className="absolute top-0 start-0 h-full w-40 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 end-0 h-full w-40 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default Partners;

