'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const Testimonials = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            quote: t('testimonial1Quote'),
            author: t('testimonial1Author'),
            role: t('testimonial1Role'),
            initials: "MS"
        },
        {
            quote: t('testimonial2Quote'),
            author: t('testimonial2Author'),
            role: t('testimonial2Role'),
            initials: "FG"
        },
        {
            quote: t('testimonial3Quote'),
            author: t('testimonial3Author'),
            role: t('testimonial3Role'),
            initials: "AO"
        }
    ];

    return (
        <section className="py-24 bg-page">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-main mb-4">{t('testimonialsTitle')}</h2>
                    <p className="text-muted">{t('testimonialsSub')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-2xl border border-border hover:border-emerald-500/30 transition-colors relative shadow-sm hover:shadow-md"
                        >
                            <Quote className="absolute top-8 right-8 text-main/5" size={48} />

                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                                    {item.initials}
                                </div>
                            </div>

                            <p className="text-muted leading-relaxed mb-6 italic">
                                &quot;{item.quote}&quot;
                            </p>

                            <div>
                                <h4 className="text-main font-bold">{item.author}</h4>
                                <span className="text-emerald-500 text-sm">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
