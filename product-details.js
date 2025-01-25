document.addEventListener('DOMContentLoaded', () => {
    // Demo button handling
    const demoBtn = document.querySelector('.demo-btn');
    demoBtn.addEventListener('click', () => {
        window.location.href = 'demo.html';
    });

    // Exchange offer button handling
    const exchangeBtn = document.querySelector('.exchange-btn');
    exchangeBtn.addEventListener('click', () => {
        window.location.href = 'exchange.html';
    });

    // Thumbnail click handling
    const thumbnails = document.querySelectorAll('.thumbnail-grid img');
    const mainImage = document.querySelector('#mainImage');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = thumb.src.replace('w=200', 'w=800');
        });
    });
});