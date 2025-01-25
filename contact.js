import { initializeForm } from './js/handlers/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    initializeForm(form, 'contact');
});