import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { sendEmail } from './services/emailService.js';
import { logger } from './utils/logger.js';

// Initialize environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(projectRoot));

// Email endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { formType, formData } = req.body;
        
        if (!formType || !formData) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }

        const result = await sendEmail(formType, formData);
        res.json(result);
    } catch (error) {
        logger.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message || 'Failed to send email' 
        });
    }
});

// Serve static files for all other routes
app.get('*', (req, res) => {
    res.sendFile(join(projectRoot, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});