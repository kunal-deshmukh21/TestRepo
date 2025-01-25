export const showNotification = (message, type = 'success') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add notification to DOM
    document.body.appendChild(notification);

    // Add styles dynamically
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '4px';
    notification.style.color = '#fff';
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.transition = 'opacity 0.3s ease-in-out';

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
};