// CTO Breakfast Club - Interactive Animations and Features

document.addEventListener('DOMContentLoaded', function() {
    // Animated Counter for Stats
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50; // Adjust speed here
                const duration = 2000; // 2 seconds
                const stepTime = duration / 50;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        setTimeout(updateCounter, stepTime);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Intersection Observer for Scroll Animations
    const animatedElements = document.querySelectorAll(
        '.animate-slide-up, .animate-fade-in, .feature-card, .testimonial-card, .faq-item, .value-card'
    );

    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(element);
    });

    // Form Submission Handler
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(joinForm);
            const data = Object.fromEntries(formData.entries());
            
            // Log form data (in a real app, this would be sent to a server)
            console.log('Form submitted with data:', data);
            
            // Show success message
            joinForm.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
            
            // Add confetti effect
            createConfetti();
        });
    }

    // Confetti Effect for Form Submission
    function createConfetti() {
        const colors = ['#0078d4', '#50e6ff', '#ff6b35', '#667eea', '#764ba2'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-20px';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.animation = 'confettiFall ' + (2 + Math.random() * 2) + 's linear forwards';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }, i * 30);
        }
    }

    // Add confetti animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add dynamic greeting based on time of day
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const hour = new Date().getHours();
        let greeting = 'Welcome to the';
        
        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning! Welcome to the';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon! Welcome to the';
        } else if (hour >= 17 && hour < 22) {
            greeting = 'Good Evening! Welcome to the';
        } else {
            greeting = 'Hello Night Owl! Welcome to the';
        }
        
        // Only update if the text starts with "Welcome to the"
        if (heroTitle.textContent.includes('Welcome to the')) {
            heroTitle.innerHTML = greeting + ' <span class="highlight">CTO Breakfast Club</span>';
        }
    }

    // Optimized scroll handling with throttle
    let scrollTimeout;
    let lastScrollY = 0;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.pageYOffset;
        
        // Debounce scroll events for better performance
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            lastScrollY = currentScrollY;
        });
    }, { passive: true });

    // Automatic quote rotation for tech leader insight
    const factCard = document.querySelector('.fact-card');
    const factText = document.querySelector('.fact-text');
    
    if (factCard && factText) {
        // Array of CTO facts (mirroring the server-side array)
        const ctoFacts = [
            "Great CTOs balance innovation with operational excellence 🚀",
            "The best breakfast ideas come from sharing experiences with peers ☕",
            "Technology leadership is about people, not just code 👥",
            "CTOs who network together, grow together 🌱",
            "Breakfast meetings: where the best technical decisions are made 🍳",
            "Innovation happens at the intersection of technology and business 💡",
            "The future of tech is built one conversation at a time 💬",
            "CTOs leading with empathy create the strongest teams 💪",
        ];
        
        let currentFactIndex = ctoFacts.findIndex(fact => fact === factText.textContent);
        if (currentFactIndex === -1) currentFactIndex = 0;
        
        function rotateFact() {
            factCard.style.transform = 'rotateY(180deg)';
            
            setTimeout(() => {
                currentFactIndex = (currentFactIndex + 1) % ctoFacts.length;
                factText.textContent = ctoFacts[currentFactIndex];
                factCard.style.transform = 'rotateY(0deg)';
            }, 300);
        }
        
        // Auto-rotate every 20 seconds
        setInterval(rotateFact, 20000);
        
        // Remove cursor pointer since it's no longer clickable
        factCard.style.cursor = 'default';
    }

    // Navbar background change on scroll (optimized)
    const navbar = document.querySelector('header');
    let navbarTimeout;
    
    window.addEventListener('scroll', function() {
        if (navbarTimeout) {
            window.cancelAnimationFrame(navbarTimeout);
        }
        
        navbarTimeout = window.requestAnimationFrame(function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '#ffffff';
                navbar.style.backdropFilter = 'none';
            }
        });
    }, { passive: true });

    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && heroSubtitle.textContent) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        heroSubtitle.style.borderRight = '2px solid';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            } else {
                setTimeout(() => {
                    heroSubtitle.style.borderRight = 'none';
                }, 500);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Add interactive emoji reactions
    const emojis = document.querySelectorAll('.floating-emoji, .feature-icon, .fact-icon, .value-icon');
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
        
        emoji.style.transition = 'transform 0.5s ease';
        emoji.style.cursor = 'pointer';
    });

    console.log('🎉 CTO Breakfast Club website loaded successfully!');
    console.log('☕ Ready to connect technology leaders worldwide!');
});
