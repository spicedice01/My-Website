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

// 6. Back to Top Button Logic
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

// --- ALL ALBUM TOGGLES ---

<script>
        // Toggle for Mobile Navigation
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Toggle for Sanitary Towel Outreach (Outreach Album)
        function toggleGallery() {
            const gallery = document.getElementById("fullGallery");
            const btn = document.querySelector("#outreachAlbum button");
            if (gallery.classList.contains('hidden')) {
                gallery.classList.replace('hidden', 'grid');
                btn.innerHTML = "Close Album";
            } else {
                gallery.classList.replace('grid', 'hidden');
                btn.innerHTML = "View Album";
            }
        }

        // Toggle for CEO / Founder Gallery
        function toggleCEOAlbum() {
            const gallery = document.getElementById("ceoGallery");
            const btn = document.querySelector("#ceoAlbum button");
            if (gallery.classList.contains('hidden')) {
                gallery.classList.replace('hidden', 'grid');
                btn.innerHTML = "Close Gallery";
            } else {
                gallery.classList.replace('grid', 'hidden');
                btn.innerHTML = "View Full Gallery";
            }
        }

        // Toggle for Community Empowerment (THE LINE YOU WERE MISSING)
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

        // Initialize Icons
        lucide.createIcons();
    </script>
