'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ContactForm = () => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'ERP System',
        customService: '',
        budget: '500k-1M SAR',
        customBudget: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const steps = [
        { id: 1, title: t('stepIdentity'), fields: ['name', 'email'] },
        { id: 2, title: t('stepObjective'), fields: ['service', 'budget'] },
        { id: 3, title: t('stepDetails'), fields: ['message'] }
    ];

    const validateStep = (stepId: number) => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        if (stepId === 1) {
            if (!formData.name.trim()) {
                newErrors.name = t('errFullName');
                isValid = false;
            }
            if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
                newErrors.email = t('errEmail');
                isValid = false;
            }
        }

        if (stepId === 2) {
            if (formData.service === 'Other' && !formData.customService.trim()) {
                newErrors.customService = t('errService');
                isValid = false;
            }
            // Budget "Other" is now optional
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            } else {
                handleSubmit();
            }
        }
    };

    const handleSubmit = async () => {
        // Prepare final data
        const finalData = {
            ...formData,
            service: formData.service === 'Other' ? formData.customService : formData.service,
            budget: formData.budget === 'Other' ? formData.customBudget : formData.budget,
        };

        await import('@/app/actions/sendEmail').then(({ sendEmail }) => {
            sendEmail(finalData);
            setIsSubmitted(true);
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-emerald-500/30 p-12 rounded-2xl text-center shadow-2xl"
            >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                    <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-main mb-2">{t('msgSuccessTitle')}</h3>
                <p className="text-muted">{t('msgSuccessBody')}</p>
            </motion.div>
        );
    }

    return (
        <div className="bg-card/50 border border-border p-8 md:p-12 rounded-2xl backdrop-blur-sm">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 start-0 w-full h-0.5 bg-muted/20 -z-10" />
                <div
                    className="absolute top-1/2 start-0 h-0.5 bg-emerald-500 -z-10 transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-2">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step.id <= currentStep ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-muted/20 text-muted'
                                }`}
                        >
                            {step.id < currentStep ? <Check size={14} /> : step.id}
                        </div>
                        <span className={`text-xs font-medium uppercase tracking-wider ${step.id <= currentStep ? 'text-emerald-400' : 'text-muted'
                            }`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t('lblFullName')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-muted/5 border rounded-lg p-4 text-main focus:outline-none focus:border-emerald-500 transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}
                                    placeholder={t('phFullName')}
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t('lblEmail')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-muted/5 border rounded-lg p-4 text-main focus:outline-none focus:border-emerald-500 transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                                    placeholder={t('phEmail')}
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">{t('lblService')}</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                                >
                                    <option value="ERP System">{t('serviceERP')}</option>
                                    <option value="Cybersecurity Audit">{t('serviceCyber')}</option>
                                    <option value="AI Solutions">{t('serviceAI')}</option>
                                    <option value="Consultancy">{t('serviceConsultancy')}</option>
                                    <option value="Other">{t('serviceOther')}</option>
                                </select>
                            </div>

                            {/* Conditional Custom Service Input */}
                            {formData.service === 'Other' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-2"
                                >
                                    <input
                                        type="text"
                                        name="customService"
                                        value={formData.customService}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-950 border rounded-lg p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors ${errors.customService ? 'border-red-500' : 'border-white/10'}`}
                                        placeholder={t('serviceOther') + "..."}
                                    />
                                    {errors.customService && <p className="text-red-500 text-xs">{errors.customService}</p>}
                                </motion.div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">{t('lblBudget')}</label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                                >
                                    <option value="100k - 500k SAR">{t('budget1')}</option>
                                    <option value="500k - 1M SAR">{t('budget2')}</option>
                                    <option value="1M - 5M SAR">{t('budget3')}</option>
                                    <option value="5M+ SAR">{t('budget4')}</option>
                                    <option value="Other">{t('serviceOther')}</option>
                                </select>
                            </div>

                            {/* Conditional Custom Budget Input */}
                            {formData.budget === 'Other' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-2"
                                >
                                    <input
                                        type="text"
                                        name="customBudget"
                                        value={formData.customBudget}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                        placeholder={t('serviceOther') + "..."}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">{t('lblProjectDetails')}</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    placeholder={t('phProjectDetails')}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                    {currentStep > 1 && (
                        <button
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            type="button"
                            className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-4 rounded-xl font-medium transition-all"
                        >
                            {t('btnBack')}
                        </button>
                    )}

                    <button
                        onClick={handleNext}
                        type="button"
                        className={`bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2 ${currentStep === 1 ? 'ms-auto' : ''}`}
                    >
                        {currentStep === steps.length ? t('btnSubmit') : t('btnNext')}
                        <ChevronRight size={18} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

