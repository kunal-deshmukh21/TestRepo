export const validateEmailConfig = (config) => {
    const required = ['host', 'port', 'auth.user', 'auth.pass', 'from', 'to'];
    
    for (const field of required) {
        const value = field.split('.').reduce((obj, key) => obj?.[key], config);
        if (!value) {
            throw new Error(`Missing required email config: ${field}`);
        }
    }
};