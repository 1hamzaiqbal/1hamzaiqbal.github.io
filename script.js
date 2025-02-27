// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Terminal typing effect and blinking cursor
    const terminalLines = document.querySelectorAll('.typing-text .line');
    
    if (terminalLines.length > 0) {
        // Hide all lines initially except the first one
        terminalLines.forEach((line, index) => {
            if (index > 0) {
                line.style.opacity = '0';
            }
        });
        
        // Reveal lines sequentially
        let currentLine = 0;
        
        const revealNextLine = () => {
            if (currentLine < terminalLines.length - 1) {
                currentLine++;
                terminalLines[currentLine].style.opacity = '1';
                setTimeout(revealNextLine, 2000);
            }
        };
        
        setTimeout(revealNextLine, 2000);
    }
    
    // Scanline animation
    const scanline = document.querySelector('.scanline');
    if (scanline) {
        setInterval(() => {
            scanline.style.top = '0';
            scanline.style.animation = 'none';
            setTimeout(() => {
                scanline.style.animation = 'scanline 8s linear infinite';
            }, 100);
        }, 8000);
    }
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Apply staggered animations to list items
    const animateList = (selector, delay = 100) => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    };
    
    // Apply staggered animations to various elements
    animateList('.blinking-list li', 200);
    animateList('.projects-grid .project-card', 150);
    animateList('.thoughts-list .thought-item', 150);
    animateList('.resume-item', 150);
    
    // Terminal key press effect
    const terminal = document.querySelector('.terminal');
    if (terminal) {
        const pressAnyKey = document.querySelector('.typing-text .line:last-child');
        
        if (pressAnyKey && pressAnyKey.textContent.includes('PRESS ANY KEY')) {
            document.addEventListener('keydown', function() {
                terminal.classList.add('fade-out');
                
                setTimeout(() => {
                    const mainContent = document.querySelector('main');
                    if (mainContent) {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }
                }, 600);
            }, { once: true });
            
            // Also allow click to continue
            terminal.addEventListener('click', function() {
                terminal.classList.add('fade-out');
                
                setTimeout(() => {
                    const mainContent = document.querySelector('main');
                    if (mainContent) {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }
                }, 600);
            }, { once: true });
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
        .terminal.fade-out {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        main {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
        }
    `;
    document.head.appendChild(style);
});