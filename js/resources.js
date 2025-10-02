// Comprehensive ML Resources Database with Advanced Search
class ResourcesManager {
    constructor() {
        this.resources = [
            // BEGINNER COURSES
            {
                id: 1,
                title: "Machine Learning Course by Andrew Ng",
                description: "The most popular ML course covering fundamentals, supervised and unsupervised learning",
                category: "courses",
                difficulty: "beginner",
                rating: 4.9,
                popularity: 95,
                tags: ["coursera", "stanford", "fundamentals", "free"],
                url: "https://www.coursera.org/learn/machine-learning",
                author: "Andrew Ng",
                duration: "11 weeks"
            },
            {
                id: 2,
                title: "Google ML Crash Course",
                description: "Fast-paced introduction to machine learning with TensorFlow APIs",
                category: "courses",
                difficulty: "beginner",
                rating: 4.7,
                popularity: 88,
                tags: ["google", "tensorflow", "free", "practical"],
                url: "https://developers.google.com/machine-learning/crash-course",
                author: "Google",
                duration: "15 hours"
            },
            {
                id: 3,
                title: "CS50's Introduction to AI with Python",
                description: "Harvard's introduction to artificial intelligence concepts and algorithms",
                category: "courses",
                difficulty: "beginner",
                rating: 4.8,
                popularity: 82,
                tags: ["harvard", "python", "ai", "free"],
                url: "https://cs50.harvard.edu/ai/2020/",
                author: "Harvard University",
                duration: "7 weeks"
            },
            
            // INTERMEDIATE COURSES
            {
                id: 4,
                title: "Fast.ai Practical Deep Learning",
                description: "Top-down approach to deep learning for coders",
                category: "courses",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 85,
                tags: ["fastai", "deep-learning", "practical", "free"],
                url: "https://www.fast.ai/",
                author: "Jeremy Howard",
                duration: "8 weeks"
            },
            {
                id: 5,
                title: "Deep Learning Specialization",
                description: "5-course specialization covering neural networks and deep learning",
                category: "courses",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 90,
                tags: ["coursera", "deeplearning.ai", "neural-networks"],
                url: "https://www.coursera.org/specializations/deep-learning",
                author: "Andrew Ng",
                duration: "4 months"
            },
            
            // ADVANCED COURSES
            {
                id: 6,
                title: "CS231n: Computer Vision",
                description: "Stanford's convolutional neural networks for visual recognition",
                category: "courses",
                difficulty: "advanced",
                rating: 4.9,
                popularity: 78,
                tags: ["stanford", "computer-vision", "cnn", "free"],
                url: "http://cs231n.stanford.edu/",
                author: "Stanford University",
                duration: "10 weeks"
            },
            {
                id: 7,
                title: "CS224n: Natural Language Processing",
                description: "Stanford's NLP with deep learning course",
                category: "courses",
                difficulty: "advanced",
                rating: 4.8,
                popularity: 75,
                tags: ["stanford", "nlp", "transformers", "free"],
                url: "http://web.stanford.edu/class/cs224n/",
                author: "Stanford University",
                duration: "10 weeks"
            },
            
            // BOOKS
            {
                id: 8,
                title: "Hands-On Machine Learning",
                description: "Practical guide using Scikit-Learn, Keras, and TensorFlow",
                category: "books",
                difficulty: "beginner",
                rating: 4.7,
                popularity: 92,
                tags: ["practical", "python", "scikit-learn", "tensorflow"],
                url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
                author: "Aurélien Géron",
                pages: 851
            },
            {
                id: 9,
                title: "Pattern Recognition and Machine Learning",
                description: "Comprehensive mathematical treatment of machine learning",
                category: "books",
                difficulty: "advanced",
                rating: 4.6,
                popularity: 70,
                tags: ["theory", "mathematics", "bayesian", "academic"],
                url: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf",
                author: "Christopher Bishop",
                pages: 738
            },
            {
                id: 10,
                title: "Deep Learning",
                description: "The definitive textbook on deep learning by the godfathers of AI",
                category: "books",
                difficulty: "advanced",
                rating: 4.5,
                popularity: 85,
                tags: ["deep-learning", "theory", "comprehensive", "academic"],
                url: "https://www.deeplearningbook.org/",
                author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
                pages: 800
            },
            
            // TOOLS & FRAMEWORKS
            {
                id: 11,
                title: "PyTorch",
                description: "Dynamic neural network framework with strong GPU acceleration",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 88,
                tags: ["framework", "deep-learning", "python", "research"],
                url: "https://pytorch.org/",
                author: "Meta AI",
                type: "Framework"
            },
            {
                id: 12,
                title: "TensorFlow",
                description: "End-to-end open source platform for machine learning",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.6,
                popularity: 85,
                tags: ["framework", "google", "production", "keras"],
                url: "https://www.tensorflow.org/",
                author: "Google",
                type: "Framework"
            },
            {
                id: 13,
                title: "Scikit-learn",
                description: "Simple and efficient tools for predictive data analysis",
                category: "tools",
                difficulty: "beginner",
                rating: 4.7,
                popularity: 90,
                tags: ["library", "python", "classical-ml", "beginner-friendly"],
                url: "https://scikit-learn.org/",
                author: "Scikit-learn Team",
                type: "Library"
            },
            
            // DATASETS
            {
                id: 14,
                title: "ImageNet",
                description: "Large visual database designed for visual object recognition research",
                category: "datasets",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 85,
                tags: ["computer-vision", "classification", "large-scale"],
                url: "https://www.image-net.org/",
                author: "Stanford Vision Lab",
                size: "14M images"
            },
            {
                id: 15,
                title: "MNIST",
                description: "Database of handwritten digits for image processing systems",
                category: "datasets",
                difficulty: "beginner",
                rating: 4.5,
                popularity: 95,
                tags: ["computer-vision", "digits", "classification", "benchmark"],
                url: "http://yann.lecun.com/exdb/mnist/",
                author: "Yann LeCun",
                size: "70K images"
            },
            
            // MORE TOOLS & FRAMEWORKS
            {
                id: 16,
                title: "Hugging Face Transformers",
                description: "State-of-the-art Natural Language Processing library",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 87,
                tags: ["nlp", "transformers", "pretrained", "python"],
                url: "https://huggingface.co/transformers/",
                author: "Hugging Face",
                type: "Library"
            },
            {
                id: 17,
                title: "OpenCV",
                description: "Open source computer vision and machine learning library",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.6,
                popularity: 82,
                tags: ["computer-vision", "image-processing", "python", "cpp"],
                url: "https://opencv.org/",
                author: "OpenCV Team",
                type: "Library"
            },
            {
                id: 18,
                title: "Weights & Biases",
                description: "Experiment tracking and model management platform",
                category: "tools",
                difficulty: "beginner",
                rating: 4.7,
                popularity: 75,
                tags: ["mlops", "tracking", "visualization", "collaboration"],
                url: "https://wandb.ai/",
                author: "Weights & Biases",
                type: "Platform"
            },
            
            // MORE DATASETS
            {
                id: 19,
                title: "COCO Dataset",
                description: "Common Objects in Context - object detection and segmentation",
                category: "datasets",
                difficulty: "intermediate",
                rating: 4.7,
                popularity: 88,
                tags: ["computer-vision", "object-detection", "segmentation"],
                url: "https://cocodataset.org/",
                author: "Microsoft",
                size: "330K images"
            },
            {
                id: 20,
                title: "Stanford Sentiment Treebank",
                description: "Fine-grained sentiment analysis dataset",
                category: "datasets",
                difficulty: "beginner",
                rating: 4.4,
                popularity: 70,
                tags: ["nlp", "sentiment", "classification"],
                url: "https://nlp.stanford.edu/sentiment/",
                author: "Stanford NLP",
                size: "11K sentences"
            },
            {
                id: 21,
                title: "UCI ML Repository",
                description: "Collection of databases for machine learning research",
                category: "datasets",
                difficulty: "beginner",
                rating: 4.5,
                popularity: 85,
                tags: ["various", "classical-ml", "benchmark"],
                url: "https://archive.ics.uci.edu/ml/",
                author: "UC Irvine",
                size: "500+ datasets"
            },
            
            // MORE BOOKS
            {
                id: 22,
                title: "The Elements of Statistical Learning",
                description: "Comprehensive treatment of statistical learning methods",
                category: "books",
                difficulty: "advanced",
                rating: 4.6,
                popularity: 75,
                tags: ["statistics", "theory", "comprehensive", "free"],
                url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
                author: "Hastie, Tibshirani, Friedman",
                pages: 745
            },
            {
                id: 23,
                title: "Python Machine Learning",
                description: "Machine learning and deep learning with Python",
                category: "books",
                difficulty: "intermediate",
                rating: 4.5,
                popularity: 80,
                tags: ["python", "practical", "scikit-learn", "tensorflow"],
                url: "https://sebastianraschka.com/books.html",
                author: "Sebastian Raschka",
                pages: 770
            },
            {
                id: 24,
                title: "Artificial Intelligence: A Modern Approach",
                description: "Comprehensive introduction to AI concepts and techniques",
                category: "books",
                difficulty: "intermediate",
                rating: 4.4,
                popularity: 78,
                tags: ["ai", "comprehensive", "algorithms", "academic"],
                url: "http://aima.cs.berkeley.edu/",
                author: "Russell & Norvig",
                pages: 1152
            },
            
            // MORE COURSES
            {
                id: 25,
                title: "MIT 6.034 Artificial Intelligence",
                description: "MIT's comprehensive AI course covering search, games, and learning",
                category: "courses",
                difficulty: "advanced",
                rating: 4.7,
                popularity: 72,
                tags: ["mit", "ai", "algorithms", "free"],
                url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/",
                author: "MIT",
                duration: "12 weeks"
            },
            {
                id: 26,
                title: "Kaggle Learn",
                description: "Free micro-courses on data science and machine learning",
                category: "courses",
                difficulty: "beginner",
                rating: 4.6,
                popularity: 88,
                tags: ["kaggle", "practical", "free", "micro-courses"],
                url: "https://www.kaggle.com/learn",
                author: "Kaggle",
                duration: "Various"
            },
            {
                id: 27,
                title: "CS229 Machine Learning",
                description: "Stanford's graduate-level machine learning course",
                category: "courses",
                difficulty: "advanced",
                rating: 4.8,
                popularity: 80,
                tags: ["stanford", "graduate", "theory", "free"],
                url: "http://cs229.stanford.edu/",
                author: "Andrew Ng",
                duration: "10 weeks"
            },
            
            // RESEARCH PAPERS
            {
                id: 28,
                title: "Attention Is All You Need",
                description: "The transformer architecture that revolutionized NLP",
                category: "papers",
                difficulty: "advanced",
                rating: 4.9,
                popularity: 95,
                tags: ["transformers", "attention", "nlp", "breakthrough"],
                url: "https://arxiv.org/abs/1706.03762",
                author: "Vaswani et al.",
                year: 2017
            },
            {
                id: 29,
                title: "ResNet: Deep Residual Learning",
                description: "Revolutionary deep network architecture with skip connections",
                category: "papers",
                difficulty: "advanced",
                rating: 4.8,
                popularity: 90,
                tags: ["computer-vision", "deep-learning", "architecture"],
                url: "https://arxiv.org/abs/1512.03385",
                author: "He et al.",
                year: 2015
            },
            {
                id: 30,
                title: "BERT: Pre-training of Deep Bidirectional Transformers",
                description: "Bidirectional encoder representations from transformers",
                category: "papers",
                difficulty: "advanced",
                rating: 4.8,
                popularity: 92,
                tags: ["nlp", "transformers", "pretraining", "bidirectional"],
                url: "https://arxiv.org/abs/1810.04805",
                author: "Devlin et al.",
                year: 2018
            },
            
            // ADDITIONAL SPECIALIZED RESOURCES
            {
                id: 31,
                title: "Reinforcement Learning: An Introduction",
                description: "Comprehensive textbook on reinforcement learning",
                category: "books",
                difficulty: "intermediate",
                rating: 4.7,
                popularity: 75,
                tags: ["reinforcement-learning", "theory", "comprehensive", "free"],
                url: "http://incompleteideas.net/book/the-book.html",
                author: "Sutton & Barto",
                pages: 552
            },
            {
                id: 32,
                title: "OpenAI Gym",
                description: "Toolkit for developing and comparing reinforcement learning algorithms",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.6,
                popularity: 78,
                tags: ["reinforcement-learning", "environments", "python"],
                url: "https://gym.openai.com/",
                author: "OpenAI",
                type: "Framework"
            },
            {
                id: 33,
                title: "Papers With Code",
                description: "Machine learning papers with code implementations",
                category: "tools",
                difficulty: "intermediate",
                rating: 4.8,
                popularity: 85,
                tags: ["papers", "code", "implementations", "research"],
                url: "https://paperswithcode.com/",
                author: "Papers With Code",
                type: "Platform"
            },
            {
                id: 34,
                title: "Google Colab",
                description: "Free Jupyter notebook environment with GPU support",
                category: "tools",
                difficulty: "beginner",
                rating: 4.7,
                popularity: 92,
                tags: ["jupyter", "gpu", "free", "cloud"],
                url: "https://colab.research.google.com/",
                author: "Google",
                type: "Platform"
            },
            {
                id: 35,
                title: "Distill.pub",
                description: "Interactive explanations of machine learning concepts",
                category: "courses",
                difficulty: "intermediate",
                rating: 4.9,
                popularity: 70,
                tags: ["interactive", "visualization", "explanations"],
                url: "https://distill.pub/",
                author: "Distill Team",
                duration: "Various"
            }
        ];
        
        this.filteredResources = [...this.resources];
        this.currentFilters = {
            difficulty: 'all',
            category: 'all',
            search: '',
            sort: 'relevance'
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderResources();
        this.updateResultsCount();
    }
    
    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('resource-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value;
                this.filterAndRender();
            });
        }
        
        // Clear search
        const clearBtn = document.getElementById('clear-search');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                this.currentFilters.search = '';
                this.filterAndRender();
            });
        }
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filterType = e.target.dataset.filter || e.target.dataset.category;
                const filterCategory = e.target.dataset.filter ? 'difficulty' : 'category';
                
                // Update active state
                e.target.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Update filter
                this.currentFilters[filterCategory] = filterType;
                this.filterAndRender();
            });
        });
        
        // Sort select
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentFilters.sort = e.target.value;
                this.filterAndRender();
            });
        }
    }
    
    filterAndRender() {
        this.filterResources();
        this.sortResources();
        this.renderResources();
        this.updateResultsCount();
    }
    
    filterResources() {
        this.filteredResources = this.resources.filter(resource => {
            // Difficulty filter
            if (this.currentFilters.difficulty !== 'all' && resource.difficulty !== this.currentFilters.difficulty) {
                return false;
            }
            
            // Category filter
            if (this.currentFilters.category !== 'all' && resource.category !== this.currentFilters.category) {
                return false;
            }
            
            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchableText = [
                    resource.title,
                    resource.description,
                    resource.author,
                    ...resource.tags
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
            
            return true;
        });
    }
    
    sortResources() {
        const sortType = this.currentFilters.sort;
        
        this.filteredResources.sort((a, b) => {
            switch (sortType) {
                case 'difficulty-asc':
                    const diffOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
                    return diffOrder[a.difficulty] - diffOrder[b.difficulty];
                case 'difficulty-desc':
                    const diffOrderDesc = { 'beginner': 3, 'intermediate': 2, 'advanced': 1 };
                    return diffOrderDesc[a.difficulty] - diffOrderDesc[b.difficulty];
                case 'rating':
                    return b.rating - a.rating;
                case 'popularity':
                    return b.popularity - a.popularity;
                default: // relevance
                    return b.rating * b.popularity - a.rating * a.popularity;
            }
        });
    }
    
    renderResources() {
        const grid = document.getElementById('resources-grid');
        const noResults = document.getElementById('no-results');
        
        if (!grid) return;
        
        if (this.filteredResources.length === 0) {
            grid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        grid.innerHTML = this.filteredResources.map(resource => this.createResourceCard(resource)).join('');
        
        // Add animation to cards
        setTimeout(() => {
            grid.querySelectorAll('.resource-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('fade-in-up');
            });
        }, 100);
    }
    
    createResourceCard(resource) {
        const difficultyColors = {
            'beginner': '#10b981',
            'intermediate': '#f59e0b',
            'advanced': '#ef4444'
        };
        
        const categoryIcons = {
            'courses': 'fas fa-play-circle',
            'books': 'fas fa-book',
            'tools': 'fas fa-tools',
            'datasets': 'fas fa-database',
            'papers': 'fas fa-file-alt'
        };
        
        return `
            <div class="resource-card" data-category="${resource.category}" data-difficulty="${resource.difficulty}">
                <div class="resource-header">
                    <div class="resource-category">
                        <i class="${categoryIcons[resource.category]}"></i>
                        <span>${resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</span>
                    </div>
                    <div class="resource-rating">
                        <i class="fas fa-star"></i>
                        <span>${resource.rating}</span>
                    </div>
                </div>
                
                <div class="resource-content">
                    <h3 class="resource-title">${resource.title}</h3>
                    <p class="resource-description">${resource.description}</p>
                    <div class="resource-meta">
                        <span class="resource-author">by ${resource.author}</span>
                        ${resource.duration ? `<span class="resource-duration">${resource.duration}</span>` : ''}
                        ${resource.pages ? `<span class="resource-pages">${resource.pages} pages</span>` : ''}
                        ${resource.size ? `<span class="resource-size">${resource.size}</span>` : ''}
                        ${resource.year ? `<span class="resource-year">${resource.year}</span>` : ''}
                    </div>
                </div>
                
                <div class="resource-footer">
                    <div class="resource-difficulty" style="background-color: ${difficultyColors[resource.difficulty]}">
                        ${resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
                    </div>
                    <div class="resource-tags">
                        ${resource.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${resource.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Visit</span>
                    </a>
                </div>
            </div>
        `;
    }
    
    updateResultsCount() {
        const countElement = document.getElementById('results-count');
        if (countElement) {
            const total = this.resources.length;
            const filtered = this.filteredResources.length;
            
            if (this.currentFilters.search || this.currentFilters.difficulty !== 'all' || this.currentFilters.category !== 'all') {
                countElement.textContent = `Showing ${filtered} of ${total} resources`;
            } else {
                countElement.textContent = `Showing all ${total} resources`;
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResourcesManager();
});
