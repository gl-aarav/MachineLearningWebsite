// Main JavaScript for ML Club Website

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Enhanced Navigation Toggle with animations
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Add body scroll lock when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
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
    const animateElements = document.querySelectorAll('section:not(.hero), .hero-content, .hero-buttons .btn, .feature-card, .project-card, .hero-stats, .discord-content, .cta-content, .footer-section, .timeline-item, .value-card, .category-card, .resource-item, .guide-card, .community-card, .paper-card, .contact-form-container, .contact-info, .officer-card, .event-card, .highlight-card, .schedule-card, .path-step');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// INSANE THEME TOGGLE - MIND-BLOWING FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle-btn');
    const html = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const modeText = document.querySelector('.mode-text');
    const rippleContainer = document.querySelector('.ripple-container');
    const explosionContainer = document.querySelector('.explosion-container');

    // Create INSANE particle effects container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'insane-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10000;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    // Create screen flash overlay
    const flashOverlay = document.createElement('div');
    flashOverlay.className = 'screen-flash';
    flashOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
    `;
    document.body.appendChild(flashOverlay);

    // Create smooth transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'theme-transition-overlay';
    document.body.appendChild(transitionOverlay);

    // INSANE particle explosion function
    function createInsaneParticles(x, y, isLightMode) {
        const particleCount = 50;
        const colors = isLightMode
            ? ['#ffd700', '#ffed4e', '#fff9e6', '#fffbf0', '#ff6b35', '#f7931e']
            : ['#0ea5e9', '#a855f7', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4'];

        // Create main explosion particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 8 + 4;
            const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
            const velocity = Math.random() * 200 + 100;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const shape = Math.random() > 0.5 ? '50%' : '0%';

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${shape};
                left: ${x}px;
                top: ${y}px;
                box-shadow: 0 0 20px ${color}, 0 0 40px ${color};
                pointer-events: none;
            `;

            particlesContainer.appendChild(particle);

            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            const rotation = Math.random() * 720;

            particle.animate([
                {
                    transform: 'translate(0, 0) scale(1) rotate(0deg)',
                    opacity: 1,
                    filter: `hue-rotate(0deg) brightness(1.5)`
                },
                {
                    transform: `translate(${tx * 0.5}px, ${ty * 0.5}px) scale(1.5) rotate(${rotation * 0.5}deg)`,
                    opacity: 0.8,
                    filter: `hue-rotate(180deg) brightness(2)`
                },
                {
                    transform: `translate(${tx}px, ${ty}px) scale(0) rotate(${rotation}deg)`,
                    opacity: 0,
                    filter: `hue-rotate(360deg) brightness(0.5)`
                }
            ], {
                duration: 1200 + Math.random() * 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fill: 'forwards'
            }).onfinish = () => particle.remove();
        }

        // Create secondary sparkle particles
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                const sparkleSize = Math.random() * 4 + 2;
                const sparkleX = x + (Math.random() - 0.5) * 100;
                const sparkleY = y + (Math.random() - 0.5) * 100;

                sparkle.style.cssText = `
                    position: absolute;
                    width: ${sparkleSize}px;
                    height: ${sparkleSize}px;
                    background: white;
                    border-radius: 50%;
                    left: ${sparkleX}px;
                    top: ${sparkleY}px;
                    box-shadow: 0 0 10px white;
                    pointer-events: none;
                `;

                particlesContainer.appendChild(sparkle);

                sparkle.animate([
                    { opacity: 0, transform: 'scale(0)' },
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0)' }
                ], {
                    duration: 600,
                    easing: 'ease-in-out'
                }).onfinish = () => sparkle.remove();
            }, Math.random() * 300);
        }
    }

    // Modern sophisticated screen transition effect
    function createScreenFlash(isLightMode) {
        const flashColor = isLightMode
            ? 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(168,85,247,0.06) 50%, transparent 100%)';

        flashOverlay.style.background = flashColor;

        // More subtle, modern transition effect
        flashOverlay.animate([
            { opacity: 0, transform: 'scale(1)', filter: 'blur(0px)' },
            { opacity: 1, transform: 'scale(1.05)', filter: 'blur(1px)' },
            { opacity: 0.3, transform: 'scale(1.02)', filter: 'blur(0.5px)' },
            { opacity: 0, transform: 'scale(1)', filter: 'blur(0px)' }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // More modern easing
        });
    }

    // Create ripple effect
    function createRippleEffect(x, y, isLightMode) {
        const ripple = document.createElement('div');
        const color = isLightMode ? 'rgba(255, 215, 0, 0.6)' : 'rgba(14, 165, 233, 0.6)';

        ripple.style.cssText = `
            position: absolute;
            left: ${x - 25}px;
            top: ${y - 25}px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: ${color};
            pointer-events: none;
        `;

        rippleContainer.appendChild(ripple);

        ripple.animate([
            { transform: 'scale(0)', opacity: 1 },
            { transform: 'scale(4)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => ripple.remove();
    }

    // Modern sophisticated sound effects
    function playModernSound(isLightMode) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            if (isLightMode) {
                // Light mode: Elegant ascending bell tones (modern UI sound)
                const frequencies = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5 (major chord)
                frequencies.forEach((freq, index) => {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        const filter = audioContext.createBiquadFilter();

                        oscillator.connect(filter);
                        filter.connect(gainNode);
                        gainNode.connect(audioContext.destination);

                        oscillator.frequency.value = freq;
                        oscillator.type = 'sine';

                        // Add subtle filtering for modern sound
                        filter.type = 'lowpass';
                        filter.frequency.value = 2000;
                        filter.Q.value = 1;

                        gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);

                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.4);
                    }, index * 80);
                });
            } else {
                // Dark mode: Sophisticated descending tones (modern, not aggressive)
                const frequencies = [880, 659.25, 554.37, 440]; // A5, E5, C#5, A4 (descending)
                frequencies.forEach((freq, index) => {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        const filter = audioContext.createBiquadFilter();

                        oscillator.connect(filter);
                        filter.connect(gainNode);
                        gainNode.connect(audioContext.destination);

                        oscillator.frequency.value = freq;
                        oscillator.type = 'triangle'; // Warmer, softer sound

                        // Modern filtering
                        filter.type = 'lowpass';
                        filter.frequency.value = 1500;
                        filter.Q.value = 0.8;

                        gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.5);
                    }, index * 60);
                });
            }
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    // Load saved theme and initialize insane button
    const savedTheme = localStorage.getItem('theme');
    let isLightMode = false;

    if (savedTheme === 'light-mode') {
        html.classList.add('light-mode');
        if (themeButton) themeButton.classList.add('light-mode');
        if (modeText) modeText.textContent = 'LIGHT';
        isLightMode = true;
    } else {
        html.classList.add('dark-mode');
        if (modeText) modeText.textContent = 'DARK';
        localStorage.setItem('theme', 'dark-mode');
    }

    // INSANE theme toggle functionality with ultra-smooth transitions
    if (themeButton) {
        themeButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Prevent multiple clicks during transition
            if (themeButton.classList.contains('transitioning')) return;
            themeButton.classList.add('transitioning');

            // Get button position for effects
            const rect = themeButton.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            // Create ripple at click position
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            createRippleEffect(clickX, clickY, !isLightMode);

            // Add smooth transition class to body
            document.body.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

            // Activate transition overlay for ultra-smooth experience
            transitionOverlay.classList.add('active');

            // Staggered theme transition
            setTimeout(() => {
                // Toggle theme with INSANE effects
                if (html.classList.contains('dark-mode')) {
                    // Switch to light mode
                    html.classList.remove('dark-mode');
                    html.classList.add('light-mode');
                    themeButton.classList.add('light-mode');
                    localStorage.setItem('theme', 'light-mode');
                    isLightMode = true;

                    // Smooth text transition
                    if (modeText) {
                        modeText.style.opacity = '0';
                        modeText.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            modeText.textContent = 'LIGHT';
                            modeText.style.opacity = '1';
                            modeText.style.transform = 'scale(1)';
                        }, 300);
                    }

                    // Modern light mode effects
                    createInsaneParticles(x, y, true);
                    createScreenFlash(true);
                    playModernSound(true);

                } else {
                    // Switch to dark mode
                    html.classList.remove('light-mode');
                    html.classList.add('dark-mode');
                    themeButton.classList.remove('light-mode');
                    localStorage.setItem('theme', 'dark-mode');
                    isLightMode = false;

                    // Smooth text transition
                    if (modeText) {
                        modeText.style.opacity = '0';
                        modeText.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            modeText.textContent = 'DARK';
                            modeText.style.opacity = '1';
                            modeText.style.transform = 'scale(1)';
                        }, 300);
                    }

                    // Modern dark mode effects
                    createInsaneParticles(x, y, false);
                    createScreenFlash(false);
                    playModernSound(false);
                }
            }, 100);

            // Update navbar with smooth transition
            setTimeout(() => {
                updateNavbarTheme();
            }, 200);

            // Add subtle haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate([30, 20, 30]); // More subtle vibration
            }

            // Remove transition lock after animation completes
            setTimeout(() => {
                themeButton.classList.remove('transitioning');
                document.body.style.transition = '';
                transitionOverlay.classList.remove('active');
            }, 1200);
        });

        // Enhanced hover effects
        themeButton.addEventListener('mouseenter', () => {
            themeButton.style.transform = 'translateY(-3px) scale(1.05) rotateX(5deg)';
        });

        themeButton.addEventListener('mouseleave', () => {
            themeButton.style.transform = '';
        });
    }

    // Add screen shake keyframes
    const shakeKeyframes = `
        @keyframes screenShake {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-2px) rotate(0.5deg); }
            20% { transform: translateX(2px) rotate(-0.5deg); }
            30% { transform: translateX(-1px) rotate(0.3deg); }
            40% { transform: translateX(1px) rotate(-0.3deg); }
            50% { transform: translateX(-0.5px) rotate(0.1deg); }
            60% { transform: translateX(0.5px) rotate(-0.1deg); }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = shakeKeyframes;
    document.head.appendChild(styleSheet);
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

// Enhanced navbar theme and scroll effects
function updateNavbarTheme() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const isLightMode = document.documentElement.classList.contains('light-mode');
    const scrolled = window.scrollY > 50;

    // The scrolled class now handles most styling via CSS
    // This function now focuses on dynamic theme switching
    if (scrolled) {
        if (isLightMode) {
            navbar.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.95)');
            navbar.style.setProperty('--navbar-shadow', '0 20px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 122, 255, 0.1)');
        } else {
            navbar.style.setProperty('--navbar-bg', 'rgba(15, 23, 42, 0.95)');
            navbar.style.setProperty('--navbar-shadow', '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(10, 132, 255, 0.15)');
        }
    } else {
        if (isLightMode) {
            navbar.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.85)');
            navbar.style.setProperty('--navbar-shadow', '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 122, 255, 0.02)');
        } else {
            navbar.style.setProperty('--navbar-bg', 'rgba(15, 23, 42, 0.85)');
            navbar.style.setProperty('--navbar-shadow', '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(10, 132, 255, 0.05)');
        }
    }
}

// Active page highlighting
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize active link highlighting
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Enhanced navbar scroll effects
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;

    if (!navbar) return;

    // Add scrolled class for enhanced styling
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateX(-50%) translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateX(-50%) translateY(0)';
    }

    lastScrollY = currentScrollY;
    updateNavbarTheme();
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateNavbarOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);

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
