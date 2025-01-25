import dotenv from 'dotenv';
import { logger } from '../utils/logger.js';

dotenv.config();

const getEnvVar = (name) => {
    const value = process.env[name];
    if (!value) {
        logger.error(`Missing environment variable: ${name}`);
        return '';
    }
    return value;
};

const emailConfig = {
    host: getEnvVar('SMTP_HOST'),
    port: parseInt(getEnvVar('SMTP_PORT'), 10),
    secure: false,
    auth: {
        user: getEnvVar('SMTP_USER'),
        pass: getEnvVar('SMTP_PASS')
    },
    from: getEnvVar('SMTP_FROM'),
    to: getEnvVar('SMTP_TO')
};

export { emailConfig };