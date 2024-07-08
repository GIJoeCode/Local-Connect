document.addEventListener('DOMContentLoaded', function () {
    // Scroll navigation logic
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Slideshow logic
    let slideIndex = 0; // Declare once
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1]. style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    // Adding listeners for next/previous controls
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if(next) {
        next.addEventListener('click', () => {
            plusSlides(1);
        });
    }

    if(prev) {
        prev.addEventListener('click', () => {
            plusSlides(-1);
        });
    }

    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }
});
