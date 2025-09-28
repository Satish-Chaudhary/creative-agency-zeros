window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".hero-content");

    // Add a small delay to ensure loader is visible
    setTimeout(() => {
        preloader.classList.add("hidden");
        document.body.style.overflow = "auto"; // Restore scrollbars

        // GSAP Hero animations
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollToPlugin);

        // Center hero content vertically and horizontally (for index page)
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.display = 'flex';
            heroSection.style.justifyContent = 'center';
            heroSection.style.alignItems = 'center';
        }

        // Get current page
        const path = window.location.pathname;
        const page = path.split("/").pop().toLowerCase().replace(".html", "");

        let typewriterText = "";
        let typewriterElement = null;
        let subtitleElement = null;

        // Determine which text to use based on page
        if (page === "" || page === "index" || path === "/") {
            // Index page
            typewriterText = "We Craft Digital Experiences";
            typewriterElement = document.getElementById("typewriter-text");
            subtitleElement = document.getElementById("typewriter-subtitle");
        } else if (page === "about") {
            // About page
            typewriterText = "Building Stunning Websites";
            typewriterElement = document.getElementById("typewriter-text");
            subtitleElement = document.getElementById("typewriter-subtitle");
        } else if (page === "projects") {
            // Projects page
            typewriterText = "Design That Converts";
            typewriterElement = document.getElementById("typewriter-text");
            subtitleElement = document.getElementById("typewriter-subtitle");
        } else if (page === "services") {
            // Services page
            typewriterText = "Digital Solutions That Work";
            typewriterElement = document.getElementById("typewriter-text");
            subtitleElement = document.getElementById("typewriter-subtitle");
        }

        const tl = gsap.timeline();

        // Animate hero content entrance with fade/slide-in effect
        if (document.querySelector(".hero-content")) {
            tl.to(".hero-content", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            });
        } else if (document.querySelector(".about-hero")) {
            // For About page
            tl.to(".about-hero h1", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }).to(".about-hero p", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }, "-=0.5");
        } else if (document.querySelector(".page-hero")) {
            // For Projects page
            tl.to(".page-hero h1", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }).to(".page-hero p", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }, "-=0.5");
        }

        // Typewriter animation for main title
        if (typewriterElement) {
            const originalText = typewriterElement.textContent;

            tl.to(typewriterElement, {
                duration: 2,
                text: typewriterText,
                ease: "none",
            }, "-=0.5");
        } else if (page === "about" && document.querySelector(".about-hero h1")) {
            const titleElement = document.querySelector(".about-hero h1");
            const originalText = titleElement.textContent;

            tl.to(titleElement, {
                duration: 2,
                text: "Building Stunning Websites",
                ease: "none",
            }, "-=0.5");
        } else if (page === "projects" && document.querySelector(".page-hero h1")) {
            const titleElement = document.querySelector(".page-hero h1");
            const originalText = titleElement.textContent;

            tl.to(titleElement, {
                duration: 2,
                text: "Design That Converts",
                ease: "none",
            }, "-=0.5");
        } else if (page === "services" && document.querySelector(".hero-title")) {
            const titleElement = document.querySelector(".hero-title");
            const originalText = titleElement.textContent;

            tl.to(titleElement, {
                duration: 2,
                text: "Digital Solutions That Work",
                ease: "none",
            }, "-=0.5");
        }

        // Typewriter animation for subtitle
        if (subtitleElement) {
            const subtitleText = subtitleElement.textContent;
            subtitleElement.textContent = '';

            tl.to(subtitleElement, {
                duration: 3,
                text: subtitleText,
                ease: "none"
            }, "-=1");
        } else if (page === "about" && document.querySelector(".about-hero p")) {
            const subtitleElement = document.querySelector(".about-hero p");
            const subtitleText = subtitleElement.textContent;
            subtitleElement.textContent = '';

            tl.to(subtitleElement, {
                duration: 3,
                text: subtitleText,
                ease: "none"
            }, "-=1");
        } else if (page === "projects" && document.querySelector(".page-hero p")) {
            const subtitleElement = document.querySelector(".page-hero p");
            const subtitleText = subtitleElement.textContent;
            subtitleElement.textContent = '';

            tl.to(subtitleElement, {
                duration: 3,
                text: subtitleText,
                ease: "none"
            }, "-=1");
        } else if (page === "services" && document.querySelector(".hero-subtitle")) {
            const subtitleElement = document.querySelector(".hero-subtitle");
            const subtitleText = subtitleElement.textContent;
            subtitleElement.textContent = '';

            tl.to(subtitleElement, {
                duration: 3,
                text: subtitleText,
                ease: "none"
            }, "-=1");
        }

        // Animate CTA button
        if (document.querySelector('.cta-button')) {
            tl.from('.cta-button', {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, '-=0.5');
        }

        // Add glow and scale animation to CTA button with enhanced effects
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                gsap.to(ctaButton, {
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(106, 13, 173, 0.8), 0 0 40px rgba(86, 40, 238, 0.5)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            ctaButton.addEventListener('mouseleave', () => {
                gsap.to(ctaButton, {
                    scale: 1,
                    boxShadow: '0 0 10px rgba(106, 13, 173, 0.5)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }
    }, 2000);
});

//show second nav on clicking hamburger icon
function showSecondNav() {
    let secondNav = document.querySelector(".second-nav");
    console.log("gel");
    secondNav.classList.toggle("active-second-nav");
}

// Add hover effect to nav links
document.querySelectorAll(".nav-link").forEach((link) => {
    link.innerHTML = link.textContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollToTop = document.getElementById("scrollToTop");

    // Update header and scroll to top button visibility
    if (window.scrollY > 100) {
        header?.classList.add("scrolled");
        scrollToTop?.classList.add("show");
    } else {
        header?.classList.remove("scrolled");
        scrollToTop?.classList.remove("show");
    }
}, { passive: true }); // Passive listener for better scroll performance

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener to scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", scrollToTop);
    }
});
// Currency toggle functionality
document
    .getElementById("currencyToggle")
    ?.addEventListener("change", function () {
        const inrPrices = document.querySelectorAll(".inr-price");
        const usdPrices = document.querySelectorAll(".usd-price");

        if (this.checked) {
            // Show USD prices
            inrPrices.forEach((price) => (price.style.display = "none"));
            usdPrices.forEach((price) => (price.style.display = "inline"));
        } else {
            // Show INR prices
            inrPrices.forEach((price) => (price.style.display = "inline"));
            usdPrices.forEach((price) => (price.style.display = "none"));
        }
    });

// Newsletter subscription
document
    .getElementById("newsletterForm")
    ?.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector("button");
        const icon = button.querySelector("i");

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Success animation
        icon.className = "fas fa-check";
        gsap.to(button, {
            scale: 1.2,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                alert("Thank you for subscribing!");
                this.reset();
                icon.className = "fas fa-paper-plane";
            },
        });
    });

// Enhanced pricing card hover animations
document.querySelectorAll(".pricing-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    // Add hover effects to CTA buttons within pricing cards
    const ctaButton = card.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                y: -3,
                boxShadow: '0 8px 30px rgba(106, 13, 173, 0.5), 0 0 20px rgba(106, 13, 173, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });

            // Animate the arrow icon if it exists
            const arrowIcon = ctaButton.querySelector('i');
            if (arrowIcon) {
                gsap.to(arrowIcon, {
                    x: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                y: 0,
                boxShadow: '0 5px 20px rgba(106, 13, 173, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });

            // Reset the arrow icon if it exists
            const arrowIcon = ctaButton.querySelector('i');
            if (arrowIcon) {
                gsap.to(arrowIcon, {
                    x: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }
});

// Enhanced web offer CTA button animations
document.querySelectorAll(".web-cta-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.03,
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.5), 0 0 20px rgba(124, 58, 237, 0.4)',
            duration: 0.3,
            ease: "power2.out"
        });

        // Animate the arrow icon
        const arrowIcon = button.querySelector('i');
        if (arrowIcon) {
            gsap.to(arrowIcon, {
                x: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
            duration: 0.3,
            ease: "power2.out"
        });

        // Reset the arrow icon
        const arrowIcon = button.querySelector('i');
        if (arrowIcon) {
            gsap.to(arrowIcon, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });
});

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Constants for the web offer timer
const TIMER_KEY = "webOfferTimerEnd";
const OFFER_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Get timer end time from sessionStorage or set new one
let timerEnd = sessionStorage.getItem(TIMER_KEY);
if (!timerEnd) {
    timerEnd = Date.now() + OFFER_DURATION;
    sessionStorage.setItem(TIMER_KEY, timerEnd);
} else {
    timerEnd = parseInt(timerEnd);
}

let webTimerInterval;

function updateWebTimer() {
    const now = Date.now();
    let distance = timerEnd - now;

    if (distance < 0) {
        // Timer has expired
        distance = 0;

        // Clear interval
        clearInterval(webTimerInterval);

        // Set all timer values to 00
        document.getElementById("web-days").textContent = "00";
        document.getElementById("web-hours").textContent = "00";
        document.getElementById("web-minutes").textContent = "00";
        document.getElementById("web-seconds").textContent = "00";

        // Auto-hide the counter section after a short delay
        setTimeout(() => {
            const offerCard = document.querySelector(".web-offer-card");
            if (offerCard) {
                gsap.to(offerCard, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.8,
                    ease: "power2.in",
                    onComplete: () => {
                        offerCard.style.display = "none";

                        // Center hero content when offer is hidden
                        const heroContent = document.getElementById("hero-content");
                        if (heroContent) {
                            heroContent.style.margin = "0 auto";
                        }
                    }
                });
            }
        }, 2000);

        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update timer values with fade/flip transition effect
    updateTimerValue("web-days", days.toString().padStart(2, "0"));
    updateTimerValue("web-hours", hours.toString().padStart(2, "0"));
    updateTimerValue("web-minutes", minutes.toString().padStart(2, "0"));
    updateTimerValue("web-seconds", seconds.toString().padStart(2, "0"));
}

// Function to update timer values with animation
function updateTimerValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element) {
        const currentValue = element.textContent;

        // Only animate if value has changed
        if (currentValue !== newValue) {
            // Fade out current value
            gsap.to(element, {
                opacity: 0,
                rotationX: -90,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    // Update text content
                    element.textContent = newValue;

                    // Flip in new value
                    gsap.fromTo(element,
                        { opacity: 0, rotationX: 90 },
                        { opacity: 1, rotationX: 0, duration: 0.3, ease: "power2.out" }
                    );
                }
            });
        }
    }
}

// Start the timer
updateWebTimer();
webTimerInterval = setInterval(updateWebTimer, 1000);

// --- Marquee Infinite Scroll (Right to Left) ---
const marqueeElem = document.getElementById("marquee");
if (marqueeElem) {
    // Store original content
    const originalContent = marqueeElem.innerHTML;

    // Duplicate content for seamless loop
    marqueeElem.innerHTML += marqueeElem.innerHTML;
    marqueeElem.style.display = "flex";
    marqueeElem.style.gap = "32px";
    marqueeElem.parentElement.style.overflow = "hidden";

    // Set initial position to the right
    gsap.set(marqueeElem, { x: 0 });

    // Create the animation
    let marqueeAnimation = gsap.to(marqueeElem, {
        x: -marqueeElem.scrollWidth / 2,
        duration: 20,
        ease: "linear",
        repeat: -1,
        immediateRender: false,
        onRepeat: function () {
            // Reset position to create seamless loop
            gsap.set(marqueeElem, { x: 0 });
        }
    });

    // Pause on hover
    marqueeElem.parentElement.addEventListener('mouseenter', () => {
        marqueeAnimation.pause();
    });

    // Resume on mouse leave
    marqueeElem.parentElement.addEventListener('mouseleave', () => {
        marqueeAnimation.resume();
    });
}

// Animate the about text
gsap.to(".about-text", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
    },
});

// Animate the about image
gsap.to(".about-image", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
    },
});

// Animate feature icons with bounce and glow
gsap.to(".about-features .feature-icon", {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".about-features",
        start: "top 80%",
    },
});

// Animate team stats with counting effect and icon animations
ScrollTrigger.create({
    trigger: ".overlay-content",
    start: "top 80%",
    once: true,
    onEnter: () => {
        // Animate stat numbers with enhanced GSAP count-up effect
        gsap.to(".team-stat .stat-number", {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out",
        });

        // Animate the actual numbers with smoother GSAP count-up
        document
            .querySelectorAll(".team-stat .stat-number")
            .forEach((stat, index) => {
                const text = stat.textContent;
                let target = 0;

                if (text.includes("4")) {
                    target = 4;
                } else if (text.includes("2")) {
                    target = 2;
                }

                if (target > 0) {
                    // Use GSAP for smoother counting animation with easing
                    gsap.fromTo(
                        stat,
                        { innerText: 0 },
                        {
                            innerText: target,
                            duration: 2.5,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            onUpdate: function () {
                                stat.textContent = Math.floor(this.targets()[0].innerText) + (text.includes("+") ? "+" : "");
                            }
                        }
                    );
                }
            });

        // Animate stat labels with fade-in effect
        gsap.to(".team-stat .stat-label", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            delay: 0.4,
            ease: "power2.out",
        });

        // Add fade-in + bounce animation to icons in team stats
        gsap.fromTo(
            ".exp-icon",
            {
                scale: 0,
                rotation: -180,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: ".experience-cards",
                    start: "top 80%",
                },
            }
        );
    },
});

// Animate the feature list items
gsap.from(".about-features li", {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".about-features",
        start: "top 80%",
    },
});

// Animate pricing cards on scroll
gsap.set(".pricing-card", { y: 50, autoAlpha: 0 });
ScrollTrigger.batch(".pricing-card", {
    interval: 0.1,
    batchMax: 3,
    onEnter: (batch) =>
        gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
        }),
    onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true }),
});

// Team section animations
gsap.utils.toArray(".team-member").forEach((member, i) => {
    gsap.from(member, {
        scrollTrigger: {
            trigger: member,
            start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1,
    });

    // Add hover effects
    member.addEventListener('mouseenter', () => {
        gsap.to(member, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(106, 13, 173, 0.35)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Animate social links
        const socialLinks = member.querySelectorAll('.social-link');
        socialLinks.forEach((link, index) => {
            gsap.to(link, {
                y: -3,
                duration: 0.3,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });
    });

    member.addEventListener('mouseleave', () => {
        gsap.to(member, {
            y: 0,
            scale: 1,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Reset social links
        const socialLinks = member.querySelectorAll('.social-link');
        socialLinks.forEach((link) => {
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// Add floating animation to team section background
gsap.to(".team-section", {
    backgroundPosition: "100% 100%",
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Why Choose Us Section Animations

// Animate section header
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

// Add hover effects to feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(106, 13, 173, 0.2)',
            duration: 0.3,
            ease: "power2.out",
        });

        // Animate feature icon
        const icon = card.querySelector(".feature-icon");
        if (icon) {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 10,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        // Animate feature number
        const number = card.querySelector(".feature-number");
        if (number) {
            gsap.to(number, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: "power2.out",
        });

        // Reset feature icon
        const icon = card.querySelector(".feature-icon");
        if (icon) {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        // Reset feature number
        const number = card.querySelector(".feature-number");
        if (number) {
            gsap.to(number, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    });
});

// Add floating animation to feature cards on scroll
gsap.utils.toArray(".feature-card").forEach((card, index) => {
    gsap.to(card, {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });
});

// Animate stats section with background effects
gsap.to(".stats-section", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
    },
});

// Add subtle background animation to stats section with gradient effect
gsap.to(".stats-section::before", {
    xPercent: 100,
    backgroundPosition: "100% 100%",
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Enhanced counter animation for statistics with GSAP and easing
function animateCounter(element, target) {
    if (!element) return;

    // Use GSAP for smoother animation with easing
    gsap.fromTo(
        element,
        { innerText: 0 },
        {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
                // Handle the + sign for values like "70+"
                const originalText = element.getAttribute("data-target");
                if (originalText && originalText.includes("+")) {
                    element.textContent = Math.floor(this.targets()[0].innerText) + "+";
                } else {
                    element.textContent = Math.floor(this.targets()[0].innerText);
                }
                // Add enhanced glow effect during animation
                element.style.color = "#6a0dad";
                element.style.textShadow = "0 0 25px rgba(106, 13, 173, 0.9)";
            },
            onComplete: function () {
                // Maintain the glow effect after completion with subtle pulse
                gsap.to(element, {
                    textShadow: "0 0 15px rgba(106, 13, 173, 0.7)",
                    duration: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut"
                });
            }
        }
    );
}

// Animate all stat numbers with ScrollTrigger and stagger effect
ScrollTrigger.create({
    trigger: ".stats-section",
    start: "top 80%",
    once: true,
    onEnter: () => {
        gsap.utils.toArray(".stat-number").forEach((stat, index) => {
            const targetText = stat.getAttribute("data-target");
            // Extract number from text like "70+" or "3"
            const target = parseInt(targetText);
            if (!isNaN(target)) {
                // Stagger animations for better visual effect with easing
                gsap.delayedCall(index * 0.3, () => {
                    animateCounter(stat, target);
                });
            }
        });
    },
});

// Add parallax effect to the background gradient
gsap.to(".why-choose-us::before", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".why-choose-us",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

// Services Section Animations
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

// Animate service cards with stagger effect and enhanced animations
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

// Add enhanced tilt and zoom effect on hover for service cards
document.querySelectorAll(".service-card").forEach((card) => {
    // Variables to store mouse position
    let rotationY = 0;
    let rotationX = 0;
    let scale = 1;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on mouse position
        rotationY = ((x - rect.width / 2) / rect.width) * 10; // Max 10 degrees
        rotationX = ((y - rect.height / 2) / rect.height) * -10; // Max 10 degrees

        // Enhanced zoom effect
        scale = 1.03;

        gsap.to(card, {
            rotationY: rotationY,
            rotationX: rotationX,
            scale: scale,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    card.addEventListener("mouseenter", () => {
        // Add shadow effect on hover
        gsap.to(card, {
            boxShadow: "0 20px 40px rgba(106, 13, 173, 0.4)",
            duration: 0.3,
        });

        // Animate the icon
        const icon = card.querySelector(".service-icon");
        if (icon) {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 10,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "power2.out",
        });

        // Reset the icon
        const icon = card.querySelector(".service-icon");
        if (icon) {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    });
});

// project-section scripting
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".project-slider");
    const projectItems = document.querySelectorAll(".project-item");
    const prevControl = document.getElementById("prevControl");
    const nextControl = document.getElementById("nextControl");
    const indicators = document.querySelectorAll(".indicator-dot");
    const progressBar = document.getElementById("progressBar");
    let currentIndex = 0;
    const totalProjects = projectItems.length;
    let autoScrollInterval;
    const autoScrollDelay = 4000; // 4 seconds

    // Update slider position and states
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active states
        projectItems.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });

        // Update progress bar
        const progressPercentage = ((currentIndex + 1) / totalProjects) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update button states
        prevControl.disabled = currentIndex === 0;
        nextControl.disabled = currentIndex === totalProjects - 1;
    }

    // Next project
    function nextProject() {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first
        }
        updateSlider();
    }

    // Previous project
    function prevProject() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalProjects - 1; // Loop to last
        }
        updateSlider();
    }

    // Start auto scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(nextProject, autoScrollDelay);
    }

    // Stop auto scroll
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Reset auto scroll timer
    function resetAutoScroll() {
        stopAutoScroll();
        startAutoScroll();
    }

    // Event listeners
    nextControl.addEventListener("click", function () {
        nextProject();
        resetAutoScroll();
    });

    prevControl.addEventListener("click", function () {
        prevProject();
        resetAutoScroll();
    });

    // Indicator click
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", function () {
            currentIndex = parseInt(this.getAttribute("data-index"));
            updateSlider();
            resetAutoScroll();
        });
    });

    // Mouse enter/leave for auto scroll pause
    const projectShowcase = document.querySelector(".project-showcase");
    projectShowcase.addEventListener("mouseenter", stopAutoScroll);
    projectShowcase.addEventListener("mouseleave", startAutoScroll);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        resetAutoScroll();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            nextProject(); // Swipe left
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevProject(); // Swipe right
        }
    }

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            prevProject();
            resetAutoScroll();
        } else if (e.key === "ArrowRight") {
            nextProject();
            resetAutoScroll();
        }
    });

    // Initialize
    updateSlider();
    startAutoScroll();
});
// Smooth scroll for Discover Our Work button
document.getElementById('discover-work-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target.offsetTop - 80 },
            ease: 'power2.inOut'
        });
    }
});

// Add hover effects to the Discover Our Work button
const discoverWorkBtn = document.getElementById('discover-work-btn');
if (discoverWorkBtn) {
    // Add pulse animation
    discoverWorkBtn.classList.add('pulse');

    discoverWorkBtn.addEventListener('mouseenter', () => {
        gsap.to(discoverWorkBtn, {
            y: -5,
            boxShadow: '0 15px 40px rgba(106, 13, 173, 0.5), 0 0 20px rgba(106, 13, 173, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Animate the arrow icon
        const arrowIcon = discoverWorkBtn.querySelector('i');
        if (arrowIcon) {
            gsap.to(arrowIcon, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    discoverWorkBtn.addEventListener('mouseleave', () => {
        gsap.to(discoverWorkBtn, {
            y: 0,
            boxShadow: '0 10px 30px rgba(106, 13, 173, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Reset the arrow icon
        const arrowIcon = discoverWorkBtn.querySelector('i');
        if (arrowIcon) {
            gsap.to(arrowIcon, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
}

// Enhance project card hover effects
document.querySelectorAll('.project-visual').forEach(visual => {
    visual.addEventListener('mousemove', (e) => {
        const rect = visual.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Add subtle tilt effect
        const tiltX = ((y - rect.height / 2) / rect.height) * 5;
        const tiltY = ((x - rect.width / 2) / rect.width) * -5;

        gsap.to(visual, {
            rotationX: tiltX,
            rotationY: tiltY,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    visual.addEventListener('mouseleave', () => {
        gsap.to(visual, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    // Add click effect
    visual.addEventListener('click', () => {
        gsap.to(visual, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });
    });
});

// Enhance project screenshot hover effects
document.querySelectorAll('.project-screenshot').forEach(screenshot => {
    screenshot.addEventListener('mouseenter', () => {
        gsap.to(screenshot, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    screenshot.addEventListener('mouseleave', () => {
        gsap.to(screenshot, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Project data (in a real app, this would come from a database)
    const projects = {
        'project1': {
            image: './project1.png',
            title: 'Fitness Tracker Application',
            description: 'A cross-platform mobile application for fitness enthusiasts. Features workout tracking, nutrition logging, social sharing, and integration with wearable devices for comprehensive health monitoring.'
        },
        'project2': {
            image: './project2.png',
            title: 'Enterprise Analytics Dashboard',
            description: 'A comprehensive business intelligence dashboard for enterprise clients. Provides real-time data visualization, custom reporting, and predictive analytics to drive business decisions.'
        },
        'project3': {
            image: './project3.png',
            title: 'Premium Fashion Store',
            description: 'A fully responsive e-commerce platform built for a luxury fashion brand. Features include advanced product filtering, secure payment processing, inventory management, and personalized recommendations.'
        }
    };

    // Set modal content
    if (projects[projectId]) {
        modalImage.src = projects[projectId].image;
        modalTitle.textContent = projects[projectId].title;
        modalDescription.textContent = projects[projectId].description;

        // Show modal with animation
        modal.style.display = 'block';
        gsap.fromTo(modal,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(modal.querySelector('.modal-content'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');

    // Hide modal with animation
    gsap.to(modal.querySelector('.modal-content'), {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
    });
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            modal.style.display = 'none';
        }
    });
}

// Close modal when clicking outside of it
document.getElementById('projectModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Project Filtering Functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    // Show item with animation
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    // Hide item with animation
                    gsap.to(item, {
                        opacity: 0.3,
                        scale: 0.95,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });

        // Add hover effects to filter buttons
        button.addEventListener('mouseenter', () => {
            if (!button.classList.contains('active')) {
                gsap.to(button, {
                    y: -2,
                    boxShadow: '0 5px 15px rgba(106, 13, 173, 0.3)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('active')) {
                gsap.to(button, {
                    y: 0,
                    boxShadow: 'none',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
});

// Add animations to project navigation controls
const prevControl = document.getElementById('prevControl');
const nextControl = document.getElementById('nextControl');

if (prevControl) {
    prevControl.addEventListener('mouseenter', () => {
        gsap.to(prevControl, {
            scale: 1.1,
            y: -2,
            boxShadow: '0 5px 15px rgba(106, 13, 173, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    prevControl.addEventListener('mouseleave', () => {
        gsap.to(prevControl, {
            scale: 1,
            y: 0,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

if (nextControl) {
    nextControl.addEventListener('mouseenter', () => {
        gsap.to(nextControl, {
            scale: 1.1,
            y: -2,
            boxShadow: '0 5px 15px rgba(106, 13, 173, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    nextControl.addEventListener('mouseleave', () => {
        gsap.to(nextControl, {
            scale: 1,
            y: 0,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// Contact Us Section Animations

// Form input animations
document
    .querySelectorAll(".form-group input, .form-group textarea")
    .forEach((input) => {
        input.addEventListener("focus", () => {
            gsap.to(input.nextElementSibling, {
                // Label
                y: -20,
                scale: 0.8,
                color: "#6a0dad",
                duration: 0.3,
            });
            gsap.to(
                input.nextElementSibling.nextElementSibling.firstElementChild,
                {
                    // Line
                    scaleX: 1,
                    transformOrigin: "left",
                    duration: 0.3,
                }
            );
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                gsap.to(input.nextElementSibling, {
                    y: 0,
                    scale: 1,
                    color: "#b0b0b0",
                    duration: 0.3,
                });
            }
            gsap.to(
                input.nextElementSibling.nextElementSibling.firstElementChild,
                {
                    scaleX: 0,
                    transformOrigin: "right",
                    duration: 0.3,
                }
            );
        });
    });

// Add pulse animation to submit button
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.classList.add('pulse');

    submitBtn.addEventListener('mouseenter', () => {
        gsap.to(submitBtn, {
            y: -3,
            boxShadow: '0 10px 25px rgba(106, 13, 173, 0.6), 0 0 20px rgba(106, 13, 173, 0.4)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Animate elements
        const span = submitBtn.querySelector('span');
        const icon = submitBtn.querySelector('i');

        if (span && icon) {
            gsap.to(span, {
                x: -5,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(icon, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    submitBtn.addEventListener('mouseleave', () => {
        gsap.to(submitBtn, {
            y: 0,
            boxShadow: '0 5px 15px rgba(106, 13, 173, 0.4)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Reset elements
        const span = submitBtn.querySelector('span');
        const icon = submitBtn.querySelector('i');

        if (span && icon) {
            gsap.to(span, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(icon, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
}

// Form submission animation
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        // Form validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        let isValid = true;
        let errorMessages = [];

        if (name.trim().length < 2) {
            errorMessages.push("Name must be at least 2 characters long");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessages.push("Please enter a valid email address");
            isValid = false;
        }

        if (message.trim().length < 10) {
            errorMessages.push("Message must be at least 10 characters long");
            isValid = false;
        }

        if (!isValid) {
            // Show error animation
            const form = this;
            gsap.to(form, {
                x: -10,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(form, { x: 0 });
                },
            });

            // Show error message
            alert(
                "Please fix the following errors:\n" + errorMessages.join("\n")
            );
            return;
        }

        const btn = this.querySelector(".submit-btn");
        const btnText = btn.querySelector("span");
        const btnIcon = btn.querySelector("i");

        // Success animation
        gsap.to(btnText, {
            opacity: 0,
            y: -20,
            duration: 0.3,
        });

        gsap.to(btnIcon, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.3,
        });

        gsap.to(btn, {
            width: 50,
            duration: 0.3,
            delay: 0.6,
            onComplete: () => {
                gsap.to(btn, {
                    scale: 0,
                    duration: 0.3,
                    ease: "back.in",
                    onComplete: () => {
                        // Show success message
                        alert("Thank you! Your message has been sent successfully.");

                        // Reset form and button after submission
                        setTimeout(() => {
                            this.reset();
                            gsap.set(btn, { width: "", scale: 1 });
                            gsap.set(btnText, { opacity: 1, y: 0 });
                            gsap.set(btnIcon, { opacity: 0, y: 20 });
                        }, 1000);
                    },
                });
            },
        });
    });

// Project Carousel
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");

    let currentIndex = 0;

    const setCardPosition = (card, index) => {
        card.style.left = `${index * 100}%`;
    };

    cards.forEach(setCardPosition);

    const moveToCard = (track, currentCard, targetCard) => {
        track.style.transform = `translateX(-${targetCard.style.left})`;
        currentCard.classList.remove("active");
        targetCard.classList.add("active");
    };

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const currentCard = track.querySelector(".active");
            const nextCard = currentCard.nextElementSibling || cards[0];
            moveToCard(track, currentCard, nextCard);
            currentIndex = (currentIndex + 1) % cards.length;
        });

        // Add hover effects
        nextButton.addEventListener('mouseenter', () => {
            gsap.to(nextButton, {
                scale: 1.1,
                y: -2,
                boxShadow: '0 5px 15px rgba(106, 13, 173, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        nextButton.addEventListener('mouseleave', () => {
            gsap.to(nextButton, {
                scale: 1,
                y: 0,
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            const currentCard = track.querySelector(".active");
            const prevCard =
                currentCard.previousElementSibling || cards[cards.length - 1];
            moveToCard(track, currentCard, prevCard);
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        });

        // Add hover effects
        prevButton.addEventListener('mouseenter', () => {
            gsap.to(prevButton, {
                scale: 1.1,
                y: -2,
                boxShadow: '0 5px 15px rgba(106, 13, 173, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        prevButton.addEventListener('mouseleave', () => {
            gsap.to(prevButton, {
                scale: 1,
                y: 0,
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // Initial setup
    if (cards.length > 0) {
        cards[0].classList.add("active");
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
});

// Enhance project buttons
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            y: -3,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Animate the icon
        const icon = button.querySelector('i');
        if (icon) {
            gsap.to(icon, {
                x: 3,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            y: 0,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
            ease: 'power2.out'
        });

        // Reset the icon
        const icon = button.querySelector('i');
        if (icon) {
            gsap.to(icon, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    // Add click effect
    button.addEventListener('click', () => {
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });
    });
});

// Animate pricing cards on scroll
gsap.set(".pricing-card", { y: 50, autoAlpha: 0 });
ScrollTrigger.batch(".pricing-card", {
    interval: 0.1,
    batchMax: 3,
    onEnter: (batch) =>
        gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
        }),
    onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true }),
});
