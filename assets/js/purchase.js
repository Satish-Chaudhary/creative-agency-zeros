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

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Currency toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const currencyToggle = document.getElementById('currencyToggle');

    if (currencyToggle) {
        currencyToggle.addEventListener('change', function () {
            const inrPrices = document.querySelectorAll('.inr-price');
            const usdPrices = document.querySelectorAll('.usd-price');
            const inrLabels = document.querySelectorAll('.inr-label');
            const usdLabels = document.querySelectorAll('.usd-label');

            if (this.checked) {
                // Show USD prices
                inrPrices.forEach(price => price.style.display = 'none');
                usdPrices.forEach(price => price.style.display = 'inline');
                inrLabels.forEach(label => label.classList.remove('active'));
                usdLabels.forEach(label => label.classList.add('active'));
            } else {
                // Show INR prices
                inrPrices.forEach(price => price.style.display = 'inline');
                usdPrices.forEach(price => price.style.display = 'none');
                inrLabels.forEach(label => label.classList.add('active'));
                usdLabels.forEach(label => label.classList.remove('active'));
            }
        });
    }

    // Set initial active state for INR labels
    document.querySelectorAll('.inr-label').forEach(label => {
        label.classList.add('active');
    });
});

// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', function () {
    // Animate pricing cards on scroll
    gsap.utils.toArray('.pricing-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Animate section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8
        });
    });

    // Animate comparison table
    gsap.from('.comparison-table', {
        scrollTrigger: {
            trigger: '.comparison-table',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1
    });

    // Animate testimonial cards
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Animate FAQ items
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            x: -100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1
        });
    });

    // Animate CTA section
    gsap.from('.pricing-cta-section', {
        scrollTrigger: {
            trigger: '.pricing-cta-section',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });
});
