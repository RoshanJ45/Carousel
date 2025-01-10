    const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
function updateCarousel() {
track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prevButton.addEventListener('click', () => {
currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
updateCarousel();
});
nextButton.addEventListener('click', () => {
currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
updateCarousel();
});
