import { initializeForm } from './handlers/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exchangeForm');
    initializeForm(form, 'exchange');
});