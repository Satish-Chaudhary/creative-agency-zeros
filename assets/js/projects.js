// Initialize GSAP animations with performance optimizations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Header scroll effect with throttling
const handleScroll = throttle(function () {
    const header = document.querySelector('header');
    const scrollToTopButton = document.getElementById('scrollToTop');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('.page-section, .projects-gallery, .testimonials-section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id") || section.classList[1];
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}, 100);

window.addEventListener('scroll', handleScroll);

// Animate hero section with GSAP
document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements for better performance
    const pageHeroH1 = document.querySelector('.page-hero h1');
    const pageHeroP = document.querySelector('.page-hero p');
    const pageHeroCta = document.querySelector('.page-hero .cta-button');
    const statItems = document.querySelectorAll('.stat-item');
    const sectionHeaders = document.querySelectorAll('.section-header h2, .section-header p');
    const projectCards = document.querySelectorAll('.project-card');
    const testimonialsHeaderH2 = document.querySelector('.testimonials-header h2');
    const testimonialsHeaderLine = document.querySelector('.testimonials-header .line');

    // Animate logo on page load with glow effect
    gsap.to(".logo", {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
    });

    // Animate nav links with stagger
    gsap.to(".nav-link", {
        opacity: 1,
        duration: 0.8,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
    });

    // Animate hero elements
    if (pageHeroH1 && pageHeroP && pageHeroCta) {
        const heroTl = gsap.timeline();
        heroTl.to(pageHeroH1, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power3.out'
        })
            .to(pageHeroP, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power3.out'
            }, "-=0.5")
            .to(pageHeroCta, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power3.out'
            }, "-=0.5");
    }

    // Animate stats section with count-up animation and GSAP
    statItems.forEach((item, index) => {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate stat item
                    gsap.to(item, {
                        duration: 0.8,
                        y: 0,
                        opacity: 1,
                        ease: 'power2.out',
                        delay: index * 0.2
                    });

                    // Get the target number
                    const numberElement = item.querySelector('.stat-number');
                    if (numberElement) {
                        const targetValue = parseInt(numberElement.textContent);
                        const suffix = numberElement.textContent.replace(targetValue, '');

                        // Animate the count-up with GSAP
                        const countTl = gsap.timeline();
                        countTl.fromTo(numberElement,
                            { innerText: 0 },
                            {
                                innerText: targetValue,
                                duration: 2,
                                ease: "power2.out",
                                snap: { innerText: 1 },
                                onUpdate: function () {
                                    numberElement.textContent = Math.floor(this.targets()[0].innerText) + suffix;
                                }
                            }
                        );
                    }

                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statObserver.observe(item);
    });

    // Animate section headers
    sectionHeaders.forEach((element, index) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            delay: index * 0.2
        });
    });

    // Animate project cards with staggered GSAP animations
    projectCards.forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            delay: index * 0.1
        });

        // Cache elements for better performance
        const tags = card.querySelectorAll('.project-tags span');
        const ctaButton = card.querySelector('.cta-button');

        // Remove the hover animations for project tags and CTA button
        // The CSS will handle the static styles now


    });


    // Add smooth scrolling for CTA button
    const ctaButton = document.querySelector('.page-hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector('.projects-gallery');
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: targetSection.offsetTop - 100 },
                    ease: 'power2.inOut'
                });
            }
        });
    }

    // Scroll to top button functionality with performance optimization
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        // Add hover effects for better UX
        scrollToTopButton.addEventListener('mouseenter', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.1,
                y: -5,
                boxShadow: '0 8px 25px rgba(106, 13, 173, 0.5)',
                ease: 'power2.out'
            });
        });

        scrollToTopButton.addEventListener('mouseleave', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                y: 0,
                boxShadow: '0 4px 20px rgba(106, 13, 173, 0.3)',
                ease: 'power2.out'
            });
        });

        // Scroll to top functionality with GSAP
        scrollToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0, autoKill: false },
                ease: 'power2.inOut'
            });
        });
    }

    // Animate testimonials header and line
    if (testimonialsHeaderH2) {
        gsap.to(testimonialsHeaderH2, {
            scrollTrigger: {
                trigger: '.testimonials-header',
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power2.out'
        });
    }

    if (testimonialsHeaderLine) {
        gsap.to(testimonialsHeaderLine, {
            scrollTrigger: {
                trigger: '.testimonials-header .line',
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            width: '80%',
            duration: 1,
            ease: 'power2.out',
            delay: 0.5
        });
    }
});
// Show/hide mobile menu
function showSecondNav() {
    let secondNav = document.querySelector(".second-nav");
    let hamburger = document.getElementById("hamburger");

    secondNav.classList.toggle("active-second-nav");
    hamburger.classList.toggle("active");
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    const secondNav = document.querySelector('.second-nav');
    const hamburger = document.getElementById('hamburger');

    if (secondNav && secondNav.classList.contains('active-second-nav') &&
        !secondNav.contains(event.target) &&
        event.target !== hamburger) {
        secondNav.classList.remove('active-second-nav');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.second-nav-li a').forEach(link => {
    link.addEventListener('click', () => {
        const secondNav = document.querySelector('.second-nav');
        const hamburger = document.getElementById('hamburger');

        secondNav.classList.remove('active-second-nav');
        hamburger.classList.remove('active');
    });
});
