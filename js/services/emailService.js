import { emailConfig } from '../config/emailConfig.js';

export const sendEmail = async (formData, formType) => {
    try {
        const templateId = emailConfig.templates[formType] || emailConfig.templateId;
        
        // Common parameters for all form types
        const templateParams = {
            to_name: "Admin",
            from_name: formData.name || '',
            from_email: formData.email || '',
            phone: formData.phone || '',
            location: formData.location || '',
            message: formData.message || '',
            form_type: formType // Adding form type to distinguish between different forms
        };

        // Add form-specific parameters
        if (formType === 'demo') {
            Object.assign(templateParams, {
                product: formData.product || '',
                preferred_date: formData.preferred_date || '',
                preferred_time: formData.preferred_time || ''
            });
        } else if (formType === 'exchange') {
            Object.assign(templateParams, {
                current_brand: formData.current_brand || '',
                current_model: formData.current_model || '',
                purchase_year: formData.purchase_year || '',
                interested_product: formData.interested_product || ''
            });
        }

        const response = await emailjs.send(
            emailConfig.serviceId,
            templateId,
            templateParams
        );

        if (response.status === 200) {
            return {
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            };
        } else {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};