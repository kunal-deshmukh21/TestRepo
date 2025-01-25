import { isValidEmail, isEmptyString } from '../utils/validation.js';

const validateCommonFields = (formData) => {
    const errors = {};

    if (isEmptyString(formData.name)) {
        errors.name = 'Name is required';
    }

    if (!formData.email || !isValidEmail(formData.email)) {
        errors.email = 'Valid email is required';
    }

    if (isEmptyString(formData.location)) {
        errors.location = 'Location is required';
    }

    if (!formData.phone) {
        errors.phone = 'Phone number is required';
    }

    return errors;
};

const validateDemoFields = (formData) => {
    const errors = {};

    if (!formData.product) {
        errors.product = 'Please select a product';
    }

    if (!formData.preferred_date) {
        errors.preferred_date = 'Please select a preferred date';
    }

    if (!formData.preferred_time) {
        errors.preferred_time = 'Please select a preferred time slot';
    }

    return errors;
};

const validateExchangeFields = (formData) => {
    const errors = {};

    if (isEmptyString(formData.current_brand)) {
        errors.current_brand = 'Current brand is required';
    }

    if (!formData.interested_product) {
        errors.interested_product = 'Please select an interested product';
    }

    return errors;
};

export const validateForm = (formData) => {
    let errors = validateCommonFields(formData);

    // Add form-specific validation
    if (formData.product !== undefined) {
        errors = { ...errors, ...validateDemoFields(formData) };
    } else if (formData.current_brand !== undefined) {
        errors = { ...errors, ...validateExchangeFields(formData) };
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};