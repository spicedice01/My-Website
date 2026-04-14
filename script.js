<script>
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Mobile Menu
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    }

    // 3. Empowerment Album Toggle
    function toggleEmpowerment() {
        const gallery = document.getElementById("empowermentGallery");
        const btn = document.querySelector("#empowermentAlbum button");
        if (gallery && gallery.classList.contains('hidden')) {
            gallery.classList.replace('hidden', 'grid');
            btn.innerHTML = "Close Album";
        } else if (gallery) {
            gallery.classList.replace('grid', 'hidden');
            btn.innerHTML = "View Album";
        }
    }

    // 4. Outreach Album Toggle
    function toggleGallery() {
        const gallery = document.getElementById("fullGallery");
        const btn = document.querySelector("#outreachAlbum button");
        if (gallery && gallery.classList.contains('hidden')) {
            gallery.classList.replace('hidden', 'grid');
            btn.innerHTML = "Close Album";
        } else if (gallery) {
            gallery.classList.replace('grid', 'hidden');
            btn.innerHTML = "View Album";
        }
    }

    // 5. CEO Album Toggle
    function toggleCEOAlbum() {
        const gallery = document.getElementById("ceoGallery");
        const btn = document.querySelector("#ceoAlbum button");
        if (gallery && gallery.classList.contains('hidden')) {
            gallery.classList.replace('hidden', 'grid');
            btn.innerHTML = "Close Gallery";
        } else if (gallery) {
            gallery.classList.replace('grid', 'hidden');
            btn.innerHTML = "View Full Gallery";
        }
    }

    // 6. Counter Animation Logic
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

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
// Add this to the end of your script.js file
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100', 'pointer-events-auto');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Function to Open Modal
function openDonateModal(e) {
    if (e) e.preventDefault(); // Prevents the page from jumping
    const modal = document.getElementById('donateModal');
    const content = document.getElementById('modalContent');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Small delay to allow animation to trigger
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

// Function to Close Modal
function closeDonateModal() {
    const modal = document.getElementById('donateModal');
    const content = document.getElementById('modalContent');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 300);
}

// Close modal if user clicks outside the white box
window.onclick = function(event) {
    const modal = document.getElementById('donateModal');
    if (event.target == modal) {
        closeDonateModal();
    }
}
    // Function to handle the counting animation
const startCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The higher the number, the slower the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calculate the increment per frame
            const inc = target / speed;

            if (count < target) {
                // Add the increment and round it
                counter.innerText = Math.ceil(count + inc);
                // Call function again every 1ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer to start counting ONLY when the section is visible
const observerOptions = {
    threshold: 0.5 // Starts when 50% of the section is on screen
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target); // Stop observing once it has run
        }
    });
}, observerOptions);

// Tell the observer to watch the Impact Section
const impactSection = document.querySelector('#impact');
if (impactSection) {
    observer.observe(impactSection);
}
</script>
