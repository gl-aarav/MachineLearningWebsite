// Contact page specific JavaScript

// Discord Webhook URL - Replace with your actual webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1423179522047737957/51eslIOzR-45Qy_Pa5ausrN-UG563kULPlMbjUzpwn_wtd35lQlGltu6mmGrH5YRg2RI';

document.addEventListener('DOMContentLoaded', () => {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => toggleFAQ(item));
    });
});

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate form data
    if (!validateForm(data)) {
        return false;
    }

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    try {
        // Send to Discord webhook
        await sendToDiscord(data);

        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');

        // Reset form
        e.target.reset();

    } catch (error) {
        console.error('Error sending message:', error);
        showNotification('Failed to send message. Please try again or contact us directly at mvmlclub@gmail.com', 'error');
    } finally {
        // Reset button
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
    }

    return false;
}

async function sendToDiscord(data) {
    // Get experience level label
    const experienceLevels = {
        'beginner': 'Beginner (No prior experience)',
        'intermediate': 'Intermediate (Some coding/ML knowledge)',
        'advanced': 'Advanced (Experienced with ML projects)'
    };

    // Create Discord embed
    const embed = {
        title: "🎓 New ML Club Contact Form Submission",
        color: 0x0ea5e9, // Sky blue color
        fields: [
            {
                name: "👤 Name",
                value: data.name,
                inline: true
            },
            {
                name: "📧 Email",
                value: data.email,
                inline: true
            },
            {
                name: "📚 Grade Level",
                value: data.grade === 'other' ? 'Other' : `${data.grade}th Grade`,
                inline: true
            },
            {
                name: "🎯 Area of Interest",
                value: data.interest.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                inline: true
            },
            {
                name: "💡 Experience Level",
                value: experienceLevels[data.experience] || data.experience,
                inline: true
            },
            {
                name: "💬 Message",
                value: data.message || "No message provided",
                inline: false
            }
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: "ML Club Contact Form"
        }
    };

    // Send to Discord
    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "ML Club Bot",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
            embeds: [embed]
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send to Discord');
    }

    return response;
}

function validateForm(data) {
    const errors = [];

    // Validate required fields
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name (at least 2 characters)');
    }

    if (!data.email || !validateEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.grade) {
        errors.push('Please select your grade level');
    }

    if (!data.interest) {
        errors.push('Please select your area of interest');
    }

    if (!data.experience) {
        errors.push('Please select your experience level');
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }

    // Display errors if any
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 15px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    // Add notification to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function toggleFAQ(item) {
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-question i');
    const isOpen = item.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        if (faqItem !== item) {
            faqItem.classList.remove('active');
            faqItem.querySelector('.faq-answer').style.maxHeight = '0';
            faqItem.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current item
    if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
    }
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Inter', sans-serif;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        margin-left: 10px;
        border-radius: 3px;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .faq-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        margin-bottom: 1rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        border-color: rgba(99, 102, 241, 0.3);
    }
    
    .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--surface);
        transition: background 0.3s ease;
    }
    
    .faq-question:hover {
        background: var(--surface-light);
    }
    
    .faq-question h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .faq-question i {
        font-size: 1.2rem;
        color: var(--primary-color);
        transition: transform 0.3s ease;
    }
    
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        margin: 0;
        color: var(--text-secondary);
        line-height: 1.6;
    }
`;

document.head.appendChild(notificationStyles);
