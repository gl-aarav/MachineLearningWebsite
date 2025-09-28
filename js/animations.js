// Advanced Animations and Particle System for ML Club Website

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.neuralNodes = [];
        this.connections = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.createParticles();
        this.createNeuralNetwork();
        this.setupEventListeners();
        this.animate();
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 50;
        const colors = [
            'rgba(16, 185, 129, 0.6)',  // Green
            'rgba(139, 92, 246, 0.6)',  // Purple
            'rgba(99, 102, 241, 0.6)',  // Blue
            'rgba(168, 85, 247, 0.6)'   // Light Purple
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random color assignment
            particle.style.background = colors[i % colors.length];
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    createNeuralNetwork() {
        const neuralContainer = document.getElementById('neural-network');
        if (!neuralContainer) return;

        // Create nodes
        const nodeCount = 15;
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            node.style.left = Math.random() * 100 + '%';
            node.style.top = Math.random() * 100 + '%';
            node.style.animationDelay = Math.random() * 3 + 's';
            neuralContainer.appendChild(node);
        }

        // Create connections between nearby nodes
        const nodes = neuralContainer.querySelectorAll('.neural-node');
        nodes.forEach((node, index) => {
            const nodeRect = node.getBoundingClientRect();
            const containerRect = neuralContainer.getBoundingClientRect();
            
            const nodeX = (nodeRect.left - containerRect.left) / containerRect.width * 100;
            const nodeY = (nodeRect.top - containerRect.top) / containerRect.height * 100;
            
            nodes.forEach((otherNode, otherIndex) => {
                if (index !== otherIndex) {
                    const otherRect = otherNode.getBoundingClientRect();
                    const otherX = (otherRect.left - containerRect.left) / containerRect.width * 100;
                    const otherY = (otherRect.top - containerRect.top) / containerRect.height * 100;
                    
                    const distance = Math.sqrt(
                        Math.pow(nodeX - otherX, 2) + Math.pow(nodeY - otherY, 2)
                    );
                    
                    if (distance < 30 && Math.random() > 0.7) {
                        this.createConnection(neuralContainer, nodeX, nodeY, otherX, otherY);
                    }
                }
            });
        });
    }

    createConnection(container, x1, y1, x2, y2) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        connection.style.width = length + '%';
        connection.style.left = x1 + '%';
        connection.style.top = y1 + '%';
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.transformOrigin = '0 0';
        connection.style.animationDelay = Math.random() * 4 + 's';
        
        container.appendChild(connection);
    }

    setupEventListeners() {
        // Mouse tracking for interactive effects
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.updateParticleInteraction();
        });

        // Scroll effects
        window.addEventListener('scroll', () => {
            this.updateScrollEffects();
        });

        // Resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    updateParticleInteraction() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(this.mouseX - particleX, 2) + Math.pow(this.mouseY - particleY, 2)
            );
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                const angle = Math.atan2(this.mouseY - particleY, this.mouseX - particleX);
                const moveX = Math.cos(angle) * force * 10;
                const moveY = Math.sin(angle) * force * 10;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
                particle.style.opacity = 0.8 + force * 0.2;
            } else {
                particle.style.transform = '';
                particle.style.opacity = '';
            }
        });
    }

    updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        // Parallax effect for background
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        // Update particle positions based on scroll
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.5;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    handleResize() {
        // Recreate neural network on resize
        const neuralContainer = document.getElementById('neural-network');
        if (neuralContainer) {
            neuralContainer.innerHTML = '';
            this.createNeuralNetwork();
        }
    }

    animate() {
        // Continuous animation loop
        requestAnimationFrame(() => {
            this.animate();
        });
    }
}

class ModernAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupLoadingAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animation for cards
                    if (entry.target.classList.contains('feature-card')) {
                        const cards = entry.target.parentElement.querySelectorAll('.feature-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate-in');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.feature-card, .project-card, .hero-stats').forEach(el => {
            observer.observe(el);
        });
    }

    setupHoverEffects() {
        // Enhanced hover effects for cards
        document.querySelectorAll('.feature-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
            });

            card.addEventListener('mouseleave', (e) => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });

        // Button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                btn.style.transform = 'translateY(-2px) scale(1.05)';
            });

            btn.addEventListener('mouseleave', (e) => {
                btn.style.transform = '';
            });
        });
    }

    setupLoadingAnimations() {
        // Page load animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Animate hero content
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                setTimeout(() => {
                    heroContent.classList.add('animate-in');
                }, 300);
            }
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
    new ModernAnimations();
});

// Export for use in other files
window.ParticleSystem = ParticleSystem;
window.ModernAnimations = ModernAnimations;
