window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.hero-content');

    // Add a small delay to ensure loader is visible
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrollbars

        // Initialize particles.js
        // particlesJS('particles-js', {
        //     particles: {
        //         number: { value: 80, density: { enable: true, value_area: 800 } },
        //         color: { value: '#6a0dad' },
        //         shape: { type: 'circle' },
        //         opacity: { value: 0.5, random: false },
        //         size: { value: 3, random: true },
        //         line_linked: {
        //             enable: true,
        //             distance: 150,
        //             color: '#6a0dad',
        //             opacity: 0.4,
        //             width: 1
        //         },
        //         move: {
        //             enable: true,
        //             speed: 6,
        //             direction: 'none',
        //             random: false,
        //             straight: false,
        //             out_mode: 'out',
        //             bounce: false
        //         }
        //     },
        //     interactivity: {
        //         detect_on: 'canvas',
        //         events: {
        //             onhover: { enable: true, mode: 'repulse' },
        //             onclick: { enable: true, mode: 'push' },
        //             resize: true
        //         },
        //         modes: {
        //             grab: { distance: 400, line_linked: { opacity: 1 } },
        //             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        //             repulse: { distance: 200, duration: 0.4 },
        //             push: { particles_nb: 4 },
        //             remove: { particles_nb: 2 }
        //         }
        //     },
        //     retina_detect: true
        // });

        // GSAP Hero animations
        gsap.registerPlugin(TextPlugin);

        const tl = gsap.timeline();

        // Animate hero content entrance
        tl.to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })
            .to('.hero-title', {
                duration: 2,
                text: 'We Craft Digital Experiences',
                ease: 'none'
            }, '-=0.5')
            .from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=1');
        // .from('.cta-button', {
        //     opacity: 0,
        //     scale: 0.8,
        //     duration: 0.6,
        //     ease: 'back.out(1.7)'
        // }, '-=0.5');

        // Rotating text effect for hero title
        const texts = [
            'We Craft Digital Experiences',
            'We Build Amazing Websites',
            'We Create Digital Solutions',
            'We Design Your Success'
        ];

        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            gsap.to('#typewriter-text', {
                duration: 1,
                text: texts[currentIndex],
                ease: 'power2.inOut'
            });
        }, 4000);

    }, 2000);
});

//show second nav on clicking hamburger icon
function showSecondNav() {
    let secondNav = document.querySelector(".second-nav");
    console.log("gel")
    secondNav.classList.toggle("active-second-nav")
}


// Add hover effect to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.innerHTML = link.textContent.split('').map(char => `<span>${char}</span>`).join('');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollToTop = document.getElementById('scrollToTop');

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollToTop.classList.add('show');
    } else {
        header.classList.remove('scrolled');
        scrollToTop.classList.remove('show');
    }
});

// Scroll to top functionality
document.getElementById('scrollToTop')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Currency toggle functionality
document.getElementById('currencyToggle')?.addEventListener('change', function () {
    const inrPrices = document.querySelectorAll('.inr-price');
    const usdPrices = document.querySelectorAll('.usd-price');

    if (this.checked) {
        // Show USD prices
        inrPrices.forEach(price => price.style.display = 'none');
        usdPrices.forEach(price => price.style.display = 'inline');
    } else {
        // Show INR prices
        inrPrices.forEach(price => price.style.display = 'inline');
        usdPrices.forEach(price => price.style.display = 'none');
    }
});

// Newsletter subscription
document.getElementById('newsletterForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const button = this.querySelector('button');
    const icon = button.querySelector('i');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Success animation
    icon.className = 'fas fa-check';
    gsap.to(button, {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Thank you for subscribing!');
            this.reset();
            icon.className = 'fas fa-paper-plane';
        }
    });
});

// Enhanced pricing card hover animations
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the section title
gsap.to('.section-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
    }
});

// --- TIMER with sessionStorage ---
const TIMER_KEY = 'web-offer-timer-end';
const OFFER_DURATION = 2 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 45 * 60 * 1000 + 30 * 1000; // 2d 12h 45m 30s
let timerEnd = sessionStorage.getItem(TIMER_KEY);
if (!timerEnd) {
    timerEnd = Date.now() + OFFER_DURATION;
    sessionStorage.setItem(TIMER_KEY, timerEnd);
} else {
    timerEnd = parseInt(timerEnd);
}

function updateWebTimer() {
    const now = Date.now();
    let distance = timerEnd - now;
    if (distance < 0) distance = 0;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("web-days").textContent = days.toString().padStart(2, '0');
    document.getElementById("web-hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("web-minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("web-seconds").textContent = seconds.toString().padStart(2, '0');
    if (distance <= 0) {
        clearInterval(webTimerInterval);
        document.getElementById("web-days").textContent = "00";
        document.getElementById("web-hours").textContent = "00";
        document.getElementById("web-minutes").textContent = "00";
        document.getElementById("web-seconds").textContent = "00";
        // Hide offer and center hero
        const offer = document.getElementById('web-offer');
        if (offer) offer.style.display = 'none';
        const heroContent = document.getElementById('hero-content');
        if (heroContent) {
            heroContent.style.margin = '0 auto';
            heroContent.style.display = 'flex';
            heroContent.style.flexDirection = 'column';
            heroContent.style.alignItems = 'center';
            heroContent.style.justifyContent = 'center';
            heroContent.style.minHeight = '60vh';
        }
    }
}
updateWebTimer();
const webTimerInterval = setInterval(updateWebTimer, 1000);


// --- Marquee Infinite Scroll (Right to Left) ---
const marquee = document.getElementById('marquee');
if (marquee) {
    // Duplicate content for seamless loop
    marquee.innerHTML += marquee.innerHTML;
    marquee.style.display = 'flex';
    marquee.style.gap = '32px';
    marquee.parentElement.style.overflow = 'hidden';
    // Animate marquee
    gsap.to(marquee, {
        x: () => `-${marquee.scrollWidth / 2}px`,
        duration: 30,
        ease: 'linear',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % (marquee.scrollWidth / 2))
        }
    });
}

// Animate the about text
gsap.to('.about-text', {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
    }
});

// Animate the about image
gsap.to('.about-image', {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
    }
});

// Animate feature icons with bounce and glow
gsap.to('.about-features .feature-icon', {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.about-features',
        start: 'top 80%',
    }
});

// Animate team stats with counting effect
ScrollTrigger.create({
    trigger: '.overlay-content',
    start: 'top 80%',
    once: true,
    onEnter: () => {
        gsap.to('.team-stat .stat-number', {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        });

        // Animate the actual numbers
        document.querySelectorAll('.team-stat .stat-number').forEach((stat, index) => {
            const text = stat.textContent;
            let target = 0;

            if (text.includes('4')) {
                target = 4;
            } else if (text.includes('2')) {
                target = 2;
            }

            if (target > 0) {
                let current = 0;
                const increment = target / 20;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        stat.textContent = target + (text.includes('+') ? '+' : '');
                    } else {
                        stat.textContent = Math.round(current) + (text.includes('+') ? '+' : '');
                    }
                }, 100);
            }
        });
    }
});

gsap.to('.team-stat .stat-label', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
        trigger: '.overlay-content',
        start: 'top 80%',
    }
});

// Animate the feature list items
gsap.from('.about-features li', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.about-features',
        start: 'top 80%',
    }
});

// Animate pricing cards on scroll
gsap.set(".pricing-card", { y: 50, autoAlpha: 0 });
ScrollTrigger.batch(".pricing-card", {
    interval: 0.1,
    batchMax: 3,
    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true })
});

// Team section animations
gsap.utils.toArray('.team-member').forEach((member, i) => {
    gsap.from(member, {
        scrollTrigger: {
            trigger: member,
            start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
    });
});

// Add floating animation to team section background
gsap.to('.team-section', {
    backgroundPosition: '100% 100%',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Why Choose Us Section Animations

// Animate section header
gsap.to('.why-choose-us .section-header', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.why-choose-us .section-header',
        start: 'top 80%',
    }
});

// Animate feature cards with stagger effect
gsap.to('.feature-card', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
    }
});

// Animate feature icons with rotation and scale
// gsap.from('.feature-icon', {
//     scale: 0,
//     rotation: -180,
//     duration: 0.8,
//     stagger: 0.15,
//     ease: 'back.out(1.7)',
//     scrollTrigger: {
//         trigger: '.features-grid',
//         start: 'top 70%',
//     }
// });

// Animate feature numbers with bounce effect
// gsap.from('.feature-number', {
//     scale: 0,
//     rotation: 360,
//     duration: 0.6,
//     stagger: 0.1,
//     ease: 'bounce.out',
//     scrollTrigger: {
//         trigger: '.features-grid',
//         start: 'top 60%',
//     }
// });

// Animate stats section
gsap.to('.stats-section', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
    }
});

// Counter animation for statistics
function animateCounter(element, target) {
    if (!element || isNaN(target)) {
        console.error('Invalid element or target for counter:', element, target);
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
        element.style.color = '#6a0dad';
        element.style.textShadow = '0 0 20px rgba(106, 13, 173, 0.5)';
    }, 50);
}

// Animate all stat numbers with ScrollTrigger
ScrollTrigger.create({
    trigger: '.stats-section',
    start: 'top 80%',
    once: true,
    onEnter: () => {
        document.querySelectorAll('.stat-number').forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (!isNaN(target)) {
                setTimeout(() => {
                    animateCounter(stat, target);
                }, Math.random() * 500); // Stagger the animations
            }
        });
    }
});

// Add parallax effect to the background gradient
gsap.to('.why-choose-us::before', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.why-choose-us',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Add floating animation to feature cards on scroll
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.to(card, {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Services Section Animations
gsap.to('.services-section .section-header', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.services-section .section-header',
        start: 'top 80%',
    }
});

// Animate service cards with stagger effect
gsap.to('.service-card', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
    }
});

// Add tilt effect on hover for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            rotationY: 5,
            rotationX: 5,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});


// project-section scripting
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.project-slider');
    const projectItems = document.querySelectorAll('.project-item');
    const prevControl = document.getElementById('prevControl');
    const nextControl = document.getElementById('nextControl');
    const indicators = document.querySelectorAll('.indicator-dot');
    const progressBar = document.getElementById('progressBar');
    let currentIndex = 0;
    const totalProjects = projectItems.length;
    let autoScrollInterval;
    const autoScrollDelay = 4000; // 4 seconds

    // Update slider position and states
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active states
        projectItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
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
    nextControl.addEventListener('click', function () {
        nextProject();
        resetAutoScroll();
    });

    prevControl.addEventListener('click', function () {
        prevProject();
        resetAutoScroll();
    });

    // Indicator click
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
            resetAutoScroll();
        });
    });

    // Mouse enter/leave for auto scroll pause
    const projectShowcase = document.querySelector('.project-showcase');
    projectShowcase.addEventListener('mouseenter', stopAutoScroll);
    projectShowcase.addEventListener('mouseleave', startAutoScroll);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', e => {
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
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevProject();
            resetAutoScroll();
        } else if (e.key === 'ArrowRight') {
            nextProject();
            resetAutoScroll();
        }
    });

    // Initialize
    updateSlider();
    startAutoScroll();
});

// Contact Us Section Animations


// Form input animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input.nextElementSibling, { // Label
            y: -20,
            scale: 0.8,
            color: '#6a0dad',
            duration: 0.3
        });
        gsap.to(input.nextElementSibling.nextElementSibling.firstElementChild, { // Line
            scaleX: 1,
            transformOrigin: 'left',
            duration: 0.3
        });
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            gsap.to(input.nextElementSibling, {
                y: 0,
                scale: 1,
                color: '#b0b0b0',
                duration: 0.3
            });
        }
        gsap.to(input.nextElementSibling.nextElementSibling.firstElementChild, {
            scaleX: 0,
            transformOrigin: 'right',
            duration: 0.3
        });
    });
});

// Form submission animation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;
    let errorMessages = [];

    if (name.trim().length < 2) {
        errorMessages.push('Name must be at least 2 characters long');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push('Please enter a valid email address');
        isValid = false;
    }

    if (message.trim().length < 10) {
        errorMessages.push('Message must be at least 10 characters long');
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
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(form, { x: 0 });
            }
        });

        // Show error message
        alert('Please fix the following errors:\n' + errorMessages.join('\n'));
        return;
    }

    const btn = this.querySelector('.submit-btn');
    const btnText = btn.querySelector('span');
    const btnIcon = btn.querySelector('i');

    // Success animation
    gsap.to(btnText, {
        opacity: 0,
        y: -20,
        duration: 0.3
    });

    gsap.to(btnIcon, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.3
    });

    gsap.to(btn, {
        width: 50,
        duration: 0.3,
        delay: 0.6,
        onComplete: () => {
            gsap.to(btn, {
                scale: 0,
                duration: 0.3,
                ease: 'back.in',
                onComplete: () => {
                    // Show success message
                    alert('Thank you! Your message has been sent successfully.');

                    // Reset form and button after submission
                    setTimeout(() => {
                        this.reset();
                        gsap.set(btn, { width: '', scale: 1 });
                        gsap.set(btnText, { opacity: 1, y: 0 });
                        gsap.set(btnIcon, { opacity: 0, y: 20 });
                    }, 1000);
                }
            });
        }
    });
});


// Project Carousel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let currentIndex = 0;

    const setCardPosition = (card, index) => {
        card.style.left = `${index * 100}%`;
    };

    cards.forEach(setCardPosition);

    const moveToCard = (track, currentCard, targetCard) => {
        track.style.transform = `translateX(-${targetCard.style.left})`;
        currentCard.classList.remove('active');
        targetCard.classList.add('active');
    };

    nextButton.addEventListener('click', () => {
        const currentCard = track.querySelector('.active');
        const nextCard = currentCard.nextElementSibling || cards[0];
        moveToCard(track, currentCard, nextCard);
        currentIndex = (currentIndex + 1) % cards.length;
    });

    prevButton.addEventListener('click', () => {
        const currentCard = track.querySelector('.active');
        const prevCard = currentCard.previousElementSibling || cards[cards.length - 1];
        moveToCard(track, currentCard, prevCard);
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    });

    // Initial setup
    cards[0].classList.add('active');

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);


});
// Animate pricing cards on scroll
gsap.set(".pricing-card", { y: 50, autoAlpha: 0 });
ScrollTrigger.batch(".pricing-card", {
    interval: 0.1,
    batchMax: 3,
    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true })
});
