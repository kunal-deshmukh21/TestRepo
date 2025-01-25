import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email.js';
import { getEmailTemplate } from '../templates/emailTemplates.js';
import { logger } from '../utils/logger.js';

const validateEmailConfig = () => {
    const required = ['host', 'port', 'auth.user', 'auth.pass', 'from', 'to'];
    for (const field of required) {
        const value = field.split('.').reduce((obj, key) => obj?.[key], emailConfig);
        if (!value) {
            throw new Error(`Missing required email config: ${field}`);
        }
    }
};

const createTransporter = () => {
    validateEmailConfig();
    
    return nodemailer.createTransport({
        host: emailConfig.host,
        port: emailConfig.port,
        secure: true,
        auth: {
            user: emailConfig.auth.user,
            pass: emailConfig.auth.pass
        }
    });
};

export const sendEmail = async (formType, formData) => {
    if (!formType || !formData) {
        throw new Error('Missing required parameters');
    }

    try {
        const template = getEmailTemplate(formType, formData);
        const mailer = createTransporter();
        
        const mailOptions = {
            from: emailConfig.from,
            to: emailConfig.to,
            subject: template.subject,
            html: template.html
        };

        const info = await mailer.sendMail(mailOptions);
        logger.info('Email sent successfully:', info.messageId);
        
        return {
            success: true,
            message: 'Email sent successfully!'
        };
    } catch (error) {
        logger.error('Email sending failed:', error);
        throw new Error(error.message || 'Failed to send email');
    }
};