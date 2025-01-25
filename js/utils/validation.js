// Form validation utilities
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isEmptyString = (str) => {
    return !str || str.trim() === '';
};