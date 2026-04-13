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
</script>
