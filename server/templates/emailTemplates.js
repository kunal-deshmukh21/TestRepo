const createContactTemplate = (data) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `
});

const createDemoTemplate = (data) => ({
    subject: `New Demo Request from ${data.name}`,
    html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Preferred Date:</strong> ${data.preferred_date}</p>
        <p><strong>Preferred Time:</strong> ${data.preferred_time}</p>
        <p><strong>Additional Notes:</strong> ${data.message || 'None'}</p>
    `
});

const createExchangeTemplate = (data) => ({
    subject: `New Exchange Offer Request from ${data.name}`,
    html: `
        <h2>New Exchange Offer Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Current Brand:</strong> ${data.current_brand}</p>
        <p><strong>Current Model:</strong> ${data.current_model || 'Not specified'}</p>
        <p><strong>Purchase Year:</strong> ${data.purchase_year || 'Not specified'}</p>
        <p><strong>Interested Product:</strong> ${data.interested_product}</p>
        <p><strong>Additional Notes:</strong> ${data.message || 'None'}</p>
    `
});

export const getEmailTemplate = (formType, data) => {
    switch (formType) {
        case 'contact':
            return createContactTemplate(data);
        case 'demo':
            return createDemoTemplate(data);
        case 'exchange':
            return createExchangeTemplate(data);
        default:
            throw new Error('Invalid form type');
    }
};