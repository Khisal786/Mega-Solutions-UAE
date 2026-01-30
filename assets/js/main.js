document.addEventListener("DOMContentLoaded", function () {
    console.log("Mega Solutions JS Initialized!");

    /* ==========================================================================
       1. MOBILE MENU LOGIC (NEW)
       ========================================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            // 1. Toggle the 'active' class on the menu links
            navList.classList.toggle('active');
            
            // 2. Toggle an 'open' class on the hamburger for potential icon swap
            menuToggle.classList.toggle('open');
            
            // 3. Handle Scrolling logic
            if (navList.classList.contains('active')) {
                // Lock screen to prevent background scrolling while menu is open
                document.body.style.overflow = 'hidden';
                
                // Ensure menu starts exactly below the sticky header
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                navList.style.top = headerHeight + 'px';
            } else {
                // Return to normal scrolling
                document.body.style.overflow = 'auto';
                // Maintain our "No Horizontal Scroll" safety net
                document.body.style.overflowX = 'hidden'; 
            }
        });

        // Close menu automatically when a link is clicked
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuToggle.classList.remove('open');
                document.body.style.overflow = 'auto';
                document.body.style.overflowX = 'hidden';
            });
        });
    }

    /* ==========================================================================
       2. DIRECT SLIDER LOGIC (EXISTING)
       ========================================================================== */
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach((slider, sliderIndex) => {
        const slides = slider.querySelectorAll('.slide');
        const nextBtn = slider.querySelector('.next');
        const prevBtn = slider.querySelector('.prev');
        let currentIndex = 0;

        if (!nextBtn || !prevBtn || slides.length <= 1) {
            console.log(`Slider ${sliderIndex} skipped: Not enough images or buttons missing.`);
            return;
        }

        function show(index) {
            slides.forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active');
            });
            slides[index].style.display = 'flex';
            slides[index].classList.add('active');
            currentIndex = index;
        }

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let nextIdx = (currentIndex + 1) % slides.length;
            show(nextIdx);
        });

        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let prevIdx = (currentIndex - 1 + slides.length) % slides.length;
            show(prevIdx);
        });
        
        show(0); 
    });

    /* ==========================================================================
       3. IMAGE ZOOM MODAL LOGIC (EXISTING)
       ========================================================================== */
    const modal = document.getElementById("zoomModal");
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('close-zoom')) {
                closeZoom();
            }
        });
    }
});

/** * Keep these outside DOMContentLoaded for inline onclick support
 */
function openZoom(imageSrc) {
    const modal = document.getElementById("zoomModal");
    const zoomedImg = document.getElementById("zoomedImg");
    if (!modal || !zoomedImg) return;
    
    modal.style.display = "flex";
    zoomedImg.src = imageSrc;
    document.body.style.overflow = "hidden"; 
}

function closeZoom() {
    const modal = document.getElementById("zoomModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}