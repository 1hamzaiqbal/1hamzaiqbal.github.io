// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Terminal typing effect
    const terminalLines = document.querySelectorAll('.typing-text .line');
    
    // Define the sections and navLinks variables
    const sections = document.querySelectorAll('.content-section');
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
            const href = link.getAttribute('href');
            // Check if href contains a hash
            if(href.includes('#') && href.substring(href.indexOf('#') + 1) === current) {
                link.classList.add('active');
            } else if(href.split('.')[0] === current) {
                // For links like "index.html", "bio.html", etc.
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Only add smooth scrolling for hash links (within the same page)
        if(href.includes('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // Add staggered animation to list items
    const animateList = (selector, delay = 100) => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    };
    
    // Apply staggered animations to various elements
    animateList('.projects-grid .project-card', 150);
    animateList('.thoughts-list .thought-item', 150);
    animateList('.resume-item', 150);
    
    // Terminal key press effect
    const terminal = document.querySelector('.terminal');
    if (terminal) {
        const pressAnyKey = document.querySelector('.typing-text .line:last-child');
        
        if (pressAnyKey && pressAnyKey.textContent.includes('PRESS ANY KEY')) {
            const handleInteraction = () => {
                terminal.classList.add('fade-out');
                
                setTimeout(() => {
                    const mainContent = document.querySelector('main');
                    if (mainContent) {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }
                }, 600);
            };
            
            // Allow key press to continue
            document.addEventListener('keydown', handleInteraction, { once: true });
            
            // Also allow click to continue
            terminal.addEventListener('click', handleInteraction, { once: true });
        }
    }
    
    // Initialize typewriter effect for elements with the typewriter class
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    });

    // Add CSS for terminal fade out and main content reveal
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