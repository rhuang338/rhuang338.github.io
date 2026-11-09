// Automatically generate array for photo1.jpg through photo50.jpg
const totalPhotos = 3;
const photos = Array.from({ length: totalPhotos }, (_, i) => `images/photo${i + 1}.jpg`);

let currentIndex = 0;
const imgElement = document.getElementById("slideshow-img");
const counterElement = document.getElementById("slide-counter");

function updateSlide() {
  imgElement.style.opacity = 0;
  
  setTimeout(() => {
    imgElement.src = photos[currentIndex];
    imgElement.style.opacity = 1;
    counterElement.textContent = `${currentIndex + 1} / ${photos.length}`;
  }, 300);
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + photos.length) % photos.length;
  updateSlide();
}

// Keyboard arrow key support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});

// Auto-play slideshow every 3.5 seconds
let autoPlay = setInterval(() => changeSlide(1), 3500);

// Pause autoplay when hovering over slideshow
const container = document.querySelector(".slideshow-container");
container.addEventListener("mouseenter", () => clearInterval(autoPlay));
container.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => changeSlide(1), 3500);
});
