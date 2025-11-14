// // script.js - Enhanced with dynamic elements and improved functionality
// document.addEventListener('DOMContentLoaded', function() {
//     initThemeToggle();
//     initMobileMenu();
//     initSmoothScrolling();
//     initScrollToTop();
//     initProjectFiltering();
//     initTypingEffect();
//     initFooterYear();
//     initAnimations();
//     initParticleEffect();
//     initSkillBars();
// });

// function initThemeToggle() {
//     const themeToggle = document.getElementById('themeToggle');
//     const currentTheme = localStorage.getItem('theme') || 'light';
    
//     document.body.className = currentTheme;
//     updateThemeIcon(currentTheme);

//     if (themeToggle) {
//         themeToggle.addEventListener('click', function() {
//             const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
//             document.body.className = newTheme;
//             localStorage.setItem('theme', newTheme);
//             updateThemeIcon(newTheme);
//         });
//     }
// }

// function updateThemeIcon(theme) {
//     const themeToggle = document.getElementById('themeToggle');
//     if (themeToggle) {
//         themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
//     }
// }

// function initMobileMenu() {
//     const menuToggle = document.getElementById('menuToggle');
//     const navLinks = document.getElementById('navLinks');
    
//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', function(e) {
//             e.stopPropagation();
//             navLinks.classList.toggle('active');
//             this.classList.toggle('active');
//             document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
//         });

//         // Close menu when clicking on links
//         document.querySelectorAll('.nav-links a').forEach(link => {
//             link.addEventListener('click', () => {
//                 navLinks.classList.remove('active');
//                 menuToggle.classList.remove('active');
//                 document.body.style.overflow = '';
//             });
//         });

//         // Close menu when clicking outside
//         document.addEventListener('click', function(e) {
//             if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//                 menuToggle.classList.remove('active');
//                 document.body.style.overflow = '';
//             }
//         });
//     }
// }

// function initSmoothScrolling() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const target = document.querySelector(targetId);
            
//             if (target) {
//                 const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
//                 const targetPosition = target.offsetTop - headerHeight;
                
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }

// function initScrollToTop() {
//     const scrollTopBtn = document.getElementById('scrollTop');
    
//     if (scrollTopBtn) {
//         window.addEventListener('scroll', function() {
//             if (window.pageYOffset > 300) {
//                 scrollTopBtn.classList.add('visible');
//             } else {
//                 scrollTopBtn.classList.remove('visible');
//             }
//         });

//         scrollTopBtn.addEventListener('click', function() {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         });
//     }
// }

// function initProjectFiltering() {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectCards = document.querySelectorAll('.project-card');
    
//     filterButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             this.classList.add('active');
            
//             const filter = this.getAttribute('data-filter');
//             filterProjects(filter, projectCards);
//         });
//     });
// }

// function filterProjects(filter, projectCards) {
//     projectCards.forEach(card => {
//         if (filter === 'all' || card.getAttribute('data-category') === filter) {
//             card.style.display = 'block';
//             setTimeout(() => {
//                 card.style.opacity = '1';
//                 card.style.transform = 'translateY(0)';
//             }, 50);
//         } else {
//             card.style.opacity = '0';
//             card.style.transform = 'translateY(20px)';
//             setTimeout(() => {
//                 card.style.display = 'none';
//             }, 300);
//         }
//     });
// }

// function initTypingEffect() {
//     const typedText = document.getElementById('typedText');
    
//     if (typedText) {
//         const texts = ['Problem Solver', 'Full Stack Developer'];
//         let textIndex = 0;
//         let charIndex = 0;
//         let isDeleting = false;
        
//         function type() {
//             const currentText = texts[textIndex];
            
//             if (isDeleting) {
//                 typedText.textContent = currentText.substring(0, charIndex - 1);
//                 charIndex--;
//             } else {
//                 typedText.textContent = currentText.substring(0, charIndex + 1);
//                 charIndex++;
//             }
            
//             if (!isDeleting && charIndex === currentText.length) {
//                 isDeleting = true;
//                 setTimeout(type, 2000);
//             } else if (isDeleting && charIndex === 0) {
//                 isDeleting = false;
//                 textIndex = (textIndex + 1) % texts.length;
//                 setTimeout(type, 500);
//             } else {
//                 setTimeout(type, isDeleting ? 100 : 150);
//             }
//         }
        
//         setTimeout(type, 1000);
//     }
// }

// function initFooterYear() {
//     const yearElement = document.getElementById('year');
//     if (yearElement) {
//         yearElement.textContent = new Date().getFullYear();
//     }
// }

// function initAnimations() {
//     const fadeElements = document.querySelectorAll('.fade');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, { threshold: 0.1 });
    
//     fadeElements.forEach(element => {
//         observer.observe(element);
//     });
// }

// function initParticleEffect() {
//     // Create floating particles in the background
//     const particlesContainer = document.createElement('div');
//     particlesContainer.className = 'particles-container';
//     document.body.appendChild(particlesContainer);
    
//     // Only create particles on larger screens
//     if (window.innerWidth > 768) {
//         for (let i = 0; i < 15; i++) {
//             createParticle(particlesContainer);
//         }
//     }
// }

// function createParticle(container) {
//     const particle = document.createElement('div');
//     particle.className = 'particle';
    
//     // Random size and position
//     const size = Math.random() * 4 + 1;
//     const posX = Math.random() * 100;
//     const posY = Math.random() * 100;
    
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;
//     particle.style.left = `${posX}%`;
//     particle.style.top = `${posY}%`;
    
//     // Random animation
//     const duration = Math.random() * 20 + 10;
//     particle.style.animation = `floatParticle ${duration}s linear infinite`;
//     particle.style.animationDelay = `${Math.random() * 5}s`;
    
//     container.appendChild(particle);
// }

// function initSkillBars() {
//     // Add skill level indicators (optional enhancement)
//     const skillItems = document.querySelectorAll('.skill-item');
    
//     skillItems.forEach(skill => {
//         // Add a subtle animation when skills come into view
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.animation = 'skillReveal 0.5s ease-out forwards';
//                 }
//             });
//         });
        
//         observer.observe(skill);
//     });
// }

// // Add CSS for particles and skill animations
// const additionalStyles = `
// .particles-container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;
//     z-index: -1;
// }

// .particle {
//     position: absolute;
//     background: var(--accent);
//     border-radius: 50%;
//     opacity: 0.1;
// }

// @keyframes floatParticle {
//     0%, 100% {
//         transform: translateY(0) translateX(0);
//     }
//     25% {
//         transform: translateY(-20px) translateX(10px);
//     }
//     50% {
//         transform: translateY(-40px) translateX(0);
//     }
//     75% {
//         transform: translateY(-20px) translateX(-10px);
//     }
// }

// @keyframes skillReveal {
//     from {
//         opacity: 0;
//         transform: translateX(-10px);
//     }
//     to {
//         opacity: 1;
//         transform: translateX(0);
//     }
// }
// `;

// // Inject additional styles
// const styleSheet = document.createElement('style');
// styleSheet.textContent = additionalStyles;
// document.head.appendChild(styleSheet);


// script.js - Enhanced with dynamic elements and improved functionality
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initMobileMenu();
    initSmoothScrolling();
    initScrollToTop();
    initProjectFiltering();
    initTypingEffect();
    initFooterYear();
    initAnimations();
    initParticleEffect();
    initSkillBars();
    // Removed initActiveSection() to remove blue active state
});

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.body.className = currentTheme;
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
            document.body.className = newTheme;
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterProjects(filter, projectCards);
        });
    });
}

function filterProjects(filter, projectCards) {
    projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function initTypingEffect() {
    const typedText = document.getElementById('typedText');
    
    if (typedText) {
        const texts = ['Computer Scientist', 'Problem Solver', 'Full Stack Developer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 150);
            }
        }
        
        setTimeout(type, 1000);
    }
}

function initFooterYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

function initParticleEffect() {
    // Create floating particles in the background
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    // Only create particles on larger screens
    if (window.innerWidth > 768) {
        for (let i = 0; i < 15; i++) {
            createParticle(particlesContainer);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size and position
    const size = Math.random() * 4 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random animation
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `floatParticle ${duration}s linear infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
}

function initSkillBars() {
    // Add skill level indicators (optional enhancement)
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(skill => {
        // Add a subtle animation when skills come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'skillReveal 0.5s ease-out forwards';
                }
            });
        });
        
        observer.observe(skill);
    });
}

// Add CSS for particles and skill animations
const additionalStyles = `
.particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    background: var(--accent);
    border-radius: 50%;
    opacity: 0.1;
}

@keyframes floatParticle {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-20px) translateX(10px);
    }
    50% {
        transform: translateY(-40px) translateX(0);
    }
    75% {
        transform: translateY(-20px) translateX(-10px);
    }
}

@keyframes skillReveal {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);