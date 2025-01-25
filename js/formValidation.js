export const validateForm = (formData) => {
    const errors = {};

    // Validate name
    if (!formData.name || formData.name.trim() === '') {
        errors.name = 'Name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = 'Valid email is required';
    }

    // Validate location
    if (!formData.location || formData.location.trim() === '') {
        errors.location = 'Location is required';
    }

    // Validate message
    if (!formData.message || formData.message.trim() === '') {
        errors.message = 'Message is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};