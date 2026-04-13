// 1. Initialize Lucide icons
lucide.createIcons();

// 2. Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// 3. Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-md', 'bg-white/95');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// 4. Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const currentText = counter.innerText.replace(/,/g, ''); // Remove commas to calculate
    const count = +currentText;
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => animateCounter(counter), 20);
    } else {
        counter.innerText = target.toLocaleString();
    }
};

// Intersection Observer for counters
const observerOptions = { threshold: 0.5 };
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// 5. Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 6. Back to Top Button Logic (Fixed Duplicates)
const backToTopButton = document.querySelector('#backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
function toggleEmpowerment() {
            const gallery = document.getElementById("empowermentGallery");
            const btn = document.querySelector("#empowermentAlbum button");
            if (gallery.classList.contains('hidden')) {
                gallery.classList.replace('hidden', 'grid');
                btn.innerHTML = "Close Album";
            } else {
                gallery.classList.replace('grid', 'hidden');
                btn.innerHTML = "View Album";
            }
        }
// 7. Donation & Volunteer button interaction
document.querySelectorAll('button, a').forEach(el => {
    if (el.textContent.includes('Donate') || el.textContent.includes('Volunteer')) {
        el.addEventListener('click', function(e) {
            // Only alert if it's not a real link (like the nav link)
            if (this.tagName === 'BUTTON' || this.getAttribute('href') === '#contact') {
                if (this.textContent.includes('Donate')) {
                    alert('Thank you! Redirecting to the secure Sammy Gitonga Foundation payment portal...');
                } else if (this.textContent.includes('Volunteer')) {
                    alert('Thank you for your heart to serve! Please email us at volunteer@gitongafoundation.org');
                }
            }
        });
    }
});

console.log('The Gitonga Foundation website scripts are active and optimized!');
