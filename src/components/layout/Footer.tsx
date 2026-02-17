'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-muted/5 pt-20 pb-10 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-3xl font-bold tracking-tighter text-main mb-6">
                            SITCO<span className="text-emerald-500">.</span>
                        </div>
                        <p className="text-muted max-w-sm mb-8 leading-relaxed">
                            {t('brandTagline')}
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full bg-card border border-border hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors flex items-center justify-center text-main cursor-pointer shadow-sm">
                                𝕏
                            </div>
                            <div className="w-10 h-10 rounded-full bg-card border border-border hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors flex items-center justify-center text-main cursor-pointer shadow-sm">
                                in
                            </div>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-main font-bold mb-6">{t('solutions')}</h4>
                        <ul className="space-y-4 text-muted">
                            <li><Link href="/erp" className="hover:text-emerald-400 transition-colors">{t('smartErp')}</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">{t('cybersecurity')}</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">{t('aiConsultancy')}</Link></li>
                            <li><Link href="/erp" className="hover:text-emerald-400 transition-colors">{t('zatcaIntegration')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-main font-bold mb-6">{t('contact')}</h4>
                        <ul className="space-y-4 text-muted">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-emerald-500 shrink-0 mt-1" size={18} />
                                <span>
                                    {t('addressLine1')}<br />
                                    {t('addressLine2')}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-emerald-500 shrink-0" size={18} />
                                <a href="mailto:info@sitco.sa" className="hover:text-emerald-400 transition-colors">info@sitco.sa</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted text-sm">
                    <p>{t('rightsReserved')}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-main transition-colors">{t('privacyPolicy')}</Link>
                        <Link href="#" className="hover:text-main transition-colors">{t('termsOfService')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
