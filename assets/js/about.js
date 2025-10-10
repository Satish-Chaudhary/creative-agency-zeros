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

// Header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");

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
});

// Initialize GSAP animations
document.addEventListener("DOMContentLoaded", function () {
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

    // Typewriter effect for hero text
    gsap.to("#typewriter-text", {
        duration: 3,
        text: "Transforming Ideas Into Digital Reality",
        ease: "none",
    });

    // Animate hero content
    gsap.to(".about-hero h1", {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.to(".about-hero p", {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
        delay: 0.8,
    });

    gsap.to(".scroll-down", {
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
    });

    // Our Story section animations
    gsap.to(".our-story .section-header", {
        scrollTrigger: ".our-story",
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
    });

    gsap.to(".story-text", {
        scrollTrigger: ".our-story",
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power3.out",
        delay: 0.3,
    });

    gsap.to(".story-image", {
        scrollTrigger: ".our-story",
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.to(".quote-box", {
        scrollTrigger: ".our-story",
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
        delay: 0.7,
    });

    // Timeline section animations
    gsap.to(".timeline-header", {
        scrollTrigger: ".timeline-section",
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
    });

    gsap.to(".timeline-item", {
        scrollTrigger: ".timeline-section",
        opacity: 1,
        duration: 1,
        y: 0,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.3,
    });

    // Animate timeline line
    gsap.to(".timeline::after", {
        scrollTrigger: ".timeline-section",
        height: "100%",
        duration: 2,
        ease: "power3.out",
        delay: 0.5,
    });

    // Why How When section animations
    gsap.to(".why-how-when-header", {
        scrollTrigger: ".why-how-when",
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
    });

    gsap.to(".why-how-when-card", {
        scrollTrigger: ".why-how-when",
        opacity: 1,
        duration: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
    });

    // Team section animations
    gsap.to(".team .section-header", {
        scrollTrigger: ".team",
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power3.out",
    });

    gsap.to(".team-member", {
        scrollTrigger: ".team",
        opacity: 1,
        duration: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
    });

    // Footer animations
    gsap.to(".social-links a", {
        scrollTrigger: "footer",
        opacity: 1,
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
    });

    // Animate section dividers
    gsap.to(".our-story .line", {
        scrollTrigger: ".our-story .line",
        width: "80%",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.to(".timeline-header .line", {
        scrollTrigger: ".timeline-header .line",
        width: "80%",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.to(".why-how-when-header .line", {
        scrollTrigger: ".why-how-when-header .line",
        width: "80%",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.to(".team .line", {
        scrollTrigger: ".team .line",
        width: "80%",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
    });

    // Parallax effect for story image
    gsap.to(".story-image", {
        scrollTrigger: {
            trigger: ".story-image",
            scrub: true,
        },
        y: -50,
        ease: "none",
    });

    // Tilt effect for team cards on hover
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;

            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;

            const rotateY = mouseX / 20;
            const rotateX = -mouseY / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
        });
    });

    // Add active class to current nav link based on scroll position
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id =
                    entry.target.getAttribute("id") || entry.target.classList[1];
                const navLinks = document.querySelectorAll(".nav-link");
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll(".page-section").forEach((section) => {
        observer.observe(section);
    });
});
