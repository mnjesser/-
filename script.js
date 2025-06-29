// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#FF6B35" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#FF6B35", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            }
        }
    });

    // Background Music Control
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isMusicPlaying = false;

    // Set volume lower to be pleasant
    bgMusic.volume = 0.3;

    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> <span>تشغيل الموسيقى</span>';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> <span>إيقاف الموسيقى</span>';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Menu Sliders
    const initSlider = (sliderContainer) => {
        const slides = sliderContainer.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev');
        const nextBtn = sliderContainer.querySelector('.next');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentIndex = (index + slides.length) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

        // Auto-slide every 5 seconds
        setInterval(() => showSlide(currentIndex + 1), 5000);
    };

    // Initialize all sliders
    document.querySelectorAll('.menu-slider').forEach(initSlider);

    

    // Animate elements when scrolling
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.menu-half, .contact-card, .map-container');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const offset = 100;

            if (elementPosition < windowHeight - offset) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize
});