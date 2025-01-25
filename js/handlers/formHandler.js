import { validateForm } from '../validation/formValidation.js';
import { sendEmail } from '../services/emailService.js';
import { showNotification } from '../ui/notification.js';

const handleSubmit = async (formData, formType) => {
    try {
        const result = await sendEmail(formData, formType);
        return { 
            success: true, 
            message: result.message || 'Thank you! We will get back to you soon.' 
        };
    } catch (error) {
        console.error('Form submission failed:', error);
        return { 
            success: false, 
            message: error.message || 'Failed to submit form. Please try again.' 
        };
    }
};

const updateSubmitButton = (button, isSubmitting = false) => {
    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? 'Sending...' : 'Send Message';
};

export const initializeForm = (form, formType) => {
    if (!form || !formType) {
        console.error('Missing form element or form type');
        return;
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = Object.fromEntries(new FormData(form));
        const { isValid, errors } = validateForm(formData);
        
        if (!isValid) {
            showNotification('Please fix the following errors: ' + Object.values(errors).join(', '), 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        updateSubmitButton(submitBtn, true);
        
        try {
            const result = await handleSubmit(formData, formType);
            showNotification(result.message, result.success ? 'success' : 'error');
            
            if (result.success) {
                form.reset();
            }
        } catch (error) {
            showNotification('An error occurred. Please try again later.', 'error');
        } finally {
            updateSubmitButton(submitBtn, false);
        }
    });
};