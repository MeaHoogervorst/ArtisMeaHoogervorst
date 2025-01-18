console.log("hi");

document.addEventListener("DOMContentLoaded", function () {
    function initializeCarousel(carouselSelector, itemSelector) {
        const slides = document.querySelectorAll(`${carouselSelector} ${itemSelector}`);
        const totalSlides = slides.length;
        let currentIndex = 0;

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }

        function moveToPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;  // Moves each slide based on the index
            });
        }

        // Create next button
        const nextButton = document.createElement("button");
        nextButton.classList.add("carousel-button", "next");
        nextButton.innerHTML = "&#10095;";
        document.querySelector(carouselSelector).appendChild(nextButton);

        // Create previous button
        const prevButton = document.createElement("button");
        prevButton.classList.add("carousel-button", "prev");
        prevButton.innerHTML = "&#10094;";
        document.querySelector(carouselSelector).appendChild(prevButton);

        // Add event listeners for the buttons
        nextButton.addEventListener("click", moveToNextSlide);
        prevButton.addEventListener("click", moveToPrevSlide);

        // Automatic sliding
        setInterval(moveToNextSlide, 5000); 
    }

    // Initialize carousels with their selectors
    initializeCarousel(".carousel", ".artispark");  // For the first carousel
    initializeCarousel(".carousel2", ".natuurbehoud");  // For the second carousel
});
