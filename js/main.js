// Main JavaScript for ML Club Website

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navigation Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter Animation for Hero Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.floor(current);

            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger counter animation when hero stats come into view
            if (entry.target.querySelector('.stat-number')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .project-card, .hero-stats');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});


// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Load saved theme from local storage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.classList.add(savedTheme);
        if (savedTheme === 'light-mode') {
            if (themeToggle) themeToggle.checked = true;
            if (sunIcon) sunIcon.classList.add('active');
            if (moonIcon) moonIcon.classList.remove('active');
        } else {
            if (sunIcon) sunIcon.classList.remove('active');
            if (moonIcon) moonIcon.classList.add('active');
        }
    } else {
        // Default to dark mode if no theme is saved
        html.classList.add('dark-mode');
        if (moonIcon) moonIcon.classList.add('active');
        localStorage.setItem('theme', 'dark-mode');
    }

    // Toggle theme on switch change
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (html.classList.contains('dark-mode')) {
                html.classList.remove('dark-mode');
                html.classList.add('light-mode');
                if (sunIcon) sunIcon.classList.add('active');
                if (moonIcon) moonIcon.classList.remove('active');
                localStorage.setItem('theme', 'light-mode');
            } else {
                html.classList.remove('light-mode');
                html.classList.add('dark-mode');
                if (sunIcon) sunIcon.classList.remove('active');
                if (moonIcon) moonIcon.classList.add('active');
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }
});


// Discord Server Embed Functionality
class DiscordEmbed {
    constructor() {
        this.serverStats = {
            online: 5,
            members: 11,
            established: 'Aug 2025'
        };
        this.setupEventListeners();
        this.animateStats();
    }

    setupEventListeners() {
        const joinBtn = document.querySelector('.discord-join-btn');
        if (joinBtn) {
            joinBtn.addEventListener('click', (e) => {
                // Add click animation
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            });
        }

        // Add hover effects to Discord card
        const discordCard = document.querySelector('.discord-card');
        if (discordCard) {
            discordCard.addEventListener('mouseenter', () => {
                this.animateOnlineStatus();
            });
        }
    }

    animateStats() {
        // Animate online count with a subtle pulse
        const onlineCount = document.querySelector('.online-count');
        if (onlineCount) {
            setInterval(() => {
                onlineCount.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    onlineCount.style.transform = 'scale(1)';
                }, 200);
            }, 3000);
        }
    }

    animateOnlineStatus() {
        const statusDot = document.querySelector('.status-dot.online');
        if (statusDot) {
            statusDot.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                statusDot.style.animation = '';
            }, 1000);
        }
    }

    updateStats(newStats) {
        this.serverStats = { ...this.serverStats, ...newStats };

        // Update online count
        const onlineCount = document.querySelector('.online-count');
        if (onlineCount && newStats.online) {
            onlineCount.innerHTML = `
                <span class="status-dot online"></span>
                ${newStats.online} Online
            `;
        }

        // Update member count
        const memberCount = document.querySelector('.member-count');
        if (memberCount && newStats.members) {
            memberCount.innerHTML = `
                <span class="status-dot"></span>
                ${newStats.members} Members
            `;
        }
    }
}

// Initialize Discord Embed
document.addEventListener('DOMContentLoaded', () => {
    new DiscordEmbed();

    // Add scroll to top button to the DOM
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animations to elements
    const animateElements = () => {
        // Add fade-in class to main elements
        const sections = document.querySelectorAll('section, .hero, .card, .feature-item');
        sections.forEach((section, index) => {
            section.classList.add('fade-in');
            if (index % 3 === 1) section.classList.add('fade-in-delay-1');
            if (index % 3 === 2) section.classList.add('fade-in-delay-2');
        });

        // Add hover animations to buttons
        const buttons = document.querySelectorAll('.btn, button');
        buttons.forEach(button => {
            button.classList.add('btn-animated');
        });

        // Add hover effects to cards
        const cards = document.querySelectorAll('.card, .resource-item, .project-card');
        cards.forEach(card => {
            card.classList.add('card-animated');
        });
    };

    // Run animations
    animateElements();
});

// Navbar scroll effect with theme sync
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isLightMode = document.documentElement.classList.contains('light-mode');

    if (window.scrollY > 50) {
        navbar.style.background = isLightMode ? 'rgba(242, 242, 247, 0.9)' : 'rgba(10, 25, 41, 0.9)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = isLightMode ? '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 122, 255, 0.05)' : '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(10, 132, 255, 0.1)';
    } else {
        navbar.style.background = isLightMode ? 'rgba(242, 242, 247, 0.8)' : 'rgba(10, 25, 41, 0.8)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = isLightMode ? '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 122, 255, 0.02)' : '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(10, 132, 255, 0.05)';
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Form validation and submission (for contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function for API calls (future enhancement)
async function makeAPICall(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        return null;
    }
}

// Dynamic content loading
function loadContent(page) {
    // This would be used for SPA navigation in future enhancements
    console.log(`Loading content for ${page}`);
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service worker registration (optional - uncomment for PWA features)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }
