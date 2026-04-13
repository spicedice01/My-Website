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
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
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
    const count = +counter.innerText.replace(/,/g, '');
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + inc).toLocaleString();
        setTimeout(() => animateCounter(counter), 20);
    } else {
        counter.innerText = target.toLocaleString();
    }
};

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

// 5. Back to Top Button
const backToTopButton = document.querySelector('#backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        backToTopButton.style.opacity = window.scrollY > 300 ? '1' : '0';
        backToTopButton.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 6. Album Toggles
function toggleGallery() {
    const gallery = document.getElementById("fullGallery");
    const btn = document.querySelector("#outreachAlbum button");
    toggleVisibility(gallery, btn);
}

function toggleCEOAlbum() {
    const gallery = document.getElementById("ceoGallery");
    const btn = document.querySelector("#ceoAlbum button");
    toggleVisibility(gallery, btn, "View Full Gallery", "Close Gallery");
}

function toggleEmpowerment() {
    const gallery = document.getElementById("empowermentGallery");
    const btn = document.querySelector("#empowermentAlbum button");
    toggleVisibility(gallery, btn);
}

// Helper to keep code clean
function toggleVisibility(gallery, btn, openText = "View Album", closeText = "Close Album") {
    if (gallery.classList.contains('hidden')) {
        gallery.classList.replace('hidden', 'grid');
        btn.innerHTML = closeText;
    } else {
        gallery.classList.replace('grid', 'hidden');
        btn.innerHTML = openText;
    }
}
