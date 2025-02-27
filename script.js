// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Add staggered animation to list items
    const animateList = (selector, delay = 100) => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    };
    
    // Apply staggered animations
    animateList('.job-desc li');
    animateList('.skill-category');
    animateList('.education ul li');
    animateList('.research ul li');
    animateList('.contact-item');
    
    // Add CSS class for active navigation links
    const style = document.createElement('style');
    style.textContent = `
        nav ul li a.active {
            color: var(--secondary-color);
        }
        
        nav ul li a.active:after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});