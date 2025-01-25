import { initializeForm } from './handlers/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('demoForm');
    initializeForm(form, 'demo');
});