document.addEventListener('DOMContentLoaded', () => {
    // Sort buttons
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sortBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Remove keyword tags
    const removeTags = document.querySelectorAll('.remove-tag');
    removeTags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.parentElement.remove();
        });
    });

    // Range slider value update
    const slider = document.querySelector('.slider');
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        // Update the slider background
        const percentage = (value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, var(--primary) ${percentage}%, var(--background) ${percentage}%)`;
    });
});