// JavaScript Document
console.log("hi");
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel .artispark ");
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
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;  // Verschuift elke slide afhankelijk van de index
        });
    }

    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-button", "next");
    nextButton.innerHTML = "&#10095;";
    document.querySelector(".carousel").appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-button", "prev");
    prevButton.innerHTML = "&#10094;";
    document.querySelector(".carousel").appendChild(prevButton);

    nextButton.addEventListener("click", moveToNextSlide);
    prevButton.addEventListener("click", moveToPrevSlide);

    // Optioneel: automatische overgang elke 5 seconden
    setInterval(moveToNextSlide, 5000); // Verandert de slide automatisch elke 5 seconden
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel2 .natuurbehoud");
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
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;  // Verschuift elke slide afhankelijk van de index
        });
    }

    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-button", "next");
    nextButton.innerHTML = "&#10095;";
    document.querySelector(".carousel2").appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-button", "prev");
    prevButton.innerHTML = "&#10094;";
    document.querySelector(".carousel2").appendChild(prevButton);

    nextButton.addEventListener("click", moveToNextSlide);
    prevButton.addEventListener("click", moveToPrevSlide);

    setInterval(moveToNextSlide, 5000); 
});
