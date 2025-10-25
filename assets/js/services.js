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

// Add specific animations for the services page
document.addEventListener("DOMContentLoaded", function () {
    // Initialize particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#6a0dad" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#6a0dad",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });

    // Animate hero content entrance
    const tl = gsap.timeline();
    tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
    });

    // Animate section header
    gsap.to(".services-section .section-header", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services-section .section-header",
            start: "top 80%",
        },
    });

    // Animate service cards with stagger effect
    gsap.to(".service-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
        },
    });

    // Add tilt effect on hover for service cards
    document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                rotationY: 5,
                rotationX: 5,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });

    // Animate Why Choose Us section
    gsap.to(".why-choose-us .section-header", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".why-choose-us .section-header",
            start: "top 80%",
        },
    });

    // Animate feature cards with stagger effect
    gsap.to(".feature-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
        },
    });

    // Animate professional section
    gsap.to(".professional-text", {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".professional-text",
            start: "top 80%",
        },
    });

    // Improved counter animation for statistics with better conflict handling
    function animateCounter(element, target) {
        if (!element || isNaN(target)) {
            console.error(
                "Invalid element or target for counter:",
                element,
                target
            );
            return;
        }

        let current = 0;
        const increment = target / 50; // 50 steps
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
            element.style.color = "#6a0dad";
            element.style.textShadow = "0 0 20px rgba(106, 13, 173, 0.5)";
        }, 50);
    }

    // Animate all stat numbers with ScrollTrigger - improved version with better selector handling
    // Check if the stats container exists before creating the ScrollTrigger
    const statsContainer = document.querySelector(".stats-container");
    if (statsContainer) {
        ScrollTrigger.create({
            trigger: ".stats-container",
            start: "top 80%",
            once: true,
            onEnter: () => {
                // Use a more specific selector to avoid conflicts
                const statElements = statsContainer.querySelectorAll(".stat-number");
                statElements.forEach((stat) => {
                    const target = parseInt(stat.getAttribute("data-target"));
                    if (!isNaN(target)) {
                        // Add a small delay to ensure proper timing
                        setTimeout(() => {
                            animateCounter(stat, target);
                        }, Math.random() * 300); // Reduced stagger time for smoother animation
                    }
                });
            },
        });
    }
});