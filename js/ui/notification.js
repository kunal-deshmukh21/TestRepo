const createNotificationElement = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    return notification;
};

const setNotificationStyles = (notification, type) => {
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '4px',
        color: '#fff',
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: '1000',
        transition: 'opacity 0.3s ease-in-out'
    });
};

export const showNotification = (message, type = 'success') => {
    const notification = createNotificationElement(message, type);
    setNotificationStyles(notification, type);
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
};