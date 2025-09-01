// Main JavaScript for ML Club Website

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const assistantToggle = document.getElementById('assistantToggle');
const assistantChat = document.getElementById('assistantChat');
const closeChat = document.getElementById('closeChat');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

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

// AI Assistant Functionality
if (assistantToggle && assistantChat) {
    assistantToggle.addEventListener('click', () => {
        assistantChat.classList.toggle('active');
    });
}

if (closeChat) {
    closeChat.addEventListener('click', () => {
        assistantChat.classList.remove('active');
    });
}

// AI Assistant Chat System
class MLAssistant {
    constructor() {
        this.responses = {
            // Greetings
            'hello': 'Hi there! Welcome to the Monta Vista ML Club. How can I help you today?',
            'hi': 'Hello! I\'m here to help you learn about our machine learning club.',
            'hey': 'Hey! What would you like to know about our ML club?',
            
            // About the club
            'about': 'The Monta Vista ML Club is a community of students passionate about artificial intelligence and machine learning. We work on cutting-edge projects, participate in competitions, and learn together!',
            'club': 'Our club focuses on deep learning, computer vision, NLP, and AI research. We meet every Friday at 3:30 PM and welcome students of all skill levels.',
            'join': 'To join our club, simply attend one of our Friday meetings at 3:30 PM or contact us at mvmlclub@gmail.com. No prior experience required!',
            'meeting': 'We meet every Friday at 3:30 PM at Monta Vista High School. Check our events page for specific room locations.',
            
            // Projects
            'projects': 'We work on various exciting projects including computer vision systems, NLP chatbots, game AI, and more. Check out our projects page to see our latest work!',
            'computer vision': 'Our computer vision projects include real-time object detection using YOLOv8, facial recognition systems, and image classification models.',
            'nlp': 'We\'ve built sentiment analysis bots, text generators, and language translation models using transformer architectures like BERT and GPT.',
            'ai': 'We explore all aspects of AI including machine learning, deep learning, reinforcement learning, and neural networks.',
            
            // Technical
            'python': 'We primarily use Python for our ML projects, along with libraries like PyTorch, TensorFlow, scikit-learn, and OpenCV.',
            'pytorch': 'PyTorch is our preferred deep learning framework. We use it for building neural networks, computer vision models, and NLP systems.',
            'tensorflow': 'We also work with TensorFlow for certain projects, especially when deploying models to mobile or web applications.',
            'machine learning': 'Machine learning is at the core of everything we do. We cover supervised learning, unsupervised learning, and reinforcement learning.',
            'deep learning': 'Deep learning is our specialty! We work with CNNs, RNNs, transformers, and other neural network architectures.',
            
            // Events and competitions
            'events': 'We host weekly workshops, guest speaker sessions, hackathons, and participate in national AI competitions like Kaggle.',
            'competition': 'We regularly participate in Kaggle competitions, Google AI challenges, and local hackathons. Join us to compete as a team!',
            'hackathon': 'We organize and participate in AI hackathons throughout the year. It\'s a great way to apply your skills and work on real problems.',
            
            // Resources
            'resources': 'Check out our resources page for learning materials, tutorials, datasets, and tools to get started with machine learning.',
            'learn': 'New to ML? Start with our beginner-friendly resources including Python tutorials, math foundations, and hands-on projects.',
            'beginner': 'Welcome! We have resources for beginners including intro workshops, mentorship programs, and starter projects.',
            
            // Contact
            'contact': 'You can reach us at mvmlclub@gmail.com or find us on Discord, GitHub, and Instagram. Links are in our footer!',
            'email': 'Our email is mvmlclub@gmail.com. Feel free to reach out with any questions!',
            'discord': 'Join our Discord server for daily discussions, project updates, and getting help from club members.',
            
            // Default responses
            'default': [
                'That\'s a great question! You can find more information on our website or contact us directly.',
                'I\'m still learning! For detailed questions, please reach out to our club officers at mvmlclub@gmail.com.',
                'Interesting! Check out our resources page or join our Discord for more discussion on this topic.',
                'That sounds like something our club would love to explore! Come to our next meeting to discuss it further.'
            ]
        };
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        if (sendMessage) {
            sendMessage.addEventListener('click', () => this.sendUserMessage());
        }
        
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendUserMessage();
                }
            });
        }
    }
    
    sendUserMessage() {
        const message = messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        messageInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate response after a short delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000); // 1-2 second delay for realism
    }
    
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 10);
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = '<div class="message-content"><div class="loading"></div></div>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    hideTypingIndicator() {
        const typingIndicator = chatMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific keywords
        for (const [keyword, response] of Object.entries(this.responses)) {
            if (keyword !== 'default' && lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Return random default response
        const defaultResponses = this.responses.default;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Initialize AI Assistant
document.addEventListener('DOMContentLoaded', () => {
    new MLAssistant();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
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
