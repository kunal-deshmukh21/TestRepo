import { validateForm } from './formValidation.js';
import { sendEmail } from './emailService.js';
import { showNotification } from './notification.js';

export const initializeForm = () => {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        const { isValid, errors } = validateForm(data);
        
        if (!isValid) {
            showNotification('Please fix the following errors: ' + Object.values(errors).join(', '), 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Send email
            const result = await sendEmail(data);
            
            if (result.success) {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                form.reset();
            } else {
                showNotification(result.message, 'error');
            }
        } catch (error) {
            showNotification('An error occurred. Please try again later.', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
};