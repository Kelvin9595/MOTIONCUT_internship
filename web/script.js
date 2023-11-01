document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Function to show the previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Function to show the next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Button click event listeners
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Auto-advance the carousel every 5 seconds
    setInterval(nextSlide, 5000);
});
