'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailFormData {
    name: string;
    email: string;
    service: string;
    budget: string;
    message: string;
}

export async function sendEmail(formData: EmailFormData) {
    try {
        const { name, email, service, budget, message } = formData;

        const data = await resend.emails.send({
            from: 'SITCO Contact Form <onboarding@resend.dev>', // Use default until domain is verified
            to: ['ahmedmoiz2001@gmail.com'], // Verified recipient or the user's email if testing
            subject: `New Lead: ${name} - ${service}`,
            html: `
                <h1>New Project Inquiry</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
