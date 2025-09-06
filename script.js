// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const skillProgressBars = document.querySelectorAll('.skill-progress');

// Single theme - no toggle needed

// Navigation
function toggleNavMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeNavMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.4)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.9)';
        navbar.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.3)';
    }
}

// Smooth scrolling for navigation links
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Back to top button
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Skill bars animation
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.width = progress + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

// Contact form handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced parallax effect for floating shapes
function handleParallax() {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        const xPos = Math.sin(scrolled * 0.001 + index) * 20;
        shape.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
}

// GitHub-style scroll reveal animations
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.achievement-card, .activity-card, .project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: linear-gradient(45deg, #2563eb, #3b82f6, #f59e0b);
            border-radius: 50%;
            opacity: ${Math.random() * 0.6 + 0.2};
            pointer-events: none;
            animation: particle-float ${duration}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${delay}s;
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.6);
        `;
        hero.appendChild(particle);
    }
}

// GitHub-style typing animation
function createTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Add cursor blink effect
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            heroTitle.appendChild(cursor);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Add cursor blink animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(cursorStyle);

// Add particle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Social links functionality
function setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't prevent default - let the links work normally
            const href = link.getAttribute('href');
            const title = link.getAttribute('title');
            
            // Only handle special cases, let normal links work
            if (title === 'Download CV') {
                // CV download is already handled by the download attribute
                return;
            }
            
            // For external links, they should work normally with target="_blank"
            // No need to prevent default or override behavior
        });
    });
}

// Download CV functionality
function downloadCV() {
    // Create a sample CV content (replace with actual CV)
    const cvContent = `
Mousami Soni
Junior Technical Officer & AIML Developer

CONTACT INFORMATION
Email: mousami.soni@example.com
Location: India
LinkedIn: linkedin.com/in/yourusername
GitHub: github.com/yourusername

PROFESSIONAL SUMMARY
Passionate Junior Technical Officer and AIML Developer with expertise in Python, Machine Learning, AI, and data visualization. Currently working at Xounds, contributing to backend API development and AIML feature implementation.

EXPERIENCE
Junior Technical Officer & AIML Developer
Xounds | 2023 - Present
• Developed backend APIs for mobile applications using Python and modern frameworks
• Implemented AIML features and algorithms for enhanced user experience
• Collaborated with cross-functional teams to deliver high-quality solutions
• Contributed to the company's startup scholarship recognition through innovative projects
• Optimized database queries and improved application performance

SKILLS
Programming & Development: Python, SQL, Backend APIs
Data Science & AI: Machine Learning, Artificial Intelligence, Data Analysis
Data Visualization: Tableau, PowerBI
Tools & Technologies: Git, Docker, AWS, REST APIs

EDUCATION
[Your Degree] - [Your University]
[Year of Graduation]

PROJECTS
• Mobile App Backend API: Developed comprehensive backend APIs with authentication and real-time features
• AIML Feature Development: Implemented ML algorithms for intelligent recommendations
• Data Visualization Dashboard: Created interactive dashboards using Tableau and PowerBI
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mousami_Soni_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('CV downloaded successfully!', 'success');
}

// Project card hover effects
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Skill item hover effects
function setupSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Image upload functionality
function setupImageUpload() {
    const imageUpload = document.getElementById('imageUpload');
    const profileImage = document.getElementById('profileImage');
    
    if (imageUpload && profileImage) {
        profileImage.addEventListener('click', () => {
            imageUpload.click();
        });
        
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = 'Profile Photo';
                    
                    // Clear existing content
                    profileImage.innerHTML = '';
                    profileImage.appendChild(img);
                    
                    // Add overlay back
                    const overlay = document.createElement('div');
                    overlay.className = 'image-upload-overlay';
                    overlay.innerHTML = `
                        <i class="fas fa-camera"></i>
                        <span>Change Photo</span>
                    `;
                    profileImage.appendChild(overlay);
                    
                    showNotification('Profile photo updated successfully!', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    animateSkillBars();
    setupIntersectionObserver();
    setupSocialLinks();
    setupProjectCards();
    setupSkillItems();
    createParticles();
    setupImageUpload();
    createTypingEffect();
    setupScrollReveal();
    
    // Event listeners
    navToggle.addEventListener('click', toggleNavMenu);
    backToTopBtn.addEventListener('click', scrollToTop);
    contactForm.addEventListener('submit', handleContactForm);
    
    // Navigation link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
            closeNavMenu();
        });
    });
    
    // Scroll event listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleBackToTop();
        handleParallax();
    });
    
    // Window resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeNavMenu();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            closeNavMenu();
        }
    });
    
    // Add loading animation to page
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Add loaded class styles
const loadedStyles = document.createElement('style');
loadedStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadedStyles);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    handleNavbarScroll();
    handleBackToTop();
    handleParallax();
}, 16)); // ~60fps

// Add some fun interactive elements
function addEasterEggs() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showNotification('🎉 You found the easter egg! Welcome to the developer club!', 'success');
            konamiCode = [];
        }
    });
    
    // Click counter on logo
    let clickCount = 0;
    const logo = document.querySelector('.nav-logo a');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            clickCount++;
            if (clickCount === 5) {
                showNotification('🔧 Developer mode activated!', 'success');
                clickCount = 0;
            }
        });
    }
}

// Initialize easter eggs
addEasterEggs();
